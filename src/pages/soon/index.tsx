import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'

const index = () => {
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6'>
          <h1
            className='font-secondary text-2xl lg:text-4xl font-bold'
            style={{ color: color }}
          >
            Muy Pronto
          </h1>
        </div>
      </section>
    </Layout>
  )
}

export default index
