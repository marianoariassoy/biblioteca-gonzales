import { Link } from 'wouter'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Share from '../../components/Share'
import Item from '../../components/Item'

const Index = () => {
  const { id } = useParams() as { id: string }
  const { data, loading } = useFetch(`/actividades`)
  const { data: images, loading: loadingImages } = useFetch(`/imagenes`)

  const url = `http://bibliotecagonzalez.com/actividades/${id}`

  return (
    <Layout>
      <section className='section-main fade-in flex flex-col gap-y-12'>
        {loading && loadingImages ? (
          <Loader />
        ) : (
          data && (
            <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-6'>
              <div className='flex flex-col gap-y-3'>
                <h1 className='font-secondary text-2xl lg:text-3xl font-bold color-orange-1'>Actividades</h1>
                <ul className='flex submenu [&>li:last-child::after]:hidden'>
                  {data.map((item, index) => (
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
              <article className='flex flex-col gap-y-8'>
                <div className='flex flex-col gap-12'>
                  {images &&
                    images
                      .filter(item => item.item === +id)
                      .map(item => (
                        <Item
                          key={item.id}
                          data={item}
                          color='text-black'
                        />
                      ))}
                </div>
              </article>
            </div>
          )
        )}

        <Share url={url} />
      </section>
    </Layout>
  )
}

export default Index