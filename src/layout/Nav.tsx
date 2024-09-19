import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Nav = () => {
  const [location] = useLocation()
  const { color } = useDataContext()

  const handleMenu = () => {
    const navMenu = document.getElementById('menu-mobile')
    navMenu?.classList.toggle('hidden')
  }

  return (
    <div>
      <nav
        className='hidden flex-col gap-y-2 mt-7 lg:flex'
        id='nav-menu'
      >
        <ul className='flex flex-wrap justify-end gap-y-1 [&>li:last-child]:border-0'>
          {menu.map((item, index) => (
            <li
              key={index}
              className='border-r border-[#1d1d1b] px-1 show-menu'
            >
              <Link
                to={item.url}
                className={`block ${location.split('/')[1] === item.url.split('/')[1] ? 'a-main-active' : 'a-main'}`}
                style={location.split('/')[1] === item.url.split('/')[1] ? { backgroundColor: color } : {}}
              >
                {item.title}
              </Link>
              <ul
                className={`absolute bg-[#f4f2f2] ${
                  location.split('/')[1] === item.url.split('/')[1] ? 'flex' : 'hidden submenu-main'
                }`}
              >
                {item.section.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.url}
                      className={`block ${location === item.url ? 'a-main-active' : 'a-main'}`}
                      style={location === item.url ? { backgroundColor: color } : {}}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* <ul className='flex text-sm pl-3 submenu mt-3 pb-3 [&>li:last-child::after]:hidden lg:mt-0'>
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
        </ul> */}
      </nav>
      <div
        className='lg:hidden mt-6 lg:mt-10'
        id='btn-menu'
      >
        <div className='w-full flex justify-end'>
          <button
            className='w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black hover:bg-black/80 hover:scale-110 transition-all animate-pulse'
            onClick={handleMenu}
            style={{ backgroundColor: color }}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default Nav
