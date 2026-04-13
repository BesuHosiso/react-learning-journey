import React from 'react'
import { useState, useEffect } from 'react';

function UseEffect() {
  
  const [data, setData] = useState(null);
  useEffect(() => {
    //  Fetch user name and email from an api
    fetch('https://jsonplaceholder.typicode.com/users/2')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
  }, []);
  return (
    // User Profile Card with email username and button
    <div className='w-full max-w-md max-mx-4 mx-auto bg-white p-6 rounded-lg shadow-md mt-6 text-gray-800'>
      <h2 className='text-xl font-bold mb-2'>User Profile</h2>
      <p className='mb-4'>Name: {data?.name}</p>
      <p className='mb-4'>Email: {data?.email}</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Update Profile
      </button>
    </div>
  )
}

export default UseEffect;