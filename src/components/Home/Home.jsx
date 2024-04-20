import React from 'react'
import MainImg from "../../assets/website/11.png"

const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white'>
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">

                {/* Text container section */}
                <div className='order-2 sm:order-1 flex flex-col justify-center gap-6'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font bold'>Buy Less, Buy Better! <span className='text-primary font-cursive'>Authentic</span> source of truth for your sustainability needs.</h1>
                    <div>
                        <button className='bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200'>
                            About Us
                        </button>
                    </div>
                </div>

                {/* Image container section */}
                <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
                    <img src={MainImg} alt="" className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin'/>

                    <div className='bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-full hover:scale-105 duration-200'>
                        <button>Follow Us</button>
                    </div>

                    <div className='bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-full hover:scale-105 duration-200'>
                        <button>Get In Touch</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home