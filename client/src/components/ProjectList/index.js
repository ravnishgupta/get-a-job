
const ProjectsList = ({ projects, title }) => {
    if (!projects.length) {
      return <h3>Add Projects to View them here</h3>;
    }
  
    return (
      <div>
        <h3>{title}</h3>
        {projects &&
          projects.map(project => (
            <div key={project._id} >
              <h2 id="accordion-open-heading-{project.id}">
                    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 bg-gray-100 border-gray-200 
                                        focus:ring-4 focus:ring-gray-200  dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" 
                                            data-accordion-target="#accordion-open-body-{project.id}" aria-expanded="true" aria-controls="accordion-open-body-{project.id}">
                      <span class="flex items-center"/>
                          <svg class="mr-2 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" clip-rule="evenodd"></path></svg>
                          {project.title}
                    
                      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                  </h2>
                  <div id="accordion-open-body-{{project.id}}" class="hidden" aria-labelledby="accordion-open-heading-{project.id}">
                    <div class="p-5 border border-b-0 border-gray-100 dark:border-gray-700 dark:bg-gray-100">
                      <p class="mb-2 text-gray-500 dark:text-gray-400 bg-white">{project.description}</p>
                      <button data-id="{{project.id}}" type="click"  class="apply-button py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white 
                                                  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                                                  focus:ring-offset-2 focus:ring-indigo-500">Apply</button>     
                    </div>
                  </div>
            </div>
          ))}
      </div>
    );

  };
  
  export default ProjectsList;