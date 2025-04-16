import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Item2 from '../../components/Item2'
import Share from '../../components/Share'

const Index = () => {
  const { data, loading } = useFetch(`/donaciones`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-3'>
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

        <div className='w-full max-w-4xl m-auto mt-12 '>
          <Share />
        </div>
      </section>
    </Layout>
  )
}

export default Index
