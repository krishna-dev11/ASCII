// import axios from 'axios'
// import React from 'react'
// import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { serverUrl } from '../App'
// import { useState } from 'react'
// import { ArrowLeft, Code, Code2, MessageCircle, MessageSquare, Monitor, Rocket, Send, X } from 'lucide-react'
// import { useRef } from 'react'
// import { AnimatePresence, motion } from 'motion/react'

// import Editor from '@monaco-editor/react';
// function WebsiteEditor() {
//     const { id } = useParams()
//     const [website, setWebsite] = useState(null)
//     const [error, setError] = useState("")
//     const [code, setCode] = useState("")
//     const [messages, setMessages] = useState([])
//     const [prompt, setPrompt] = useState("")
//     const iframeRef = useRef(null)
//     const [updateLoading, setUpdateLoading] = useState(false)
//     const [thinkingIndex, setThinkingIndex] = useState(0)
//     const [showCode, setShowCode] = useState(false)
//     const [showFullPreview, setShowFullPreview] = useState(false)
//     const [showChat, setShowChat] = useState(false)
//     const thinkingSteps = [
//         "Understanding your request…",
//         "Planning layout changes…",
//         "Improving responsiveness…",
//         "Applying animations…",
//         "Finalizing update…",
//     ]
//     const handleUpdate = async () => {
//         if (!prompt) return
//         setUpdateLoading(true)
//         const text = prompt
//         setPrompt("")
//         setMessages((m) => [...m, { role: "user", content: prompt }])
//         try {
//             const result = await axios.post(`${serverUrl}/api/website/update/${id}`, { prompt: text }, { withCredentials: true })
//             console.log(result)
//             setUpdateLoading(false)
//             setMessages((m) => [...m, { role: "ai", content: result.data.message }])
//             setCode(result.data.code)
//         } catch (error) {
//             setUpdateLoading(false)
//             console.log(error)
//         }
//     }

//     const handleDeploy = async () => {
//             try {
//                 const result = await axios.get(`${serverUrl}/api/website/deploy/${website._id}`, { withCredentials: true })
//                 window.open(`${result.data.url}`, "_blank")
               
//             } catch (error) {
//                 console.log(error)
//             }
//         }


//     useEffect(() => {
//         if (!updateLoading) return;
//         const i = setInterval(() => {
//             setThinkingIndex((i) => (i + 1) % thinkingSteps.length)
//         }, 1200)

//         return () => clearInterval(i)
//     }, [updateLoading])

//     useEffect(() => {
//         const handleGetWebsite = async () => {
//             try {
//                 const result = await axios.get(`${serverUrl}/api/website/get-by-id/${id}`, { withCredentials: true })
//                 setWebsite(result.data)
//                 setCode(result.data.latestCode)
//                 setMessages(result.data.conversation)
//             } catch (error) {
//                 console.log(error)
//                 setError(error.response.data.message)
//             }
//         }
//         handleGetWebsite()
//     }, [id])


//     useEffect(() => {
//         if (!iframeRef.current || !code) return;
//         const blob = new Blob([code], { type: "text/html" })
//         const url = URL.createObjectURL(blob)
//         iframeRef.current.src = url
//         return () => URL.revokeObjectURL(url)
//     }, [code])

//     if (error) {
//         return (
//             <div className='h-screen flex items-center justify-center bg-black text-red-400'>
//                 {error}
//             </div>
//         )
//     }
//     if (!website) {
//         return (
//             <div className='h-screen flex items-center justify-center bg-black text-white'>
//                 Loading...
//             </div>
//         )
//     }



//     return (
//         <div className='h-screen w-screen flex bg-black text-white overflow-hidden'>
//             <aside className='hidden lg:flex w-95 flex-col border-r border-white/10 bg-black/80'>
//                 <Header />
//                 <>
//                     <div className='flex-1 overflow-y-auto px-4 py-4 space-y-4'>
//                         {messages.map((m, i) => (
//                             <div
//                                 key={i}
//                                 className={`max-w-[85%] ${m.role === "user" ? "ml-auto" : "mr-auto"
//                                     }`}
//                             >

