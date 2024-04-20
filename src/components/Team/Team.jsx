import React from 'react'
import Slider from 'react-slick'
import b from '../../assets/website/b.png'
import g from '../../assets/website/g.jpg'
import q from '../../assets/website/q.png'




const valuesData = [
    {
        id: 1,
        name: "PRASHANITH",
        text: "Prashanith is our front-end engineer, who brings the UX designs to life",
        img: b,
    },
    {
        id: 2,
        name: "SAI ABHILASH",
        text: "Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform",
        img: b,
    },
    {
        id: 3,
        name: "SHRUTHI",
        text: "Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability.",
        img: g,
    },
    {
        id: 4,
        name: "URMIL",
        text: "Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion.",
        img: g,
    },
    {
        id: 5,
        name: "DIVYA",
        text: "Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance.",
        img: g,
    },
    {
        id: 6,
        name: "???",
        text: "This spot awaits you.",
        img: q,
    },
]

const OurValues = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint:10000,
                settings:{
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: 5,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: 4,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: 3,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: 2,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
  return (
    <div className='py-14 mb-10'>
        <div className="container">
            {/* Header Section */}
            <div className='text-center mb-20'>
                <h1 className='text-4xl font-bold font-cursive text-gray-800'>Our Team</h1>
            </div>

            {/* Value card section */}
            <div>
                <Slider {...settings}>
                    {
                        valuesData.map((data,index)=> {
                            return <div className='my-6' key={data.id}>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                                    {/* image section */}
                                    <div className='mb-4'>
                                        <img 
                                        className='w-24 h-20'
                                        src={data.img} alt="" />
                                    </div>
                                    {/* Content section */}
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <h1 className='text-xl font-bold text-black/60 font-cursive'>
                                                {data.name}
                                            </h1>
                                            <p className='text-xs text-gray-500'>
                                                {data.text}
                                            </p>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                                        ,,
                                    </p>
                                </div>
                            </div>;
                        })
                    }
                </Slider>
            </div>

        </div>
    </div>
  )
}
// rounded-full w-20 h-20
export default OurValues