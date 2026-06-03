import { useEffect, useState } from 'react'
import { Forward } from '../lib/icons'

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
        className='fixed bottom-6 right-2 cursor-pointer color-primary  px-6 py-2  transition-all text-2xl -rotate-90 hover:opacity-70 '
        onClick={scrollToTop}
      >
        <Forward />
      </button>
    )
  )
}

export default GoTop
