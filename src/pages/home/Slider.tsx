import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Forward, Back } from '../../components/icons'
import { useDataContext } from '../../context/useDataContext'

function splitText(text: string, maxChars = 60) {
  const words = text.split(' ')
  const lines: string[] = []
  let currentLine = ''

  words.forEach(word => {
    const testLine = currentLine ? `${currentLine} ${word}` : word

    if (testLine.length <= maxChars) {
      currentLine = testLine
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  })

  if (currentLine) {
    lines.push(currentLine)
  }

  return lines
}

const SliderItem = ({ data, color }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = data.image

    image.onload = () => {
      setIsLoading(false)
    }
  }, [data.image])

  const lines = splitText(data.text, 55)

  return isLoading ? (
    <div className='w-full h-[60vh]'>
      <Loader />
    </div>
  ) : (
    <div className='relative h-[60vh] w-full'>
      <div className='absolute left-0 bottom-6 z-20 px-6 flex flex-col items-start gap-1'>
        {lines.map((line, index) => (
          <span
            key={index}
            className='inline-block  text-white px-2 py-1 md:text-lg'
            style={{ backgroundColor: color }}
          >
            {line}
          </span>
        ))}
        {data.title && (
          <span
            className='inline-block text-white px-2 py-1 md:text-lg mt-2'
            style={{ backgroundColor: color }}
          >
            {data.title}
          </span>
        )}
      </div>

      <img
        src={data.image}
        className='w-full h-full object-cover fade-in'
        alt=''
      />
    </div>
  )
}

const Slider = ({ random }: { random: number }) => {
  const { data, loading } = useFetch('/portada')
  const { color, setColor } = useDataContext()

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

  if (loading) {
    return (
      <div className='w-full h-full aspect-video'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='w-full h-full'>
      <Slide {...sliderProperties}>
        {data.map(item => (
          <SliderItem
            key={item.id}
            data={item}
            color={color}
          />
        ))}
      </Slide>
    </div>
  )
}

export default Slider
