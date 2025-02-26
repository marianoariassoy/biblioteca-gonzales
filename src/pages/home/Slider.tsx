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
    <div className='w-full h-[60vh]'>
      <Loader />
    </div>
  ) : (
    <div className='relative h-[60vh] w-full'>
      <div className='absolute w-full left-0 bottom-6 bg-black/20 z-20'>
        <div className='text-white px-6 py-3'>
          <p className='italic leading-5'>{data.text}</p>
          <p className='text-sm roboto-regular mt-1'>{data.title}</p>
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

  const sliderProperties = {
    autoplay: false,
    transitionDuration: 300,
    indicators: false,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
      <button className='ml-8 top-12 left-auto right-20 flex justify-end hover:opacity-70 transition-all lg:right-auto lg:top-auto color-primary'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='mr-6 top-12 lg:mr-8 hover:opacity-70 transition-all lg:top-auto color-primary'>
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
    <div className='w-full h-full'>
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
