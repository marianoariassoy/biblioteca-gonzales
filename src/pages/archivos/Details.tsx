import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item3 from '../../components/Item3'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const [location] = useLocation()
  const { data, loading } = useFetch(`/archivos`)
  const { color } = useDataContext()
  let dataFilteder = []

  if (data) {
    if (location === '/archivos/catalogo-hg') {
      dataFilteder = data.filter(item => item.id === 70)
    } else if (location === '/archivos/picadito') {
      dataFilteder = data.filter(item => item.id === 93)
    } else if (location === '/archivos/mundo-p') {
      dataFilteder = data.filter(item => item.id === 94)
    } else if (location === '/archivos/cinefilas') {
      dataFilteder = data.filter(item => item.id === 95)
    } else if (location === '/archivos/hogueras') {
      dataFilteder = data.filter(item => item.id === 96)
    } else if (location === '/archivos/cine-internacional') {
      dataFilteder = data.filter(item => item.id === 97)
    } else if (location === '/archivos/documentales') {
      dataFilteder = data.filter(item => item.id === 98)
    } else if (location === '/archivos/ficcion') {
      dataFilteder = data.filter(item => item.id === 99)
    }
  }

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='flex flex-col gap-6 max-w-6xl m-auto'>
          {loading ? (
            <Loader />
          ) : (
            dataFilteder.map((item, index) => (
              <Item3
                key={index}
                data={item}
                color={color}
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
