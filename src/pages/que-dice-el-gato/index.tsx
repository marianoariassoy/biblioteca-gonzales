import Layout from '../../layout/Layout'
import Item from './Item'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/gato`)

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-8'>
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
