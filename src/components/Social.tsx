import { social } from '../lib/data'

const Social = () => {
  return (
    <div className='absolute z-50 mt-20 left-0 translate-x-10 md:-translate-x-6'>
      <ul className='flex flex-col gap-1 items-center'>
        {social.map(item => (
          <li key={item.name}>
            <a
              href={item.href}
              target='_blank'
              rel='noreferrer'
              className='bg-primary w-8 h-8 flex items-center justify-center rounded-full text-white bg-color-blue-1'
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
