import React from 'react'

const Menus = [
    {
        id:1,
        name: "Home",
        link: "/#",
    },
    {
        id:2,
        name: "About Us",
        link: "/#about",
    },
]

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
        <div className="container py-2">
            <div className="flex justify-between items-center gap-4">
                {/* Logo section */}
                <div>
                    <a href="#" className='text-2xl sm:text-3xl tracking-wider font-cursive'>Ecoyaan</a>
                </div>


                {/* Link section */}
                <div className='flex justify-between items-center gap-4'>
                    <ul className='hidden sm:flex items-center gap-10'>
                        {
                            Menus.map((data,index)=> (
                                <li key={index}>
                                    <a href="data.link" className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'>
                                        {data.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar