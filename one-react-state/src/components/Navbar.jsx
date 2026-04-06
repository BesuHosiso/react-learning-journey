import React from 'react'

function Navbar({ isDarkMode, setIsDarkMode }) {

  return (
    <header className={isDarkMode ? 'bg-gray-800 text-white flex items-center justify-between px-6 py-4 fixed top-0 w-full z-10' : 'bg-gray-200 text-gray-900 flex items-center justify-between px-6 py-4 fixed top-0 w-full z-10'}>

        {/* Profile Image */}
        <div className='w-10 h-10 rounded-full overflow-hidden bg-gray-400 dark:bg-gray-600 cursor-pointer hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-500 transition duration-300 ease-in-out'>
           <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Profile Image" className="w-full h-full object-cover" />
        </div>

        {/* Light Dark Mode */}
        <button
  onClick={() => setIsDarkMode(!isDarkMode)}
  className="cursor-pointer p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out"
>
  {isDarkMode ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  )}
</button>

    </header>
  )
}

export default Navbar;