//                                 <div
//                                     className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${m.role === "user"
//                                         ? "bg-white text-black"
//                                         : "bg-white/5 border border-white/10 text-zinc-200"
//                                         }`}
//                                 >

//                                     {m.content}

//                                 </div>

//                             </div>
//                         ))}

//                         {updateLoading &&

//                             <div className='max-w-[85%] mr-auto'>
//                                 <div className='px-4 py-2.5 rounded-2xl text-xs bg-white/5 border border-white/10 text-zinc-400 italic'>{thinkingSteps[thinkingIndex]}</div>
//                             </div>}




//                     </div>
//                     <div className='p-3 border-t border-white/10'>
//                         <div className='flex gap-2'>
//                             <input placeholder='Describe Changes...' className='flex-1 resize-none rounded-2xl px-4 py-3 bg-white/5 border border-white/10 text-sm outline-none' onChange={(e) => setPrompt(e.target.value)} value={prompt} />
//                             <button className='px-4 py-3 rounded-2xl bg-white text-black' disabled={updateLoading} onClick={handleUpdate}><Send size={14} /></button>
//                         </div>
//                     </div>

//                 </>
//             </aside>

//             <div className='flex-1 flex flex-col'>
//                 <div className='h-14 px-4 flex justify-between items-center border-b border-white/10 bg-black/80'>
//                     <span className='text-xs text-zinc-400'>Live Preview</span>
//                     <div className='flex gap-2'>
//                         {website.deployed ?"": <button className='flex items-center gap-2 px-4 py-1.5 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-sm font-semibold hover:scale-105 transition'
//                         onClick={handleDeploy}
//                         ><Rocket size={14} /> Deploy</button>}
                       
//                         <button className='p-2 lg:hidden' onClick={() => setShowChat(true)}><MessageSquare size={18} /></button>

//                         <button className='p-2' onClick={() => setShowCode(true)}><Code2 size={18} /></button>
//                         <button className='p-2' onClick={() => setShowFullPreview(true)}><Monitor size={18} /></button>
//                     </div>

//                 </div>

//                 <iframe ref={iframeRef} sandbox='allow-scripts allow-same-origin allow-forms' className='flex-1 w-full bg-white' />
//             </div>

//             <AnimatePresence>
//                 {showChat && (
//                     <motion.div
//                         initial={{ y: "100%" }}
//                         animate={{ y: 0 }}
//                         exit={{ y: "100%" }}
//                         className="fixed inset-0 z-[9999] bg-black flex flex-col"
//                     >
//                    <Header onclose={()=>setShowChat(false)}/>
//                    <>
//                     <div className='flex-1 overflow-y-auto px-4 py-4 space-y-4'>
//                         {messages.map((m, i) => (
//                             <div
//                                 key={i}
//                                 className={`max-w-[85%] ${m.role === "user" ? "ml-auto" : "mr-auto"
//                                     }`}
//                             >

//                                 <div
//                                     className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${m.role === "user"
//                                         ? "bg-white text-black"
//                                         : "bg-white/5 border border-white/10 text-zinc-200"
//                                         }`}
//                                 >

//                                     {m.content}

//                                 </div>

//                             </div>
//                         ))}

//                         {updateLoading &&

//                             <div className='max-w-[85%] mr-auto'>
//                                 <div className='px-4 py-2.5 rounded-2xl text-xs bg-white/5 border border-white/10 text-zinc-400 italic'>{thinkingSteps[thinkingIndex]}</div>
//                             </div>}




//                     </div>
//                     <div className='p-3 border-t border-white/10'>
//                         <div className='flex gap-2'>
//                             <input placeholder='Describe Changes...' className='flex-1 resize-none rounded-2xl px-4 py-3 bg-white/5 border border-white/10 text-sm outline-none' onChange={(e) => setPrompt(e.target.value)} value={prompt} />
//                             <button className='px-4 py-3 rounded-2xl bg-white text-black' disabled={updateLoading} onClick={handleUpdate}><Send size={14} /></button>
//                         </div>
//                     </div>

//                 </>
//                     </motion.div>
//                 )}
//             </AnimatePresence>


