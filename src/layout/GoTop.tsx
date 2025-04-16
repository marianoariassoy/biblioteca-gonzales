import { useEffect, useState } from 'react'

const GoTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    visible && (
      <button
        className='fixed bottom-8 right-8 cursor-pointer bg-black/20 text-white px-6 py-2 hover:bg-black/40 transition-all'
        onClick={scrollToTop}
      >
        Ir Arriba
      </button>
    )
  )
}

export default GoTop
