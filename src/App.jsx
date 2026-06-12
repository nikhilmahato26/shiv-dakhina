import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import FloatingButtons from './components/common/FloatingButtons'
import Home from './pages/Home'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-navy-950">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