//             <AnimatePresence>
//                 {showCode && (
//                     <motion.div
//                         initial={{ x: "100%" }}
//                         animate={{ x: 0 }}
//                         exit={{ x: "100%" }}
//                         className="fixed inset-y-0 right-0 w-full lg:w-[45%] z-[9999] bg-[#1e1e1e] flex flex-col"
//                     >
//                         <div className='h-12 px-4 flex justify-between items-center border-b border-white/10 bg-[#1e1e1e]'>
//                             <span className='text-sm font-medium'>index.html</span>
//                             <button onClick={() => setShowCode(false)}><X size={18} /></button>
//                         </div>
//                         <Editor
//                             theme='vs-dark'
//                             value={code}
//                             language='html'
//                             onChange={(v) => setCode(v)}
//                         />

//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             <AnimatePresence>
//                 {showFullPreview && (
//                     <motion.div
//                         className="fixed inset-0 z-[9999] bg-black"
//                     >
//                         <iframe className='w-full h-full bg-white' srcDoc={code} sandbox='allow-scripts allow-same-origin allow-forms'/>
//                         <button onClick={() => setShowFullPreview(false)} className='absolute top-4 right-4 p-2 bg-black/70 rounded-lg'><X /></button>
//                     </motion.div>
//                 )}
//             </AnimatePresence>


//         </div>
//     )

//     function Header({onclose}) {
//         return (
//             <div className='h-14 px-4 flex items-center justify-between border-b border-white/10'>
//                 <span className='font-semibold truncate'>{website.title}</span>
//                 {onclose &&  <button onClick={onclose}><X size={18} color='white'/></button>}
           
//             </div>
//         )
//     }



// }





// export default WebsiteEditor


















