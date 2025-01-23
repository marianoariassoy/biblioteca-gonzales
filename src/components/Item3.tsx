import Image from './Image'
import HTML from '../hooks/useHTML'
import ReactPlayer from 'react-player'
import Share from './Share'

const Item3 = ({ data, color }) => {
  return (
    <article
      className='w-full max-w-4xl m-auto flex flex-col gap-y-6'
      id={`item-${data.id}`}
    >
      <h1
        className='font-secondary text-xl lg:text-2xl font-bold'
        style={{ color: color }}
      >
        {data.title}
      </h1>
      <div>
        {data.text && (
          <div className='flex flex-col gap-y-6'>
            <p className='color-gray-1 mb-6 text-wrap whitespace-break-spaces roboto-regular [&>div>span>a]:underline  [&>div>a]:underline [&>div>span>span>a]:underline'>
              <HTML text={data.text} />
            </p>
          </div>
        )}
        {data.image && (
          <div className='aspect-square lg:aspect-auto'>
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
      </div>
      <Share />
    </article>
  )
}

export default Item3
