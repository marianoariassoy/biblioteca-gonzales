import Marquee from 'react-fast-marquee'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Link } from 'wouter'

export default function Sponsors() {
  const { data, loading } = useFetch(`/patrocinadores`)

  if (loading)
    return (
      <div className='w-full h-full aspect-video'>
        <Loader />
      </div>
    )

  return (
    <div className='w-screen mt-8 max-w-6xl m-auto pt-8 border-t border-black/50'>
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover
      >
        {data.map(logo => (
          <Link
            to='/seramigos'
            key={logo.id}
          >
            <img
              src={logo.image}
              alt={logo.image}
              className='h-16 mx-12 object-contain transition-all grayscale hover:grayscale-0'
            />
          </Link>
        ))}
      </Marquee>
    </div>
  )
}
