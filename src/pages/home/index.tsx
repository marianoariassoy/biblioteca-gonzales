import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Boxes from './Boxes'
import Header from './Header'

const Index = () => {
  useEffect(() => {
    const btnMenu = document.getElementById('btn-menu')
    const navMenu = document.getElementById('nav-menu')

    navMenu?.classList.remove('lg:flex')
    btnMenu?.classList.remove('lg:hidden')
  }, [])

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-screen max-w-6xl m-auto px-6 flex flex-col gap-y-3 lg:gap-y-6'>
          <Header />
          <Boxes />
        </div>
      </section>
    </Layout>
  )
}

export default Index
