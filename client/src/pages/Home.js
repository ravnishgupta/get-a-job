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
