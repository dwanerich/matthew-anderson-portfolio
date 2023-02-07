import './nav.css'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Editorial = () => {
  return (

<div class="section-center">
  		<h1 class="mb-0">EDITORIAL</h1>

      <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight={250}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </div>
)}

const itemData = [
  {
    img: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556291047-6N04C8MWJE42197VV2YP/IMG_1132.jpg?format=1000w',
    title: 'Porter Magazine',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556283771-KYWRX99BXE20G6XBVNPI/IMG_1037.jpg?format=1000w',
    title: 'Burger',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556289341-IW3U341MOS0ZURC47DMQ/IMG_1040.jpg?format=1000w',
    title: 'Camera',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1544556286381-WX6475GNM3G56DDUUW3Z/IMG_1038.jpg?format=1000w',
    title: 'Coffee',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1533142953282-SS2B1C21DG4KBWP6WRJN/Jennifer-Aniston--Architectural-Digests-2018--01-662x857.jpg?format=750w',
    title: 'Hats',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1533088201977-YEFR16H22HTAYJV7G4R9/0318-AD-BRAU03-01_sq-1.jpg?format=1000w',
    title: 'Honey',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1533088221164-952Z52ULMAQ16BO4T9ES/0318-AD-BRAU02-01_sq.jpg?format=1000w',
    title: 'Basketball',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1533088262080-KKEWQKZ8HHXH41X83KEC/Yael+AD.jpg?format=750w',
    title: 'Fern',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1590954735887-Q62P7X368U5TOWQHHH7S/Scooter%3A+British+GQ.JPG?format=1000w',
    title: 'Scooter Braunn x British GQ',
  },
];


export default Editorial;
