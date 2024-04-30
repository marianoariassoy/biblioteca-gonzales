import { useState } from 'react'
import Layout from '../../layout/Layout'

const Index = () => {
  const [itemSelected, setItemSelected] = useState(0)

  const data = [
    {
      id: 1,
      title: 'Evas',
      text: `Los recorridos en torno a Eva, se encuentran en el centro de la escena político-poética 
de la argentina, con visos trágicos y luminosos en igual medida. Una sección de “Montajes” 
está dedicada a su nombre, a Eva: la “abanderada de los humildes”, Eva Duarte, 
Eva María Ibarguren, Cholita, Negrita, María Eva Duarte de Perón, la “chancha”, la señora, 
la “yegua”, la madonna”, “la mujer del látigo”, la “jefa espiritual de la Nación”, “Esa mujer”, 
Evita montonera o simplemente Evita, como ella misma dijo que quería ser recordada. 
Más Evas engloban su nombre: compañera, madre-mala-buena, mujer-hombre, Eva-Ave, 
travesti, puta, trepadora, la creación de Perón, la araña hembra, la piraña Sacerdotisa, 
Empoderatriz, mito, Santa, bastarda, pueblerina y actriz protagónica que la historia coloca y
 vuelve a colocar, con solo nombrarla, en el centro teatral de la memoria política argentina.`
    },
    {
      id: 2,
      title: 'Insurrecciones ',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, amet nobis. Cumque labore ad suscipit architecto doloribus quae voluptate, temporibus, cum autem repellat consequuntur a necessitatibus amet nam deserunt cupiditate!`
    },
    {
      id: 3,
      title: 'Recomendaciones',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, amet nobis. Cumque labore ad suscipit architecto doloribus quae voluptate, temporibus, cum autem repellat consequuntur a necessitatibus amet nam deserunt cupiditate!`
    }
  ]
  const images = [
    'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600'
  ]

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-6'>
          <div className='flex flex-col gap-y-3'>
            <h1 className='font-secondary text-2xl lg:text-4xl font-bold color-orange-1'>Montajes</h1>
            <ul className='flex text-sm submenu [&>li:last-child::after]:hidden'>
              {data.map((item, index) => (
                <li key={index}>
                  <button
                    className={`cursor-pointer ${index === itemSelected ? 'font-bold' : 'hover:underline'} `}
                    onClick={() => setItemSelected(index)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <article className='flex flex-col gap-y-12'>
            <div className='color-blue-1 lg:pl-[19.5rem]'>
              <p className='font-bold mb-3'>
                Montajes es un recorrido por libros y películas de acuerdo a un tópico, autor/a o tema. El material
                pertenece a nuestros archivos y se encuentra a disposición.
              </p>
              <h2 className='uppercase'>{data[itemSelected].title}</h2>
              <p>{data[itemSelected].text}</p>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-4 gap-6'>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt='image'
                  className='w-full h-full object-cover'
                />
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Index
