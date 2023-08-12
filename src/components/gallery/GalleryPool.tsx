import React, { FC } from 'react';
import { CarouselPicture } from '../carousel-picture/CarouselPicture';

import pic from '../../images/gallery/pool/1.jpg';
// import pic11d from '../../images/gallery/pool/1d@1x.webp';
import pic12d from '../../images/gallery/pool/1d@2x.webp';
// import pic11t from '../../images/gallery/pool/tablet/1t@1x.webp';
import pic12t from '../../images/gallery/pool/tablet/1t@2x.webp';
// import pic11m from '../../images/gallery/pool/mob/1m@1x.webp';
import pic12m from '../../images/gallery/pool/mob/1m@2x.webp';

import pic2 from '../../images/gallery/pool/2.jpg';
// import pic21d from '../../images/gallery/pool/2d@1x.webp';
import pic22d from '../../images/gallery/pool/2d@2x.webp';
// import pic21t from '../../images/gallery/pool/tablet/2t@1x.webp';
import pic22t from '../../images/gallery/pool/tablet/2t@2x.webp';
// import pic21m from '../../images/gallery/pool/mob/2m@1x.webp';
import pic22m from '../../images/gallery/pool/mob/2m@2x.webp';

import pic3 from '../../images/gallery/pool/3.jpg';
// import pic31d from '../../images/gallery/pool/3d@1x.webp';
import pic32d from '../../images/gallery/pool/3d@2x.webp';
// import pic31t from '../../images/gallery/pool/tablet/3t@1x.webp';
import pic32t from '../../images/gallery/pool/tablet/3t@2x.webp';
// import pic31m from '../../images/gallery/pool/mob/3m@1x.webp';
import pic32m from '../../images/gallery/pool/mob/3m@2x.webp';

const dataGallery = [
  {
    srcsetXL: pic12d + ' 2x',
    srcsetSM: pic12t + ' 2x',
    srcsetXS: pic12m + ' 2x',
    srcPic: pic,
    altPic: 'dd',
  },
  {
    srcsetXL: pic22d + ' 2x',
    srcsetSM: pic22t + ' 2x',
    srcsetXS: pic22m + ' 2x',
    srcPic: pic2,
    altPic: 'dd',
  },
  {
    srcsetXL: pic32d + ' 2x',
    srcsetSM: pic32t + ' 2x',
    srcsetXS: pic32m + ' 2x',
    srcPic: pic3,
    altPic: 'dd',
  },
];

const dataCarousel = [...dataGallery, ...dataGallery];

const GalleryPool: FC = () => {
  return <CarouselPicture dataPic={dataCarousel} />;
};

export { GalleryPool };
