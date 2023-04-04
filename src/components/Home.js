// import ModalImage from 'react-modal-image'
import { motion } from 'framer-motion';
import { Header } from './Header';

const Home = () => {
  return (
    <center>
      <Header />
      <div>
        <div>
          <img
            src={require('../img/tagline.png')}
            alt={'Ariana Weisner'}
            style={{ width: '90%', borderRadius: '40px' }}
          />
        </div>{' '}
        <div className="box">
          <motion.img
            initial={{ opacity: 0, y: '200px' }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            src={require('../img/styling.png')}
            alt={'Ariana Weisner'}
            style={{ width: '90%', borderRadius: '40px' }}
          />
        </div>{' '}
        <br />
        <div className="box">
          <motion.img
            initial={{ opacity: 0, x: '200px' }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            src={require('../img/ps.png')}
            alt={'Ariana Weisner'}
            style={{ width: '90%', borderRadius: '40px' }}
          />
        </div>
        <br />
        <div className="box">
          <motion.img
            initial={{ opacity: 0, x: '-200px' }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            src={require('../img/closet.png')}
            alt={'Ariana Weisner'}
            style={{ width: '90%', borderRadius: '40px' }}
          />
        </div>
        <br />
      </div>
      <br />
    </center>
  );
};

export default Home;
