import { Link } from 'wouter'
import Image from '../../components/Image'

interface Props {
  item: {
    id: number
    title: string
    image: string
  }
}

const item = ({ item }: Props) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <div>
        <Link
          href={`/leer/montajes/${item.id}`}
          className='aspect-[4/5] hover:opacity-70 transition-all block'
        >
          <Image
            src={item.image}
            alt={item.title}
          />
        </Link>
      </div>
      <div className='flex items-center justify-between'>
        <span>{item.title}</span>
      </div>
    </article>
  )
}

export default item
