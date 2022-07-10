import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="bg-teal-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex  h-16">
              <nav className="flex items-center">                
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/home" className="hover:bg-teal-300 active:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                    <Link to="/signup" className="hover:bg-teal-300 active:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">SignUp</Link>
                    {/* <Link to="/login" className="hover:bg-teal-300 active:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Login</Link> */}
                  </div>
                </div>  
              </nav> 
            </div>
          </div>
        </div>
      </header>
    );
  };

  export default Header;