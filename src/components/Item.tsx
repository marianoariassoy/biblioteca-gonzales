import Image from './Image'
import HTML from '../hooks/useHTML'
import ReactPlayer from 'react-player'

const Item = ({ data, color }) => {
  return (
    <article className='flex gap-y-3 gap-x-6 flex-col lg:flex-row'>
      <div className='lg:w-1/2 min-h-44 flex flex-col gap-y-4'>
        {data.image && (
          <div>
            <Image
              src={data.image}
              alt={data.title}
            />
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
      </div>
      <div className='lg:w-1/2'>
        <h1
          className='text-xl lg:text-2xl'
          style={{ color: color }}
        >
          {data.title}
        </h1>
        {data.subtitle && <h2 className='text-lg'>{data.subtitle}</h2>}
        <div className='mt-2 roboto-regular [&>div>span>a]:underline [&>div>a]:underline [&>div>span>span>a]:underline '>
          <HTML text={data.text} />
        </div>
        <div className='flex gap-3 mt-6'>
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
              href={data.file}
              target='_blank'
              rel='noreferrer'
              className='bg-primary text-white px-6 py-2 hover:bg-black'
            >
              Descarga PDF
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Item
