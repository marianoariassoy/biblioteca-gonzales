import Layout from '../../layout/Layout'
import Image from '../../components/Image'

const index = () => {
  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
          <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-green-1'>Horacio González</h1>

          <div className='flex flex-col gap-y-6'>
            <Image
              src='https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
            <p className='color-gray-1 text-sm lg:text-base'>
              En el verano de del 1º de febrero de 1944, a la 1 de la tarde, nació Horacio en la maternidad del Hospital
              Rivadavia, de la ciudad de Buenos Aires. Hacía pocos días, el 15 de enero, la provincia de San Juan había
              sufrido un terremoto que la destruyó totalmente. Un comienzo de año que sacudía al país a la vez que
              anunciaba el comienzo de una nueva etapa política.
              <br />
              <br />
              La familia de Horacio vivía en Villa Pueyrredón, un barrio porteño en los confines de la Capital, cerca de
              la estación del ferrocarril. Aída Canalini, su mamá, pertenecía a una familia de inmigrantes italianos,
              provenientes de Recanati, un pueblo de las colinas que bajan al puerto de Ancona, a orillas del Mar
              Adriático.
              <br />
              <br />
              El nacimiento de Horacio y la llegada de Perón auspiciaban alegría y cierta prosperidad en la familia.
              Fotografías de la mamá con tapado de piel, paseos en Palermo, vacaciones en Córdoba. Cuando nació su
              hermana, casi nueve años después, el hogar ya estaba roto. El padre abandonó a la familia y de a poco se
              dejó de nombrarlo.
              <br />
              <br />
              El abuelo Ulderico había llegado a la Argentina poco antes de la Primera Guerra Mundial, con diez y nueve
              años. Las dos únicas fábricas que existían en Recanati, una de fisarmónicas y otra de peines de hueso
              (donde él trabajaba) habían cerrado. Y fue el cura del pueblo quien empezó a reclutar a los jóvenes que se
              habían quedado sin trabajo. La Iglesia se ocupó de conectarse con los obispados de la Argentina, que
              recibían a los muchachos no bien llegaban. Mano de obra fresca que, en su mayoría, terminó trabajando en
              la extensión del ferrocarril, entonces, en manos de los ingleses. El abuelo no tocaba la fisarmónica,
              tocaba el clarinete en la Banda Municipal de Recanati. En Buenos Aires formó una pequeña banda con otros
              jóvenes del mismo pueblo pero sólo tocaban los domingos y feriados en las glorietas de las plazas o
              acompañando las películas mudas en el foso del cine. El abuelo entró al mundo ferroviario hasta llegar a
              ser capataz en la línea del ferrocarril Mitre, cuyo taller funcionaba detrás de la Estación Miguelete, hoy
              sede de la UNSAM.
              <br />
              <br />
              En Recanati, la abuela Geltrude Gigli vivía en la calle San Vito 15, muy cerca de la Iglesia, a cuyas
              espaldas se enterraban a los muertos. Debía ser por eso que la abuela vivía con cierta religiosidad, sin
              faltar un domingo a misa. Ese día se vestía con lo mejor, calzado nuevo y mantilla negra siempre
              perfumada. Para llegar a la iglesia del barrio se hacía acompañar por el abuelo, que algún juramento
              habría hecho porque jamás entró a una. La abuela se embarcó con su padre, de oficio zapatero, rumbo a
              Buenos Aires, donde la esperaba el abuelo Ulderico para casarse. Pascualina, la madre de la abuela se
              había quedado en Italia, era albañila, tan ruda levantando paredes, como sutil cuando bordaba encajes que
              copiaba de las mantillas usadas en las misas. Al terminar la gran guerra, se embarcó para Buenos Aires.
              <br />
              <br />
              En el viejo galpón para herramientas que sobrevivió en la casa había unos pesados moldes de hierro para
              calzado que habían sido del bisabuelo Lorenzo y dentro de una valija, un mantel amarillento, desgajado,
              con un bordado calado donde se adivinaban dos pájaros a punto de remontar vuelo.
              <br />
              <br />
              Un mundo de obreros con ciertos dones artísticos. Había también un primo escultor y otro cantante lírico
              que no parecían alterar la vida de la familia. Quizás alguna vez. – ¿Que Beniamino era fascista?, ¿y qué
              podía hacer si al teatro asistía Mussolini?–. Después de todo era un artista internacional, gloria de
              Recanati.
              <br />
              <br />
              Cuando vino a la Argentina, la fama del tenor ya lo había alejado de sus parientes inmigrantes. –No
              importa–. La hija de los abuelos, o sea la madre de Horacio, recibió por nombre Aída, la ópera que
              Beniamino cantó en el Colón en 1919, justo cuando ella nació.
              <br />
              <br />
              La casa de los abuelos maternos, el barrio y el ferrocarril dieron entorno a la infancia de Horacio,
              marcada por la aparición temprana de un asma que lo dejaba en cama por un tiempo. El tiempo de la lectura.
              Horacio empezó a coleccionar las revistas de historietas, MisterX, Rayo rojo, El sargento Kirk, sueños de
              aventuras que se empezaron a apilar en una casa donde no había biblioteca, los libros que se apilaban en
              la mesa de luz eran los de préstamo de la Biblioteca Popular “Pueyrredón Sud”, que estaba a pocas cuadras
              de Zamudio 4930, la casa que el abuelo Ulderico construyó y donde Horacio vivió hasta los 24 años.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
