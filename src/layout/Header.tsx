import Logo from '../assets/logo.svg'
import { Link } from 'wouter'
import Nav from './Nav'
import NavMobile from './NavMobile'

const Header = () => {
  return (
    <header className='sticky w-full top-0 bg-background z-40'>
      <div className='max-w-6xl m-auto flex gap-x-6 p-6 '>
        <div>
          <Link to='/'>
            <img
              src={Logo}
              alt='logo'
              className='w-44 lg:w-56 hover:opacity-90 transition-all'
            />
          </Link>
        </div>
        <div className='flex-1 hidden lg:block'>
          <Nav />
        </div>
        <div className='flex-1 lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
