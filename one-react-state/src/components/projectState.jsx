import React from 'react'

function ProjectState({ isDarkMode, liveType }) {
  return (
   <div className={isDarkMode ? 'bg-gray-800 text-white w-full py-5' : 'bg-gray-200 text-gray-900 w-full py-5'}>
      <div className="container mx-auto px-4 py-12">
        <h1 className={isDarkMode ? 'text-2xl md:text-3xl font-bold text-white text-center mb-8' : 'text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8'}>{liveType}</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 grid grid-rows-subgrid row-span-3">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">The Toggle Angle</h3>
      <p className="text-slate-600 leading-relaxed mb-6">
        Create a button that turns a "light" on and off. This teaches you how to switch between two values (true/false). Create a isOn state. When you click a button, the background color of a div should change from dark to bright yellow.
      </p>
      <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-indigo-600 transition-colors duration-300 cursor-pointer">
        Get Started
      </button>
    </div>
    <div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 grid grid-rows-subgrid row-span-3">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">The Input Angle</h3>
      <p className="text-slate-600 leading-relaxed mb-6">
       A text box that changes the "Room Name." This teaches you how to capture what a user types in real-time. Create a roomName state. Connect it to an input. As you type, the heading of your app should update instantly to say "Welcome to the Room [roomName]."
      </p>
      <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-indigo-600 transition-colors duration-300 cursor-pointer">
        Learn More
      </button>
    </div>
    <div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 grid grid-rows-subgrid row-span-3">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">The Counter/List Angle</h3>
      <p className="text-slate-600 leading-relaxed mb-6">
        A "Brightness" slider or a "Guest List." This teaches you how to handle numbers or collections of data. Create a brightness state. Add two buttons: "+" and "-". Clicking them should change a number on the screen between 0 and 100.
      </p>
      <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-indigo-600 transition-colors duration-300 cursor-pointer">
        Scale Now
      </button>
    </div>

  </div>
</div>
   </div>
  )
}

export default ProjectState;