import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import SoncatsItem from './SoncatsItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Modal from './Modal'

const Index = () => {
  const [selected, setSelected] = useState(0)
  const { data, loading } = useFetch(`/mirar`)
  const { data: images, loading: loadingImages } = useFetch(`/imagenes`)
  const route = useLocation()[0]
  const { color } = useDataContext()
  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  let imagesFiltered = []

  useEffect(() => {
    if (route === '/mirar/soncats') {
      setSelected(0)
    } else if (route === '/mirar/mapas') {
      setSelected(1)
    }
  }, [route])

  const handelNext = () => {
    if (currentIndex === imagesFiltered.length - 1) {
      setCurrentImage(imagesFiltered[0].image)
      setcurrentIndex(0)
      setCurrentText(imagesFiltered[0].text)
    } else {
      setCurrentImage(imagesFiltered[currentIndex + 1].image)
      setcurrentIndex(currentIndex + 1)
      setCurrentText(imagesFiltered[currentIndex + 1].text)
    }
  }
  const handelPrev = () => {
    if (currentIndex === 0) {
      setCurrentImage(imagesFiltered[data.length - 1].image)
      setcurrentIndex(imagesFiltered.length - 1)
      setCurrentText(imagesFiltered[imagesFiltered.length - 1].text)
    } else {
      setCurrentImage(imagesFiltered[currentIndex - 1].image)
      setcurrentIndex(currentIndex - 1)
      setCurrentText(imagesFiltered[currentIndex - 1].text)
    }
  }

  if (images && data) {
    imagesFiltered = images.filter(item => item.item === data[selected].id)
  }

  console.log(imagesFiltered)
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
                {data[selected].title}
              </h1>
              <h2 className='font-bold color-blue-1 text-xl'>{data[selected].subtitle}</h2>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
              {!loadingImages &&
                imagesFiltered.map((item, index) => (
                  <SoncatsItem
                    key={index}
                    item={item}
                    setCurrentImage={setCurrentImage}
                    setcurrentIndex={setcurrentIndex}
                    setCurrentText={setCurrentText}
                    index={index}
                  />
                ))}
            </div>
          </div>
        )}
        {currentImage && (
          <Modal
            currentImage={currentImage}
            currentText={currentText}
            setCurrentImage={setCurrentImage}
            handelNext={handelNext}
            handelPrev={handelPrev}
          />
        )}
      </section>
    </Layout>
  )
}

export default Index
