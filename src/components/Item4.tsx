import Image from './Image'
import HTML from '../hooks/useHTML'
import ReactPlayer from 'react-player'
import Slider from './Slider'
import useFetch from '../hooks/useFetch'
import Share from './Share'

const Item = ({ data, color }) => {
  const { data: images, loading } = useFetch(`/imagenes`)
  let imagesFiltered = []
  if (images) imagesFiltered = images.filter(item => item.item === data.id)

  return (
    <article
      className='flex flex-col gap-y-8 max-w-4xl m-auto'
      id={`item-${data.id}`}
    >
      <h1
        className='text-2xl lg:text-3xl'
        style={{ color: color }}
      >
        {data.title}
      </h1>
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
      <div>
        {data.subtitle && <h2 className='text-lg'>{data.subtitle}</h2>}
        <div className='text-sm roboto-regular [&>div>span>a]:underline [&>div>a]:underline [&>div>span>span>a]:underline'>
          <HTML text={data.text} />
        </div>
      </div>
      {!loading && imagesFiltered.length > 0 && <Slider data={imagesFiltered} />}

      {data.image && (
        <div>
          <Image
            src={data.image}
            alt={data.title}
          />
        </div>
      )}

      <div className='flex gap-4'>
        {data.file && (
          <a
            href={data.file}
            target='_blank'
            rel='noreferrer'
            className='bg-primary text-white px-6 py-2 hover:bg-black'
          >
            Descarga PDF
          </a>
        )}
        {data.url && (
          <a
            href={data.url}
            target='_blank'
            rel='noreferrer'
            className='bg-primary text-white px-6 py-2 hover:bg-black'
          >
            Link
          </a>
        )}
      </div>
      <div>
        <Share />
      </div>
    </article>
  )
}

export default Item
