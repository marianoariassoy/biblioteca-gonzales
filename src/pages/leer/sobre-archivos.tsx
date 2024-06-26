import Layout from '../../layout/Layout'
import SobreArchivosItem from './SobreArchivosItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/sobre-archivos`)

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
          <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-green-1'>Sobre Archivos</h1>
          {loading ? (
            <Loader />
          ) : (
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
              {data.map((item, index) => (
                <SobreArchivosItem
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
