import React from 'react'

function InputState({ isDarkMode, setLiveType }) {
  return (
    <div className={isDarkMode ? 'bg-gray-800 text-white w-full pt-16' : 'bg-gray-200 text-gray-900 w-full pt-16'}>
      <div className='w-md max-w-full mx-auto my-10 p-6 md:p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center'>React State Projects</h1>
        <input type="text" placeholder='Type something...' className='w-full text-gray-900 text-sm font-normal px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition' onChange={(e) => setLiveType(e.target.value)} />
        <p className='text-gray-600 text-sm mt-4 text-center'>As you type, the heading of your app should update instantly to say "Welcome to the Room [roomName]."</p>
      </div>
    </div>
  )
}

export default InputState;