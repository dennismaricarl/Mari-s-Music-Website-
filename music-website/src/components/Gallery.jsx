import { useRef} from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import imagesData from './imagesData';


const Gallery = () => {

   //'useRef' hook is used to create a reference to a DOM element- in this case the
   //carousel-container div. 
   //a ref is created using the useRef hook. 

   const carouselRef = useRef(null)

   // scroll by exactly one photo so the carousel always lands on a photo,
   // whatever the screen size
   const scrollByPhoto = (direction) => {
      const container = carouselRef.current
      const firstPhoto = container.firstElementChild
      const amount = firstPhoto ? firstPhoto.offsetWidth : container.clientWidth
      container.scrollBy({ left: direction * amount, behavior: 'smooth' })
   }


   return (

      <div className="gallery">
         <div className='carousel-container' ref={carouselRef}>

            {imagesData.map((item, id) =>
               <img
                  key={id}
                  className='carousel-photo'
                  src={item.photo}
                  alt={`Mari gallery ${id + 1}`}
                  loading={id < 2 ? 'eager' : 'lazy'}
                  decoding="async">
               </img>
            )}
         </div>
         <div className="gallery-controls">
            <ArrowCircleLeftOutlinedIcon
               className="arrowLeft"
               onClick={() => scrollByPhoto(-1)}
            />
            <ArrowCircleRightOutlinedIcon
               className="arrowRight"
               onClick={() => scrollByPhoto(1)}
            />
         </div>
      </div>


   )
}

export default Gallery;
