import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../utils/queries';
import ProjectList from '../components/ProjectList';

const Home = () => {
 
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PROJECTS);

  // If data exists store in thoughts else empty array
  const projects = data?.projects || [];

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
