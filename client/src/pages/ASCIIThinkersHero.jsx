import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Map, Mic } from 'lucide-react'
import generatedImage from './generated_background.jpg' // <-- Make sure to have your generated image here

const ASCIIThinkersHero = ({ navigate, userData, setOpenLogin }) => {
    return (
        <div 
            className='h-[700px] w-[97%] rounded-[2%] translate-y-20 mx-auto relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]'
            style={{
                backgroundImage: `url(${generatedImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-0"></div>

            <section className='relative z-10 pt-[22vh] pb-24 px-6 text-center max-w-[840px] mx-auto'>
                {/* Main Title with integrated special thinkers style. 
                    Uses selectable text code with multiple styling components. 
                */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-center leading-[1.1] tracking-tight mb-6 drop-shadow-xl"
                >
                    {/* Part 1: "Built for the" (Sans-serif) */}
                    <span className="text-4xl md:text-[56px] font-extrabold font-['Inter', sans-serif] mb-2 block">Built for the</span>
                    
                    {/* Part 2: "thinkers" (Stylized Serif with neon glow) */}
                    <motion.span 
                        animate={{ opacity: [0.95, 1, 0.95] }} 
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-white font-medium text-4xl md:text-[68px] block mt-[-8px] text-center"
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            textShadow: '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)',
                        }}
                    >
                        thinkers
                    </motion.span>
                </motion.h1>

                {/* Re-style the subtitle (remains ASCII subtitle) */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className='text-lg md:text-[22px] text-zinc-100/90 font-medium mb-14 drop-shadow-md'
                >
                    Create apps and websites by chatting with AI
                </motion.p>

                {/* Floating Animated Prompt Bar. 
                    Styled to look like the thinkers reference box. 
                */}
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
                        className='w-full min-h-[150px] p-6 pb-20 rounded-[32px] bg-[#0c0c0e]/95 backdrop-blur-2xl border border-zinc-700/60 shadow-[0_30px_70px_rgba(0,0,0,0.7)] text-left hover:ring-2 hover:ring-cyan-500/50 hover:border-cyan-500/50 transition-all duration-300'
                    >
                        <span className='text-[16px] text-zinc-300'>Ask ASCII to create a prototype...</span>
                        
                        <div className='absolute bottom-5 left-6 w-[38px] h-[38px] flex items-center justify-center rounded-full border border-cyan-500/50 hover:border-cyan-500 hover:text-white text-cyan-400 transition-colors'>
                            <Plus size={18} strokeWidth={2} />
                        </div>
                        <div className='absolute bottom-6 right-20 flex items-center gap-5 text-zinc-300'>
                            <Map size={18} strokeWidth={1.5} className="hover:text-white transition-colors" />
                            <Mic size={18} strokeWidth={1.5} className="hover:text-white transition-colors" />
                        </div>
                        <div className='absolute bottom-5 right-6 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1c1c1e] text-zinc-500 hover:bg-white hover:text-black transition-colors'>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinelinejoin="round"><path d="m12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
                        </div>
                    </motion.div>
                </motion.div>
                
                {/* Fallback button if not logged in (re-style slightly to match) */}
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

            {/* ── Text Overlays at the bottom (as code, not integrated into image) ── */}
            <div className="absolute bottom-6 left-6 z-10 text-[10px] font-medium text-zinc-500 hover:text-white transition cursor-default">letsccolab.in</div>
            <div className="absolute bottom-6 right-6 z-10 text-[10px] font-medium text-zinc-500 hover:text-white transition cursor-default">made with colab</div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] font-medium text-zinc-500 hover:text-white transition cursor-default">think. design. colab</div>

        </div>
    )
}

export default ASCIIThinkersHero