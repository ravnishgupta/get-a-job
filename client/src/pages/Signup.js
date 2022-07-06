import React, { useState } from 'react';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };
    return (
        <main>
        <div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create Your Profile!</h2>
      </div>

      <form className="signup-form" encType="multipart/form-data">

        <div className="shadow overflow-hidden sm:rounded-md ">
          <div className="px-4 py-5 bg-gray-100 sm:p-6">
            <div className="grid grid-cols-6 gap-6">


              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={handleChange}></input>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last-name" id="last-name" complete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={handleChange}></input>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" name="email-address" id="email-address" complete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={handleChange}></input>
              </div>

               <div className="col-span-6 sm:col-span-4 flex justify-center">
                  <div className="form-check form-switch">
                    <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="availableCheckbox" checked onChange={handleChange}></input>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckChecked">Available Now:</label>
                  </div>                
               </div> 

              <div className="col-span-6 sm:col-span-4">
                <label or="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={handleChange}></input>
              </div>               

              <div className="col-span-3 sm:col-span-3">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Hourly Rate $</label>
                <input type="number" name="price" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" onChange={handleChange}></input>
              </div>


              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Github </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                  <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" onChange={handleChange}></input>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-4">

                <label className="block text-left text-sm font-medium text-gray-700" style={{maxWidth:"300px"}}>
                <span className="text-gray-700">Skills:</span>
                 
                  <select className="form-multiselect block w-full mt-1" id="skill" multiple>

                  </select>
              
                </label>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700"> About </label>
                <div className="mt-1">
                  <textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">Brief description htmlFor your profile.</p>
              </div>
            </div>

              <div className="col-span-6 sm:col-span-4">
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>       
            </div>          
        </div>
        </div>

      </form>
  </main>
    );
}

export default Signup;