import './nav.css';
import servicesImg from '../img/views.jpg';
import classes from './About.module.css';
import { Header } from './Header';
import { motion } from 'framer-motion';

const About = () => {
  const line1 =
  "Welcome to Raw Child!"
  const line2 =
"Where we come from, we couldn’t afford a Therapy so Music became our therapy., it’s my savior, it saved me from suicide, Depression, it gives me Purpose & Passion in Life, if i never made in the industry I still would be makin music as my hobby…The Money and Fame is just a Plus…It’s the Motivation."
  const line3 = ""
  const line4 =
  "";
  const line5 =
    "";
  const lineArray = [line1, line2, line3, line4, line5];
  return (
    <div className={classes.aboutBody}>
      <div className={classes.img_cont}>
        <img src={servicesImg} alt="services" />
      </div>
      <div className={classes.text_area}>
        <Header />
        <motion.h2
          initial={{ opacity: 0, y: '200px' }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2,
            },
          }}
        >
          Luxury Fashion Stylist + Image Curator
        </motion.h2>

        <div>
          {' '}
          {lineArray.map((item, id) => (
            <motion.h4
              key={id}
              initial={{ opacity: 1, x: '60vw', fontFamily: 'Antic Didone' }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                  delay: 1.4,
                  staggerChildren: 0.12,
                },
              }}
            >
              {item}
            </motion.h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
