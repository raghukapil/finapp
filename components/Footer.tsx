import React from 'react'
import Image from 'next/image'
const Footer = ({user, type="desktop"} : FooterProps) => {
  return (
    <footer className='footer'>
        <div className={ type === 'mobile'? 'footer_name-mobile' : 'footer_name' }>
            <p className='text-xl font-bold text-gray-700'>
                {user.firstName[0]}
            </p>
        </div>
        <div className={ type === 'mobile' ? 'footer_email-mobile' : 'footer_email' }>
            <h1 className='text-14 truncate font-semibold text-gray-700'>
                {user.firstName} {user.lastName}
            </h1>
            <p className='text-14 truncate text-gray-600 font-normal'>
                {user.email}
            </p>
        </div>
        <div className='footer_image'>
            <Image
                src='/icons/logout.svg'
                fill
                alt='logout'
            />
        </div>
    </footer>
  )
}

export default Footer