import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'
import Slider from '../../components/Slider'
import ReactPlayer from 'react-player'

const Index = () => {
  const { id } = useParams() as { id: string }
  const { data, loading } = useFetch(`/gato`)
  const { data: images, loading: loadingImages } = useFetch(`/imagenes`)
  let dataFiltered = []

  if (data) {
    dataFiltered = data.filter(item => item.id === +id)
  }

  return (
    <Layout>
      <section className='section-main w-screen fade-in'>
        {loading && loadingImages ? (
          <Loader />
        ) : (
          data && (
            <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-8'>
              <h2 className='color-blue-1 text-2xl lg:text-3xl'>{dataFiltered[0].title}</h2>
              <div className='w-full color-primary aspect-square lg:aspect-[5/4] overflow-hidden'>
                {images && <Slider data={images.filter(item => item.item === +id)} />}
              </div>
              <div>
                <div className='lg:text-xl mb-4'>
                  <HTML text={dataFiltered[0].text2} />
                </div>
                <div className='roboto-regular'>
                  <HTML text={dataFiltered[0].text} />
                </div>
              </div>

              {data.video && (
                <div>
                  <ReactPlayer
                    url={data.video}
                    controls
                    width='100%'
                    height='100%'
                  />
                </div>
              )}
              <div className='flex gap-3'>
                {data.url && (
                  <a
                    href={data.url}
                    target='_blank'
                    className='bg-primary text-white px-3 py-2 hover:bg-black'
                  >
                    Link
                  </a>
                )}
                {data.file && (
                  <a
                    href={`./images/${data.file}`}
                    target='_blank'
                    className='bg-primary text-white px-3 py-2 hover:bg-black'
                  >
                    Descargar Archivo
                  </a>
                )}
              </div>
            </div>
          )
        )}
      </section>
    </Layout>
  )
}

export default Index
