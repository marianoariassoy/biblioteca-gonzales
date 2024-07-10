import Logo from '../assets/logo.svg'
import { Link } from 'wouter'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='sticky w-full max-w-6xl m-auto top-0 p-6 flex gap-x-6 bg-background z-50'>
      <div>
        <Link to='/'>
          <img
            src={Logo}
            alt='logo'
            className='w-48 lg:w-full'
          />
        </Link>
      </div>
      <div className='flex-1'>
        <Nav />
      </div>
    </header>
  )
}

export default Header
