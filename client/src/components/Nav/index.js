function Nav(){
    return(
        <div class="bg-teal-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex  h-16">
              <div class="flex items-center">                
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    
                    <a href="/home" class="hover:bg-teal-300 active:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                    <a href="/home" class="hover:bg-teal-300 active:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">SignUp</a>
                    <a href="/home" class="hover:bg-teal-300 active:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Login</a>
                  </div>
                </div>              

                  

              </div> 
            </div>
          </div>
      
  
          <div class="md:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             
              <a href="/home" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
      
             
             
            </div>
          </div>
        </div>
    );
}

export default Nav;