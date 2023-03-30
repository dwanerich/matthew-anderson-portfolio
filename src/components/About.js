import './nav.css';
import arianaImg from '../img/advertising/xesika-alessandra-foto2.jpg.pagespeed.ic.sSX5Tf7OIH.jpg';
import classes from './About.module.css';
import { Header } from './Header';
import { motion } from 'framer-motion';

const About = () => {
  const line1 =
    'Ariana Weisner started her love affair with fashion at a very young age.';
  const line2 =
    "At 17 years old, she moved to Paris, France for the summer to study fashion design at Parson's School of Design.";

  const line3 =
    'A few years later she began interning for the most famous brand in the world synonymous with fashion, Vogue Magazine.';
  const line4 =
    'Honing in on her skills and her love for styling, Ariana then went on to assist two fo the biggest stylists in the industry. Nicole chavez and Jessica Paster. ';
  const line5 =
    'Throughout the years Ariana has gained ast knowledge in all aspects of styling including red carpet, editorial, advertising, and street style';
  const lineArray = [line1, line2, line3, line4, line5];
  return (
    <div className={classes.aboutBody}>
      {/* <center>
        <img
          src={require('../img/about.png')}
          alt={'Ariana Weisner'}
          style={{ width: '75%' }}
        />
      </center> */}

      <div className={classes.img_cont}>
        <img src={arianaImg} alt="ariana" />
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
          Luxury Fashion Stylist, Curating Looks For Your Individual Style
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
