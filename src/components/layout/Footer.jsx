import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-2 bg-gray-600 text-primary-content footer-center w-screen flex text-xs bottom-0'>
      <p className='flex mx-auto'>
        Copyright &copy; {footerYear} All rights reserved
      </p>
    </footer>
  )
}

export default Footer
