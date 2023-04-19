import React from 'react';
const Header = () =>{
    const imgStyle = {
        transition: 'transform 0.5s ease-in-out',
      };    
      const bounceStyle = {
        transform: 'translateY(-0.5rem)',
      };
    return(
      <nav className="flex flex-wrap max-w justify-center bg-gray-100 mt-0.5 border-b-2 border-gray-300">
        <div className="flex items-center justify-between h-24">
          <img className="lg:block h-16 w-auto mr-14" src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"/>
          <img className="lg:block h-16 w-auto mr-14" style={imgStyle} src="https://www.freepnglogos.com/uploads/pokemon-png/pikachu-transparent-pokemon-png-11.png" 
            onMouseEnter={(e) => {e.target.style.transform = 'translateY(-0.5rem)';}}
            onMouseLeave={(e) => {e.target.style.transform = 'translateY(0)';}}/>
          <img className="lg:block h-16 w-auto mr-14" style={imgStyle} src="https://www.freepnglogos.com/uploads/question-mark-png/file-lol-question-mark-wikimedia-commons-19.png"
            onMouseEnter={(e) => {e.target.style.transform = 'translateY(-0.5rem)';}}
            onMouseLeave={(e) => {e.target.style.transform = 'translateY(0)';}}/>
          <img className="lg:block h-20 w-32 mr-14 hover:bg-gray-200" src="https://www.freepnglogos.com/uploads/pokemon-stars-logo-concept-29.png"/>
          <img className="lg:block h-20 w-32 mr-14 hover:bg-gray-200" src="https://www.freepnglogos.com/uploads/pokemon-logo-rumble-png-8.png"/>
          <img className="lg:block h-20 w-32 mr-14 hover:bg-gray-200" src="https://www.freepnglogos.com/uploads/pokemon-xy-the-series-logo-png-9.png"/>
        </div>
      </nav>
    );
}
export default Header;