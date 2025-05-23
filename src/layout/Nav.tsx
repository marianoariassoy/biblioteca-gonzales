import { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Nav = () => {
  const [location] = useLocation()
  const { color } = useDataContext()
  const [menuVisible, setMenuVisible] = useState(false)

  useEffect(() => {
    location === '/' ? setMenuVisible(false) : setMenuVisible(true)
  }, [location])

  const handleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
      {menuVisible && (
        <nav className='flex-col gap-y-2 mt-7'>
          <ul className='flex flex-wrap justify-end gap-y-1 [&>li:last-child]:border-0'>
            {menu.map((item, index) => (
              <li
                key={index}
                className='border-r border-[#1d1d1b] px-1 show-menu'
              >
                <Link
                  to={item.url}
                  className={`block cursor-pointer ${
                    location.split('/')[1] === item.url.split('/')[1] ? 'a-main-active' : 'a-main'
                  }`}
                  style={location.split('/')[1] === item.url.split('/')[1] ? { backgroundColor: color } : {}}
                >
                  {item.title}
                </Link>
                <ul className={`absolute flex-wrap max-w-[600px] hidden submenu-main bg-[#f4f2f2]`}>
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
        </nav>
      )}

      {!menuVisible && (
        <div className='w-full flex justify-end mt-10'>
          <button
            className='w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black hover:bg-black/80 hover:scale-110 transition-all animate-pulse cursor-pointer'
            onClick={handleMenu}
            style={{ backgroundColor: color }}
          ></button>
        </div>
      )}
    </>
  )
}

export default Nav
