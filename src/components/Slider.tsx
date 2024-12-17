import { Forward, Back } from './icons'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Slider = ({ data }) => {
  const sliderProperties = {
    autoplay: false,
    transitionDuration: 300,
    indicators: false,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
      <button className='ml-4 lg:ml-12 flex justify-end hover:opacity-70 transition-all color-primary'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='mr-4 lg:mr-12 flex hover:opacity-70 transition-all color-primary'>
        <Forward />
      </button>
    )
  }

  return (
    <Slide {...sliderProperties}>
      {data.map(item => (
        <div
          className='aspect-square w-full h-full lg:aspect-[5/4] overflow-hidden'
          key={item.id}
        >
          <img
            src={item.image}
            className='w-full h-full object-cover object-top'
          />
        </div>
      ))}
    </Slide>
  )
}

export default Slider
