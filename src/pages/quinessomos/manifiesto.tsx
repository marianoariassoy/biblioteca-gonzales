import { useEffect } from 'react'
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
    dataFilteder = data[2]
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
