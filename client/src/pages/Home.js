import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../utils/queries';
import ProjectList from '../components/ProjectList';

const Home = () => {
 
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PROJECTS);

  // If data exists store in thoughts else empty array
  const projects = data?.projects || [];

  
  return (
    <div className="bg-white">
    <header >
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
    </header>
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="talents-heading" className="pt-6 pb-24">
        <h2 id="talents-heading" className="sr-only">Projects</h2>

           
            <div className="col-12 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : ( 
              <ProjectList projects={projects} title="Projects" />
           
            )}
          
        </div>
      </section>
    </main>
    </div>
  );
};

export default Home;
