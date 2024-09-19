import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Item from '../../components/Item2'

const Index = () => {
  const { data, loading } = useFetch(`/sobreHC`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
          {loading ? (
            <Loader />
          ) : (
            data.map((item, index) => (
              <Item
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
