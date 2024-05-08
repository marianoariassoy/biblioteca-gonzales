import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import DescargasItem from './DescargasItem'

const Index = () => {
  const { data, loading } = useFetch(`/descargas`)

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
          <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-green-1'>Descargas</h1>
          {loading ? (
            <Loader />
          ) : (
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
              {data.map((item, index) => (
                <DescargasItem
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
