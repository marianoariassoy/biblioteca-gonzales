import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const SliderItem = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = data.image
    image.onload = () => {
      setIsLoading(false)
    }
  }, [data.image])

  return isLoading ? (
    <Loader />
  ) : (
    <div className='relative h-full w-full'>
      <div className='absolute h-full w-full left-0 top-0 bg-black/20 z-20'>
        <div className='text-white p-6 lg:p-12 lg:w-2/3'>
          <p className='italic lg:text-xl'>{data.text}</p>
          <p className='text-sm mt-2'>{data.title}</p>
        </div>
      </div>
      <img
        src={data.image}
        className='w-full h-full object-cover fade-in'
      />
    </div>
  )
}

const Slider = () => {
  const { data, loading } = useFetch(`/portada`)

  const properties = {
    arrows: false,
    transitionDuration: 600,
    pauseOnHover: false,
    autoplay: true,
    indicators: false
  }

  if (loading) return <Loader />

  return (
    <Slide {...properties}>
      {data.map(item => (
        <SliderItem
          key={item.id}
          data={item}
        />
      ))}
    </Slide>
  )
}

export default Slider
