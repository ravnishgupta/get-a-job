import React from 'react';
// Import hooks for mutation and query
import { useMutation, useQuery } from '@apollo/client';
// Import mutation to remove book
import { WITHDRAW } from '../utils/mutations';
// Import query to get the current user.
import { QUERY_ME } from '../utils/queries';
import { Accordion } from "flowbite-react";
import SkillsList from '../components/SkillList';
import { removeProjectId } from '../utils/localStorage';
import Auth from '../utils/auth';

const Home = () => {

  // Create withdraw function using mutation.
  const [withdraw] = useMutation(WITHDRAW);
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_ME);
 // Set userData with logged in users profile.
 const userData = data?.me || {};
 console.log(userData);
 
  const prSample = [{
    _id : 1,
    title: "Test projects",
    description : "As we shared in the release post, React 18 introduces features powered by our new concurrent renderer, with a gradual adoption strategy for existing applications. In this post, we will guide you through the steps for upgrading to React 18.",
    startDate: "2022-07-31",
    endDate:"2023-07-31",
    payPerHour:"80",
    skills: ["C#", "JS", ".NET", "SQL Server"]
  },
  {
    _id : 2,
    title: "Test projects2",
    description : "Test project 2",
    startDate: "2022-07-31",
    endDate:"2023-07-31",
    payPerHour:"80",
    skills: ["C#", "JS", ".NET", "SQL Server"]
  },
  {
    _id : 3,
    title: "Test projects3",
    description : "Test project 3",
    startDate: "2022-07-31",
    endDate:"2023-07-31",
    payPerHour:"80",
    skills: ["C#", "JS", ".NET", "SQL Server"]
  }]
  

  const handleWithdrawJob = async (projectId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    // Perform action only if token is valid.
    if (!token) {
      return false;
    }

    try {

      // Call withdraw application graphQl API.
      await withdraw({
        variables: { projectId: projectId}
      })

      // upon success, remove project's id from localStorage
      removeProjectId(projectId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white">
    <header >
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
    </header>
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="talents-heading" className="pt-6 pb-24">
        <h2 id="talents-heading" className="sr-only">Projects</h2>

           
            <div className="col-12 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : ( 
                <div>
                <h2>
                    {userData.applications.length
                        ? `Viewing ${userData.applications.length} job ${userData.applications.length === 1 ? 'application' : 'applications'}:`
                        : 'You have no active applications!'}
                 </h2>
                <Accordion className="projects-apply" alwaysOpen={true}>
                
                { userData.applications.map(project => (
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
                        
                         <SkillsList skills={project.skills} title="Skills" />
                        <button data-id={project._id} type="click"  class="apply-button py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white 
                                                          bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                                                          focus:ring-offset-2 focus:ring-indigo-500"
                                                          onClick={() => handleWithdrawJob(project._id)}>Withdraw</button>  
                     </Accordion.Content>
                    </Accordion.Panel>
                  ))}
                  </Accordion>
                </div>
            )}
          
        </div>
      </section>
    </main>
    </div>
  );
};

export default Home;
