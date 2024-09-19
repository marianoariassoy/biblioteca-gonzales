import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import Boxes from './Boxes'
import Header from './Header'

const Index = () => {
  const [random, setRandom] = useState(0)

  useEffect(() => {
    const random = Math.floor(Math.random() * 4) + 1
    setRandom(random)
  }, [])

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-screen max-w-6xl m-auto px-6 flex flex-col gap-y-3 lg:gap-y-6'>
          <Header random={random} />
          <Boxes random={random} />
        </div>
      </section>
    </Layout>
  )
}

export default Index
