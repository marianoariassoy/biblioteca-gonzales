import Footer from './Footer'
import GoTop from './GoTop'
import Header from './Header'
import MenuMobile from './NavMobile'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MenuMobile />
      <GoTop />
    </>
  )
}

export default Layout
