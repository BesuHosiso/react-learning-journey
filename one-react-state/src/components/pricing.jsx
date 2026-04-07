import React from 'react'
import { useState } from 'react'
function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingPlans = [
  { id: 1, name: "Basic", monthlyPrice: 9, yearlyPrice: 90 },
  { id: 2, name: "Pro", monthlyPrice: 19, yearlyPrice: 190 },
  { id: 3, name: "Enterprise", monthlyPrice: 49, yearlyPrice: 490 }
];

  return (
    <div>
        <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>
        <div className="flex justify-center mb-6 w-full">
          <span onClick={() => setIsYearly(false)} className={isYearly ? "ml-4 cursor-pointer font-bold rounded-full py-2 px-4" : "ml-4 cursor-pointer font-bold rounded-full bg-blue-500 text-white py-2 px-4"}>Monthly</span>
          <span onClick={() => setIsYearly(true)} className={isYearly ? "ml-4 cursor-pointer font-bold rounded-full bg-blue-500 text-white py-2 px-4" : "ml-4 cursor-pointer font-bold rounded-full py-2 px-4"}>Yearly</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-4 md:px-2'>
          {pricingPlans.map((plans) => {
            return (
              <div className='border rounded-lg p-6 mb-4 flex flex-col' key={plans.id}>
                <h2 className='text-xl font-bold'>{plans.name}</h2>
                <p className='text-2xl font-bold mt-4'>{isYearly ? `$${plans.yearlyPrice}/year` : `$${plans.monthlyPrice}/month`}</p>
                <ul className='mt-4'>
                  <li className='mb-2'>Feature 1</li>
                  <li className='mb-2'>Feature 2</li>
                  <li className='mb-2'>Feature 3</li>
                </ul>
                <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer mt-4'>Choose Plan</button>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Pricing;