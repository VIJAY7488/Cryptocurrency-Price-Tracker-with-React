import React from 'react';
import iphone from '../../assets/iphone.png';
import gradient from '../../assets/gradient.png';
import {motion} from 'framer-motion'

function MainComponent() {
  return (
    <div className='flex justify-between max-h-screen px-8 bg-gray-900'>
      <div className='py-6 px-5 text-white mt-12 space-y-4'>
        <motion.h1 
          className='md:text-6xl text-4xl font-bold hover:text-gray-950 
          transition-colors duration-300'
          style={{
            '-webkit-text-stroke': '1px white',
            'text-stroke': '1px white'
          }}
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1,y: 0}}
          transition={{duration: 0.5, delay: 1}}
          >
          Track Crypto
        </motion.h1>
        
        <motion.h2 
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1,y: 0}}
          transition={{duration: 0.5, delay: 1.2}}
          className='text-3xl text-blue-500 font-semibold'>
          Real Time.
        </motion.h2>

        <motion.p
           initial={{opacity: 0, y: 50}}
           animate={{opacity: 1,y: 0}}
           transition={{duration: 0.5, delay: 1.4}}
           className='text-sm text-gray-300'>
           Track crypto through a public API in real time. 
           Visit the dashboard to do so!
        </motion.p>

        <motion.div 
           initial={{opacity: 0, y: 50}}
           animate={{opacity: 1,y: 0}}
           transition={{duration: 0.5, delay: 1.6}}
           className='flex gap-4'>

           <button 
             className='bg-blue-600 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300'>
             Dashboard
           </button>

          <button 
            className='border-2 border-blue-700 text-white text-lg font-medium px-8 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300'>
            Share
          </button>

        </motion.div>
      </div>
      <div className='relative w-1/2 mt-60'>
        <img 
          className='absolute z-10 right-0 top-1/2 transform -translate-y-1/2 w-[45%] h-auto'
          src={iphone} 
          alt="iPhone" 
          draggable="false"
          />
          
        <img 
          className='absolute right-2 top-1/2 transform -translate-y-1/2 w-[40%] h-auto'
          src={gradient} 
          alt="Gradient" />
      </div>
    </div>
  );
}

export default MainComponent;
