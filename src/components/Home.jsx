import React from 'react'
import { motion } from "framer-motion"

import Jumbotron from './Jumbotron'
import FlowerExtract from './FlowerExtract'
import Display from './DisplaySection'
import WebgiViewer from './WebgiViewer'
import BuyNow from './BuyNow'


const Home = () => {

//-------------------------------MotionProperties-------------------------------
    const variants = {
        hidden: { x: '-100vw' },
        visible: { x: 0 },
        exit: { x: '100vw'}
    }

    return (
        <div>
{/* //-------------------------------FirstScene------------------------------- */}
        <motion.div
        initial = 'hidden'
        animate = 'visible'
        exit = 'exit'
        variants={variants}
        transition={ { duration: 1.5, delay: .5 } }
        >
            <Jumbotron/>
        </motion.div>
{/* //-------------------------------SecondScene------------------------------- */}
        <motion.div
        initial = 'hidden'
        animate = 'visible'
        exit = 'exit'
        variants={variants}
        transition={ { duration: 1.8, delay: .25 } }
        >
            <FlowerExtract/>
        </motion.div>
{/* //-------------------------------ThirdScene------------------------------- */}
        <motion.div
        initial = 'hidden'
        animate = 'visible'
        exit = 'exit'
        variants={variants}
        transition={ { duration: 1.8, delay: .25 } }
        >
            <Display/>
        </motion.div>
{/* //-------------------------------FourthScene------------------------------- */}
        <motion.div
        initial = 'hidden'
        animate = 'visible'
        exit = 'exit'
        variants={variants}
        transition={ { duration: 1.8, delay: .25 } }
        >
            <BuyNow/>
        </motion.div>
{/* //-------------------------------Canvas------------------------------- */}
        <WebgiViewer/>
        </div>
    )
}
export default Home
