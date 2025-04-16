import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import Forma from '../../assets/forma.svg'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import PopUp from './PopUp'

const Talleres = ({ random }: { random: number }) => {
  const { color, setColor } = useDataContext()
  const { data, loading } = useFetch(`/actividades`)
  const [isVisible, setIsVisible] = useState(false)

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
    <>
      <PopUp
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <article
        className='rounded-2xl h-full w-full text-white relative overflow-hidden grid lg:grid-rows-2'
        style={{ backgroundColor: color }}
      >
        <div className='bg-white/25 p-8 items-center justify-center hidden lg:flex'>
          <img
            src={Forma}
            alt='Ilustración'
            className='w-full cursor-pointer hover:scale-105 transition-all'
            onClick={() => setIsVisible(true)}
          />
        </div>
        <div className='p-6 transition-colors'>
          <div className='text-white flex flex-col gap-y-3'>
            <h2 className='text-xl opacity-60'>Actividades</h2>
            <div className='flex flex-col'>
              {data.slice(0, 5).map((taller, index) => (
                <Link
                  key={index}
                  to={`/actividades/${taller.id}`}
                  className='hover:underline'
                >
                  {taller.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Talleres
