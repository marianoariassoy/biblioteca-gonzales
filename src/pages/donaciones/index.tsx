import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Item2 from '../../components/Item2'

const Index = () => {
  const { data, loading } = useFetch(`/donaciones`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-8'>
          {loading ? (
            <Loader />
          ) : (
            data.map((item, index) => (
              <Item2
                key={index}
                data={item}
                color={color}
              />
            ))
          )}
          {!loading && data.length === 0 && <div className='text-xl'>¡Muy pronto!</div>}
        </div>
      </section>
    </Layout>
  )
}

export default Index
