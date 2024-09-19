import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const MenuMobile = () => {
  const [location] = useLocation()
  const { color } = useDataContext()

  return (
    <div
      className='fixed top-0 w-full h-screen z-20 text-white hidden'
      style={{ backgroundColor: color }}
      id='menu-mobile'
    >
      <nav className='max-w-6xl m-auto'>
        <ul className='flex flex-col gap-y-3 pt-36 px-6'>
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.url}
                className={`${location.split('/')[1] === item.url.split('/')[1] ? 'underline' : ''}`}
              >
                {item.title}
              </Link>
              <ul className='pl-4'>
                {item.section.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.url}
                      className={`${location === item.url ? 'underline' : ''}`}
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
  )
}

export default MenuMobile
