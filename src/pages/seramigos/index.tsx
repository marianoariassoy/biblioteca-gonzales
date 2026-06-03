import Layout from '../../layout/Layout'

const Index = () => {
  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6'>
          <img
            src='./assets/seramigos.png'
            alt='seramigos'
            className='h-12 w-auto hover:opacity-70 transition-all mb-2 -translate-x-2'
          />
          <h1 className='font-secondary text-xl lg:text-2xl font-bold color-primary'>¡MANGAZO!</h1>
          <h1 className='mb-4 font-secondary text-xl lg:text-2xl font-bold color-primary'>
            ¿Querés formar parte de la Comunidad González?
          </h1>
          <p className='text-xl mb-8'>
            La Biblioteca González es una entidad sin fines de lucro que se propone compartir sus libros y archivos, en
            la que resguardamos y difundimos la obra de Horacio González con intención de continuar su inspiración, y
            difundir distintas maneras de arte y conocimiento. Para que podamos seguir desarrollándonos, creciendo y
            trabajando, ideamos el Mangazo Solidario. Tu aporte nos permite seguir construyendo con compromiso y sin
            ataduras ni mandatos.
          </p>
          <h1 className='mb-4 font-secondary text-xl lg:text-2xl font-bold color-primary'>¡GRACIAS!</h1>
          <p className='text-2xl'>
            Aporte por única vez:{' '}
            <a
              href='link.mercadopago.com.ar/bibliotecagonzalez'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              link.mercadopago.com.ar/bibliotecagonzalez
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Index
