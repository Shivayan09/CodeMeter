import React, { useState } from 'react';
import { fetchLeetcodeStats } from '../api/Leetcode';
import Grid from './Grid';
import LeetCodeCharts from './LeetCodeCharts';
import TiltedCard from './TiltedCard';
import lc_logo from '../assets/Lc-logo.png'
import noData_logo from '../assets/noData.png'
import noData2_logo from '../assets/noData2.png'
import TrueFocus from './TrueFocus';


const LeetCodeStats = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [analysis, setAnalysis] = useState(false);

  function generateAnalysis(data) {
    const totalSolved = data.easySolved + data.mediumSolved + data.hardSolved;
    const totalQs = data.totalEasy + data.totalMedium + data.totalHard;
    const unsolved = totalQs - totalSolved;

    let focus = "Easy";
    if (data.mediumSolved >= data.easySolved && data.mediumSolved >= data.hardSolved) {
      focus = "Medium";
    } else if (data.hardSolved >= data.mediumSolved) {
      focus = "Hard";
    }

    return <div>
      <ul className='flex flex-col gap-5'>
        <li className='font-semibold text-indigo-900 text-[1.15rem]'>• You've solved {totalSolved} out of {totalQs} problems.</li>
        <li className='font-semibold text-indigo-900 text-[1.15rem]'>• Most of your solved problems are {focus}-level.</li>
        <li className='font-semibold text-indigo-900 text-[1.15rem]'>• You still have {unsolved} problems left unsolved.</li>
        <li className='font-semibold text-indigo-900 text-[1.15rem]'>• Your contribution points are {data.contributionPoints}, and your global rank is {data.ranking}.</li>
        <li className='font-semibold text-indigo-900 text-[1.15rem]'>• {data.contributionPoints < 100 ? "Try participating more in discussions or contests." : "Excellent community engagement!"}</li>
      </ul>
    </div>

  }


  const handleFetch = async () => {
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError('');
    setData(null);

    try {
      const result = await fetchLeetcodeStats(username);
      setData(result);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative'>
      <div className="flex justify-evenly h-[200vh] md:h-[100vh] flex-col md:flex-row gap-10">
        <div className="box h-[35%] md:h-[90%] w-[90%] md:w-[30%] my-auto mx-auto p-5 flex flex-col gap-5">
          <div
            className="header flex justify-center items-center bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent font-bold text-[1.5rem] uppercase font-serif"
            style={{ wordSpacing: '0.5rem' }}
          >
            <TrueFocus
              sentence="LeetCode Stats"
              manualMode={false}
              blurAmount={2}
              borderColor="#2563eb"
              glowColor="rgba(37, 99, 235, 0.6)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>
          <div className='flex items-center justify-center'>
            <img src={lc_logo} alt="" className='h-28' />
          </div>
          <div className="flex justify-center items-center mt-7">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 shadow-md outline-none text-black p-2 rounded-xl w-[90%] text-center h-12"
              placeholder="Enter your LeetCode username"
            />
          </div>
          <div
            onClick={handleFetch}
            className="bg-gradient-to-r from-indigo-600 to-sky-400 hover:cursor-pointer w-[90%] mx-auto h-10 text-white flex justify-center items-center rounded-xl"
          >
            {loading ? 'Loading...' : 'Fetch Stats'}
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>

        <div className="box h-[80%] md:h-[90%] w-[90%] md:w-[65%] my-auto mx-auto p-6 overflow-y-auto">
          {data ? (
            <div>
              <LeetCodeCharts data={data} />
              <div className='mt-16'>
                <div className="button bg-gradient-to-r from-indigo-600 to-sky-400 text-white h-14 w-[20vw] mx-auto rounded-2xl flex items-center justify-center hover:cursor-pointer 
                transition-all duration-300 hover:scale-[1.02]" onClick={() => setAnalysis(true)}>
                  {analysis ? 'Analysis' : 'Get Analysis'}
                </div>
                {analysis && (
                  <div className='mt-10'>
                    {generateAnalysis(data)}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-sky-800 text-[1.2rem] flex items-center justify-center flex-col">
              {loading ? 'Fetching data...' : 'Enter a username first to see stats'}
              <img src={noData2_logo} alt="" className='h-[50vh] md:h-[70vh]' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="flex flex-col items-center h-20 w-52 md:w-40 bg-sky-100 hover:cursor-pointer hover:bg-sky-200 transition-all hover:scale-[1.01] hover:shadow-xl shadow-md bg-opacity-10 p-3 rounded-lg">
    <p className="text-[1.35rem] font-bold">{value}</p>
    <p className="text-sm text-cyan-900">{label}</p>
  </div>
);

export default LeetCodeStats;
