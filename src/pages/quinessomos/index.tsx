import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import HTML from '../../hooks/useHTML'

const Index = () => {
  const { data, loading } = useFetch(`/quienes-somos`)
  const { color } = useDataContext()

  useEffect(() => {
    if (data) {
      const enlace = document.querySelectorAll('a')
      if (enlace) {
        for (let i = 0; i < enlace.length; i++) {
          enlace[i].setAttribute('target', '_blank')
        }
      }
    }
  }, [data])

  return (
    <Layout>
      <section className='section-main fade-in'>
        {loading ? (
          <Loader />
        ) : (
          <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-6'>
            <h1
              className='font-secondary text-2xl lg:text-4xl font-bold'
              style={{ color: color }}
            >
              {data[1].title}
            </h1>
            <div className='flex flex-col gap-y-6'>
              <p className='color-gray-1 text-sm lg:text-base mb-6 text-wrap whitespace-break-spaces'>
                <HTML text={data[1].text} />
              </p>
            </div>
            {data[0].image && (
              <Image
                src={data[1].image}
                alt={data[1].title}
              />
            )}
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
