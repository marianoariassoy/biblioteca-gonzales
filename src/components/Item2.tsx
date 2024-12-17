import Image from './Image'
import HTML from '../hooks/useHTML'
import ReactPlayer from 'react-player'
import Slider from './Slider'
import useFetch from '../hooks/useFetch'

const Item = ({ data, color }) => {
  const { data: images, loading } = useFetch(`/imagenes`)
  let imagesFiltered = []

  if (images) {
    imagesFiltered = images.filter(item => item.item === data.id)
  }

  return (
    <article className='flex flex-col gap-y-8'>
      {data.image && (
        <div>
          <Image
            src={data.image}
            alt={data.title}
          />
        </div>
      )}
      <div>
        <h1
          className='text-2xl lg:text-3xl'
          style={{ color: color }}
        >
          {data.title}
        </h1>
        {data.subtitle && <h2 className='text-lg'>{data.subtitle}</h2>}
        <div className='text-sm mt-3 roboto-regular max-w-4xl'>
          <HTML text={data.text} />
        </div>
      </div>

      {!loading && imagesFiltered.length > 0 && (
        <div>
          <Slider data={imagesFiltered} />
        </div>
      )}

      {data.video && (
        <div className='aspect-video'>
          <ReactPlayer
            url={data.video}
            controls
            width='100%'
            height='100%'
          />
        </div>
      )}
      <div className='flex gap-3'>
        {data.url && (
          <a
            href={data.url}
            target='_blank'
            className='bg-primary text-white px-6 py-2 hover:bg-black'
          >
            Link
          </a>
        )}
        {data.file && (
          <a
            href={`./images/${data.file}`}
            target='_blank'
            className='bg-primary text-white px-6 py-2 hover:bg-black'
          >
            Descarga PDF
          </a>
        )}
      </div>
    </article>
  )
}

export default Item
