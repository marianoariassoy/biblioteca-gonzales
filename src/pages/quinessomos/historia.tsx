import Layout from '../../layout/Layout'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { data, loading } = useFetch(`/quienes-somos`)
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
                {data[0].title}
              </h2>
              <p className='color-gray-1 text-sm lg:text-base mb-6 text-wrap max-w-4xl whitespace-break-spaces'>
                {data[0].text}
              </p>
            </div>
            {data[0].image && (
              <Image
                src={data[0].image}
                alt={data[0].title}
              />
            )}
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
