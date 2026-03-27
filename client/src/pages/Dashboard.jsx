// import { ArrowLeft, Check, Rocket, Share2 } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import { motion } from "motion/react"
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { serverUrl } from '../App'
// function Dashboard() {
//     const { userData } = useSelector(state => state.user)
//     const navigate = useNavigate()
//     const [websites, setWebsites] = useState(null)
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState("")
//     const [copiedId, setCopiedId] = useState(null)
//     const handleDeploy = async (id) => {
//         try {
//             const result = await axios.get(`${serverUrl}/api/website/deploy/${id}`, { withCredentials: true })
//             window.open(`${result.data.url}`, "_blank")
//             setWebsites((prev) =>
//         prev.map((w) =>
//           w._id === id
//             ? { ...w, deployed: true, deployUrl: result.data.url }
//             : w
//         )
//       );
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         const handleGetAllWebsites = async () => {
//             setLoading(true)
//             try {

//                 const result = await axios.get(`${serverUrl}/api/website/get-all`, { withCredentials: true })
//                 setWebsites(result.data || [])
//                 setLoading(false)
//             } catch (error) {
//                 console.log(error)
//                 setError(error.response.data.message)
//                 setLoading(false)
//             }
//         }
//         handleGetAllWebsites()
//     }, [])

//     const handleCopy = async (site) => {
//         await navigator.clipboard.writeText(site.deployUrl)
//         setCopiedId(site._id)
//         setTimeout(() => setCopiedId(null), 2000)
//     }

//     return (
//         <div className='min-h-screen bg-[#050505] text-white'>
//             <div className='sticky top-0 z-40 backdrop-blur-xl bg-black/50 border-b border-white/10'>
//                 <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
//                     <div className='flex items-center gap-4'>
//                         <button className='p-2 rounded-lg hover:bg-white/10 transition' onClick={() => navigate("/")}><ArrowLeft size={16} /></button>
//                         <h1 className='text-lg font-semibold'>Dashboard</h1>
//                     </div>
//                     <button className='px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:scale-105 transition' onClick={() => navigate("/generate")}>
//                         + New Website
//                     </button>
//                 </div>
//             </div>
//             <div className='max-w-7xl mx-auto px-6 py-10'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mb-10"
//                 >
//                     <p className='text-sm text-zinc-400 mb-1'>Welcome Back</p>
//                     <h1 className='text-3xl font-bold'>{userData.name}</h1>
//                 </motion.div>

//                 {loading && (
//                     <div className="mt-24 text-center text-zinc-400">Loading Your Websites...</div>
//                 )}

//                 {error && !loading && (
//                     <div className="mt-24 text-center text-red-400">{error}</div>
//                 )}

//                 {websites?.length == 0 && (
//                     <div className="mt-24 text-center text-zinc-400">You have no websites</div>
//                 )}

//                 {!loading && !error && websites?.length > 0 && (
//                     <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
//                         {websites.map((w, i) => {

//                             const copied = copiedId === w._id

//                             return <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.05 }}
//                                 whileHover={{ y: -6 }}
                               
//                                 className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition flex flex-col"
//                             >
//                                 <div className='relative h-40 bg-black cursor-pointer'  onClick={()=>navigate(`/editor/${w._id}`)}>
//                                     <iframe srcDoc={w.latestCode} className='absolute inset-0 w-[140%] h-[140%] scale-[0.72] origin-top-left pointer-events-none bg-white' />
//                                     <div className='absolute inset-0 bg-black/30' />
//                                 </div>

//                                 <div className='p-5 flex flex-col gap-4 flex-1'>
//                                     <h3 className='text-base font-semibold line-clamp-2'>{w.title}</h3>
//                                     <p className='text-xs text-zinc-400'>Last Updated {""}
//                                         {new Date(w.updatedAt).toLocaleDateString()}
//                                     </p>

//                                     {!w.deployed ? (
//                                         <button className=" mt-auto flex items-center justify-center gap-2
//                           px-4 py-2 rounded-xl text-sm font-semibold
//                           bg-gradient-to-r from-indigo-500 to-purple-500
//                           hover:scale-105 transition
//                         "
//                                             onClick={() => handleDeploy(w._id)}

//                                         ><Rocket size={18} /> Deploy</button>
//                                     ) : (<motion.button
//                                         whileTap={{ scale: 0.95 }}
//                                         onClick={() => handleCopy(w)}
//                                         className={`
//                           mt-auto flex items-center justify-center gap-2
//                           px-4 py-2 rounded-xl text-sm font-medium
//                           transition-all
//                           ${copied
//                                                 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
//                                                 : "bg-white/10 hover:bg-white/20 border border-white/10"
//                                             }
//                         `}
//                                     >
//                                         { copied?(
//                                             <>
//                                             <Check size={14}/>
//                                             Link Copied
//                                             </>
//                                         ):
//                                         <>
//                                         <Share2 size={14}/>
//                                         Share Link
//                                         </>
//                                         }
//                                     </motion.button>)}

//                                 </div>

//                             </motion.div>
//                         })}

//                     </div>
//                 )}


//             </div>
//         </div>
//     )
// }

// export default Dashboard








import { ArrowLeft, Check, Rocket, Share2, Plus, Sparkles, LayoutDashboard, Loader2, Globe } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion" // Adjusted to framer-motion standard
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { serverUrl } from '../App'

// Reusable animation variants
const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function Dashboard() {
    const { userData } = useSelector(state => state.user)
    const navigate = useNavigate()
    const [websites, setWebsites] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [copiedId, setCopiedId] = useState(null)

    const handleDeploy = async (id) => {
        try {
            const result = await axios.get(`${serverUrl}/api/website/deploy/${id}`, { withCredentials: true })
            window.open(`${result.data.url}`, "_blank")
            setWebsites((prev) =>
                prev.map((w) =>
                    w._id === id
                        ? { ...w, deployed: true, deployUrl: result.data.url }
                        : w
                )
            );
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const handleGetAllWebsites = async () => {
            setLoading(true)
            try {
                const result = await axios.get(`${serverUrl}/api/website/get-all`, { withCredentials: true })
                setWebsites(result.data || [])
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error.response?.data?.message || "Failed to load projects.")
                setLoading(false)
            }
        }
        handleGetAllWebsites()
    }, [])

    const handleCopy = async (site) => {
        await navigator.clipboard.writeText(site.deployUrl)
        setCopiedId(site._id)
        setTimeout(() => setCopiedId(null), 2000)
    }

    return (
        <div className='min-h-screen relative bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden'>
            
            {/* ── MESH GRADIENT BACKGROUND ── */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40 mix-blend-screen">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-[#0070F3]/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-[#8A2BE2]/15 blur-[140px] rounded-full" />
            </div>

            {/* ── PREMIUM NAVBAR ── */}
            <nav className='sticky top-0 z-50 backdrop-blur-2xl bg-[#050505]/70 border-b border-white/[0.06] shadow-2xl'>
                <div className='max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between'>
                    <div className='flex items-center gap-6'>
                        <button 
                            className='w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200' 
                            onClick={() => navigate("/")}
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <LayoutDashboard size={14} className="text-white" />
                            </div>
                            <h1 className='text-xl font-bold tracking-tight'>Dashboard</h1>
                        </div>
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all' 
                        onClick={() => navigate("/generate")}
                    >
                        <Plus size={16} strokeWidth={2.5} />
                        New Project
                    </motion.button>
                </div>
            </nav>

            {/* ── MAIN CONTENT ── */}
            <div className='relative z-10 max-w-[1400px] mx-auto px-6 py-12 lg:py-16'>
                
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <p className='text-sm font-medium text-zinc-400 mb-1 flex items-center gap-2'>
                            <Sparkles size={14} className="text-indigo-400" />
                            Welcome Back
                        </p>
                        <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400'>
                            {userData?.name || "Creator"}
                        </h1>
                    </div>
                </motion.div>

                {/* ── STATES (LOADING & ERROR) ── */}
                {loading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-32 flex flex-col items-center justify-center text-zinc-400">
                        <Loader2 size={32} className="animate-spin text-indigo-500 mb-4" />
                        <p className="text-sm font-medium tracking-wide">Loading your workspace...</p>
                    </motion.div>
                )}

                {error && !loading && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-20 p-6 max-w-md mx-auto rounded-2xl border border-red-500/20 bg-red-500/5 text-center">
                        <p className="text-red-400 font-medium">{error}</p>
                    </motion.div>
                )}

                {/* ── EMPTY STATE ── */}
                {websites?.length === 0 && !loading && !error && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="mt-16 max-w-2xl mx-auto flex flex-col items-center justify-center p-12 rounded-[32px] border-2 border-dashed border-white/10 bg-white/[0.02] text-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                            <Globe size={28} className="text-zinc-400" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">No projects yet</h2>
                        <p className="text-zinc-400 mb-8 max-w-sm">You haven't generated any websites yet. Click the button below to start building with AI.</p>
                        <button 
                            className='flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-bold shadow-lg hover:scale-105 transition-transform' 
                            onClick={() => navigate("/generate")}
                        >
                            <Sparkles size={16} />
                            Generate First Website
                        </button>
                    </motion.div>
                )}

                {/* ── PROJECTS GRID ── */}
                {!loading && !error && websites?.length > 0 && (
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'
                    >
                        {websites.map((w) => {
                            const copied = copiedId === w._id;

                            return (
                                <motion.div
                                    key={w._id}
                                    variants={fadeUpVariant}
                                    className="group flex flex-col rounded-[24px] bg-[#0c0c0e]/90 backdrop-blur-md border border-white/[0.08] overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                                >
                                    {/* Project Preview */}
                                    <div className='relative h-48 bg-[#000] border-b border-white/[0.04] overflow-hidden cursor-pointer' onClick={() => navigate(`/editor/${w._id}`)}>
                                        <iframe srcDoc={w.latestCode} className='absolute inset-0 w-[140%] h-[140%] scale-[0.72] origin-top-left pointer-events-none bg-white' title={w.title} />
                                        <div className='absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500' />
                                        
                                        {/* Hover Badge */}
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">Open Editor</span>
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className='p-6 flex flex-col flex-1'>
                                        <h3 className='text-lg font-bold line-clamp-1 tracking-tight text-zinc-100 group-hover:text-indigo-300 transition-colors'>{w.title}</h3>
                                        <p className='text-[12px] font-medium text-zinc-500 mt-1 mb-6'>
                                            Updated {new Date(w.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="mt-auto">
                                            {!w.deployed ? (
                                                <button 
                                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all duration-300 hover:-translate-y-0.5"
                                                    onClick={(e) => { e.stopPropagation(); handleDeploy(w._id); }}
                                                >
                                                    <Rocket size={16} /> 
                                                    Publish Site
                                                </button>
                                            ) : (
                                                <motion.button
                                                    whileTap={{ scale: 0.96 }}
                                                    onClick={(e) => { e.stopPropagation(); handleCopy(w); }}
                                                    className={`
                                                        w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                                                        ${copied
                                                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                                                            : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 hover:border-white/20"
                                                        }
                                                    `}
                                                >
                                                    {copied ? (
                                                        <>
                                                            <Check size={16} strokeWidth={3} />
                                                            Link Copied
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Share2 size={16} />
                                                            Share Link
                                                        </>
                                                    )}
                                                </motion.button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Dashboard