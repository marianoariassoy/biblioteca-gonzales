import Layout from '../../layout/Layout'
import Image from '../../components/Image'

const index = () => {
  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-6'>
          <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-green-1'>Quienes somos</h1>
          <div className='lg:pl-24 flex flex-col gap-y-6'>
            <h2 className='lg:text-xl color-primary font-extrabold'>História del proyecto</h2>
            <p className='color-gray-1 text-sm lg:text-base mb-6 text-wrap max-w-4xl'>
              La idea surgió en el 2018: hacer una Biblioteca Popular. Nos juntamos cuatro personas con las que sentimos
              afinidad inmediata, comenzamos a hablar y a organizarnos sin mucho más que la convicción firme de tener un
              espacio donde poder socializar nuestros libros y revistas. Comenzamos a barajar cómo llamarla, pues fundar
              una BP requiere tener un nombre de una personalidad con la que a la vez, pudiéramos forjar una línea, una
              identidad. De ahí surgieron: “Osvaldo Bayer” - gustaba pero no era muy original -, “Orlando” - gustaba
              pero hacía pensar más Miami que en Virginia Woolf-, “Favalli” - el profesor que juega a truco con Juan
              Salvo antes de la nieve en “El Eternauta” - pero ya existía -. Pensamos en mujeres y surgieron “Juana
              Rouco Buela” y “Eduarda Mansilla” pero ya estaban utilizados. También probamos con nombres más prosaicos
              como “El Balcón” - para mirar desde la superestructura - o “Galpón sur” por la consabida localización.{' '}
              <br />
              Transcurría el Mundial Rusia 2018. Primera ronda y un partido que prometía entre México y Alemania, para
              hinchar a favor del equipo americano. Era un domingo de junio, día del padre y me disponía a ver el
              partido pero suena el teléfono. Era Horacio tal cuál era su costumbre los días del padre o cuando cumplía
              años de llamarme para asegurarse que no me olvidara de saludarlo. Era el fantasma de su espejo pues era él
              quien muchas veces se olvidaba del mío. Nunca me olvidaba, sólo que llamaría a la tarde, un momento en el
              que usualmente siento más ganas de saludar. Me citó en el Havanna, cerca de su casa del barrio de Boedo.
              Me presenté con la camiseta soviética, roja - claro - y con la hoz y el martillo, dispuesta a hablarle de
              hacer una Biblioteca Popular, ya que no podría ver el partido. Se lo propuse. Él aportaría los libros que
              quisiera y yo haría lo mismo con los míos. Así fue dicho, rematando con: “socializar los libros” a tono
              con mi atuendo.
              <br />
              <br />
              - ¿Qué te parece? - ¿Y se podrían dar charlas?
              <br />
              <br />
              Me sorprendió la respuesta porque tenía un sí implícito y una apuesta encaminada a lo que a él le
              importaba
              <br />
              <br />
              - Claro, respondí - Muy buena idea, Florencia, contá con eso.
              <br />
              <br />
              Nunca quedó muy en claro qué significaba “contá con eso”, pero así era nuestra relación como la de muchos,
              muchas con sus padres y madres. Relaciones de silencios y pocas palabras personales. Así era nuestra. Sin
              embargo supe que le gustó la propuesta ya que ese día así lo labró en la dedicatoria del libro sobre que
              acababa de editar. No me lo dedicó con el lacónico “Con cariño, Horacio” de siempre, - sonreía cada vez
              que se lo recordaba pero volvía a poner lo mismo - sino que esta vez dibujó una hoz y un martillo que tomé
              en respuesta a “socializar nuestros libros”. Ganó México 1 a 0. Pero había un inconveniente mayor que
              buscar el nombre pues para tener una BP: tener un lugar, un espacio que se relacionara con un territorio y
              su gente, No lo teníamos, aún no lo tenemos. Luego de la pandemia, acomodamos unas habitaciones en una
              terraza donde tenemos el material para catalogar. <br />
              El endeudamiento de Macri estaba en marcha, vinieron las elecciones, la devaluación y después la pandemia.
              La idea se mantuvo en un clima de incertidumbre y hubo que hacer una pausa. Las ganas no se fueron pero mi
              padre sí, el 22 de junio de 2021 por el Covid. Cuando Liliana Herrero, su compañera de tantos años, quiso
              ordenar, dar los libros y papeles de la casa que compartían, quizá para poder soportar mejor su ausencia,
              me dio parte de los libros de mi padre. Con ellos reflotamos la idea de la Biblioteca e iniciamos el
              camino de crear una Fundación, ahora sí con nombre: Horacio González, con el objetivo de encontrar los
              recursos para alojar en un lugar físico la Biblioteca, motor y motivo principal de nuestro proyecto que
              denominamos González, pues ese nombre reúne, lo personal y colectivo, lo anónimo y también a Horacio. En
              definitiva, un apellido común que contiene en sí el carácter popular que buscábamos.
            </p>
          </div>
          <Image
            src='https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
      </section>
    </Layout>
  )
}

export default index
