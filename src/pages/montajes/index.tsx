import Layout from '../../layout/Layout'
import MontajesItem from './MontajesItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { data, loading } = useFetch(`/montajes`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
          <h1
            className='font-secondary text-2xl lg:text-4xl font-bold'
            style={{ color: color }}
          >
            Montajes
          </h1>
          <div>
            Montajes es un recorrido por libros y películas de acuerdo a un tópico, autor/a o tema. El material
            pertenece a nuestros archivos y se encuentra a disposición.
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
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
