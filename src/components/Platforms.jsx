import React from 'react'
import lc_logo from '../assets/Lc-logo.png'
import cf_logo from '../assets/cf-logo.png'
import cchef_log from '../assets/cchef-logo.png'
import TiltedCard from './TiltedCard'
import { useNavigate } from 'react-router-dom'

const Platforms = () => {
  const navigate = useNavigate();
  function handleLeetcode() {
    navigate('/stats/leetcode');
  }
  function handleCodeforces() {
    navigate('/stats/codeforces');
  }
  function handleCodechef() {
    navigate('/stats/codechef');
  }
  return (
    <div className='relative'>
      <div className='h-[150vh] md:h-[75vh] gap-5 md:gap-0 flex flex-col md:flex-row w-[95vw] mx-auto p-2 justify-evenly'>
        <div className="platforms h-full w-[90%] mx-auto md:w-[25%]">
          <div className="header font-semibold text-sky-600 bg-clip-text text-[1.5rem] text-center font-sans m-5">Explore platforms</div>
          <div className="boxes flex gap-14 md:gap-10 flex-col mt-7">
            <a href='https://leetcode.com/' target='_blank'>
              <div className="box bg-white h-20 w-[90%] mx-auto flex p-3 items-center gap-12 shadow-md hover:shadow-2xl hover:cursor-pointer transition-all duration-300 hover:bg-gray-100 border-blue-900/50 border-l-2 border-t-2 rounded-xl">
                <img src={lc_logo} alt="" className='h-10 w-10' />
                <p className='text-[1.3rem] font-serif text-indigo-900'>LeetCode</p>
              </div>
            </a>
            <a href='https://codeforces.com/' target='_blank'>
              <div className="box bg-white h-20 w-[90%] mx-auto flex p-3 items-center gap-12 shadow-md hover:shadow-2xl hover:cursor-pointer transition-all duration-300 hover:bg-gray-100 border-blue-900/50 border-l-2 border-t-2 rounded-xl">
                <img src={cf_logo} alt="" className='h-8 w-8' />
                <p className='text-[1.3rem] font-serif text-indigo-900'>CodeForces</p>
              </div>
            </a>
            <a href='https://www.codechef.com/dashboard' target='_blank'>
              <div className="box bg-white h-20 w-[90%] mx-auto flex p-3 items-center gap-12 shadow-md hover:shadow-2xl hover:cursor-pointer transition-all duration-300 hover:bg-gray-100 border-blue-900/50 border-l-2 border-t-2 rounded-xl">
                <img src={cchef_log} alt="" className='h-10 w-10' />
                <p className='text-[1.3rem] font-serif text-indigo-900'>Codechef</p>
              </div>
            </a>
          </div>
        </div>
        <div className="platformInfo h-full w-[90%] md:w-[72%] mx-auto flex flex-col md:flex-row justify-evenly gap-10 md:gap-0">
          <div className="box w-[90%] md:w-[30%] h-full flex justify-center items-center mx-auto">
            <TiltedCard
              captionText="LeetCode"
              containerHeight="100%"
              containerWidth="100%"
              backgroundColor="#fff5e1"
              scaleOnHover={1.05}
            >
              <img
                src={lc_logo}
                alt="Logo"
                className='h-30 w-30 mx-auto my-2'
              />
              <div className='flex justify-center flex-col items-center -mt-2'>
                <h3 className='text-center text-[1.4rem]'>LeetCode</h3>
                <ul className='flex flex-col gap-5 mt-10'>
                  <li className='text-[0.95rem]'>• Coding challenges platform</li>
                  <li className='text-[0.95rem]'>• Interview preparation focused</li>
                  <li className='text-[0.95rem]'>• Algorithms and data structures</li>
                </ul>
              </div>
              <div className='h-12 w-44 text-indigo-900 border-indigo-600 border-2 shadow-xl bg-white/90 rounded-xl flex justify-center items-center 
              mx-auto mt-12 hover:cursor-grab' onClick={handleLeetcode}>
                Check your stats
              </div>
            </TiltedCard>

          </div>
          <div className="box w-[90%] md:w-[30%] h-full flex justify-center items-center mx-auto">
            <TiltedCard
              captionText="CodeForces"
              containerHeight="100%"
              containerWidth="100%"
              scaleOnHover={1.05}
            >
              <img
                src={cf_logo}
                alt="Logo"
                className='h-30 w-30 mx-auto my-2'
              />
              <div className='flex justify-center flex-col items-center -mt-2'>
                <h3 className='text-center text-[1.4rem]'>CodeForces</h3>
                <ul className='flex flex-col gap-5 mt-10'>
                  <li className='text-[0.95rem]'>• Regular competitive contests</li>
                  <li className='text-[0.95rem]'>• Large programming community</li>
                  <li className='text-[0.95rem]'>• Fast-paced problem solving</li>
                </ul>
              </div>
              <div className='h-12 w-44 text-indigo-900 border-indigo-600 border-2 shadow-xl bg-white/90 rounded-xl flex justify-center items-center 
              mx-auto mt-12 hover:cursor-grab' onClick={handleCodeforces}>
                Check your stats
              </div>
            </TiltedCard>
          </div>
          <div className="box w-[90%] md:w-[30%] h-full flex justify-center items-center mx-auto">
            <TiltedCard
              captionText="Codechef"
              containerHeight="100%"
              containerWidth="100%"
              scaleOnHover={1.05}
            >
              <img
                src={cchef_log}
                alt="Logo"
                className='h-30 w-30 mx-auto my-2'
              />
              <div className='flex justify-center flex-col items-center -mt-2'>
                <h3 className='text-center text-[1.4rem]'>Codechef</h3>
                <ul className='flex flex-col gap-5 mt-10'>
                  <li className='text-[0.95rem]'>• Indian coding platform</li>
                  <li className='text-[0.95rem]'>• Monthly contests hosted</li>
                  <li className='text-[0.95rem]'>• Practice and learn coding</li>
                </ul>
              </div>
              <div className='h-12 w-44 text-indigo-900 border-indigo-600 border-2 shadow-xl bg-white/90 rounded-xl flex justify-center items-center 
              hover:cursor-grab mx-auto mt-12' onClick={handleCodechef}>
                Check your stats
              </div>
            </TiltedCard>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Platforms
