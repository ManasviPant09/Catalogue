import React from 'react';
const Header = () =>{
    const imgStyle = {
        transition: 'transform 0.5s ease-in-out',
      };    
      const bounceStyle = {
        transform: 'translateY(-0.5rem)',
      };
    return(
      <nav className="bg-white-500 flex justify-center border-b-2 border-gray-200 mt-0.5 w-full">
        <div className="max-w-7xl">
          <div className="relative flex items-center justify-between h-24">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex">
                  <div className="flex items-center ml-24">
                    <img className="lg:block h-16 w-auto mr-14" src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"/>
                    <img className="lg:block h-16 w-auto mr-14" style={imgStyle} src="https://www.freepnglogos.com/uploads/pokemon-png/pikachu-transparent-pokemon-png-11.png" 
                    onMouseEnter={(e) => {e.target.style.transform = 'translateY(-0.5rem)';}}
                    onMouseLeave={(e) => {e.target.style.transform = 'translateY(0)';}}/>
                    <img className="lg:block h-16 w-auto mr-14" style={imgStyle} src="https://www.freepnglogos.com/uploads/question-mark-png/file-lol-question-mark-wikimedia-commons-19.png"
                    onMouseEnter={(e) => {e.target.style.transform = 'translateY(-0.5rem)';}}
                    onMouseLeave={(e) => {e.target.style.transform = 'translateY(0)';}}/>
                    <div className="hidden sm:block sm:ml-6">
                    <div className="flex">
                    <img className="lg:block h-20 w-32 mr-14 hover:bg-gray-200" src="https://www.freepnglogos.com/uploads/pokemon-stars-logo-concept-29.png"/>
                    <img className="lg:block h-20 w-32 mr-14 hover:bg-gray-200" src="https://www.freepnglogos.com/uploads/pokemon-logo-rumble-png-8.png"/>
                    <img className="lg:block h-20 w-32 mr-14 hover:bg-gray-200" src="https://www.freepnglogos.com/uploads/pokemon-xy-the-series-logo-png-9.png"/>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </nav>
    );
}
export default Header;