import Image from '../../components/Image'

interface Props {
  item: {
    title: string
    file: string
    image: string
  }
}

const item = ({ item }: Props) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <div>
        <a
          href={item.file}
          target='_blank'
          rel='noopener noreferrer'
          className='aspect-[4/5] hover:opacity-70 transition-all block'
        >
          <Image
            src={item.image}
            alt={item.title}
          />
        </a>
      </div>
      <div className='flex items-center justify-between'>
        <span>{item.title}</span>
        <a
          href={item.file}
          target='_blank'
          className='color-primary text-2xl font-secondary hover:text-black rotate-90 hover:translate-y-1 transition-all'
        >
          »
        </a>
      </div>
    </article>
  )
}

export default item
