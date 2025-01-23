import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item3'
import { useDataContext } from '../../context/useDataContext'
import Filter from '../../components/Filter'

const Index = () => {
  const { data, loading } = useFetch(`/sobre-archivos`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='flex flex-col gap-6 max-w-6xl m-auto px-6'>
          {loading ? (
            <Loader />
          ) : (
            <div className='flex flex-col gap-y-8'>
              <Filter data={data} />
              {data.map((item, index) => (
                <Item
                  key={index}
                  data={item}
                  color={color}
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
