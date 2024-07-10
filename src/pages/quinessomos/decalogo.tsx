import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { data, loading } = useFetch(`/decalogo`)
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        {loading ? (
          <Loader />
        ) : (
          <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-6'>
            <h1
              className='font-secondary text-2xl lg:text-4xl font-bold'
              style={{ color: color }}
            >
              Quienes somos
            </h1>
            <div className='lg:pl-24 flex flex-col gap-y-6'>
              <h2
                className='lg:text-xl font-extrabold'
                style={{ color: color }}
              >
                Decálogo BIBLIOTECA GONZÁLEZ
              </h2>
              <ul className='flex flex-col gap-y-6 decalogo-list color-blue-1 italic font-medium text-sm lg:text-base'>
                {data.map(item => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
