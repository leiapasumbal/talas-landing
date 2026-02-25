import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, BarChart3, Target, Brain } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import boxingRingLogo from '@/assets/talas-logo.svg';
import boxingPhoto from '@/assets/bded7330e4c11f3641b83fb462c7c839224ea0b2.png';

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Animation variants for the floating boxes
  const boxVariants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2
      }
    })
  };

  // Ring rotation animation
  const ringRotation = {
    animate: {
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const features = [
    { icon: Brain, label: 'AI-Powered Insights', color: 'bg-[#C8102E]' },
    { icon: Users, label: 'Manage Athletes', color: 'bg-[#C8102E]' },
    { icon: BarChart3, label: 'Track Progress', color: 'bg-[#C8102E]' },
    { icon: Target, label: 'Set Goals', color: 'bg-[#C8102E]' }
  ];

  return (
    <div className="size-full flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Left Side - Animated Content */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#0b080D] p-12 items-center justify-center">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#C8102E] rounded-lg rotate-12" />
          <div className="absolute bottom-32 right-20 w-40 h-40 border-2 border-[#C8102E] rounded-lg -rotate-6" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-[#C8102E] rounded-lg rotate-45" />
        </div>

        {/* Boxing Photo Background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src={boxingPhoto} 
            alt="Boxing training" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b080D] via-[#0b080D]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-lg">
          {/* Main logo/title animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.img
                src={boxingRingLogo}
                alt="TALAS"
                className="w-20 h-20"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ transformStyle: "preserve-3d" }}
              />
              <div>
                <h1 className="text-6xl text-white tracking-wider" style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.1em' }}>
                  TALAS
                </h1>
                <p className="text-xs text-gray-400 tracking-widest mt-1" style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.2em' }}>
                  BUILT FOR YOUR CORNER
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-4">
              Personal assistant for coaches, assistant coach for fighters.
            </p>
            <p className="text-sm text-gray-500" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              One ecosystem covering all corners. Powered by Agos AI.
            </p>
          </motion.div>

          {/* Floating feature cards */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={boxVariants}
                animate="animate"
                className="bg-white/5 backdrop-blur-sm border border-[#C8102E]/20 rounded-xl p-6 shadow-lg hover:bg-white/10 hover:border-[#C8102E]/40 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm">{feature.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Animated tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 border-l-4 border-[#C8102E] pl-4"
          >
            <p className="text-[#C8102E] font-semibold text-sm mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              AGOS AI ASSISTANT
            </p>
            <p className="text-gray-400 text-sm">
              Your agentic AI for smarter training.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Sign In/Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile Hero Screen - Like Reference */}
          {!showAuth && !showAbout && (
            <div className="lg:hidden fixed inset-0 bg-[#0b080D] flex flex-col">
              {/* Full-screen Boxing Photo Background */}
              <div className="absolute inset-0">
                <img 
                  src={boxingPhoto} 
                  alt="Boxing training" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b080D]/60 via-[#0b080D]/70 to-[#0b080D]" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full px-8 pt-20 pb-12">
                {/* Logo at top */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-auto"
                >
                  <motion.img
                    src={boxingRingLogo}
                    alt="TALAS"
                    className="w-16 h-16 mb-8"
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  />
                </motion.div>

                {/* Main Content - Centered */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-auto"
                >
                  <h1 
                    className="text-6xl text-white mb-4 tracking-wider" 
                    style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.1em' }}
                  >
                    TALAS
                  </h1>
                  <div className="w-16 h-1 bg-[#C8102E] mb-6"></div>
                  
                  <h2 className="text-3xl text-white mb-4">
                    Built for Your Corner.
                  </h2>
                  
                  <p className="text-gray-300 text-base leading-relaxed">
                    An AI-powered training assistant for coaches and fighters.
                  </p>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-4"
                >
                  <Button
                    onClick={() => setShowAbout(true)}
                    className="w-full h-14 bg-[#C8102E] hover:bg-[#a00d25] text-white rounded-xl transition-colors shadow-lg text-lg"
                  >
                    Learn More
                  </Button>
                  
                  <p className="text-center text-gray-400">
                    Already have an account?{' '}
                    <button
                      onClick={() => {
                        setShowAuth(true);
                        setIsSignUp(false);
                      }}
                      className="text-white font-medium hover:text-[#C8102E] transition-colors"
                    >
                      Sign In
                    </button>
                  </p>
                </motion.div>
              </div>
            </div>
          )}

          {/* Mobile About Us Screen */}
          {showAbout && !showAuth && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden fixed inset-0 bg-[#0b080D] overflow-y-auto"
            >
              <div className="min-h-full p-6">
                <div className="max-w-md mx-auto">
                  {/* Header with Back Button */}
                  <div className="mb-6">
                    <button
                      onClick={() => setShowAbout(false)}
                      className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="text-sm">Back</span>
                    </button>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <motion.img
                        src={boxingRingLogo}
                        alt="TALAS"
                        className="w-12 h-12"
                        animate={{ 
                          rotateY: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      />
                      <div>
                        <h1 className="text-2xl text-white tracking-wider" style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.1em' }}>
                          TALAS
                        </h1>
                        <p className="text-[10px] text-gray-500 tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.15em' }}>
                          BUILT FOR YOUR CORNER
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* About Content */}
                  <div className="space-y-4">
                    {/* Main Description */}
                    <div className="bg-[#1a1518] rounded-xl p-5 border border-[#C8102E]/20">
                      <h2 className="text-lg font-bold text-white mb-3">About Us</h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        TALAS is a comprehensive boxing coaching platform designed to revolutionize how coaches and fighters train together.
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        We serve as a <span className="text-[#C8102E] font-semibold">personal assistant for coaches</span> and an <span className="text-[#C8102E] font-semibold">assistant coach for fighters</span>.
                      </p>
                    </div>

                    {/* Agos AI Section */}
                    <div className="bg-gradient-to-br from-[#C8102E]/10 to-[#C8102E]/5 rounded-xl p-5 border border-[#C8102E]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-5 h-5 text-[#C8102E]" />
                        <h3 className="text-base font-bold text-white">Powered by Agos AI</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Your agentic AI assistant that provides smarter training insights when your coach isn't there.
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="bg-[#1a1518] rounded-xl p-5 border border-gray-800">
                      <h3 className="text-base font-bold text-white mb-4">What We Offer</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {features.map((feature, i) => (
                          <div key={i} className="flex flex-col items-center text-center p-3 bg-[#0b080D] rounded-lg border border-gray-800">
                            <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-2 shadow-lg`}>
                              <feature.icon className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-xs font-medium text-gray-300">{feature.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ecosystem Section */}
                    <div className="bg-gradient-to-br from-[#C8102E] to-[#a00d25] rounded-xl p-5 text-white border border-[#C8102E]/50">
                      <h3 className="text-base font-bold mb-2">One Ecosystem</h3>
                      <p className="text-sm leading-relaxed text-white/90">
                        Covering all corners. From training management to performance analytics, TALAS brings everything together.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => {
                        setShowAbout(false);
                        setShowAuth(true);
                        setIsSignUp(true);
                      }}
                      className="w-full h-12 bg-[#C8102E] hover:bg-[#a00d25] text-white rounded-xl transition-colors shadow-lg shadow-[#C8102E]/30 text-base font-semibold"
                    >
                      Get Started
                    </Button>

                    <p className="text-center text-gray-500 text-xs">
                      Already have an account?{' '}
                      <button
                        onClick={() => {
                          setShowAbout(false);
                          setShowAuth(true);
                          setIsSignUp(false);
                        }}
                        className="text-[#C8102E] hover:text-[#a00d25] font-medium"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Mobile Auth Form - Shows after Get Started */}
          {showAuth && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto"
            >
              <div className="min-h-full flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                  {/* Back button and Logo */}
                  <div className="mb-8">
                    <button
                      onClick={() => setShowAuth(false)}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                      <img src={boxingRingLogo} alt="TALAS" className="w-12 h-12" />
                      <h1 className="text-3xl text-gray-900 tracking-wider" style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, letterSpacing: '0.1em' }}>
                        TALAS
                      </h1>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                    <div className="mb-8">
                      <h2 className="text-3xl text-gray-900 mb-2">
                        {isSignUp ? 'Create Account' : 'Welcome Back'}
                      </h2>
                      <p className="text-gray-600">
                        {isSignUp 
                          ? 'Start managing your athletes today' 
                          : 'Sign in to access your dashboard'}
                      </p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      {isSignUp && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <label className="block text-gray-700 mb-2">Full Name</label>
                          <Input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
                          />
                        </motion.div>
                      )}

                      <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
                        />
                      </div>

                      {!isSignUp && (
                        <div className="flex items-center justify-between">
                          <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input type="checkbox" className="rounded" />
                            Remember me
                          </label>
                          <a href="#" className="text-sm text-[#C8102E] hover:text-[#a00d25]">
                            Forgot password?
                          </a>
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full h-12 bg-[#C8102E] hover:bg-[#a00d25] text-white rounded-lg transition-colors shadow-lg shadow-[#C8102E]/30"
                      >
                        {isSignUp ? 'Create Account' : 'Sign In'}
                      </Button>

                      <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 bg-white text-gray-500">Or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="h-12 border-gray-300 hover:bg-gray-50"
                        >
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="h-12 border-gray-300 hover:bg-gray-50"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </Button>
                      </div>
                    </form>

                    <div className="mt-8 text-center">
                      <p className="text-gray-600">
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                        {' '}
                        <button
                          onClick={() => setIsSignUp(!isSignUp)}
                          className="text-[#C8102E] hover:text-[#a00d25] font-medium"
                        >
                          {isSignUp ? 'Sign In' : 'Create Account'}
                        </button>
                      </p>
                    </div>
                  </div>

                  <p className="text-center text-gray-500 text-sm mt-6">
                    By continuing, you agree to TALAS Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Desktop View - Original Design */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="mb-8">
              <h2 className="text-3xl text-gray-900 mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-600">
                {isSignUp 
                  ? 'Start managing your athletes today' 
                  : 'Sign in to access your dashboard'}
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {isSignUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
                  />
                </motion.div>
              )}

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20"
                />
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="rounded" />
                    Remember me
                  </label>
                  <a href="#" className="text-sm text-[#C8102E] hover:text-[#a00d25]">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-[#C8102E] hover:bg-[#a00d25] text-white rounded-lg transition-colors shadow-lg shadow-[#C8102E]/30"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 border-gray-300 hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 border-gray-300 hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                {' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-[#C8102E] hover:text-[#a00d25] font-medium"
                >
                  {isSignUp ? 'Sign In' : 'Create Account'}
                </button>
              </p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            By continuing, you agree to TALAS Terms of Service and Privacy Policy
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
