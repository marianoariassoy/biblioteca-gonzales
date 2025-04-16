import useFetch from '../hooks/useFetch'
import Loader from './Loader'
import { Dibujo } from './icons'
import HTML from '../hooks/useHTML'

const QuienesSomos = () => {
  const { data, loading } = useFetch(`/textos`)
  if (loading) return <Loader />

  return (
    <div className='w-full max-w-4xl m-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
      <div className='color-primary'>
        <Dibujo />
      </div>
      <div className='flex flex-col gap-y-2 text-base roboto-regular'>
        <h2 className='font-secondary text-base lg:text-xl font-bold color-primary'>Quiénes somos</h2>
        <div className='font-medium mb-4 '>
          <HTML text={data[1].text} />
        </div>
        <h2 className='font-secondary text-base lg:text-xl font-bold color-primary'>Colaboran</h2>
        <div className='font-medium [&>div>span>a]:underline [&>div>a]:underline [&>div>span>span>a]:underline'>
          <HTML text={data[2].text} />
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos
