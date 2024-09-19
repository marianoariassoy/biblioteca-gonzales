import Layout from '../../layout/Layout'

import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { color } = useDataContext()

  return (
    <Layout>
      <section className='section-main fade-in'>que dice el tago</section>
    </Layout>
  )
}

export default Index
