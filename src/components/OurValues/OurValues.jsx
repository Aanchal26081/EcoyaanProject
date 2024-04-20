import React from 'react'
import Slider from 'react-slick'
import v1 from '../../assets/website/v1.png'
import v2 from '../../assets/website/v2.png'
import v3 from '../../assets/website/v3.png'
import v4 from '../../assets/website/v4.png'

const valuesData = [
    {
        id: 1,
        name: "Trust",
        text: "We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.",
        img: v1,
    },
    {
        id: 2,
        name: "Authenticity",
        text: "We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.",
        img: v2,
    },
    {
        id: 3,
        name: "Impact",
        text: "We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.",
        img: v3,
    },
    {
        id: 4,
        name: "Fun & Engaging",
        text: "Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.",
        img: v4,
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint:1024,
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
                <h1 className='text-4xl font-bold font-cursive text-gray-800'>Our Values</h1>
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
                                    {/* <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                                        ,,
                                    </p> */}
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