import React from 'react'

export const Navbar = () => {

    const links= [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contacts'
        }
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 bg-black text-white px-4'>
        
        <div className='text-5xl'>
            Meow
        </div>

        <ul className='hidden md:flex'>
            
            {links.map(({id, link})=>(
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105'>{link}</li>
            ))}
        </ul>

      





    </div>

  )
}
