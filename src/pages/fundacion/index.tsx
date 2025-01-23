import Layout from '../../layout/Layout'
import { useEffect } from 'react'
import Item from '../../components/Item3'
import QuienesSomos from '../../components/QuienesSomos'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = {
    title: 'Fundación',
    text: 'El objeto de la Fundación es investigar, estudiar, crear, estimular, restaurar y difundir iniciativas vinculadas al patrimonio cultural argentino tales como libros, revistas y diarios de época así como material audiovisual, destinadas al Arte, la Investigación y la Cultura, en sus distintas manifestaciones, como el cine, el teatro, la música, la literatura y el pensamiento en su confluencia con el mundo digital, las nuevas narrativas y lenguajes, y el espacio cibernético.',
    image: ''
  }

  return (
    <Layout>
      <section className='section-main fade-in'>
        <Item
          color='#792477'
          data={data}
        />

        <QuienesSomos />
      </section>
    </Layout>
  )
}

export default Index
