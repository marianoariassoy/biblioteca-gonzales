import { Back, Forward } from '../../components/icons'
import HTML from '../../hooks/useHTML'

const Modal = ({ currentImage, setCurrentImage, handelNext, handelPrev, currentText }) => {
  const handelClick = e => {
    if (e.target.classList.contains('dismiss')) {
      setCurrentImage(null)
    }
  }
  return (
    <div
      className='fixed fade-in bg-black bg-opacity-60 backdrop-blur h-screen w-screen top-0 left-0 grid place-items-center dismiss z-50 px-6 py-32 lg:px-32 lg:py-16'
      onClick={handelClick}
    >
      <div className='bg-white p-4 fade-in max-w-6xl'>
        <img
          src={currentImage}
          className='h-auto lg:h-[70vh] w-auto object-cover'
        />

        <p className='mt-3'>
          <HTML text={currentText} />
        </p>
      </div>

      <button
        className='absolute top-8 right-8 text-white text-2xl dismiss cursor-pointer hover:text-black z-30 font-bold font-secondary'
        onClick={handelClick}
      >
        X
      </button>
      <button
        className='absolute text-3xl top-1/2 left-8 text-white cursor-pointer hover:text-black z-40 hidden lg:block'
        onClick={handelPrev}
      >
        <Back />
      </button>
      <button
        className='absolute text-3xl top-1/2 right-8 text-white cursor-pointer hover:text-black z-40 hidden lg:block'
        onClick={handelNext}
      >
        <Forward />
      </button>
    </div>
  )
}

export default Modal
