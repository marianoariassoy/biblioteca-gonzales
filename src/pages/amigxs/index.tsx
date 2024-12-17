import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Item3 from '../../components/Item3'

const Index = () => {
  const { data, loading } = useFetch(`/amigos`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
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
          {!loading && data.length === 0 && <div className='text-xl'>No hay resultados :-(</div>}
        </div>
      </section>
    </Layout>
  )
}

export default Index
