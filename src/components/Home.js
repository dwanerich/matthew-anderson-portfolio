// import ModalImage from 'react-modal-image'

import { Brands } from './Brands';
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
            style={{ width: '100%' }}
          />
        </div>{' '}
        <div className="box">
          <img
            src={require('../img/styling.png')}
            alt={'Ariana Weisner'}
            style={{ width: '95%', borderRadius: '20px' }}
          />
        </div>{' '}
        <div className="box">
          <img
            src={require('../img/ps.png')}
            alt={'Ariana Weisner'}
            style={{ width: '95%', borderRadius: '20px' }}
          />
        </div>
        <div className="box">
          <img
            src={require('../img/closet.png')}
            alt={'Ariana Weisner'}
            style={{ width: '95%', borderRadius: '20px' }}
          />
        </div>
      </div>

      <div class="mb-0">
        <Brands />
      </div>
    </center>
  );
};

export default Home;
