// import React, { useEffect, useState } from 'react'
// import { AnimatePresence, motion } from "motion/react"
// import LoginModal from '../components/LoginModal'
// import { useDispatch, useSelector } from 'react-redux'
// import { Coins } from "lucide-react"
// import { serverUrl } from '../App'
// import axios from 'axios'
// import { setUserData } from '../redux/userSlice'
// import { useNavigate } from 'react-router-dom'
// function Home() {

//     const highlights = [
//         "AI Generated Code",
//         "Fully Responsive Layouts",
//         "Production Ready Output",
//     ]

//     const [openLogin, setOpenLogin] = useState(false)
//     const { userData } = useSelector(state => state.user)
//     const [openProfile, setOpenProfile] = useState(false)
//     const [websites, setWebsites] = useState(null)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const handleLogOut = async () => {
//         console.log("logout click")
//         try {
//             await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true })
//             dispatch(setUserData(null))
//             setOpenProfile(false)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         if (!userData) return;
//         const handleGetAllWebsites = async () => {

//             try {

//                 const result = await axios.get(`${serverUrl}/api/website/get-all`, { withCredentials: true })
//                 setWebsites(result.data || [])

//             } catch (error) {
//                 console.log(error)

//             }
//         }
//         handleGetAllWebsites()
//     }, [userData])
//     return (
//         <div className='relative min-h-screen bg-[#040404] text-white overflow-hidden'>
//             <motion.div
//                 initial={{ y: -40, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'
//             >
//                 <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
//                     <div className='text-lg font-semibold'>
//                         GenWeb.ai
//                     </div>
//                     <div className='flex items-center gap-5'>
//                         <div className='hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer' onClick={() => navigate("/pricing")}>
//                             Pricing
//                         </div>
//                         {userData && <div className='hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm cursor-pointer hover:bg-white/10 transition' onClick={() => navigate("/pricing")}>
//                             <Coins size={14} className='text-yellow-400' />
//                             <span className='text-zinc-300'>Credits</span>
//                             <span>{userData.credits}</span>
//                             <span className='font-semibold'>+</span>
//                         </div>}


//                         {!userData ? <button className='px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm'
//                             onClick={() => setOpenLogin(true)}
//                         >

                            

//                             Get Started
//                         </button>
//                             :
//                             <div className='relative'>
//                                 <button className='flex items-center' onClick={() => setOpenProfile(!openProfile)}>
//                                     <img src={userData?.avatar || `https://ui-avatars.com/api/?name=${userData.name}`} alt="" referrerPolicy='no-referrer' className='w-9 h-9 rounded-full border border-white/20 object-cover' />
//                                 </button>
//                                 <AnimatePresence>
//                                     {openProfile && (
//                                         <>
//                                             <motion.div
//                                                 initial={{ opacity: 0, y: -10, scale: 0.95 }}
//                                                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                                                 exit={{ opacity: 0, y: -10, scale: 0.95 }}
//                                                 className="absolute right-0 mt-3 w-60 z-50 rounded-xl bg-[#0b0b0b] border border-white/10 shadow-2xl overflow-hidden"
//                                             >
//                                                 <div className='px-4 py-3 border-b border-white/10'>
//                                                     <p className='text-sm font-medium truncate'>{userData.name}</p>
//                                                     <p className='text-xs text-zinc-500 truncate'>{userData.email}</p>
//                                                 </div>

//                                                 <button className='md:hidden w-full px-4 py-3 flex items-center gap-2 text-sm border-b border-white/10 hover:bg-white/5'>
//                                                     <Coins size={14} className='text-yellow-400' />
//                                                     <span className='text-zinc-300'>Credits</span>
//                                                     <span>{userData.credits}</span>
//                                                     <span className='font-semibold'>+</span>
//                                                 </button>

//                                                 <button className='w-full px-4 py-3 text-left text-sm hover:bg-white/5' onClick={() => navigate("/dashboard")}>Dashboard</button>
//                                                 <button className='w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-white/5' onClick={handleLogOut}>Logout</button>

//                                             </motion.div>
//                                         </>

//                                     )}

