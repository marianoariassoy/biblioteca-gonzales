import Forma from '../../assets/forma.svg'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Link } from 'wouter'

const Talleres = () => {
  const { data, loading } = useFetch(`/talleres`)

  if (loading) return <Loader />

  return (
    <article
      className='rounded-2xl h-full w-full text-white relative overflow-hidden grid lg:grid-rows-2'
      style={{ backgroundColor: '#008d36' }}
    >
      <div className='bg-white/25 p-3 flex items-center justify-center'>
        <img
          src={Forma}
          alt='Ilustración'
          className='h-36 lg:h-full'
        />
      </div>
      <div className='p-6 hover:bg-black/25 cursor-pointer transition-colors'>
        <Link to='/talleres'>
          <div className='text-white flex flex-col gap-y-3'>
            <h2
              className='text-xl'
              style={{ color: '#9bba62' }}
            >
              Talleres
            </h2>
            <p className='font-extrabold'>{data[0].title}</p>
            <p>{data[0].subtitle}</p>
          </div>
        </Link>
      </div>
    </article>
  )
}

export default Talleres
