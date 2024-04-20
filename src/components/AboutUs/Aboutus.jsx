import React from 'react'
import img6 from '../../assets/website/img6.png'
import img7 from '../../assets/website/img7.jpg'
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

const Aboutus = () => {
  return (
    <>
    <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-20">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

                {/* Image selction */}
                <div>
                    <img src={img6} alt="" 
                    className='max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]'
                    />
                </div>

                {/* Text content selction */}
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 className='text-3xl sm:text-4xl font-bold font-cursive'>About Ecoyaan</h1>
                    <p className='text-sm text-white tracking-wide leading-5'>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className='space-y-5'>
                            <div className='flex items-center gap-3'>
                            <GiSilverBullet className='text-2xl h-12 w-24 shadow-sm p-3 ' />
                            <span className='text-white'>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle.</span>
                            </div>
                            <div className='flex items-center gap-3'>
                            <GiSilverBullet className='text-2xl h-12 w-24 shadow-sm p-3 ' />
                            <span className='text-white'>Videos, posts, and quizzes on climate change and sustainability.</span>
                            </div>
                            <div className='flex items-center gap-3'>
                            <GiSilverBullet className='text-2xl h-12 w-24 shadow-sm p-3 ' />
                            <span className='text-white'>Events and pledges that invite you to adopt a more sustainable lifestyle.</span>
                            </div>
                        </div>
                        <div className='border-l-4 border-primary/50 pl-6 space-y-3'>
                            <p className='text-white text-sm'>
                                {" "}
                                At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutus