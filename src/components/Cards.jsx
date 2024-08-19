import React from 'react';

const Cards = () => {
  const plans = [
    {
      name: 'Data Center Services',
      features: ['Server Hosting', 'Colocation Services', 'Cloud Services', 'Disaster Recovery'],
      buttonLabel: 'Start Now',
    },
    {
      name: 'Server Management',
      features: ['Server Hosting', '24/7 Monitoring', 'Maintenance & Support', 'Security Management'],
      buttonLabel: 'Go Pro',
    },
    {
      name: 'Web Development and Design',
      features: ['Custom Website Development', 'Responsive Design', 'E-commerce Solutions', 'Content Management Systems (CMS)'],
      buttonLabel: 'Go Elite',
    },
    {
      name: 'IT Consulting Services',
      features: ['Digital Transformation Consulting', 'Network Design & Implementation', 'Tech Support & Troubleshooting', 'Maintenance & Support'],
      buttonLabel: 'Go Elite',
    },
  ];

  // flex justify-center sm:flex-wrap md:flex-wrap  space-x-20 p-6
  // bg-gray-100 p-6  rounded-lg shadow-lg w-64
  // text-lg  mb-4
  // text-5xl font-black mb-6
  // mb-6 space-y-2

  return (
    <div >
      <h2 className='text-3xl font-bold text-center'>Our Services</h2>

      <div className="mb-10  p-6 lg:flex lg:justify-center sm:flex-wrap md:flex-wrap  lg:space-x-20 lg:p-6 " id='services'>
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-100 p-6 lg:w-64 rounded-lg shadow-lg my-10 w-full">
            <h2 className="text-lg font-bold text-center mb-4">{plan.name}</h2>
            {/* <p className="text-5xl font-black mb-6">{plan.price}</p> */}
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 4.293a1 1 0 010 1.414L8.414 14l-4.707-4.707a1 1 0 00-1.414 1.414l5.414 5.414a1 1 0 001.414 0l9.414-9.414a1 1 0 00-1.414-1.414L8.414 12.586l-4.707-4.707a1 1 0 00-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

