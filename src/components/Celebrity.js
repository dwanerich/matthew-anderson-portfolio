import MyWrapper from './MyWrapper';
import { images } from '../helpers';

const Celebrity = () => {
  return (
    <div class="">
      {/* <h1 class="mb-0">CELEBRITY</h1> */}
      <MyWrapper imageData={images} />
    </div>
  );
};

export default Celebrity;
