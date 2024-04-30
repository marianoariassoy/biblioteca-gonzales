import Image from '../../components/Image'

interface Props {
  item: {
    title: string
    image: string
  }
}

const SoncatsItem = ({ item }: Props) => {
  return (
    <article className='flex flex-col gap-y-3 color-gray-1 hover:[color:var(--color-primary)]'>
      <div className='aspect-square overflow-hidden hover:opacity-70 transition-all cursor-pointer'>
        <Image
          src={item.image}
          alt={item.title}
        />
      </div>
      <div>{item.title}</div>
    </article>
  )
}

export default SoncatsItem
