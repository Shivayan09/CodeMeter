import React from 'react'
import img1 from '../assets/home-img1.png';
import img2 from '../assets/home-img2.png';
import { useNavigate } from 'react-router-dom';
import RotatingText from '../components/RotatingText';

const Home = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/stats')
    }
    return (
        <div className='relative z-10'>
            <div className='h-[80vh] md:h-[73vh] md:m-5 flex items-center flex-col md:flex-row'>
                <div className="box h-[100%] w-[100%] md:w-[50%] flex items-center justify-center p-5">
                    <img src={img2} alt="" />
                </div>
                <div className="box h-[100%] w-[100%] md:w-[50%] flex items-center md:items-start justify-center p-5 flex-col gap-10">
                    <p className='font-serif font-semibold text-[2.4rem] text-center md:text-left w-full'>
                        <RotatingText
                            texts={['Decode', 'your coding data', 'with confidence!']}
                            mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-indigo-600 to-sky-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-2xl"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "0%" }}
                            staggerDuration={0.020}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            rotationInterval={1500}
                        />
                    </p>
                    <p className='text-[1.2rem] font-serif text-indigo-900 flex items-center justify-center text-center md:text-left'>Codemetric brings clarity to complex data. Monitor performance, track trends, and make smarter decisions — all in one intuitive platform.
                        Unlock insights effortlessly and transform the way you understand your data.</p>
                    <div className="button h-14 w-64 flex items-center justify-center text-indigo-900 border-indigo-600 border-2 shadow-xl bg-white/90 hover:bg-gray-50 rounded-xl font-semibold text-[1.1rem] 
                hover:cursor-pointer hover:shadow-xl transition-all ease-in-out duration-300 hover:scale-[1.01]"
                        onClick={handleClick}>
                        Check your stats right now!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
