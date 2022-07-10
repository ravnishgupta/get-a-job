import React, { useState, useEffect } from 'react';
import { Accordion } from "flowbite-react";
import SkillsList from '../SkillList';
import {  useMutation } from '@apollo/client';
import { SAVE_PROJECT  } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { saveJobIds, getappliedJobIds } from '../../utils/localStorage';

const ProjectsList = ({ projects, title }) => {

  // Create a saveProject function using the SAVE_PROJECT mutation
  const [savedProject] = useMutation(SAVE_PROJECT);


  // create state to hold saved projectId values
  const [savedJobIds, setsaveJobIds] = useState(getappliedJobIds());

  useEffect(() => {
    return () => saveJobIds(savedJobIds);
  });


  // create function to handle saving a projectID to our database
  const handleSaveProject = async (projectId) => {
    
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
       // Call saveProject graphQl api to save the selected project to user record.

       await savedProject({
            variables: {  projectId: projectId }
        })
      // if project successfully saves to user's account, save project id to state
      await setsaveJobIds([...savedJobIds, projectId]);
    
    } catch (err) {
      console.error(err);
    }
  };

    if (!projects.length) {
      return <h3>Add Projects to View them here</h3>;
    }
  
    return (

        <Accordion className="projects-apply" alwaysOpen={true}>
        {projects &&
          projects.map(project => (
            <Accordion.Panel key={project._id} >
             <Accordion.Title>
                {project.title}
                <br/>${project.payPerHour}/hr
                <br/>{project.startDate} to {project.endDate}
             </Accordion.Title>

             <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400 ">
                {project.description}
                </p>
                 
                {project.skills.length
                ? <SkillsList skills={project.skills} title="Skills" />
                : <h4 className="text-gray-500 dark:text-gray-400">No skills listed for project</h4>}
                
                 {Auth.loggedIn() && (
                    <button
                      data-id={project._id}
                      type="click" 
                      disabled={savedJobIds?.some((savedJobId) => savedJobId === project._id)}
                      className='apply-button py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white 
                      bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                      focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => handleSaveProject(project._id)}>
                      {savedJobIds?.some((savedJobId) => savedJobId === project._id)
                        ? 'Applied!'
                        : 'Apply!'}
                      
                    </button>

                    
                  )}
              
             </Accordion.Content>
            </Accordion.Panel>
          ))}
          </Accordion>
    );
  };
  
  export default ProjectsList;