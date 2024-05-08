import Slider from './Slider'
import Talleres from './Talleres'

const Header = () => {
  return (
    <section className='flex flex-col gap-3 items-start justify-start lg:gap-0 lg:flex-row'>
      <div className=' w-full lg:w-3/4 lg:pr-2'>
        <div className='bg-gray-200 overflow-hidden rounded-2xl h-[50vh]'>
          <Slider />
        </div>
      </div>
      <div className='lg:w-1/4 lg:h-[50vh] lg:pl-4'>
        <Talleres />
      </div>
    </section>
  )
}

export default Header
