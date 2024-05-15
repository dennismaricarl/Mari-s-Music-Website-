import { useRef} from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import imagesData from './imagesData';


const Gallery = () => {

   //'useRef' hook is used to create a reference to a DOM element- in this case the
   //carousel-container div. 
   //a ref is created using the useRef hook. 

   const carouselRef = useRef(null)
   const scrollAmount = 300;


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

            {imagesData.map((item, id) =>
               <img
                  key={id}
                  className='carousel-photo'
                  src={item.photo}>
               </img>
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

