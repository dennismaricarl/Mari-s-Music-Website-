import Carousel from 'react-material-ui-carousel'


const Gallery = () => {
   const images = [
      { photo: "/images/photo1.png" },
      { photo: "/images/photo2.png" },
      { photo: "/images/photo3.png" }
   ]
   return (
      <>
         <Carousel>
            {images.map((item) =>
               <div>
                  <img src={item.photo}></img>
               </div>

            )}
         </Carousel>

      </>
   )
}
export default Gallery;

