
// From local storage get the list of applied jobs.
export const getappliedJobIds = () => {
    const appliedJobIds = localStorage.getItem('applied_jobs')
      ? JSON.parse(localStorage.getItem('applied_jobs'))
      : [];
  
    return appliedJobIds;
  };
  
  // Set list of applied job in local storage.
  export const saveJobIds = (bookIdArr) => {
    console.log(bookIdArr);
    if (bookIdArr.length) {
      localStorage.setItem('applied_jobs', JSON.stringify(bookIdArr));
    } else {
      localStorage.removeItem('applied_jobs');
    }
  };
  
  // Remove a job from storage.
  export const removeProjectId = (projectId) => {
    const savedProjectIds = localStorage.getItem('applied_jobs')
      ? JSON.parse(localStorage.getItem('applied_jobs'))
      : null;
  
    if (!savedProjectIds) {
      return false;
    }
  
    const updatedProjectIds = savedProjectIds?.filter((savedProjectId) => savedProjectId !== projectId);
    localStorage.setItem('applied_jobs', JSON.stringify(updatedProjectIds));
  
    return true;
  };
  