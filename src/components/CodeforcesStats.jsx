import React, { useState } from 'react';
import { fetchCodeforcesData } from '../api/CodeForces';
import cf_logo from '../assets/cf-logo.png';
import noData2_logo from '../assets/noData2.png';
import TrueFocus from './TrueFocus';

const CodeforcesStats = () => {
    const [handle, setHandle] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFetch = async () => {
        if (!handle.trim()) {
            setError('Please enter a handle');
            return;
        }

        setLoading(true);
        setError('');
        setData(null);

        try {
            const result = await fetchCodeforcesData(handle);
            setData(result);
        } catch (err) {
            setError('User not found');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='relative'>
            <div className="flex justify-evenly h-[150vh] md:h-[100vh] flex-col md:flex-row gap-10">
                <div className="box h-[50%] md:h-[90%] w-[90%] md:w-[30%] my-auto mx-auto p-5 flex flex-col gap-5 border border-black">
                    <div className="header flex justify-center items-center bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent font-bold text-[1.5rem] uppercase font-serif">
                        <TrueFocus
                            sentence="Codeforces Stats"
                            manualMode={false}
                            blurAmount={2}
                            borderColor="#0ea5e9"
                            glowColor="rgba(14, 165, 233, 0.6)"
                            animationDuration={0.5}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={cf_logo} alt="" className='h-20 md:h-28' />
                    </div>
                    <div className="flex justify-center items-center mt-7">
                        <input
                            type="text"
                            value={handle}
                            onChange={(e) => setHandle(e.target.value)}
                            className="bg-gray-100 shadow-md outline-none text-black p-2 rounded-xl w-[90%] text-center h-12"
                            placeholder="Enter your Codeforces handle"
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

                <div className="box h-[45%] border border-black md:h-[90%] w-[90%] md:w-[65%] my-auto mx-auto p-6 overflow-y-auto">
                    {data ? (
                        <div className="flex flex-col gap-8">
                            {data?.avatar && (
                                <div className="flex items-center justify-center mt-2">
                                    <img src={data.avatar} alt="CF Avatar" className="w-40 h-40 rounded-full shadow-md"
                                    />
                                </div>
                            )}

                            <div className="flex flex-col mx-auto md:flex-row flex-wrap md:grid-cols-3 gap-20 justify-center">
                                <Stat label="Handle" value={data.handle} />
                                <Stat label="Rating" value={data.rating} />
                                <Stat label="Max Rating" value={data.maxRating} />
                                <Stat label="Rank" value={data.rank} />
                                <Stat label="Max Rank" value={data.maxRank} />
                                <Stat label="Friends" value={data.friendOfCount} />
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-sky-800 text-[1.2rem] flex items-center justify-center flex-col">
                            {loading ? 'Fetching data...' : 'Enter a handle first to see stats'}
                            <img src={noData2_logo} alt="" className='h-[50vh] md:h-[70vh]' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Stat = ({ label, value }) => (
    <div className="flex flex-col items-center justify-center h-30 w-52 md:w-40 bg-sky-100 hover:cursor-pointer hover:bg-sky-200 transition-all hover:scale-[1.01] hover:shadow-xl shadow-md bg-opacity-10 p-3 rounded-lg">
        <p className="text-[1.35rem] font-bold">{value}</p>
        <p className="text-sm text-cyan-900">{label}</p>
    </div>
);

export default CodeforcesStats;
