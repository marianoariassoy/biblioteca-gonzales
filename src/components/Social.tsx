import { social } from '../lib/data'
import { useEffect } from 'react'
import { useDataContext } from '../context/useDataContext'

const Social = ({ random }: { random: number }) => {
  const { color, setColor } = useDataContext()

  useEffect(() => {
    if (random === 1) {
      setColor('#008d36')
    } else if (random === 2) {
      setColor('#be1717')
    } else if (random === 3) {
      setColor('#312880')
    } else if (random === 4) {
      setColor('#792477')
    }
  }, [random, setColor])

  return (
    <div className='absolute z-30 mt-20 left-0 translate-x-10 md:-translate-x-6'>
      <ul className='flex flex-col gap-1 items-center'>
        {social.map(item => (
          <li key={item.name}>
            <a
              href={item.href}
              target='_blank'
              rel='noreferrer'
              className='bg-primary w-8 h-8 flex items-center justify-center rounded-full text-white  '
              style={{ backgroundColor: color }}
            >
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Social
