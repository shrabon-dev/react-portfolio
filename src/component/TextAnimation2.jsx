import React, { useEffect, useRef, useState } from 'react';
import { motion, cubicBezier, AnimatePresence, useInView } from 'framer-motion';

export default function TextAnimation2(props) {
  const text = props.text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []); // Run the effect only once

  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.41,
        staggerChildren: 0.25,
      },
    },
  };

  const children = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: cubicBezier(0.8, 0.8, 0.8, 0.8),
      },
    },
    exit: {
      opacity: 0,
    },
  };


  return (
    <motion.span
      ref={ref}
      initial="initial"
      whileInView="animate"
      exit="exit"
      variants={container}
      viewport={{ once:true }}
      className="overflow-hidden  block "
    >
      {text.map((ele, index) => (
        <motion.span variants={children} className="inline-block overflow-hidden" key={index}>
        {ele}
        </motion.span>
      )
      )}

    </motion.span>
  );
}
