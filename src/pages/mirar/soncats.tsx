import Layout from '../../layout/Layout'
import SoncatsItem from './SoncatsItem'

const index = () => {
  const data = [
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Julio Cortazar & Pompi',
      image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]
  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
          <div>
            <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-orange-2'>Mirar</h1>
            <h2 className='font-bold color-blue-1 text-xl'>Memes de gatos, libros y archivos</h2>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.map((item, index) => (
              <SoncatsItem
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
