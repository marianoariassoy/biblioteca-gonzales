import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import Boxes from './Boxes'
import Header from './Header'
import Social from '../../components/Social'
import Patrocinadores from './Patrocinadores'
import { Link } from 'wouter'

const Index = () => {
  const [random, setRandom] = useState(0)

  useEffect(() => {
    const random = Math.floor(Math.random() * 4) + 1
    setRandom(random)
  }, [])

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-screen max-w-6xl m-auto px-6 flex flex-col gap-y-3 lg:gap-y-6 relative'>
          <Social />
          <div className='flex justify-end'>
            <Link to='/seramigos'>
              <img
                src='./assets/seramigos.png'
                alt='seramigos'
                className='h-12 hover:opacity-70 transition-all'
              />
            </Link>
          </div>
          <Header random={random} />
          <Boxes random={random} />
        </div>
        <Patrocinadores />
      </section>
    </Layout>
  )
}

export default Index
