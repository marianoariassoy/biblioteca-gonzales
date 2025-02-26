import Layout from '../../layout/Layout'
import QuienesSomos from '../../components/QuienesSomos'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'

const Index = () => {
  const { data, loading } = useFetch(`/textos`)
  if (loading) return <Loader />

  if (data)
    return (
      <Layout>
        <section className='section-main fade-in flex flex-col gap-y-6'>
          <div className='w-full max-w-4xl m-auto flex flex-col gap-y-6'>
            <h1 className='font-secondary text-xl lg:text-2xl font-bold color-primary'>Fundación</h1>
            <div className='flex flex-col gap-y-6'>
              <p className='roboto-regular [&>div>span>a]:underline  [&>div>a]:underline [&>div>span>span>a]:underline'>
                <HTML text={data[0].text} />
              </p>
            </div>
          </div>
          <QuienesSomos />
        </section>
      </Layout>
    )
}

export default Index
