import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useLocation } from 'wouter'
import HTML from '../../hooks/useHTML'
import Image from '../../components/Image'
import ReactPlayer from 'react-player'
import { useDataContext } from '../../context/useDataContext'
import Share from '../../components/Share'

const Index = () => {
  const [selected, setSelected] = useState(0)
  const [url, setURL] = useState('http://bibliotecagonzalez.com/archivo/archivo')
  const { data, loading } = useFetch(`/archivo`)
  const route = useLocation()[0]
  const { color } = useDataContext()

  useEffect(() => {
    if (route === '/archivo/archivo') {
      setSelected(0)
      setURL('http://bibliotecagonzalez.com/archivo/archivo')
    } else if (route === '/archivo/biblioteca') {
      setSelected(1)
      setURL('http://bibliotecagonzalez.com/archivo/biblioteca')
    } else if (route === '/archivo/cinefilias') {
      setSelected(2)
      setURL('http://bibliotecagonzalez.com/archivo/cinefilias')
    }
  }, [route, url])

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

  return (
    <Layout>
      <section className='section-main fade-in flex flex-col gap-y-6'>
        {loading ? (
          <Loader />
        ) : (
          <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-8'>
            <h1
              className='font-secondary text-2xl lg:text-4xl font-bold'
              style={{ color: color }}
            >
              {data[selected].title}
            </h1>
            {data[selected].image && (
              <div>
                <Image
                  src={data[selected].image}
                  alt={data[selected].title}
                />
              </div>
            )}
            {data[selected].video && (
              <ReactPlayer
                url={data[selected].video}
                playing={true}
                controls={true}
                muted={true}
                loop
                width='100%'
                height='auto'
                className='w-screen aspect-video'
              />
            )}
            <HTML text={data[selected].text} />
            <div>
              {data[selected].file && (
                <a
                  href={data[selected].file}
                  target='_blank'
                  rel='noreferrer'
                  className='bg-primary text-white py-1 px-2'
                >
                  Descargar PDF
                </a>
              )}
            </div>
          </div>
        )}

        <Share url={url} />
      </section>
    </Layout>
  )
}

export default Index
