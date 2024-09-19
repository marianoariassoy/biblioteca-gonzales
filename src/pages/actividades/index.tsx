import { useParams, Link } from 'wouter'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'

const Index = () => {
  const { id } = useParams() as { id: string }
  const { color } = useDataContext()
  const { data, loading } = useFetch(`/actividades`)
  let dataFiltered = []

  if (id) {
    if (data) {
      dataFiltered = data.filter(item => item.id === +id)
    }
  } else {
    dataFiltered = data
  }

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
          {loading ? (
            <Loader />
          ) : (
            dataFiltered.map((item, index) => (
              <Item
                key={index}
                data={item}
                color={color}
              />
            ))
          )}
          {id && (
            <div className='flex justify-center'>
              <Link
                to='/actividades'
                className='text-white a-main'
                style={{ backgroundColor: color }}
              >
                Ver todas las actividades
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
