// import { ArrowLeft } from 'lucide-react'
// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { motion } from "motion/react"
// import { useState } from 'react'
// import axios from "axios"
// import { serverUrl } from '../App'

// const PHASES = [
//     "Analyzing your idea…",
//     "Designing layout & structure…",
//     "Writing HTML & CSS…",
//     "Adding animations & interactions…",
//     "Final quality checks…",
// ];
// function Generate() {
//     const navigate = useNavigate()
//     const [prompt, setPrompt] = useState("")
//     const [loading, setLoading] = useState(false)
//     const [progress, setProgress] = useState(0)
//     const [phaseIndex, setPhaseIndex] = useState(0)
//     const [error,setError]=useState("")
//     const handleGenerateWebsite = async () => {
//         setLoading(true)
//         try {
//             const result = await axios.post(`${serverUrl}/api/website/generate`, { prompt }, { withCredentials: true })
//             console.log(result)
//             setProgress(100)
//             setLoading(false)
//             navigate(`/editor/${result.data.websiteId}`)
//         } catch (error) {
//             setLoading(false)
//             setError(error.response.data.message || "something went wrong")
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         if (!loading) {
//             setPhaseIndex(0)
//             setProgress(0)
//             return
//         }

//         let value = 0
//         let phase = 0

//         const interval = setInterval(() => {
//             const increment = value < 20
//                 ? Math.random() * 1.5
//                 : value < 60
//                     ? Math.random() * 1.2
//                     : Math.random() * 0.6;
//             value += increment

//             if (value >= 93) value = 93;

//             phase = Math.min(
//                 Math.floor((value / 100) * PHASES.length), PHASES.length - 1
//             )

//             setProgress(Math.floor(value))
//             setPhaseIndex(phase)

//         }, 1200)

//         return () => clearInterval(interval)
//     }, [loading])

//     return (
//         <div className='min-h-screen bg-linear-to-br from-[#050505] via-[#0b0b0b] to-[#050505] text-white'>
//             <div className='sticky top-0 z-40 backdrop-blur-xl bg-black/50 border-b border-white/10'>
//                 <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
//                     <div className='flex items-center gap-4'>
//                         <button className='p-2 rounded-lg hover:bg-white/10 transition' onClick={() => navigate("/")}><ArrowLeft size={16} /></button>
//                         <h1 className='text-lg font-semibold'>Genweb<span className='text-zinc-400'>.ai</span></h1>
//                     </div>

//                 </div>
//             </div>

//             <div className='max-w-6xl mx-auto px-6 py-16'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center mb-16"
//                 >
//                     <h1 className='text-4xl md:text-5xl font-bold mb-5 leading-tight'>
//                         Build Websites with
//                         <span className='block bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent'>Real AI Power</span>
//                     </h1>
//                     <p className='text-zinc-400 max-w-2xl mx-auto'>
//                         This process may take several minutes.
//                         genweb.ai focuses on quality, not shortcuts.
//                     </p>

//                 </motion.div>
//                 <div className='mb-14'>
//                     <h1 className='text-xl font-semibold mb-2'>Describe your website</h1>
//                     <div className='relative'>
//                         <textarea
//                             onChange={(e) => setPrompt(e.target.value)}
//                             value={prompt}
//                             placeholder='Describe your website in detail...'
//                             className='w-full h-56 p-6 rounded-3xl bg-black/60 border border-white/10 outline-none resize-none text-sm leading-relaxed focus:ring-2 focus:ring-white/20'></textarea>
//                     </div>
                    

//                     {error && <p className='mt-4 text-sm text-red-400'>{error}</p>}

//                 </div>
//                 <div className='flex justify-center'>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.96 }}
//                         onClick={handleGenerateWebsite}
//                         disabled={!prompt.trim() && loading}
//                         className={`px-14 py-4 rounded-2xl font-semibold text-lg ${prompt.trim() && !loading
//                             ? "bg-white text-black"
//                             : "bg-white/20 text-zinc-400 cursor-not-allowed"
//                             }`}
//                     >
//                         Generate Website
//                     </motion.button>
//                 </div>


//                 {loading && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="max-w-xl mx-auto mt-12"
//                     >
//                         <div className='flex justify-between mb-2 text-xs text-zinc-400'>
//                             <span >{PHASES[phaseIndex]}</span>
//                             <span >{progress}%</span>
//                         </div>

//                         <div className='h-2 w-full bg-white/10 rounded-full overflow-hidden'>
//                             <motion.div
//                                 className="h-full bg-linear-to-r from-white to-zinc-300"
//                                 animate={{ width: `${progress}%` }}
//                                 transition={{ ease: "easeOut", duration: 0.8 }}
//                             />
//                         </div>

//                         <div className='text-center text-xs text-zinc-400 mt-4'>
//                             Estimated time remaining:{" "}
//                             <span className="text-white font-medium">
//                                 ~8–12 minutes
//                             </span>
//                         </div>

//                     </motion.div>
//                 )}


//             </div>
//         </div>
//     )
// }

// export default Generate






import { ArrowLeft, ArrowUp, Map, Mic, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"
import axios from "axios"
import { serverUrl } from '../App'

const PHASES = [
    "Analyzing your idea…",
    "Designing layout & structure…",
    "Writing HTML & CSS…",
    "Adding animations & interactions…",
    "Final quality checks…",
];

function Generate() {
    const navigate = useNavigate()
    const [prompt, setPrompt] = useState("")
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [phaseIndex, setPhaseIndex] = useState(0)
    const [error, setError] = useState("")

    const handleGenerateWebsite = async () => {
        setLoading(true)
        try {
            const result = await axios.post(`${serverUrl}/api/website/generate`, { prompt }, { withCredentials: true })
            console.log(result)
            setProgress(100)
            setLoading(false)
            navigate(`/editor/${result.data.websiteId}`)
        } catch (error) {
            setLoading(false)
            setError(error.response?.data?.message || "something went wrong")
            console.log(error)
        }
    }

    // Minor UX addition: allow Enter to submit without breaking logic
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (prompt.trim() && !loading) {
                handleGenerateWebsite();
            }
        }
    }

    useEffect(() => {
        if (!loading) {
            setPhaseIndex(0)
            setProgress(0)
            return
        }

        let value = 0
        let phase = 0

        const interval = setInterval(() => {
            const increment = value < 20
                ? Math.random() * 1.5
                : value < 60
                    ? Math.random() * 1.2
                    : Math.random() * 0.6;
            value += increment

            if (value >= 93) value = 93;

            phase = Math.min(
                Math.floor((value / 100) * PHASES.length), PHASES.length - 1
            )

            setProgress(Math.floor(value))
            setPhaseIndex(phase)

        }, 1200)

        return () => clearInterval(interval)
    }, [loading])

    return (
        <div className='min-h-screen relative bg-[#0a0a0d] text-white overflow-hidden font-sans selection:bg-blue-500/30'>
            
            {/* ── LOVABLE-STYLE MESH GRADIENT BACKGROUND ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[10%] w-[50%] h-[60%] bg-[#0070F3]/25 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[70%] bg-[#FF2E93]/35 blur-[140px] rounded-full mix-blend-screen" />
                <div className="absolute top-[20%] left-[10%] w-[40%] h-[50%] bg-[#8A2BE2]/20 blur-[130px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[0%] right-[5%] w-[50%] h-[60%] bg-[#FF8A00]/20 blur-[140px] rounded-full mix-blend-screen" />
            </div>

            {/* ── NAVBAR ── */}
            <div className='relative z-40'>
                <div className='max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        {/* Brand + Back Button */}
                        <div className='flex items-center gap-4'>
                            <button 
                                className='p-2 -ml-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors' 
                                onClick={() => navigate("/")}
                            >
                                <ArrowLeft size={18} />
                            </button>
                            <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate("/")}>
                                <div className='w-6 h-6 rounded bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500' />
                                <h1 className='text-xl font-bold tracking-tight'>ASCII</h1>
                            </div>
                        </div>

                        {/* Desktop Links */}
                        {/* <div className='hidden lg:flex items-center gap-6 text-[14px] font-medium text-zinc-100'>
                            <span className='cursor-pointer hover:text-white transition flex items-center gap-1.5'>Solutions <span className='text-[9px] opacity-60'>▼</span></span>
                            <span className='cursor-pointer hover:text-white transition flex items-center gap-1.5'>Resources <span className='text-[9px] opacity-60'>▼</span></span>
                            <span className='cursor-pointer hover:text-white transition'>Enterprise</span>
                            <span className='cursor-pointer hover:text-white transition'>Pricing</span>
                            <span className='cursor-pointer hover:text-white transition'>Community</span>
                            <span className='cursor-pointer hover:text-white transition'>Security</span>
                        </div> */}
                    </div>

                    {/* Right Actions */}
                    {/* <div className='hidden md:flex items-center gap-3'>
                        <button className='px-4 py-2 rounded-lg border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors'>
                            Log in
                        </button>
                        <button className='px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors'>
                            Get started
                        </button>
                    </div> */}
                </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className='relative z-10 max-w-[840px] mx-auto px-6 pt-[10vh] pb-16'>
                
                {/* Hero Headers */}
<div className="text-center mb-12 flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40, filter: "blur(20px)", scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                        transition={{ 
                            duration: 1.2, 
                            ease: [0.16, 1, 0.3, 1] // Super smooth custom easing (Apple style)
                        }}
                        className='text-5xl md:text-[60px] lg:text-[68px] font-extrabold mb-5 leading-[1.1] tracking-tighter text-white drop-shadow-xl'
                    >
                        Build something{" "}
                        <br className="md:hidden" />
                        {/* Shimmering Metallic Text Effect */}
                        <motion.span 
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className='inline-block text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-zinc-300 via-white to-zinc-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                        >
                            ASCII
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ 
                            duration: 1, 
                            delay: 0.3, // Comes in right after the title
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                        className='text-lg md:text-[20px] text-zinc-400 font-medium max-w-xl mx-auto'
                    >
                        Create apps and websites by chatting with AI
                    </motion.p>
                </div>

                {/* Wrapper to position the button perfectly inside the textarea visually */}
                <div className='relative w-full group'>
                    
                    <div className='mb-0'>
                        <h1 className='sr-only'>Describe your website</h1>
                        <div className='relative'>
                            <textarea
                                onChange={(e) => setPrompt(e.target.value)}
                                onKeyDown={handleKeyDown}
                                value={prompt}
                                disabled={loading}
                                placeholder='Ask ASCII to create a prototype...'
                                className='w-full min-h-[160px] p-6 pb-20 rounded-[32px] bg-[#222222]/95 backdrop-blur-xl border border-white/5 outline-none resize-none text-[16px] leading-relaxed text-zinc-100 placeholder-zinc-400 focus:ring-1 focus:ring-white/20 transition-all shadow-2xl disabled:opacity-60'
                            ></textarea>

                            {/* Decorative Fake Inner Tools (Left) */}
                            <div className='absolute bottom-5 left-6 w-[34px] h-[34px] flex items-center justify-center rounded-full border border-zinc-600 text-zinc-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors'>
                                <Plus size={18} strokeWidth={1.5} />
                            </div>

                            {/* Decorative Fake Inner Tools (Right Side, beside button) */}
                            <div className='absolute bottom-6 right-20 flex items-center gap-4 text-zinc-400'>
                                <Map size={18} strokeWidth={1.5} className='cursor-pointer hover:text-white transition-colors' />
                                <Mic size={18} strokeWidth={1.5} className='cursor-pointer hover:text-white transition-colors' />
                            </div>
                        </div>
                        
                        {error && <p className='mt-4 text-center text-sm font-medium text-red-400'>{error}</p>}
                    </div>

                    {/* The Actual Submit Button — visually pushed inside the text area */}
                    <div className='absolute bottom-5 right-6 flex justify-center'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleGenerateWebsite}
                            disabled={!prompt.trim() && loading}
                            className={`w-[36px] h-[36px] flex items-center justify-center rounded-full transition-all duration-200 ${
                                prompt.trim() && !loading
                                    ? "bg-zinc-300 text-black hover:bg-white shadow-lg shadow-white/10"
                                    : "bg-[#3a3a3a] text-zinc-500 cursor-not-allowed"
                            }`}
                        >
                            <ArrowUp size={18} strokeWidth={2.5} />
                        </motion.button>
                    </div>

                </div>

                {/* ── LOADING STATE ── */}
                {loading && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-xl mx-auto mt-10"
                    >
                        <div className='bg-[#222222]/80 backdrop-blur-md rounded-2xl p-5 border border-white/5 shadow-2xl'>
                            <div className='flex justify-between mb-3 text-[13px] font-medium text-zinc-300'>
                                <span>{PHASES[phaseIndex]}</span>
                                <span>{progress}%</span>
                            </div>

                            <div className='h-1.5 w-full bg-black/50 rounded-full overflow-hidden'>
                                <motion.div
                                    className="h-full bg-zinc-200"
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "easeOut", duration: 0.8 }}
                                />
                            </div>

                            <div className='text-center text-xs text-zinc-500 mt-4 font-medium'>
                                Estimated time remaining:{" "}
                                <span className="text-zinc-300">
                                    ~8–12 minutes
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}

            </div>
        </div>
    )
}

export default Generate