import React, { useState, useEffect } from 'react';
import motion from 'framer-motion';
import classes from './Loader.module.css';
import { useNavigate } from 'react-router-dom';

const Loader = () => {
  const navigate = useNavigate();
  const line1 = '"Be The Best Dressed in the Room';
  const line2 = 'By';
  const line3 = 'Ariana Weisner"';

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  let timeout = null;

  const handleLoader = () => {
    timeout = setTimeout(() => {
      navigate('/home');
    }, 8000);
  };

  useEffect(() => {
    handleLoader();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.pageBody}>
      {/* <motion.h3 variants={sentence} initial="hidden" animate="visible">
        {line1.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        {line2.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        {line3.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h3> */}
    </div>
  );
};

export default Loader;
