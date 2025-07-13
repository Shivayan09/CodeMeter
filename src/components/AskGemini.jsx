import React, { useState } from 'react'
import { motion } from "framer-motion";
import ai_logo from '../assets/ai-logo.png'
import { URL } from '../constants';
import no_task from '../assets/noTask-icon.png'

const AskGemini = () => {
    const [ques, setQues] = useState('')
    const [result, setResult] = useState(undefined)
    const [loading, setLoading] = useState(false);

    const payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": ques
                    }
                ]
            }
        ]
    }
    const askQues = async () => {
        setLoading(true);
        setResult(undefined);
        try {
            const response = await fetch(URL, {
                method: "POST",
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            setResult(data.candidates[0].content.parts[0].text);
        } catch (err) {
            setResult("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='relative'>
            <div className='h-[80vh] w-[90vw] md:w-[80vw] flex flex-col md:flex-row mx-auto items-center'>
                <div className="box w-[100%] md:w-[40%] flex flex-col justify-center items-center h-[40%] md:h-[100%]">
                    <div className="header text-center m-5 text-[1rem] md:text-[1.4rem] font-serif bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent font-semibold leading-10" style={{ wordSpacing: '0.7rem' }}>"Ask me your doubts <br /> regarding coding"</div>
                    <div className="image">
                        <motion.img
                            src={ai_logo}
                            alt=""
                            className="h-[20vh] md:h-[60vh]"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
                <div className="box w-[100%] md:w-[60%] h-[100%] md:h-[100%]">
                    <div className="gemini mx-3 h-[30%]">
                        <input type="text" value={ques} onChange={(event) => setQues(event.target.value)} placeholder='Enter your doubt here' className='h-[9vh] w-full bg-white/20 border-gray-600/60 rounded-xl shadow-xl p-3 mb-2 outline-none' />
                        <div className="button h-[7vh] transition-all hover:scale-[1.005] hover:cursor-pointer hover:bg-white/70 flex items-center justify-center border-indigo-600 border-2 shadow-xl rounded-2xl text-gray-700"
                            onClick={loading ? undefined : askQues}>
                            {loading ? "Thinking..." : "Ask CodeBot"}
                        </div>
                    </div>
                    <div className="div shadow-xl rounded-2xl mx-3 -mt-3 flex items-center justify-center h-[70%]">
                        <div className=" flex justify-center result text-center overflow-y-auto w-full px-5 rounded-2xl text-[1.1rem] text-gray-700/80 font-serif" style={{ maxHeight: '100%' }}>
                            {result ? result : <div>
                                <p>Your result will appear here</p>
                                <img src={no_task} alt="" className='h-[45vh] mx-auto' />
                            </div>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AskGemini
