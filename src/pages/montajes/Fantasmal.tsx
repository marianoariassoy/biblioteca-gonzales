import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import HTML from '../../hooks/useHTML'

const Index = () => {
  const { data, loading } = useFetch(`/fantasmal`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-4xl m-auto px-6'>
          {loading ? (
            <Loader />
          ) : (
            <div className='flex flex-col gap-y-8'>
              <h1
                className='text-2xl lg:text-3xl'
                style={{ color: color }}
              >
                {data[0].title}
              </h1>
              <div>
                <HTML text={data[0].video} />
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
