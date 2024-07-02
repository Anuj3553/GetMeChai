import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className='bg-gray-900 text-white flex justify-center items-center px-4 md:py-0 py-12 h-16 flex-col gap-1'>
        <div className='text-center'>Copyright &copy; {currentYear} GetMeChai - All Rights Reserved</div>
        <div className="text-xs md:text-sm text-gray-500">Made with ❤️ by Anuj Verma</div>
      </footer>
    </>
  )
}

export default Footer
