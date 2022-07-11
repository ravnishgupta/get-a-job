import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'

function Nav(){
    return(
      <>
        <div className="bg-teal-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex  h-16">
              <nav className="flex items-center">                
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/home" className="hover:bg-teal-300 active:bg-teal-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                    {Auth.loggedIn() ? (
                      <>
                      <Link to="/dashboard" className="hover:bg-teal-300 active:bg-teal-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</Link>
                      <Link to="/" onClick={Auth.logout} className="hover:bg-teal-300 active:bg-teal-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Logout</Link>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className="hover:bg-teal-300 active:bg-teal-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Login</Link>
                      </>
                    ) }
                  </div>
                </div>  

              <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               
                <Link to="/home" className="hover:bg-teal-300 active:bg-teal-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                    {Auth.loggedIn() ? (
                      <>
                      <Link to="/dashboard" className="hover:bg-teal-300 active:bg-teal-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</Link>
                      <Link to="/" onClick={Auth.logout} className="hover:bg-teal-300 active:bg-teal-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Logout</Link>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className="hover:bg-teal-300 active:bg-teal-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Login</Link>
                      </>
                    ) }
                </div>
              </div>`
              </nav> 
            </div>
          </div>
        </div>
        </>
    );
}

export default Nav;