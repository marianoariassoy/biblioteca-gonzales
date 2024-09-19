import { useState } from 'react'
import Layout from '../../layout/Layout'
import Item from './Item'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Modal from '../mirar/Modal'

const Index = () => {
  const { data, loading } = useFetch('/dibujos')
  const { color } = useDataContext()
  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)

  const handelNext = () => {
    if (currentIndex === data.length - 1) {
      setCurrentImage(data[0].image)
      setcurrentIndex(0)
    } else {
      setCurrentImage(data[currentIndex + 1].image)
      setcurrentIndex(currentIndex + 1)
    }
  }
  const handelPrev = () => {
    if (currentIndex === 0) {
      setCurrentImage(data[data.length - 1].image)
      setcurrentIndex(data.length - 1)
    } else {
      setCurrentImage(data[currentIndex - 1].image)
      setcurrentIndex(currentIndex - 1)
    }
  }
  return (
    <Layout>
      <section className='section-main fade-in'>
        {loading ? (
          <Loader />
        ) : (
          <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
            <div>
              <h1
                className='font-secondary text-2xl lg:text-4xl font-bold'
                style={{ color: color }}
              >
                Dibujos
              </h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
              {data.map((item, index) => (
                <Item
                  key={index}
                  item={item}
                  setCurrentImage={setCurrentImage}
                  setcurrentIndex={setcurrentIndex}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
        {currentImage && (
          <Modal
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            handelNext={handelNext}
            handelPrev={handelPrev}
            currentText=''
          />
        )}
      </section>
    </Layout>
  )
}

export default Index
