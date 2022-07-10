import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { GET_SKILLS } from '../utils/queries';
import Auth from '../utils/auth';
import Select from "react-select";


const Signup = () => {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName:'', availableNow: true, gitHub: '', hourlyRate: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  const [showAlert, setShowAlert] = useState(false);
  const [validated] = useState(false);

  const { loading, data } = useQuery(GET_SKILLS);
  // Set userData with logged in users profile.
  const skills = data?.getSkills || {};
  console.log(skills);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({...formState, [name]: value});
  };
  
  const handleFormSubmit = async (event) => {


    event.preventDefault();
     // check if form has everything (as per react-bootstrap docs)
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
     }

    try {
      const { data } = await addUser({
        variables: {
          input: {...formState},
        },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(error);
      setShowAlert(true);
    }

    setFormState({
      email: '', 
      password: '', 
      firstName: '', 
      lastName:'', 
      availableNow: true, 
      gitHub: '', 
      hourlyRate: ''
    });
  };
  
    return (
      <>
        <main>
        <div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create Your Profile!</h2>
      </div>

        {/* This is needed for the validation functionality above */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>


        <div className="shadow overflow-hidden sm:rounded-md ">
          <div className="px-4 py-5 bg-gray-100 sm:p-6">
            <div className="grid grid-cols-6 gap-6">


              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="firstName" id="firstName" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                        value={formState.firstName}
                        onChange={handleChange}/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="lastName" id="lastName" complete="family-name" 
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                            value={formState.lastName}
                            onChange={handleChange}/>
                        
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" name="email" id="email"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                              value={formState.email}
                              onChange={handleChange}/>
              </div>

               <div className="col-span-6 sm:col-span-4 flex justify-center">
                  <div className="form-check form-switch">
                    <input name="availableNow" className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="availableCheckbox" checked 
                        value={formState.availableNow}
                        onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckChecked">Available Now:</label>
                  </div>                
               </div> 

              <div className="col-span-6 sm:col-span-4">
                <label or="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                  value={formState.password}
                  onChange={handleChange}/>
              </div>               

              <div className="col-span-3 sm:col-span-3">
                <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700">Hourly Rate $</label>
                <input type="number" name="hourlyRate" id="hourlyRate" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" 
                value={formState.hourlyRate}
                onChange={handleChange}/>
              </div>


              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="gitHub" className="block text-sm font-medium text-gray-700"> Github </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                  <input type="text" name="gitHub" id="gitHub" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com"
                  value={formState.gitHub}
                  onChange={handleChange}/>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-4">

                <label className="block text-left text-sm font-medium text-gray-700" style={{maxWidth:"300px"}}>
                <span className="text-gray-700">Skills:</span>
                 
                  <Select isMulti onChange={handleChange}>
                  <option value="choose" disabled selected="selected">
                    -- Choose Skills --
                  </option>
                
                  </Select>
              
                </label>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700"> About </label>
                <div className="mt-1">
                  <textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com" 
                ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">Brief description For your profile.</p>
              </div>
            </div>

              <div className="col-span-6 sm:col-span-4">
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>       
            </div>          
        </div>
        </div>

      </Form>
  </main>
  </>
    );
}

export default Signup;
