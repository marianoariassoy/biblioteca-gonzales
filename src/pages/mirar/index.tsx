import Layout from '../../layout/Layout'
import SoncatsItem from './SoncatsItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useLocation } from 'wouter'
import { useEffect, useState } from 'react'

const Index = () => {
  const [selected, setSelected] = useState(0)
  const { data, loading } = useFetch(`/mirar`)
  const { data: images, loading: loadingImages } = useFetch(`/imagenes`)
  const route = useLocation()[0]

  useEffect(() => {
    if (route === '/mirar/soncats') {
      setSelected(0)
    } else if (route === '/mirar/mapas') {
      setSelected(1)
    }
  }, [route])

  return (
    <Layout>
      <section className='section-main fade-in'>
        {loading ? (
          <Loader />
        ) : (
          <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
            <div>
              <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-orange-2'>{data[selected].title}</h1>
              <h2 className='font-bold color-blue-1 text-xl'>{data[selected].subtitle}</h2>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
              {!loadingImages &&
                images
                  .filter(item => item.item === data[selected].id)
                  .map((item, index) => (
                    <SoncatsItem
                      key={index}
                      item={item}
                    />
                  ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
