import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'

const Nav = () => {
  const [location] = useLocation()

  const handleMenu = () => {
    const btnMenu = document.getElementById('btn-menu')
    const navMenu = document.getElementById('nav-menu')
    btnMenu?.classList.toggle('hidden')
    navMenu?.classList.toggle('hidden')
  }

  return (
    <div className='bg-[#f4f2f2]'>
      <nav
        className='hidden flex-col gap-y-2 mt-11 absolute left-0 top-14 bg-[#f4f2f2] p-3 
        lg:static lg:flex lg:p-0 lg:top-auto lg:left-auto '
        id='nav-menu'
      >
        <ul className='flex flex-wrap gap-y-1 [&>li:last-child]:border-0'>
          {menu.map((item, index) => (
            <li
              key={index}
              className='border-r border-[#1d1d1b] px-1'
            >
              <Link to={item.url}>
                <a className={`${location.split('/')[1] === item.url.split('/')[1] ? 'a-main-active' : 'a-main'}`}>
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='flex text-sm pl-3 submenu mt-3 pb-3 [&>li:last-child::after]:hidden lg:mt-0'>
          {menu
            .filter(item => item.url.split('/')[1] === location.split('/')[1])
            .flatMap(item => item.section)
            .map((item, index) => (
              <li key={index}>
                <Link to={item.url}>
                  <a className={`${location === item.url ? 'font-extrabold' : 'hover:underline'}`}>{item.title}</a>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div
        className='lg:hidden mt-6 lg:mt-10'
        id='btn-menu'
      >
        <div className='w-full flex justify-end'>
          <button
            className='w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-primary hover:bg-black/80 '
            onClick={handleMenu}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default Nav
