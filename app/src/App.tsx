import { useEffect, useState } from 'react'
import './App.css'
import { SparklesCore } from '@/components/ui/sparkles'
import { Footer } from '@/components/ui/footer'
import { 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Play, 
  Target, 
  Zap, 
  Shield, 
  ChevronRight,
  Youtube,
  ExternalLink,
  BarChart3,
  LineChart,
  CandlestickChart,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { SpinningLogosDemo } from '@/components/spinning-logos-demo'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Global Sparkles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="tsparticlesglobal"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#06b6d4"
          speed={0.8}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/wheezy-logo.png" alt="WheezyTrades" className="w-10 h-10 object-contain" />
              <span className="font-bold text-xl tracking-tight">wheezy<span className="text-cyan-400">trades</span></span>
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              <motion.button 
                onClick={() => scrollToSection('features')} 
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Features
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('mentorship')} 
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Mentorship
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('pricing')} 
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Pricing
              </motion.button>
              <a 
                href="https://whop.com/wheezytradess" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    Join Discord
                  </Button>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden z-10">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
          >
            <Badge variant="secondary" className="bg-cyan-500 text-white text-xs">NASDAQ</Badge>
            <span className="text-sm text-cyan-400">Professional Day Trader</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Master <span className="text-gradient">NASDAQ</span>
            <br />
            <span className="text-white">Trading With Me</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Learn proven strategies, get live trade breakdowns, and receive one-on-one mentorship from an experienced NASDAQ trader.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://whop.com/wheezytradess" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  Get Started - $30/month
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </a>
            <a 
              href="https://youtube.com/@wheezytrades" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:border-cyan-500/50 text-white font-semibold text-lg px-8 py-6 transition-all duration-300">
                  <Youtube className="mr-2 w-5 h-5 text-red-500" />
                  Watch on YouTube
                </Button>
              </motion.div>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">Live</div>
              <div className="text-sm text-gray-500 mt-1">Trading Sessions</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">1:1</div>
              <div className="text-sm text-gray-500 mt-1">Mentorship</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">Pro</div>
              <div className="text-sm text-gray-500 mt-1">Strategies</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What You'll <span className="text-gradient">Learn</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive trading education designed to take you from beginner to profitable NASDAQ trader
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CandlestickChart, title: "Previous Models", desc: "Learn time-tested trading models that have consistently performed in the NASDAQ market. Understand the logic behind each setup." },
              { icon: Zap, title: "Newer Strategies", desc: "Stay ahead with cutting-edge strategies adapted to current market conditions. Learn what's working now in the NASDAQ." },
              { icon: LineChart, title: "Live Trade Breakdowns", desc: "Watch me explain my trades in real-time. Understand my thought process, entry points, and exit strategies as they happen." },
              { icon: Target, title: "Risk Management", desc: "Master the art of protecting your capital. Learn position sizing, stop-loss strategies, and risk-reward ratios that keep you profitable." },
              { icon: BarChart3, title: "Technical Analysis", desc: "Read charts like a pro. Identify key levels, patterns, and signals that indicate high-probability trading opportunities." },
              { icon: Shield, title: "Psychology & Discipline", desc: "Develop the mindset of a successful trader. Learn to control emotions, stick to your plan, and trade with confidence." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass border-white/10 hover:border-cyan-500/50 transition-all duration-500 group h-full cursor-pointer hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section id="mentorship" className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mb-4">Premium Access</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                One-on-One <span className="text-gradient">Mentorship</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Get personalized guidance and feedback on your trading journey. I'll work directly with you to identify your strengths and areas for improvement.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: MessageCircle, title: "Personal Trade Reviews", desc: "Send me your trades and I'll break down what you did right and what to improve." },
                  { icon: Play, title: "Live Trading Sessions", desc: "Trade alongside me in real-time through our Discord community." },
                  { icon: Users, title: "Private Discord Community", desc: "Connect with other serious traders and get exclusive access to my daily analysis." },
                  { icon: TrendingUp, title: "Strategy Deep Dives", desc: "Detailed explanations of my setups, from entry to exit, with full reasoning." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <item.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <Card className="relative glass border-white/10 p-8 hover:border-cyan-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/wheezy-logo.png" alt="WheezyTrades" className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="text-xl font-bold">wheezytrades</h3>
                    <p className="text-cyan-400">NASDAQ Trader</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Live Trading in Discord",
                    "One-on-One Mentorship",
                    "Trade Explanations",
                    "Previous & New Models"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <a 
                  href="https://whop.com/wheezytradess" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                      Join the Community
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Simple <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              One plan, everything you need to become a profitable NASDAQ trader
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex justify-center"
          >
            <SpinningLogosDemo />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <Card className="relative glass border-cyan-500/30 overflow-hidden hover:border-cyan-500/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:-translate-y-2">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />
              
              <CardHeader className="text-center pb-4">
                <Badge className="bg-cyan-500 text-white mx-auto mb-4">Premium</Badge>
                <CardTitle className="text-3xl font-bold">NASDAQ Trader</CardTitle>
                <p className="text-gray-400 mt-2">Complete Trading Education</p>
              </CardHeader>
              
              <CardContent className="text-center pb-8">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$30</span>
                  <span className="text-gray-400">/month</span>
                </div>
                
                <div className="space-y-3 text-left mb-8">
                  {[
                    { icon: TrendingUp, text: "Live Trading in Discord" },
                    { icon: Users, text: "One-on-One Mentorship" },
                    { icon: Play, text: "Trade Explanations" },
                    { icon: BarChart3, text: "Previous Trading Models" },
                    { icon: Zap, text: "Newer Strategies" },
                    { icon: Award, text: "Private Community Access" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300">
                        <item.icon className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <a 
                  href="https://whop.com/wheezytradess" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                      Subscribe Now
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </a>
                
                <p className="text-xs text-gray-500 mt-4">
                  Cancel anytime. No hidden fees.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Trading Journey</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of traders who are learning to master the NASDAQ market. Start your subscription today and get immediate access to all premium content.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://whop.com/wheezytradess" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                    Join Discord - $30/month
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </a>
              <a 
                href="https://youtube.com/@wheezytrades" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:border-cyan-500/50 text-white font-semibold text-lg px-8 py-6 transition-all duration-300">
                    <Youtube className="mr-2 w-5 h-5 text-red-500" />
                    YouTube Channel
                  </Button>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default App