//                                 </AnimatePresence>

//                             </div>

//                         }

//                     </div>
//                 </div>
//             </motion.div>

//             <section className='pt-44 pb-32 px-6 text-center'>
//                 <motion.h1
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-5xl md:text-7xl font-bold tracking-tight"
//                 >
//                     Build Stunning Websites <br />
//                     <span className='bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>with AI</span>
//                 </motion.h1>

//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className='mt-8 max-w-2xl mx-auto text-zinc-400 text-lg'
//                 >
//                     Describe your idea and let AI generate a modern,
//                     responsive, production-ready website.
//                 </motion.p>


//                 <button className="px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition mt-12" onClick={() =>userData? navigate("/dashboard"):setOpenLogin(true)}>{userData ? "Go to dashboard" : "Get Started"}</button>

//             </section>
//             {!userData && <section className='max-w-7xl mx-auto px-6 pb-32'>
//                 <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
//                     {highlights.map((h, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             className="rounded-2xl bg-white/5 border border-white/10 p-8"
//                         >
//                             <h1 className='text-xl font-semibold mb-3'>{h}</h1>
//                             <p className='text-sm text-zinc-400'>
//                                 GenWeb.ai builds real websites — clean code,
//                                 animations, responsiveness and scalable structure.
//                             </p>

//                         </motion.div>
//                     ))}
//                 </div>
//             </section>}


//             {userData && websites?.length > 0 && (
//                 <section className='max-w-7xl mx-auto px-6 pb-32'>
//                     <h3 className='text-2xl font-semibold mb-6'>Your Websites</h3>

//                     <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//                         {websites.slice(0, 3).map((w, i) => (
//                             <motion.div
//                                 key={w._id}
//                                 whileHover={{ y: -6 }}
//                                 onClick={() => navigate(`/editor/${w._id}`)}
//                                 className="cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
//                             >
//                                 <div className='h-40 bg-black'>
//                                     <iframe
//                                         srcDoc={w.latestCode}
//                                         className='w-[140%] h-[140%] scale-[0.72] origin-top-left pointer-events-none bg-white'
//                                     />
//                                 </div>
//                                 <div className='p-4'>
//                                     <h3 className='text-base font-semibold line-clamp-2'>{w.title}</h3>
//                                     <p className='text-xs text-zinc-400'>Last Updated {""}
//                                         {new Date(w.updatedAt).toLocaleDateString()}
//                                     </p>
//                                 </div>


//                             </motion.div>
//                         ))}

//                     </div>
//                 </section>

//             )}



//             <footer className='border-t border-white/10 py-10 text-center text-sm text-zinc-500'>
//                 &copy; {new Date().getFullYear()} GenWeb.ai
//             </footer>

//             {openLogin && <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />}

//         </div>
//     )
// }

// export default Home






import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import LoginModal from '../components/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { Coins, Heart, Map, Mic, Play, Plus, Sparkles, Layers, Rocket, Code2, Flame } from "lucide-react"
import { serverUrl } from '../App'
import axios from 'axios'
import { setUserData } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

