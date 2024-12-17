import Image from './Image'
import HTML from '../hooks/useHTML'
import ReactPlayer from 'react-player'

const Item3 = ({ data, color }) => {
  return (
    <article className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-6'>
      <h1
        className='font-secondary text-xl lg:text-2xl font-bold'
        style={{ color: color }}
      >
        {data.title}
      </h1>
      <div>
        {data.text && (
          <div className='flex flex-col gap-y-6'>
            <p className='color-gray-1 mb-6 text-wrap whitespace-break-spaces roboto-regular'>
              <HTML text={data.text} />
            </p>
          </div>
        )}
        {data.image && (
          <div>
            <Image
              src={data.image}
              alt={data.title}
            />
          </div>
        )}
        {data.video && (
          <div>
            <ReactPlayer
              url={data.video}
              controls
              width='100%'
              height='100%'
            />
          </div>
        )}
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
              href={`./images/${data.file}`}
              target='_blank'
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

export default Item3
