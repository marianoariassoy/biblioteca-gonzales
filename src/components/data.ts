import { Instagram, Facebook } from './icons'

export const menu = [
  {
    title: 'Quienes somos',
    url: '/quienes-somos',
    section: [
      { title: 'Quienes somos', url: '/quienes-somos' },
      { title: 'Decálogo', url: '/quienes-somos/decalogo' },
      { title: 'Historia del proyecto', url: '/quienes-somos/historia' }
    ]
  },
  {
    title: 'Archivos',
    url: '/archivo/archivo',
    section: [
      { title: 'Catálogo Biblioteca', url: '/archivo/catalogo' },
      { title: 'Picadito ', url: '/archivo/picadito' },
      { title: 'Cinefilias ', url: '/archivo/cinefilias' },
      { title: 'Hogueras ', url: '/archivo/hogueras' },
      { title: 'Descargar ', url: '/archivo/descargar' }
    ]
  },
  {
    title: 'Montajes',
    url: '/montajes',
    section: []
  },
  {
    title: '¿Qué dice el gato?',
    url: '/que-dice-el-gato',
    section: []
  },
  {
    title: 'Horacio González',
    url: '/horacio-gonzalez/biografia',
    section: [
      { title: 'Biografía en 10 pasos', url: '/horacio-gonzalez/biografia' },
      { title: 'Sobre HG', url: '/horacio-gonzalez/sobreHC' }
    ]
  },
  {
    title: 'Actividades',
    url: '/actividades',
    section: []
  },
  {
    title: 'Amigxs',
    url: '/amigxs',
    section: []
  },
  {
    title: 'Donaciones',
    url: '/donaciones',
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
