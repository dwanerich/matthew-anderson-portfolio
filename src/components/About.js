import './nav.css';
import servicesImg from '../img/about-services.gif';
import classes from './About.module.css';
import { Header } from './Header';
import { motion } from 'framer-motion';

const About = () => {
  const line1 =
  "Welcome to Take Two Entertainment!"
  const line2 =
    "Our mission is to provide comprehensive and personalized artist management services to help our clients achieve their goals and maximize their potential in the music industry.";

  const line3 =
  "Services: Artist Development: We offer personalized artist development services to help our clients hone their skills, develop their brand, and create a compelling image that resonates with their audience. Booking and Touring We work with our clients to book shows and tours that showcase their talent and build their fan base. We handle all aspects of touring logistics, from transportation and accommodations to promotion and marketing. Marketing and Publicity: We create and execute comprehensive marketing and publicity campaigns that help our clients build their brand and reach new fans. Our services include social media management, press releases, and media outreach.Record Label Liaison: We work closely with record labels to help our clients navigate the music industry landscape and negotiate deals that are in their best interests.Financial Management: We provide financial management services that help our clients make informed decisions about their career and maximize their earnings potential. Our services include budgeting, accounting, and tax preparation."

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
