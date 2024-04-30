import { Link } from 'wouter'

interface Props {
  title: string
  color: string
  image: string
  url: string
}

const Box1 = ({ title, color, image, url }: Props) => {
  return (
    <article className='rounded-2xl aspect-[4/7] text-white relative overflow-hidden'>
      <span className='absolute bottom-6 left-6 font-secondary font-bold z-20 vertical-text'> {title}</span>
      <Link to={`${url}`}>
        <a
          className='absolute w-full h-full cursor-pointer transition-all mix-blend-multiply lg:mix-blend-normal hover:mix-blend-multiply z-10'
          style={{ backgroundColor: color }}
        ></a>
      </Link>
      <img
        src={image}
        alt={title}
        className='w-full h-full object-cover'
      />
    </article>
  )
}

export default Box1
