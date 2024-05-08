import { useState } from 'react'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Image from '../../components/Image'

const Index = () => {
  const { data, loading } = useFetch(`/montajes`)
  const { data: images, loading: loadingImages } = useFetch(`/imagenes`)
  const [itemSelected, setItemSelected] = useState(0)

  return (
    <Layout>
      <section className='section-main fade-in'>
        {loading && loadingImages ? (
          <Loader />
        ) : (
          data && (
            <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-6'>
              <div className='flex flex-col gap-y-3'>
                <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-orange-1'>Montajes</h1>
                <ul className='flex text-sm submenu [&>li:last-child::after]:hidden'>
                  {data.map((item, index) => (
                    <li key={index}>
                      <button
                        className={`cursor-pointer ${index === itemSelected ? 'font-bold' : 'hover:underline'} `}
                        onClick={() => setItemSelected(index)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <article className='flex flex-col gap-y-12'>
                <div className='color-blue-1 lg:pl-[19.5rem]'>
                  <p className='font-bold mb-3'>
                    Montajes es un recorrido por libros y películas de acuerdo a un tópico, autor/a o tema. El material
                    pertenece a nuestros archivos y se encuentra a disposición.
                  </p>
                  <h2 className='uppercase'>{data[itemSelected].title}</h2>
                  <p>{data[itemSelected].text}</p>
                </div>
                <div className='grid grid-cols-3 lg:grid-cols-4 gap-6'>
                  {images &&
                    images
                      .filter(item => item.item === data[itemSelected].id)
                      .map(item => (
                        <div key={item.id}>
                          <Image
                            src={item.image}
                            alt={data[itemSelected].title}
                          />
                        </div>
                      ))}
                </div>
              </article>
            </div>
          )
        )}
      </section>
    </Layout>
  )
}

export default Index
