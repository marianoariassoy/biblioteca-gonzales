import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item3 from '../../components/Item3'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { data, loading } = useFetch(`/sobre-archivos`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='flex flex-col gap-6 max-w-6xl m-auto'>
          {loading ? (
            <Loader />
          ) : (
            data.map((item, index) => (
              <Item3
                key={index}
                data={item}
                color={color}
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
