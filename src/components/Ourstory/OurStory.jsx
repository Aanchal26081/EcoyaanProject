import React from 'react'
import s1 from '../../assets/website/s1.png'
import s12 from '../../assets/website/s12.png'
import { GiSilverBullet } from "react-icons/gi";


const bgImage = {
    // backgroundImage: `url(${img7})`,
    backgroundColor: "#A3B18A",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    widht: "100%",
};

const OurStory = () => {
  return (
    <>
    <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-20">
            

                {/* Text content selction */}
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 className='text-3xl sm:text-4xl font-bold font-cursive'>Our Story</h1>
                    <div className="grid grid-cols-2 gap-6">
                        <div className='space-y-5'>
                        <div>
                            <img src={s1} alt="" 
                            className='max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]'
                            />
                        </div>
                            
                            <div className='flex items-center gap-3'>        
                                <span className='text-white'>We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.</span>
                            </div>
                    
                        </div>
                        <div className='border-l-4 border-primary/50 pl-6 space-y-3'>
                        <div>
                            <img src={s12} alt="" 
                            className='max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]'
                            />
                            </div>
                            <p className='text-white'>
                                {" "}
                                We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.
                            </p>
                        </div>
                    </div>
                </div>

            
        </div>
    </div>
    </>
  )
}

export default OurStory