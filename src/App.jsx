import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FlowerExtract from "./components/FlowerExtract";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import BuyNow from "./components/BuyNow";
import { motion } from "framer-motion"



function App() {
  const variants = {
    hidden: { x: '-100vw' },
    visible: { x: 0 },
    exit: { x: '100vw' },
  }

  return (
    <div>
      <Navbar/>
      {/* this is part of the index */}
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{duration:1.8, delay:.25}}
      >
        <Jumbotron/>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{duration:1.8, delay: .25 }}
      >
        <FlowerExtract/>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{duration:1.8, delay: .25 }}
      >
        <DisplaySection/>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{duration:1.8, delay: .25 }}
      >
        <BuyNow/>
      </motion.div>
      {/* this is end of the index page */}
      <WebgiViewer/>
    </div>
  );
}

export default App;
