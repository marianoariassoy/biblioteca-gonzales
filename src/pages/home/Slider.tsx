import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Loader from '../../components/Loader'

const SliderItem = ({ src }: { src: string }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <Loader />
  ) : (
    <div className='relative h-full w-full'>
      <div className='absolute h-full w-full left-0 top-0 bg-black/20 z-20'>
        <div className='text-white p-6 lg:p-12 lg:w-2/3'>
          <p className='italic lg:text-xl'>
            “Los últimos 60, 70 años de programas universitarios. La revisión no anula, relee. La relectura de Sartre,
            Lévi-Strauss y Derrida son urgentes. Humanismo no es solamente humanitarismo, una estructura moral. No es
            una fórmula de beneficencia o rescatismo de la naturaleza en peligro”.
          </p>
          <p className='text-sm mt-2'>Página/12. Entrevista. 28/12/23</p>
        </div>
      </div>
      <img
        src={src}
        className='w-full h-full object-cover fade-in'
      />
    </div>
  )
}

const Slider = () => {
  const data = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  const properties = {
    arrows: false,
    transitionDuration: 600,
    pauseOnHover: false,
    autoplay: true,
    indicators: false
  }

  return (
    <Slide {...properties}>
      {data &&
        data.map(item => (
          <SliderItem
            key={item.id}
            src={`${item.image}`}
          />
        ))}
    </Slide>
  )
}

export default Slider
