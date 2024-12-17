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
              className='font-secondary text-2xl lg:text-3xl font-bold'
              style={{ color: color }}
            >
              Decálogo
            </h1>
            <div className='flex flex-col gap-y-6'>
              <h2
                className='text-base lg:text-xl font-extrabold'
                style={{ color: color }}
              >
                Biblioteca González
              </h2>
              <ul className='lg:pl-10 flex flex-col gap-y-4 decalogo-list color-blue-1 font-medium text-sm lg:text-base max-w-4xl'>
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
