// import ModalImage from 'react-modal-image'
import { Header } from './Header';
import Service from './Service/Service';
import { serviceData } from '../helpers';

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
        {serviceData.map((service, id) => (
          <Service key={id} serviceData={service} />
        ))}
      </div>
      <br />
    </center>
  );
};

export default Home;
