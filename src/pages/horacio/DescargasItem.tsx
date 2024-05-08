interface Props {
  item: {
    title: string
    file: string
  }
}

const item = ({ item }: Props) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <div className='flex items-center justify-between'>
        <a
          href={item.file}
          target='_blank'
          className='hover:underline'
        >
          {item.title}
        </a>
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
