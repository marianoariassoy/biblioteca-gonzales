import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Item2 from '../../components/Item2'

const Index = () => {
  const { id } = useParams() as { id: string }
  const { data, loading } = useFetch(`/actividades`)
  const { color } = useDataContext()
  let dataFilterd = null

  if (data) {
    dataFilterd = data.filter(item => item.id === +id)
  }

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-8'>
          {loading ? (
            <Loader />
          ) : (
            dataFilterd.map((item, index) => (
              <Item2
                key={index}
                data={item}
                color={color}
              />
            ))
          )}
          {!loading && data.length === 0 && <div className='text-xl'>No hay resultados :-(</div>}
        </div>
      </section>
    </Layout>
  )
}

export default Index
