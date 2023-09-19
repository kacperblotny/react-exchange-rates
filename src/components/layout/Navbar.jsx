import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className=' mb-12 shadow-lg bg-gray-600 fixed w-screen'>
      <div className='container mx-auto flex py-4 '>
        <div className='flex-none px-2 mx-2'>
          <Link
            to='/'
            className='hover:text-cyan-200 text-lg font-bold align-middle text-white'
          >
            Currency Exchange
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link
              to='http://api.nbp.pl/en.html'
              target='_blank'
              className='btn btn-ghost btn-sm rounded-btn text-white hover:text-cyan-200 mr-4 my-auto'
            >
              API
            </Link>
            <Link
              to='/about'
              className='btn btn-ghost btn-sm rounded-btn text-white hover:text-cyan-200 mr-4 my-auto'
            >
              About
            </Link>
            <Link
              to='https://github.com/KacperBlotny'
              target='_blank'
              className='btn btn-ghost btn-sm rounded-btn text-white hover:text-cyan-200'
            >
              <FaGithub className='inline pr-2 text-3xl' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
