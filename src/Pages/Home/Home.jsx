import React, {useEffect} from 'react'
import Header from '../../Components/Header/Header'
import Introduction from '../../Components/Introduction/Introduction'
import Rules from '../../Components/Rules/Rules'
import Judging from '../../Components/Judging/Judging'
import Faq from '../../Components/Faq/Faq'
import Timeline from '../../Components/Timeline/Timeline'
import Footer from '../../Components/Footer/Footer'
import Privacy from '../../Components/Privacy/Privacy'
import Partners from '../../Components/Partners/Partners'
import Prizes from '../../Components/Prizes/Prizes'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const componentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 3,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};




export default function Home() {

  return (
    <div>
      <AnimatedComponent>
        <Header />
      </AnimatedComponent>
      <AnimatedComponent>
        <Introduction />
      </AnimatedComponent>
      <AnimatedComponent>
        <Rules />
      </AnimatedComponent>
      <AnimatedComponent>
        <Judging />
      </AnimatedComponent>
      <AnimatedComponent>
        <Faq />
      </AnimatedComponent>
      <AnimatedComponent>
        <Timeline />
      </AnimatedComponent>
      <AnimatedComponent>
        <Prizes />
      </AnimatedComponent>
      <AnimatedComponent>
        <Partners />
      </AnimatedComponent>
      <AnimatedComponent>
        <Privacy />
      </AnimatedComponent>
      <AnimatedComponent>
        <Footer />
      </AnimatedComponent>
    </div>
  )
}

function AnimatedComponent({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={componentVariants}
    >
      {children}
    </motion.div>
  );
}
