import React from 'react';

const Navbar = () => {
    return (
      <nav className="bg-white-500 flex justify-center border-b-2 border-gray-200 mt-0.5">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-24">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 h-24 justify-evenly">
                    <div className="flex flex-col items-center hover:bg-gray-600 group pt-4 w-32 border-b-2 border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block group-hover:text-white" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                        </svg>
                    <div className="text-gray-800 px-3 py-2 rounded-md text-md font-medium group-hover:text-white" style={{fontSize: "15px",fontWeight : 500}}>
                    Home</div>
                    </div>                  
                    <div className="flex flex-col bg-red-600 items-center hover:bg-red-600 group pt-4 w-32 border-b-2 border-red-600">
                        <svg xmlns="https://icons8.com/icon/100974/pokeball/svg" className="h-8 w-8 inline-block group-hover:text-white text-white" fill="none" viewBox="0 0 18 18" stroke="currentColor">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                        <div className="text-gray-800 px-3 py-2 rounded-md text-md font-medium group-hover:text-white text-white" style={{fontSize: "15px",fontWeight : 500}}>
                        Pokédex</div>
                    </div>
                    <div className="flex flex-col items-center hover:bg-orange-500 group pt-4 w-32 border-b-2 border-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block group-hover:text-white" fill="none" viewBox="0 0 14 14" stroke="currentColor">
                            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                        </svg>
                        <div className="text-gray-800 px-3 py-2 rounded-md text-md font-medium group-hover:text-white" style={{fontSize: "15px",fontWeight : 500}}>
                        Video Games & Apps</div>
                    </div>
                    <div className="flex flex-col items-center hover:bg-yellow-500 group pt-4 w-32 border-b-2 border-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block group-hover:text-white" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                            <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        <div className="text-gray-800 px-3 py-2 rounded-md text-md font-medium group-hover:text-white" style={{fontSize: "15px",fontWeight : 500}}>
                        Trading Card Game</div>
                        </div>
                    <div className="flex flex-col items-center hover:bg-green-600 group pt-4 w-32 border-b-2 border-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block group-hover:text-white" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                            <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                        </svg>
                        <div className="text-gray-800 px-3 py-2 rounded-md text-md font-medium group-hover:text-white" style={{fontSize: "15px",fontWeight : 500}}>
                        Pokémon TV</div>
                    </div>
                    <div className="flex flex-col items-center hover:bg-blue-400 group pt-4 w-32 border-b-2 border-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block group-hover:text-white" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                        </svg>
                        <div className="text-gray-800 px-3 py-2 rounded-md text-md font-medium group-hover:text-white" style={{fontSize: "15px",fontWeight : 500}}>
                        Play! Pokémon Events</div>
                        </div>
                   <div className="flex flex-col items-center hover:bg-blue-900 group pt-4 w-32 border-b-2 border-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block group-hover:text-white" fill="currentColor" viewBox="0 0 22 22">
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                            <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                        </svg>
                        <div className="text-gray-800 px-3 py-2 rounded-md text-md font-medium group-hover:text-white" style={{fontSize: "15px",fontWeight : 500}}>
                        News</div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
</nav>
);
};
export default Navbar;