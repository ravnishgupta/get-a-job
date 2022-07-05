import { Accordion } from "flowbite-react";
import SkillsList from '../SkillList';


const ProjectsList = ({ projects, title }) => {
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
                
                 <SkillsList skills={project.skills} title="Skills" />
                <button data-id={project._id} type="click"  class="apply-button py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white 
                                                  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                                                  focus:ring-offset-2 focus:ring-indigo-500">Apply</button>  
             </Accordion.Content>
            </Accordion.Panel>
          ))}
          </Accordion>
    );
  };
  
  export default ProjectsList;