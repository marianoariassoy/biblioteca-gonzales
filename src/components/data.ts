import { Instagram, Facebook } from './icons'

export const menu = [
  {
    title: 'Quienes somos',
    url: '/quienes-somos',
    section: [
      { title: 'Quienes somos', url: '/quienes-somos' },
      { title: 'Manifiesto', url: '/quienes-somos/manifiesto' },
      { title: 'Historia del proyecto', url: '/quienes-somos/historia' },
      { title: 'Donaciones', url: '/donaciones' }
    ]
  },
  {
    title: 'Horacio González',
    url: '/horacio-gonzalez/biografia',
    section: [
      { title: 'Biografía', url: '/horacio-gonzalez/biografia' },
      { title: 'Sobre HG', url: '/horacio-gonzalez/sobreHG' },
      { title: '¿Qué dice HG?', url: '/horacio-gonzalez/que-dice-hg' }
      // { title: 'Descargas', url: '/archivos/catalogo-hg' }
    ]
  },
  {
    title: 'Biblioteca',
    url: '/biblioteca',
    section: []
  },
  {
    title: 'Videoteca',
    url: '/videoteca',
    section: []
  },
  {
    title: 'Montajes',
    url: '/montajes',
    section: [
      { title: 'Montajes', url: '/montajes' },
      { title: 'Mapas', url: '/mapas' },
      { title: 'Fantasmal', url: '/fantasmal' },
      // { title: 'Recomendaciones', url: '/recomendaciones' },
      // { title: 'Textitos', url: '/textitos' },
      { title: 'Testimonios', url: '/testimonios' }
    ]
  },
  {
    title: '¿Qué dice el gato?',
    url: '/que-dice-el-gato',
    section: []
  },
  {
    title: 'Mosaicos',
    url: '/mosaicos',
    section: []
  },
  {
    title: 'Amigxs',
    url: '/seramigos',
    section: []
  }
]

export const social = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Knopfundacion',
    icon: Facebook
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/knopfundacion',
    icon: Instagram
  }
]
