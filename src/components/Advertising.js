import MyWrapper from './MyWrapper';
import './nav.css';
import { images } from '../helpers';

const Advertising = () => {
  return (
    <div>
      <div class="">
        <h1 class="mb-0">ADVERTISING</h1>
        <MyWrapper imageData={images} />
      </div>
    </div>
  );
};

export default Advertising;
