import './nav.css'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ModalImage from 'react-modal-image'


// import { photos } from "../img/imgFiles";

const images = [
  {
    large: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556291047-6N04C8MWJE42197VV2YP/IMG_1132.jpg?format=1500w',
    small: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556283771-KYWRX99BXE20G6XBVNPI/IMG_1037.jpg?format=1000w',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


class Editorial extends React.Component {

  render() {

    return <div class="mb-0 section-center">
    <ModalImage
  large='https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556291047-6N04C8MWJE42197VV2YP/IMG_1132.jpg?format=1500w'
  small='https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556291047-6N04C8MWJE42197VV2YP/IMG_1132.jpg?format=1500w'

  alt="Porter Magazine"
/>

<ModalImage
  large='https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556291047-6N04C8MWJE42197VV2YP/IMG_1132.jpg?format=1500w'
  small='https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556291047-6N04C8MWJE42197VV2YP/IMG_1132.jpg?format=1500w'

  alt="Porter Magazine"
/>

<ModalImage
  large='https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556291047-6N04C8MWJE42197VV2YP/IMG_1132.jpg?format=1500w'
  small='https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556291047-6N04C8MWJE42197VV2YP/IMG_1132.jpg?format=1500w'

  alt="Porter Magazine"
/>
    </div>
  }
}


export default Editorial;
