import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useLocation } from 'wouter'
import { useEffect, useState } from 'react'

const Index = () => {
  const [selected, setSelected] = useState(0)
  const { data, loading } = useFetch(`/archivo`)
  const route = useLocation()[0]

  useEffect(() => {
    if (route === '/archivo/archivo') {
      setSelected(0)
    } else if (route === '/archivo/biblioteca') {
      setSelected(1)
    } else if (route === '/archivo/cinefilias') {
      setSelected(2)
    }
  }, [route])

  return (
    <Layout>
      <section className='section-main fade-in'>
        {loading ? (
          <Loader />
        ) : (
          <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-6'>
            <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-blue-1'>{data[selected].title}</h1>
            <p>{data[selected].text}</p>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
