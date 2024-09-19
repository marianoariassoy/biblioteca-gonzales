import Footer from './Footer'
import Header from './Header'
import MenuMobile from './MenuMobile'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MenuMobile />
    </>
  )
}

export default Layout
