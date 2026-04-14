import React from 'react'
import { useState, useEffect } from 'react';

function UseEffect() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [reType, setReType] = useState("users");
  useEffect(() => {
    //  Fetch user name and email from an api
    fetch(`https://jsonplaceholder.typicode.com/${reType}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
      console.log(data);
    })
  }, [reType]);

  if (loading) return <p>Loading...</p>
  if (!data) return <p>404 User Not Found</p>;
  
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 py-4'>
    <div className='flex flex-row items-center justify-center gap-4 mx-auto mt-4'>
      <button onClick={() => setReType("posts")} className='py-3 px-5 m-0 bg-gray-300 rounded-full cursor-pointer'>posts</button>
      <button onClick={() => setReType("comments")} className='py-3 px-5 m-0 bg-gray-300 rounded-full cursor-pointer'>comments</button>
      <button onClick={() => setReType("users")} className='py-3 px-5 m-0 bg-gray-300 rounded-full cursor-pointer'>users</button>
    </div>
    <h1 className='text-center mt-4 text-2xl font-bold'>{reType}</h1>
   {
    reType === "posts" ? (
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center py-4'>
        {data.map((item) => (
          <div key={item.id} className='w-full max-w-md bg-gray-100 rounded-lg p-4 shadow-md grid grid-rows-subgrid row-span-2'>
            <h2 className='text-xl font-bold mb-2'>{item.title}</h2>
            <p className='text-gray-700'>{item.body}</p>
          </div>
        ))}
      </div>
    ) : reType === "comments" ? (
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center py-4'>
        {data.map((item) => (
          <div key={item.id} className='w-full max-w-md bg-gray-100 rounded-lg p-4 shadow-md grid grid-rows-subgrid row-span-2'>
            <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
            <p className='text-gray-700'>{item.body}</p>
          </div>
        ))}
      </div>
    ) : reType === "users" ? (
      <div className='w-full grid col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center gap-4 py-4'>
        {data.map((item) => (
          <div key={item.id} className='w-full max-w-md bg-gray-100 rounded-lg p-4 shadow-md'>
            <h2 className='text-xl font-bold mb-2'>Name: {item.name}</h2>
            <p className='text-gray-700'>Email: {item.email}</p>
            <p className='text-gray-700'>Username: {item.username}</p>
            <p className='text-gray-700'>Phone: {item.phone}</p>
            <p className='text-gray-700'>Street: {item.address ? item.address.street : 'N/A'}</p>
            <p className='text-gray-700'>City: {item.address ? item.address.city : 'N/A'}</p>
            <p className='text-gray-700'>Zipcode: {item.address ? item.address.zipcode : 'N/A'}</p>
          </div>
        ))}
      </div>
    ) : null
   }
    </div>
    
  )
}

export default UseEffect;