import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {FaLessThan, FaGreaterThan} from 'react-icons/fa'
import { useRef } from 'react';
import myself from '/public/Me.jpg';
import person1 from '/public/person1.jpg'
import person2 from '/public/person2.jpg'



const Testimonials= ()=> {
   const reviews = [
     {
       src: (myself),
       name: 'Musa Shedrach',
       topic: 'what do they say',
       body: "I purchased a sofa from SheddyFurniture and I'm blown away by the quality and comfort. It's become the centerpiece of my living room."
     },
     {
       src:(person2),
       name: 'Rita',
       topic: 'what do they say',
       body: "I needed a custom-made bed frame and SheddyFurniture delivered exactly what I wanted. Their attention to detail is unparalleled!"
     },
     {
       src:(person1),
       name: 'Victory',
       topic: 'what do they say',
       body: "I recently furnished my entire house with SheddyFurniture and I couldn't be happier. The furniture is not only beautiful but also functional and durable."
     }
   ]

  const sliderRef = useRef(null)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
    <div>
         <Slider {...settings} ref={sliderRef}>
        {reviews.map((testimonial) =>  (
          <div className='max-w-lg m-3' key={testimonial.name}>
            <p className="text-gray-600 font-bold text-2xl">{testimonial.topic}</p>
            <p className="font-bold m-2">{testimonial.body}</p>
          </div>
       ))} 
      </Slider>
      <div>
      <div id='prev-btn' className='flex justify-center mt-8 gap-5 items-center text-gray-400  text-2xl'>
              <div onClick={() => sliderRef.current.slickPrev()}><FaLessThan/></div>
              <div  onClick={() => sliderRef.current.slickNext()} id='next-btn' className='rounded-full p-2 bg-blue-950 text-gray-200'><FaGreaterThan /></div>
            </div>
      </div>
    </div>
  


    );
  }
    
 

export default Testimonials;