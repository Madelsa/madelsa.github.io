import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex flex-col items-center'>
        <div className='flex gap-3 mb-2'>
            <a href="https://github.com/Madelsa" target="_blank" rel="noopener noreferrer" className='social-icon'>
                <img src="assets/github.svg" alt="github" className='w-1/2 h-1/2' />
            </a>

            <a href="https://www.linkedin.com/in/mahmoud-abdelsalam-9aa8b2180/" target="_blank" rel="noopener noreferrer" className='social-icon'>
                <img src="assets/linkedin.svg" alt="linkedin" className='w-1/2 h-1/2' />
            </a>

            <a href="https://drive.google.com/file/d/1aa-XnVmLWkfhoOs-Db9-J3tuC4md2aaR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='social-icon'>
                <img src="assets/CV.svg" alt="CV" className='w-1/2 h-1/2' />
            </a>
        </div>

        <p className='text-white-500'>© 2024 Mahmoud Abdelsalam. All rights reserved.</p>
    </section>
  )
}

export default Footer