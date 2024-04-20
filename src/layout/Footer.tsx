import Logo from '../assets/logo-footer.svg'

const Footer = () => {
  return (
    <footer className='mt-6'>
      <div className='border-t w-full max-w-6xl m-auto border-[#1d1d1b] p-6 flex items-center justify-between'>
        <div>
          <img
            src={Logo}
            alt='logo'
            className='w-[4.7rem] lg:w-full'
          />
        </div>
        <div className='flex flex-col'>
          <span className='font-tertiary font-bold text-xl lg:text-2xl color-violet-1'>Fundación</span>
          <span className='font-secondary font-extrabold lg:text-xl -mt-2 color-blue-1'>Horacio González</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
