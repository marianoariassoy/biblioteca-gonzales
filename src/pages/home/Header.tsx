import Slider from './Slider'
import Talleres from './Talleres'

const Header = ({ random }: { random: number }) => {
  return (
    <section className='flex flex-col gap-3 lg:gap-0 lg:flex-row lg:h-[60vh]'>
      <div className='w-full lg:w-3/4 lg:pr-2 h-full'>
        <div className='bg-gray-200 overflow-hidden rounded-2xl h-full w-full'>
          <Slider />
        </div>
      </div>
      <div className='lg:w-1/4 lg:pl-4'>
        <Talleres random={random} />
      </div>
    </section>
  )
}

export default Header