// Reusable animation variants
const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [openLogin, setOpenLogin] = useState(false)
    const { userData } = useSelector(state => state.user)
    const [openProfile, setOpenProfile] = useState(false)
    const [websites, setWebsites] = useState(null)
    const [activeMenu, setActiveMenu] = useState(null) // Added for new navbar

    // Highlight Features
    const highlights = [
        { icon: Code2, title: "AI Generated Code", desc: "ASCII writes clean, maintainable React & Tailwind code just from your text.", color: "from-blue-500 to-indigo-600", glow: "bg-blue-500/40" },
        { icon: Layers, title: "Fully Responsive", desc: "Your websites look stunning on every device, automatically scaling and adapting.", color: "from-purple-500 to-pink-600", glow: "bg-purple-500/40" },
        { icon: Rocket, title: "Production Ready", desc: "Export high-performance, SEO-friendly output instantly with one click.", color: "from-orange-500 to-red-600", glow: "bg-orange-500/40" },
    ]

    // Mock Data for "Discover Apps"
    const discoverApps = [
        { title: "Iconstack", desc: "50,000+ Free SVG Icons", likes: 1221, bg: "from-emerald-900 to-zinc-900", icon: "✨" },
        { title: "Attendflow", desc: "Event marketing made simple", likes: 817, bg: "from-blue-100 to-white text-black", icon: "📅" },
        { title: "creativable", desc: "All-in-one CRM, AI Assistant", likes: 551, bg: "from-zinc-800 to-black", icon: "🔥" },
        { title: "Pilates Circle by Cult", desc: "Move, full circle.", likes: 528, bg: "from-orange-200 to-amber-100 text-black", icon: "🧘‍♀️" },
        { title: "Opux AI", desc: "Every successful app starts here", likes: 424, bg: "from-zinc-900 to-black", icon: "⚡" },
        { title: "NeuroTunes AI", desc: "Adaptive music streaming", likes: 320, bg: "from-purple-900 to-black", icon: <Play size={24} className="text-white opacity-80" /> },
        { title: "Schedra", desc: "Content Creation Platform", likes: 245, bg: "from-cyan-900 to-black", icon: "🗓️" },
        { title: "Createspace", desc: "AI Media Made Simple", likes: 187, bg: "from-fuchsia-900 to-purple-900", icon: "🎨" },
    ]

    const handleLogOut = async () => {
        try {
            await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true })
            dispatch(setUserData(null))
            setOpenProfile(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!userData) return;
        const handleGetAllWebsites = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/website/get-all`, { withCredentials: true })
                setWebsites(result.data || [])
            } catch (error) {
                console.log(error)
            }
        }
        handleGetAllWebsites()
    }, [userData])

    return (
        <div className='relative min-h-screen flex flex-col bg-[#050505] text-white overflow-hidden font-sans selection:bg-blue-500/30'>
            
            {/* ── MESH GRADIENT BACKGROUND ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-80 mix-blend-screen">
                <div className="absolute top-[-10%] right-[10%] w-[50%] h-[60%] bg-[#0070F3]/25 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[70%] bg-[#FF2E93]/35 blur-[140px] rounded-full" />
                <div className="absolute top-[20%] left-[10%] w-[40%] h-[50%] bg-[#8A2BE2]/20 blur-[130px] rounded-full" />
                <div className="absolute bottom-[0%] right-[5%] w-[50%] h-[60%] bg-[#FF8A00]/20 blur-[140px] rounded-full" />
            </div>

            {/* ── ULTRA MODERN SAAS NAVBAR ── */}
            <motion.header 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='fixed top-0 left-0 right-0 z-[100]  '
            >
                <div className='max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between'>
                    
                    {/* LEFT: Logo & Navigation */}
                    <div className='flex items-center gap-10'>
                        
                        {/* Brand Logo */}
                        <div className='flex items-center gap-2.5 cursor-pointer group' onClick={() => navigate("/")}>
                            <div className='w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300'>
                                <Flame size={16} className="text-white drop-shadow-md" />
                            </div>
                            <h1 className='text-2xl font-extrabold tracking-tight text-white'>ASCII</h1>
                        </div>

                        {/* Desktop Links with Animated Dropdowns */}
                        <nav className='hidden md:flex items-center gap-2.5 px-4  rounded-full bg-gradient-to-r from-white/[0.03] to-white/[0.08] border border-white/10 text-[13px] cursor-pointer hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all'>
                            
                            {/* Solutions Dropdown */}
                            <div className='relative' onMouseEnter={() => setActiveMenu('solutions')} onMouseLeave={() => setActiveMenu(null)}>
                                <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${activeMenu === 'solutions' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}>
                                    Solutions 
                                    <motion.svg animate={{ rotate: activeMenu === 'solutions' ? 180 : 0 }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 mt-0.5"><path d="m6 9 6 6 6-6"/></motion.svg>
                                </button>
                                
                                <AnimatePresence>
                                    {activeMenu === 'solutions' && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-56 bg-[#0f0f12] border border-white/10 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 overflow-hidden"
                                        >
                                            <div className="px-3 py-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition">
                                                <p className="text-sm font-semibold text-white">Landing Pages</p>
                                                <p className="text-xs text-zinc-500 mt-0.5">High converting fronts</p>
                                            </div>
                                            <div className="px-3 py-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition">
                                                <p className="text-sm font-semibold text-white">Web Apps</p>
                                                <p className="text-xs text-zinc-500 mt-0.5">Complex SaaS interfaces</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Resources Dropdown */}
                            <div className='relative' onMouseEnter={() => setActiveMenu('resources')} onMouseLeave={() => setActiveMenu(null)}>
                                <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${activeMenu === 'resources' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}>
                                    Resources 
                                    <motion.svg animate={{ rotate: activeMenu === 'resources' ? 180 : 0 }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 mt-0.5"><path d="m6 9 6 6 6-6"/></motion.svg>
                                </button>
                                
                                <AnimatePresence>
                                    {activeMenu === 'resources' && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-48 bg-[#0f0f12] border border-white/10 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 overflow-hidden"
                                        >
                                            <p className="px-3 py-2 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 cursor-pointer transition">Documentation</p>
                                            <p className="px-3 py-2 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 cursor-pointer transition">Blog & Updates</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button className='px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all'>Enterprise</button>
                            <button className='px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all' onClick={() => navigate("/pricing")}>Pricing</button>
                            <button className='px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all'>Community</button>
                        </nav>
                    </div>

                    {/* RIGHT: Actions & User Auth */}
                    <div className='flex items-center gap-5'>
                        
                        {/* Credits Badge */}
                        {userData && (
                            <div 
                                className='hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-white/[0.03] to-white/[0.08] border border-white/10 text-[13px] cursor-pointer hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all' 
                                onClick={() => navigate("/pricing")}
                            >
                                <Coins size={16} className='text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]' />
                                <span className='text-zinc-400'>Credits:</span>
                                <span className='font-bold text-white'>{userData.credits}</span>
                            </div>
                        )}

                        {/* Auth Buttons */}
                        {!userData ? (
                            <div className="flex items-center gap-2">
                                <button 
                                    className='px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-all duration-200' 
                                    onClick={() => setOpenLogin(true)}
                                >
                                    Log in
                                </button>
                                <button 
                                    className='hidden md:block px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200' 
                                    onClick={() => setOpenLogin(true)}
                                >
                                    Get started
                                </button>
                            </div>
                        ) : (
                            /* User Profile Dropdown */
                            <div className='relative'>
                                <button 
                                    className='flex items-center active:scale-95 transition-transform' 
                                    onClick={() => setOpenProfile(!openProfile)}
                                >
                                    <img 
                                        src={userData?.avatar || `https://ui-avatars.com/api/?name=${userData.name}&background=random`} 
                                        alt="Profile" 
                                        referrerPolicy='no-referrer' 
                                        className='w-10 h-10 rounded-full border-2 border-white/10 hover:border-white/30 object-cover shadow-lg transition-colors' 
                                    />
                                </button>

                                <AnimatePresence>
                                    {openProfile && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 mt-4 w-64 z-50 rounded-2xl bg-[#0a0a0c]/95 border border-white/[0.08] shadow-2xl overflow-hidden backdrop-blur-2xl"
                                        >
                                            <div className='px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]'>
                                                <p className='text-sm font-bold text-white truncate'>{userData.name}</p>
                                                <p className='text-[13px] text-zinc-400 truncate mt-0.5'>{userData.email}</p>
                                            </div>
                                            <div className="p-2 flex flex-col gap-1">
                                                <button className='w-full px-4 py-2.5 text-left text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition' onClick={() => navigate("/dashboard")}>
                                                    Dashboard
                                                </button>
                                                <button className='w-full px-4 py-2.5 text-left text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-xl transition' onClick={handleLogOut}>
                                                    Logout
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </div>
            </motion.header>

            {/* ── HERO SECTION ── */}
             <div className=' -translate-y-16'>
                            <section className='relative z-10 pt-[22vh] pb-24 px-6 text-center  max-w-[840px] mx-auto'>
<div className="flex flex-col items-center justify-center mb-14 translate-y-3">
                    <motion.h1
                        className="flex flex-col items-center text-center"
                    >
                        {/* ── Top Text: "Built for the" (Dramatic Fade Up) ── */}
                        <motion.span 
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-white text-5xl md:text-[72px] font-light tracking-tight mb-5 flex items-center"
                        >
                            B
                            <motion.span 
                                initial={{ opacity: 0, color: "#a1a1aa" }}
                                animate={{ opacity: 0.9, color: "#ffffff" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="italic font-serif mx-[2px]"
                            >
                                u
                            </motion.span>
                            ilt for the
                        </motion.span>

                        {/* ── Glowing Pill: "thinkers" (Scale in + Breathing Effect) ── */}
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                            className="relative mt-2"
                        >
                            {/* Breathing glowing border container */}
                            <motion.div 
                                animate={{ 
                                    boxShadow: [
                                        "0 0 20px rgba(255,255,255,0.1)", 
                                        "0 0 40px rgba(255,255,255,0.25)", 
                                        "0 0 20px rgba(255,255,255,0.1)"
                                    ] 
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative px-12 py-3 md:py-4 rounded-[40px] border-[1.5px] border-white/40 bg-white/[0.02] backdrop-blur-md flex items-center justify-center"
                            >
                                
                                {/* Bottom bright flare/highlight (Expanding and Shrinking) */}
                                <motion.div 
                                    animate={{ 
                                        width: ["4rem", "7rem", "4rem"],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-[1.5px] left-1/2 -translate-x-1/2 h-[2.5px] bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.9)] rounded-full z-10"
                                />
                                
                                {/* Serif Text with intense pulsing Glow */}
                                <motion.span 
                                    animate={{ 
                                        textShadow: [
                                            "0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3)", 
                                            "0 0 20px rgba(255,255,255,0.9), 0 0 45px rgba(255,255,255,0.6)", 
                                            "0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3)"
                                        ] 
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-white text-5xl md:text-[76px] font-serif tracking-wide leading-none pb-2"
                                >
                                    thinkers
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.h1>

                    {/* Subtitle Fade In */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className='text-lg md:text-[22px] text-zinc-300/90 font-medium mt-10'
                    >
                        Create apps and websites by chatting with AI
                    </motion.p>
                </div>

                {/* Floating Animated Prompt Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='relative w-full cursor-text'
                    onClick={() => navigate(userData ? "/generate" : "/")}
                >
                    <motion.div 
                        animate={{ y: [0, -4, 0] }} 
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className='w-full min-h-[150px] p-6 pb-20 rounded-[32px] bg-[#1c1c1e]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-left hover:ring-2 hover:ring-white/20 hover:border-white/20 transition-all duration-300'
                    >
                        <span className='text-[16px] text-zinc-400'>Ask ASCII to create a prototype...</span>
                        
                        <div className='absolute bottom-5 left-6 w-[36px] h-[36px] flex items-center justify-center rounded-full border border-zinc-600 hover:border-white hover:text-white text-zinc-400 transition-colors'>
                            <Plus size={18} strokeWidth={1.5} />
                        </div>
                        <div className='absolute bottom-6 right-20 flex items-center gap-5 text-zinc-400'>
                            <Map size={18} strokeWidth={1.5} className="hover:text-white transition-colors" />
                            <Mic size={18} strokeWidth={1.5} className="hover:text-white transition-colors" />
                        </div>
                        <div className='absolute bottom-5 right-6 w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#3a3a3a] text-zinc-500 hover:bg-white hover:text-black transition-colors'>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
                        </div>
                    </motion.div>
                </motion.div>
                
                {/* Fallback button if not logged in */}
                {!userData && (
                    <motion.button 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                        className="mt-10 px-8 py-3.5 rounded-full bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300" 
                        onClick={(e) => { e.stopPropagation(); setOpenLogin(true); }}
                    >
                        Start Building for Free
                    </motion.button>
                )}
            </section>
             </div>



            {/* ── DISCOVER APPS SHOWCASE (Enhanced Cards) ── */}
            <section className='relative z-10 max-w-[1400px] translate-y-30 mx-auto px-6 pb-32'>
                <div className='flex items-end justify-between mb-10'>
                    <div>
                        <h2 className='text-3xl font-bold mb-2 tracking-tight'>Discover apps</h2>
                        <p className='text-zinc-400 text-sm'>Explore what others are building</p>
                    </div>
                    <button className='px-5 py-2 rounded-lg border border-white/10 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all'>
                        View all
                    </button>
                </div>

                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
                >
                    {discoverApps.map((app, i) => (
                        <motion.div 
                            variants={fadeUpVariant}
                            key={i} 
                            className='group cursor-pointer flex flex-col gap-0 p-2.5 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                        >
                            <div className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${app.bg} border border-white/[0.05] flex items-center justify-center overflow-hidden relative mb-4`}>
                                {/* Inner Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                                
                                <div className='text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl'>{app.icon}</div>
                            </div>
                            <div className='flex items-start justify-between px-2 pb-2'>
                                <div>
                                    <h3 className='text-sm font-bold tracking-wide text-zinc-100 flex items-center gap-2'>
                                        {app.title}
                                    </h3>
                                    <p className='text-[12px] font-medium text-zinc-500 mt-1 truncate max-w-[180px]'>{app.desc}</p>
                                </div>
                                <div className='flex items-center gap-1.5 text-zinc-400 text-[12px] font-bold bg-white/5 px-2.5 py-1 rounded-full'>
                                    <Heart size={12} className='group-hover:text-pink-500 group-hover:fill-pink-500 transition-colors' />
                                    {app.likes}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>



                        {/* ── INFINITE LOGO MARQUEE SECTION ── */}
            <section className='relative z-10 py-10 border-y translate-y-16 border-white/[0.04] bg-black/40 backdrop-blur-md mb-32 overflow-hidden'>
                <div className='max-w-7xl mx-auto text-center mb-6'>
                    <p className='text-[12px] font-semibold text-zinc-500 uppercase tracking-[0.2em]'>Teams from top companies build with ASCII</p>
                </div>
                <div className="flex whitespace-nowrap overflow-hidden">
                    <motion.div 
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="flex items-center gap-16 md:gap-24 opacity-40 grayscale mix-blend-screen"
                    >
                        {/* Duplicated array for seamless looping */}
                        {[...Array(2)].map((_, idx) => (
                            <React.Fragment key={idx}>
                                <span className='text-2xl font-bold font-sans'>Microsoft</span>
                                <span className='text-2xl font-bold font-serif flex items-center gap-1'>|| ElevenLabs</span>
                                <span className='text-2xl font-bold font-sans tracking-tight'>HubSpot</span>
                                <span className='text-2xl font-bold font-serif'>HCA Healthcare</span>
                                <span className='text-2xl font-bold font-sans lowercase'>zendesk</span>
                                <span className='text-2xl font-bold font-sans'>Uber</span>
                                <span className='text-2xl font-bold font-sans'>Shopify</span>
                                <span className='text-2xl font-bold font-sans tracking-tighter'>Netflix</span>
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── NEON DARK GLASS HIGHLIGHTS ── */}
            {!userData && (
                <section className='relative z-10 max-w-7xl mx-auto px-6 pb-40'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-5xl font-bold tracking-tight mb-4'>
                            Effortless <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400'>Automation!</span>
                        </h2>
                        <p className='text-zinc-400 font-medium'>Imagine UI development happening automatically.</p>
                    </div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className='grid grid-cols-1 md:grid-cols-3 gap-8'
                    >
                        {highlights.map((h, i) => (
                            <motion.div
                                variants={fadeUpVariant}
                                key={i}
                                className="relative rounded-[32px] bg-[#0c0c0e]/80 backdrop-blur-2xl border border-white/[0.06] p-8 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-2xl group"
                            >
                                {/* Intense Neon Blur Glow */}
                                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full ${h.glow} blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:opacity-100 opacity-50 transition-opacity duration-700 pointer-events-none`} />
                                
                                {/* Inner Glass connecting line */}
                                <div className="absolute left-10 top-[100px] bottom-10 w-px bg-gradient-to-b from-white/20 to-transparent" />

                                <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                    <h.icon size={24} className='text-white drop-shadow-md' />
                                </div>
                                <h1 className='relative z-10 text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-colors'>{h.title}</h1>
                                <p className='relative z-10 text-[15px] text-zinc-400 leading-relaxed font-medium pl-6'>
                                    {h.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            )}

            {/* ── LOGGED IN: YOUR WEBSITES ── */}
            {userData && websites?.length > 0 && (
                <section className='relative z-10 max-w-[1400px] mx-auto px-6 pb-32'>
                    <div className='flex items-center justify-between mb-8'>
                        <h3 className='text-3xl font-bold tracking-tight'>Your Projects</h3>
                        <button className='px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold transition' onClick={() => navigate("/dashboard")}>
                            View Dashboard
                        </button>
                    </div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className='grid grid-cols-1 md:grid-cols-3 gap-8'
                    >
                        {websites.slice(0, 3).map((w, i) => (
                            <motion.div
                                variants={fadeUpVariant}
                                key={w._id}
                                whileHover={{ y: -8 }}
                                onClick={() => navigate(`/editor/${w._id}`)}
                                className="group cursor-pointer rounded-[32px] bg-[#0c0c0e] border border-white/[0.08] overflow-hidden hover:border-white/20 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-3"
                            >
                                <div className='h-48 bg-[#050505] rounded-[20px] relative border border-white/[0.04] overflow-hidden'>
                                    <iframe srcDoc={w.latestCode} className='absolute inset-0 w-[140%] h-[140%] scale-[0.72] origin-top-left pointer-events-none bg-white' title={w.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                                </div>
                                <div className='px-4 py-5'>
                                    <h3 className='text-lg font-bold line-clamp-1 tracking-tight text-zinc-100'>{w.title}</h3>
                                    <p className='text-[13px] font-semibold text-zinc-500 mt-1.5'>
                                        Edited {new Date(w.updatedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            )}

            {/* ── MEGA FOOTER (Lovable Style) ── */}
            <div className='px-6 pb-6'>
                <footer className='relative z-10 max-w-[1400px] mx-auto bg-[#111114] border border-white/[0.05] rounded-[40px] px-8 py-16 md:px-20 md:py-24 shadow-2xl'>
                    <div className='grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-6'>
                        
                        {/* Brand Column */}
                        <div className='col-span-2 flex flex-col justify-start'>
                            <div className='flex items-center gap-2 mb-6'>
                                <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg'>
                                    <Flame size={20} className="text-white" />
                                </div>
                                <span className='text-2xl font-bold tracking-tight text-white'>ASCII</span>
                            </div>
                            <div className='mt-auto flex items-center gap-2 text-sm font-semibold text-zinc-500'>
                                🌐 EN · &copy; {new Date().getFullYear()} ASCII
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className='flex flex-col gap-4 text-[14.5px] font-medium'>
                            <h4 className='text-zinc-100 font-bold mb-3'>Company</h4>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Careers</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Press & media</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Enterprise</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Security</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Trust center</a>
                        </div>

                        <div className='flex flex-col gap-4 text-[14.5px] font-medium'>
                            <h4 className='text-zinc-100 font-bold mb-3'>Product</h4>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Pricing</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Founders</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Prototyping</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Changelog</a>
                        </div>

                        <div className='flex flex-col gap-4 text-[14.5px] font-medium'>
                            <h4 className='text-zinc-100 font-bold mb-3'>Resources</h4>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Learn</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Templates</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Blog</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Support</a>
                        </div>

                        <div className='flex flex-col gap-4 text-[14.5px] font-medium'>
                            <h4 className='text-zinc-100 font-bold mb-3'>Legal</h4>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Privacy policy</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition leading-snug'>Do not sell info</a>
                            <a href="#" className='text-zinc-400 hover:text-white transition'>Terms of service</a>
                        </div>
                    </div>
                </footer>
            </div>

            {openLogin && <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />}

        </div>
    )
}

export default Home