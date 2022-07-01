import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../utils/queries';
import ProjectList from '../components/ProjectList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PROJECTS);

  // If data exists store in thoughts else empty array
  const projects = data?.projects || [];
  console.log(projects);

  return (
    <main>
    <div className="flex-row justify-space-between">
      <div className="col-12 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ProjectList projects={projects} title="Projects" />
        )}
      </div>
    </div>
  </main>
  );
};

export default Home;


<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="talents-heading" class="pt-6 pb-24">
        <h2 id="talents-heading" class="sr-only">Projects</h2>

           <div class="projects-apply" id="accordion-open" data-accordion="open">
            <ProjectList projects={projects} title="Projects" />
              
        </div>
      </section>
    </main>