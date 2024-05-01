import { useRef, useState } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

const Gallery = () => {

   //'useRef' hook is used to create a reference to a DOM element- in this case the
   //carousel-container div. 
   //a ref is created using the useRef hook. 

   const carouselRef = useRef(null)
   const scrollAmount = 300;

   const images = [
      { photo: "/images/photo1.png" },
      { photo: "/images/photo2.png" },
      { photo: "/images/photo3.png" },
      { photo: "/images/endUpWithYou.png" },
      { photo: "/images/holdMeAgain.png" },
      { photo: "/images/Ibelieved.jpg" },
      { photo: "/images/nextChapter.png" },
      { photo: "/images/setForLife.png" },
      { photo: "/images/thatsWhenIKnew.png" },
   ]

   return (

      <div>
         <ArrowCircleRightOutlinedIcon
            className="arrowRight"
            onClick={() => {
               //refers to the DOM node of the carousel container div
               //by accessing scrollLeft, we can scroll the content horizontally
               const container = carouselRef.current
               container.scrollLeft += scrollAmount

            }}
         />
         <div className='carousel-container' ref={carouselRef}>

            {images.map((item, id) =>
               <img
                  key={id}
                  className='carousel-photo'
                  src={item.photo}></img>
            )}
         </div>
         <ArrowCircleLeftOutlinedIcon
            className="arrowLeft"
            onClick={() => {
               const container = carouselRef.current
               container.scrollLeft -= scrollAmount
            }}
         />
      </div>


   )
}

export default Gallery;

