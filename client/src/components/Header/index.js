import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div class="bg-teal-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex  h-16">
              <nav class="flex items-center">                
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <Link to="/home" class="hover:bg-teal-300 active:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                    <Link to="/signup" class="hover:bg-teal-300 active:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">SignUp</Link>
                    <Link to="/login" class="hover:bg-teal-300 active:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Login</Link>
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