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
            style={{ width: '85%', borderRadius: '40px' }}
          />
        </div>{' '}
        <div className="box">
          <img
            src={require('../img/styling.png')}
            alt={'Ariana Weisner'}
            style={{ width: '90%', borderRadius: '40px' }}
          />
        </div>{' '}
        <br />
        <div className="box">
          <img
            src={require('../img/ps.png')}
            alt={'Ariana Weisner'}
            style={{ width: '85%', borderRadius: '40px' }}
          />
        </div>
        <br />
        <div className="box">
          <img
            src={require('../img/closet.png')}
            alt={'Ariana Weisner'}
            style={{ width: '95%', borderRadius: '40px' }}
          />
        </div>
        <br />
      </div>

      <div class="mb-0">
        <Brands />
        <br />
      </div>
    </center>
  );
};

export default Home;
