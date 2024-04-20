import React from 'react'
import Impact from "../../assets/website/Impact.png"
import img5 from "../../assets/website/img5.png"
import OurStory4 from "../../assets/website/OurStory4.png"

const ConnectData =[
    {
    id: 1,
    img: Impact,
    name: "Join our community in creating a more",
    description: "At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.",
    aosDelay: "100",
    },
    {
        id: 2,
        img: img5,
        name: "Carefully curated Eco-friendly products",
        description: "We believe that every purchase you make can have a positive impact on the planet and the future.Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.",
        aosDelay: "300",
    },
    {
        id: 3,
        img: OurStory4,
        name: "For businesses that care deeply about sustainability",
        description: "Do you run a business that is committed to sustainability in every aspect of your work?Do you want to showcase your products to an incredible audience of eco-conscious consumers who care? If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability.",
        aosDelay: "500",
    }
]

const Services = () => {
  return (
    <>
    <div className='py-10'>
        <div className="container">
            {/* title */}
            <div className='text-center mb-20'>
                <h1 className='text-4xl font-bold font-cursive text-gray-800'>What We Offer</h1>
            </div>

            {/* Connect options */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                {
                    ConnectData.map((data,index)=> {
                        return (
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                             key={index} className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group-relative">

                                {/* image section */}
                                <div className='h-[122px]'>
                                    <img src={data.img} alt="" className='max-w-[200px] block mx-auto 
                                    transform -translate-y-14 
                                    group-hover:scale-110 
                                    group-hover:rotate-6 duration-200'/>
                                </div>

                                {/* Text content */}
                                <div className='p-4 text-center'>
                                    <h1 className='text-xl font-bold'>{data.name}</h1>
                                    <p className='text-gray-500 group-hover:text-white text-sm line-clamp-2'>{data.description}</p>
                                </div>

                            </div>
                        )
                    })
                }
                <div>

                </div>
            </div>

        </div>
    </div>
    </>
  )
}
// className='rounded-2xl bg-white shadow-xl duration-200 max-w-[300px] group-relative'
// rounded-2xl bg-white shadow-xl
export default Services