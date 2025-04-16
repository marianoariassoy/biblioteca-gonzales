import Layout from '../../layout/Layout'
import MontajesItem from './MontajesItem'

import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/montajes`)
  const { data: textos, loading: loadingTextos } = useFetch(`/textos`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-8'>
          <div>
            <h1
              className='font-secondary text-2xl lg:text-3xl font-bold mb-4'
              style={{ color: color }}
            >
              Montajes
            </h1>
            <div className='text-xl'>{loadingTextos ? <Loader /> : <span>{textos[3].text}</span>}</div>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              {data.map((item, index) => (
                <MontajesItem
                  key={index}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
