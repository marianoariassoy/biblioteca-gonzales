import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Forward, Back } from '../../components/icons'

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
    <div className='w-full h-full'>
      <Loader />
    </div>
  ) : (
    <div className='relative w-full h-full aspect-square lg:aspect-video'>
      <div className='absolute h-full w-full left-0 top-0 bg-black/20 z-20'>
        <div className='text-white p-6 lg:p-12 '>
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
  const { data, loading } = useFetch(`/galeria/48`)

  const sliderProperties = {
    autoplay: false,
    transitionDuration: 300,
    indicators: false,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
      <button className='ml-12 bottom-12 left-auto right-20 flex justify-end hover:opacity-70 transition-all lg:right-auto lg:bottom-auto'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='mr-6 bottom-12 lg:mr-12 hover:opacity-70 transition-all lg:bottom-auto'>
        <Forward />
      </button>
    )
  }

  if (loading)
    return (
      <div className='w-full h-full aspect-video'>
        <Loader />
      </div>
    )

  return (
    <div className='w-full h-full text-white'>
      <Slide {...sliderProperties}>
        {data.map(item => (
          <SliderItem
            key={item.id}
            data={item}
          />
        ))}
      </Slide>
    </div>
  )
}

export default Slider
