const PopUp = ({ isVisible, setIsVisible }) => {
  return (
    <>
      {isVisible && (
        <div
          className='fade-in fixed top-0 left-0 z-50 w-full cursor-pointer h-full bg-black/60 flex items-center justify-center p-6'
          onClick={() => setIsVisible(false)}
        >
          <div className='w-full max-w-4xl p-4 lg:p-6  aspect-square lg:aspect-video bg-white'>
            <button
              onClick={() => setIsVisible(false)}
              className='absolute top-6 right-6 text-xl lg:text-2xl z-10 font-secondary text-white font-bold hover:text-black'
            >
              X
            </button>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/RAkA4XHb0Dg?si=ZcvXPwrKRvnfHCdw'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default PopUp
