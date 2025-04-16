import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const MenuMobile = () => {
  const [location] = useLocation()
  const { color } = useDataContext()
  const [menuMobileVisible, setMenuMobileVisible] = useState(false)

  const handleMenu = () => {
    setMenuMobileVisible(!menuMobileVisible)
  }

  return (
    <>
      {menuMobileVisible && (
        <div
          className='fixed left-0 top-0 w-full h-screen z-20 text-white bg-opacity-45'
          style={{ backgroundColor: color }}
          onClick={() => setMenuMobileVisible(false)}
        >
          <nav className='max-w-6xl m-auto roboto-regular text-sm'>
            <ul className='columns-2 gap-3 pt-36 px-6'>
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className={`underline ${location.split('/')[1] === item.url.split('/')[1] ? 'underline' : ''}`}
                  >
                    {item.title}
                  </Link>
                  <ul className='mb-3'>
                    {item.section.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.url}
                          className={`${location === item.url ? 'underline' : ''}`}
                          onClick={() => setMenuMobileVisible(false)}
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
        </div>
      )}
      <div className='w-full flex justify-end mt-6 z-50'>
        <button
          className='w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black hover:bg-black/80 hover:scale-110 transition-all animate-pulse cursor-pointer'
          onClick={handleMenu}
          style={{ backgroundColor: color }}
        ></button>
      </div>
    </>
  )
}

export default MenuMobile
