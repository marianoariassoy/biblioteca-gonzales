import Image from './Image'
import HTML from '../hooks/useHTML'

const Item = ({ data, color }) => {
  return (
    <article className='flex flex-col gap-y-6'>
      <div className='min-h-44'>
        <Image
          src={data.image}
          alt={data.title}
        />
      </div>
      <div>
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
