import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Item2 from '../../components/Item2'
import { Link } from 'wouter'

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
        <div className='w-full max-w-4xl m-auto  flex flex-col gap-y-3 mb-6'>
          <h1
            className='font-secondary text-2xl lg:text-3xl font-bold'
            style={{ color: color }}
          >
            Actividades
          </h1>
          <ul className='flex flex-wrap submenu [&>li:last-child::after]:hidden'>
            {data &&
              data.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/actividades/${item.id}`}
                    className={`cursor-pointer ${+id === item.id ? 'font-bold' : 'hover:underline'} `}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
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
