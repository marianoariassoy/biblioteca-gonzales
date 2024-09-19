import Image from './Image'
import HTML from '../hooks/useHTML'

const Item = ({ data, color }) => {
  return (
    <article className='flex gap-y-3 gap-x-6 flex-col lg:flex-row'>
      <div className='lg:w-1/2 min-h-44'>
        <Image
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className='lg:w-1/2'>
        <h1
          className='text-xl'
          style={{ color: color }}
        >
          {data.title}
        </h1>
        {data.subtitle && <h2 className='text-lg'>{data.subtitle}</h2>}
        <div className='text-sm mt-3'>
          <HTML text={data.text} />
        </div>
      </div>
    </article>
  )
}

export default Item