import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { serverUrl } from '../App'
import {
    Code2, MessageSquare, Monitor, Rocket, Send, X,
    RotateCcw, Share2, Github, Zap, Globe, History,
    Cloud, BarChart2, MoreHorizontal, Download, ArrowUpRight,
    RefreshCw, MessageCircle, Pencil, Plus, Mic, Sparkles,
    ChevronRight, Check, Loader2, CheckCircle2
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion' // Note: adjusted to standard 'framer-motion'
import Editor from '@monaco-editor/react';

function WebsiteEditor() {
    const { id } = useParams()
    const navigate = useNavigate() // Added for routing to /pricing
    const [website, setWebsite] = useState(null)
    const [error, setError] = useState("")
    const [code, setCode] = useState("")
    const [messages, setMessages] = useState([])
    const [prompt, setPrompt] = useState("")
    const iframeRef = useRef(null)
    const [updateLoading, setUpdateLoading] = useState(false)
    const [thinkingIndex, setThinkingIndex] = useState(0)
    const [showCode, setShowCode] = useState(false)
    const [showFullPreview, setShowFullPreview] = useState(false)
    const [showChat, setShowChat] = useState(false)
    const [isCopied, setIsCopied] = useState(false) // Added for share feedback
    const messagesEndRef = useRef(null)

    const thinkingSteps = [
        "Understanding your request…",
        "Planning layout changes…",
        "Improving responsiveness…",
        "Applying animations…",
        "Finalizing update…",
    ]

    const suggestionChips = [
        "Test the site end-to-end",
        "Update contact details",
        "Add reviews section",
        "Improve mobile layout",
    ]

    const handleDownload = () => {
        if (!code) return
        const blob = new Blob([code], { type: 'text/html' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${website?.title?.toLowerCase().replace(/\s+/g, '-') || 'website'}.html`
        a.click()
        URL.revokeObjectURL(url)
    }

    // ── NEW: Share functionality ──
    const handleShare = async () => {
        try {
            const shareUrl = website?.deployed ? website.url : window.location.href;
            await navigator.clipboard.writeText(shareUrl);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy URL", err);
        }
    }

    const handleUpdate = async () => {
        if (!prompt) return
        setUpdateLoading(true)
        const text = prompt
        setPrompt("")
        setMessages((m) => [...m, { role: "user", content: prompt }])
        try {
            const result = await axios.post(`${serverUrl}/api/website/update/${id}`, { prompt: text }, { withCredentials: true })
            setUpdateLoading(false)
            setMessages((m) => [...m, { role: "ai", content: result.data.message }])
            setCode(result.data.code)
        } catch (error) {
            setUpdateLoading(false)
            console.log(error)
        }
    }

    const handleDeploy = async () => {
        try {
            const result = await axios.get(`${serverUrl}/api/website/deploy/${website._id}`, { withCredentials: true })
            window.open(`${result.data.url}`, "_blank")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!updateLoading) return;
        const i = setInterval(() => {
            setThinkingIndex((i) => (i + 1) % thinkingSteps.length)
        }, 1200)
        return () => clearInterval(i)
    }, [updateLoading])

    useEffect(() => {
        const handleGetWebsite = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/website/get-by-id/${id}`, { withCredentials: true })
                setWebsite(result.data)
                setCode(result.data.latestCode)
                setMessages(result.data.conversation)
            } catch (error) {
                console.log(error)
                setError(error.response?.data?.message || "An error occurred")
            }
        }
        handleGetWebsite()
    }, [id])

    useEffect(() => {
        if (!iframeRef.current || !code) return;
        const blob = new Blob([code], { type: "text/html" })
        const url = URL.createObjectURL(blob)
        iframeRef.current.src = url
        return () => URL.revokeObjectURL(url)
    }, [code])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, updateLoading])

    if (error) {
        return (
            <div className='h-screen flex items-center justify-center bg-[#0a0a0d] text-red-400'>
                <div className='flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border border-red-500/20 bg-red-500/5 shadow-2xl'>
                    <X size={24} className='text-red-400' />
                    <p className='text-sm font-medium'>{error}</p>
                </div>
            </div>
        )
    }

    if (!website) {
        return (
            <div className='h-screen flex items-center justify-center bg-[#0a0a0d]'>
                <div className='flex flex-col items-center gap-4'>
                    <Loader2 size={28} className='text-blue-500 animate-spin' />
                    <p className='text-sm text-zinc-400 font-medium tracking-wide'>Loading workspace…</p>
                </div>
            </div>
        )
    }

    return (
        <div className='h-screen w-screen flex flex-col bg-[#0a0a0d] text-white overflow-hidden font-sans selection:bg-blue-500/30'>

            {/* ══════════════════════════════════════
                TOP NAVBAR — Premium Lovable-style
            ══════════════════════════════════════ */}
            <nav className='h-[56px] flex-shrink-0 flex items-center justify-between px-4 border-b border-white/[0.08] bg-[#111114]/95 backdrop-blur-md z-50'>

                {/* LEFT — Preview + tool icons */}
                <div className='flex items-center gap-1.5'>
                    <button 
                        onClick={() => setShowFullPreview(true)}
                        className='flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 select-none active:scale-95'
                    >
                        <Globe size={14} />
                        Preview
                    </button>

                    <div className='w-px h-4 bg-white/10 mx-2' />

                    <NavIconBtn title="Deploy" onClick={handleDeploy}>
                        <Cloud size={16} />
                    </NavIconBtn>

                    <NavIconBtn title="View Code" onClick={() => setShowCode(true)}>
                        <Code2 size={16} />
                    </NavIconBtn>

                    <NavIconBtn title="Download Code" onClick={handleDownload}>
                        <Download size={16} />
                    </NavIconBtn>

                    <NavIconBtn title="More options">
                        <MoreHorizontal size={16} />
                    </NavIconBtn>
                </div>

                {/* CENTER — Path + nav controls */}
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1a1a24] border border-white/5 text-xs text-zinc-400 shadow-inner'>
                        <Monitor size={13} className='text-zinc-500' />
                        <span className='text-zinc-600'>/</span>
                        <span className='text-zinc-200 font-medium max-w-[150px] truncate tracking-wide'>{website.title}</span>
                    </div>

                    <div className='w-px h-4 bg-white/10 mx-1' />

                    <NavIconBtn title="Open in new tab" onClick={() => setShowFullPreview(true)}>
                        <ArrowUpRight size={15} />
                    </NavIconBtn>
                    <NavIconBtn title="Comments" onClick={() => setShowChat(true)} className='lg:hidden'>
                        <MessageCircle size={15} />
                    </NavIconBtn>
                </div>

                {/* RIGHT — Share, GitHub, Upgrade, Publish */}
                <div className='flex items-center gap-2'>
                    <button 
                        onClick={handleShare}
                        className='flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 hover:bg-white/[0.08] hover:text-white transition-all duration-200 active:scale-95'
                    >
                        {isCopied ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                        {isCopied ? "Copied!" : "Share"}
                    </button>

                    <NavIconBtn title="GitHub" onClick={() => window.open('https://github.com', '_blank')}>
                        <Github size={16} />
                    </NavIconBtn>

                    <button 
                        onClick={() => navigate('/pricing')}
                        className='flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-500/20 transition-all duration-200 select-none active:scale-95'
                    >
                        <Zap size={13} fill='currentColor' />
                        Upgrade
                    </button>

                    {!website.deployed ? (
                        <button
                            onClick={handleDeploy}
                            className='flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 shadow-md transition-all duration-200 select-none active:scale-95'
                        >
                            <Rocket size={13} />
                            Publish
                        </button>
                    ) : (
                        <button className='flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold'>
                            <Check size={13} />
                            Published
                        </button>
                    )}
                </div>
            </nav>

            {/* ══════════════════════════════════════
                BODY — Sidebar + Preview
            ══════════════════════════════════════ */}
            <div className='flex-1 flex overflow-hidden'>

                {/* ── LEFT SIDEBAR ── */}
                <aside className='hidden lg:flex w-[380px] flex-col border-r border-white/[0.08] bg-[#111114] flex-shrink-0 z-10'>

                    {/* Site title bar */}
                    <div className='h-14 px-5 flex items-center justify-between border-b border-white/[0.04] flex-shrink-0'>
                        <div className='flex items-center gap-3 min-w-0'>
                            <div className='w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-inner'>
                                <Sparkles size={13} className='text-white' />
                            </div>
                            <span className='text-sm font-semibold text-zinc-100 truncate tracking-wide'>{website.title}</span>
                        </div>
                        <button className='text-[10px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors px-2 py-1 rounded-md hover:bg-white/5'>
                            Previewing latest
                        </button>
                    </div>

                    {/* Messages */}
                    <div className='flex-1 overflow-y-auto px-4 py-6 space-y-5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent'>
                        {messages.length === 0 && (
                            <div className='flex flex-col items-center justify-center h-full gap-4 text-center py-20'>
                                <div className='w-12 h-12 rounded-2xl bg-gradient-to-b from-blue-500/20 to-violet-500/10 border border-blue-500/20 flex items-center justify-center shadow-lg shadow-blue-500/5'>
                                    <Sparkles size={22} className='text-blue-400' />
                                </div>
                                <p className='text-[13px] text-zinc-400 max-w-[200px] leading-relaxed'>Describe what you want to change and AI will update your site in seconds.</p>
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                {m.role === "ai" && (
                                    <div className='w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 mt-1 mr-3 shadow-md'>
                                        <Sparkles size={12} className='text-white' />
                                    </div>
                                )}
                                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                                    m.role === "user"
                                        ? "bg-[#252532] border border-white/5 text-zinc-100 rounded-br-sm"
                                        : "bg-transparent text-zinc-300 rounded-bl-sm px-0"
                                }`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}

                        {updateLoading && (
                            <div className='flex justify-start gap-3'>
                                <div className='w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-md'>
                                    <Sparkles size={12} className='text-white' />
                                </div>
                                <div className='bg-[#1a1a24] border border-white/[0.08] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%] shadow-sm'>
                                    <div className='flex items-center gap-3 mb-1'>
                                        <div className='flex gap-1.5'>
                                            <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]' />
                                            <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:160ms]' />
                                            <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:320ms]' />
                                        </div>
                                        <span className='text-[12px] font-medium text-zinc-400 tracking-wide'>{thinkingSteps[thinkingIndex]}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestion chips */}
                    <div className='px-4 pb-3 flex gap-2 flex-wrap'>
                        {suggestionChips.slice(0, 3).map((chip, i) => (
                            <button
                                key={i}
                                onClick={() => setPrompt(chip)}
                                className='text-[12px] font-medium text-zinc-400 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:text-zinc-100 transition-all duration-200 whitespace-nowrap'
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    {/* Input bar — Lovable/Framer-style */}
                    <div className='p-4 border-t border-white/[0.06] bg-[#111114]'>
                        <div className='rounded-2xl bg-[#181820] border border-white/10 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all duration-300 shadow-inner'>
                            <div className='px-4 pt-3.5 pb-2'>
                                <input
                                    placeholder='Ask AI to update the design...'
                                    className='w-full bg-transparent text-[14px] text-white placeholder-zinc-500 outline-none leading-relaxed'
                                    onChange={(e) => setPrompt(e.target.value)}
                                    value={prompt}
                                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleUpdate()}
                                />
                            </div>
                            <div className='px-3 pb-3 flex items-center justify-between'>
                                <div className='flex items-center gap-1'>
                                    <button className='w-8 h-8 flex items-center justify-center rounded-xl text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all duration-200'>
                                        <Plus size={16} />
                                    </button>
                                    <button className='flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-white/10 transition-all duration-200 text-xs font-medium tracking-wide'>
                                        <Pencil size={13} />
                                        Visual edits
                                    </button>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <button className='w-8 h-8 flex items-center justify-center rounded-xl text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all duration-200'>
                                        <Monitor size={15} />
                                    </button>
                                    <button className='w-8 h-8 flex items-center justify-center rounded-xl text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all duration-200'>
                                        <Mic size={15} />
                                    </button>
                                    <button
                                        className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 ${
                                            prompt
                                                ? 'bg-blue-600 hover:bg-blue-500 hover:-translate-y-0.5 text-white shadow-lg shadow-blue-500/25'
                                                : 'bg-white/5 text-zinc-600 cursor-not-allowed'
                                        }`}
                                        disabled={updateLoading || !prompt}
                                        onClick={handleUpdate}
                                    >
                                        {updateLoading ? <Loader2 size={16} className='animate-spin' /> : <Send size={15} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* ── PREVIEW AREA ── 
                    Wrapped in a beautifully rounded container matching modern SaaS specs 
                */}
                <div className='flex-1 flex flex-col min-w-0 bg-[#0a0a0d] p-3 lg:p-4'>
                    <div className='flex-1 relative w-full rounded-2xl overflow-hidden bg-white ring-1 ring-white/10 shadow-2xl transition-all duration-300'>
                        <iframe
                            ref={iframeRef}
                            sandbox='allow-scripts allow-same-origin allow-forms'
                            className='absolute inset-0 w-full h-full border-none'
                        />
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                MOBILE CHAT OVERLAY
            ══════════════════════════════════════ */}
            <AnimatePresence>
                {showChat && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 300 }}
                        className="fixed inset-0 z-[9999] bg-[#111114] flex flex-col lg:hidden"
                    >
                        <div className='h-14 px-5 flex items-center justify-between border-b border-white/[0.08]'>
                            <div className='flex items-center gap-3'>
                                <div className='w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center'>
                                    <Sparkles size={13} className='text-white' />
                                </div>
                                <span className='text-sm font-semibold truncate text-zinc-100'>{website.title}</span>
                            </div>
                            <button onClick={() => setShowChat(false)} className='w-8 h-8 flex items-center justify-center rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all'>
                                <X size={18} />
                            </button>
                        </div>

                        <div className='flex-1 overflow-y-auto px-4 py-5 space-y-4'>
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                                        m.role === "user"
                                            ? "bg-[#252532] border border-white/5 text-zinc-100 rounded-br-sm"
                                            : "text-zinc-300"
                                    }`}>{m.content}</div>
                                </div>
                            ))}
                            {updateLoading && (
                                <div className='flex gap-3'>
                                    <div className='w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-md'>
                                        <Sparkles size={12} className='text-white' />
                                    </div>
                                    <div className='px-5 py-3.5 rounded-2xl rounded-bl-sm bg-[#1a1a24] border border-white/[0.08] shadow-sm'>
                                        <div className='flex gap-1.5'>
                                            <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]' />
                                            <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:160ms]' />
                                            <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:320ms]' />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='p-4 border-t border-white/[0.06] bg-[#111114]'>
                            <div className='rounded-2xl bg-[#181820] border border-white/10 focus-within:border-blue-500/50 transition-all duration-300'>
                                <div className='px-4 pt-3.5 pb-2'>
                                    <input
                                        placeholder='Ask AI...'
                                        className='w-full bg-transparent text-[14px] text-white placeholder-zinc-500 outline-none'
                                        onChange={(e) => setPrompt(e.target.value)}
                                        value={prompt}
                                    />
                                </div>
                                <div className='px-3 pb-3 flex justify-end'>
                                    <button
                                        className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 ${
                                            prompt ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'bg-white/5 text-zinc-600 cursor-not-allowed'
                                        }`}
                                        disabled={updateLoading || !prompt}
                                        onClick={handleUpdate}
                                    >
                                        <Send size={15} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ══════════════════════════════════════
                CODE PANEL
            ══════════════════════════════════════ */}
            <AnimatePresence>
                {showCode && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 300 }}
                        className="fixed inset-y-0 right-0 w-full lg:w-[48%] z-[9999] bg-[#0a0a0d] flex flex-col border-l border-white/[0.08] shadow-2xl"
                    >
                        <div className='h-14 px-5 flex justify-between items-center border-b border-white/[0.08] bg-[#111114]/95 backdrop-blur-md'>
                            <div className='flex items-center gap-3'>
                                <Code2 size={16} className='text-blue-400' />
                                <span className='text-[14px] font-semibold text-zinc-200 tracking-wide'>index.html</span>
                                <span className='text-[10px] px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold uppercase tracking-wider'>HTML</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <NavIconBtn title="Download" onClick={handleDownload}>
                                    <Download size={16} />
                                </NavIconBtn>
                                <button
                                    onClick={() => setShowCode(false)}
                                    className='w-8 h-8 flex items-center justify-center rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200'
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                        <div className='flex-1 overflow-hidden pt-2 bg-[#0a0a0d]'>
                            <Editor
                                theme='vs-dark'
                                value={code}
                                language='html'
                                onChange={(v) => setCode(v)}
                                options={{
                                    fontSize: 14,
                                    lineHeight: 24,
                                    padding: { top: 20 },
                                    minimap: { enabled: false },
                                    scrollBeyondLastLine: false,
                                    fontFamily: 'JetBrains Mono, Fira Code, monospace',
                                    smoothScrolling: true,
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ══════════════════════════════════════
                FULL PREVIEW OVERLAY
            ══════════════════════════════════════ */}
            <AnimatePresence>
                {showFullPreview && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[9999] bg-[#0a0a0d] flex flex-col"
                    >
                        <div className='h-12 px-5 flex items-center justify-between bg-[#111114]/95 backdrop-blur-md border-b border-white/[0.08] flex-shrink-0'>
                            <div className='flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-[#1a1a24] border border-white/5 shadow-inner'>
                                <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                                <span className='text-[12px] font-medium text-zinc-400 tracking-wide'>{website.title} <span className='text-zinc-600 mx-1'>|</span> Live Preview</span>
                            </div>
                            <button
                                onClick={() => setShowFullPreview(false)}
                                className='flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[13px] font-medium text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 active:scale-95'
                            >
                                <X size={14} />
                                Exit Preview
                            </button>
                        </div>
                        <iframe
                            className='flex-1 w-full bg-white'
                            srcDoc={code}
                            sandbox='allow-scripts allow-same-origin allow-forms'
                        />
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

/* ── Reusable Premium Icon Button ── */
function NavIconBtn({ children, title, onClick, className = '' }) {
    return (
        <button
            title={title}
            onClick={onClick}
            className={`w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-white/10 active:bg-white/5 transition-all duration-200 ${className}`}
        >
            {children}
        </button>
    )
}

export default WebsiteEditor
