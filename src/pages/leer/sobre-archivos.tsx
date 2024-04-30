import Layout from '../../layout/Layout'
import SobreArchivosItem from './SobreArchivosItem'

const index = () => {
  const data = [
    {
      title: 'Title Test 1',
      file: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600f',
      image: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Title Test 2',
      file: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600f',
      image: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Title Test 3',
      file: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600f',
      image: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]
  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
          <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-green-1'>Sobre Archivos</h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.map((item, index) => (
              <SobreArchivosItem
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
