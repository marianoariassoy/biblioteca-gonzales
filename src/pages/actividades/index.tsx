import Layout from '../../layout/Layout'
import Item from './Item'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { data, loading } = useFetch(`/actividades`)
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
              Actividades
            </h1>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              {data.map((item, index) => (
                <Item
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
