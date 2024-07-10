import { useEffect } from 'react'
import Forma from '../../assets/forma.svg'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

const Talleres = ({ random }: { random: number }) => {
  const { color, setColor } = useDataContext()
  const { data, loading } = useFetch(`/talleres`)

  useEffect(() => {
    if (random === 1) {
      setColor('#008d36')
    } else if (random === 2) {
      setColor('#be1717')
    } else if (random === 3) {
      setColor('#312880')
    } else if (random === 4) {
      setColor('#792477')
    }
  }, [random, setColor])

  if (loading) return <Loader />

  return (
    <article
      className='rounded-2xl h-full w-full text-white relative overflow-hidden grid lg:grid-rows-2'
      style={{ backgroundColor: color }}
    >
      <div className='bg-white/25 p-3 flex items-center justify-center'>
        <img
          src={Forma}
          alt='Ilustración'
          className='h-36 lg:h-full'
        />
      </div>
      <div className='p-6 transition-colors'>
        <div className='text-white flex flex-col gap-y-3'>
          <h2 className='text-xl opacity-60'>Talleres</h2>
          <p className='font-extrabold'>{data[0].title}</p>
          <p>{data[0].subtitle}</p>
        </div>
      </div>
    </article>
  )
}

export default Talleres
