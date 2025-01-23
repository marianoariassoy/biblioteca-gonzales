import Layout from '../../layout/Layout'
import { useLocation } from 'wouter'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item3'
import QuienesSomos from '../../components/QuienesSomos'

interface Props {
  id: string
  title: string
  text: string
  image: string
  url: string
}

const Index = () => {
  const { data, loading } = useFetch(`/quienes-somos`)
  let dataFilteder = {} as Props
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (data) {
    if (location === '/quienes-somos/historia') {
      dataFilteder = data[0]
    } else {
      dataFilteder = data[1]
    }
  }

  return (
    <Layout>
      <section className='section-main fade-in'>
        {loading ? (
          <Loader />
        ) : (
          <Item
            color='#792477'
            data={dataFilteder}
          />
        )}

        <QuienesSomos />
      </section>
    </Layout>
  )
}

export default Index
