import React from 'react';
import classes from './Service.module.css';
import { motion } from 'framer-motion';

const Service = ({ serviceData }) => {
  const { direction, headline, info, image } = serviceData;
  return (
    <div className={classes.serviceContainer}>
      {direction === 'basic' ? (
        <>
          {' '}
          <motion.div
            initial={{ opacity: 0, x: '-200px' }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5 },
            }}
            className={classes.callToAction}
          >
            <h2>{headline}</h2>

            <p>{info}</p>
            <button>Explore</button>
          </motion.div>
          <div className={classes.imgCont}>
            <motion.img
              initial={{ opacity: 0, x: '200px' }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1.5 },
              }}
              src={image}
              alt={'Ariana Weisner'}
              className={classes.bannerImg}
            />
          </div>
        </>
      ) : (
        <>
          <div className={classes.imgCont}>
            <motion.img
              initial={{ opacity: 0, x: '200px' }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1.5 },
              }}
              src={image}
              alt={'Ariana Weisner'}
              className={classes.bannerImg}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: '-200px' }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5 },
            }}
            className={classes.callToAction}
          >
            <h2>{headline}</h2>

            <p>{info}</p>
            <button>Explore</button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Service;
