import { useEffect } from 'react'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item3 from '../../components/Item3'
import { useDataContext } from '../../context/useDataContext'

interface Props {
  id: string
  title: string
  text: string
  image: string
  url: string
}

const Index = () => {
  const { data, loading } = useFetch(`/quienes-somos`)
  const { color } = useDataContext()
  const [location] = useLocation()
  let dataFilteder = {} as Props

  useEffect(() => {
    if (data) {
      const enlace = document.querySelectorAll('a')
      if (enlace) {
        for (let i = 0; i < enlace.length; i++) {
          enlace[i].setAttribute('target', '_blank')
        }
      }
    }
  }, [data])

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
          <Item3
            data={dataFilteder}
            color={color}
          />
        )}
      </section>
    </Layout>
  )
}

export default Index
