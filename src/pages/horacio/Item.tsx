import Image from '../../components/Image'

interface Props {
  item: {
    title: string
    image: string
    text: string
  }
  setCurrentImage: (image: string) => void
  setcurrentIndex: (number: number) => void
  index: number
}

const SoncatsItem = ({ item, setCurrentImage, setcurrentIndex, index }: Props) => {
  const handleImage = (image, index) => {
    setCurrentImage(image)
    setcurrentIndex(index)
  }

  console.log(item)
  return (
    <article className='flex flex-col gap-y-3 color-gray-1 hover:[color:var(--color-primary)]'>
      <div
        className='aspect-square overflow-hidden hover:opacity-70 transition-all cursor-pointer'
        onClick={() => handleImage(item.image, index)}
      >
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
