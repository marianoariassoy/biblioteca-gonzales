import { Instagram, Facebook } from './icons'

export const menu = [
  {
    title: 'Quienes somos',
    url: '/quienes-somos/historia',
    section: [
      { title: 'Historia del proyecto', url: '/quienes-somos/historia' },
      { title: 'Decálogo BG', url: '/quienes-somos/decalogo' }
    ]
  },
  {
    title: 'Archivo',
    url: '/archivo/archivo',
    section: [
      { title: 'Archivo', url: '/archivo/archivo' },
      { title: 'Biblioteca ', url: '/archivo/biblioteca' },
      { title: 'Cinefilias ', url: '/archivo/cinefilias' }
    ]
  },
  {
    title: 'Leer',
    url: '/leer/sobre-archivos',
    section: [
      { title: 'Sobre archivos', url: '/leer/sobre-archivos' },
      { title: 'Montajes ', url: '/leer/montajes' }
    ]
  },
  {
    title: 'Mirar',
    url: '/mirar/soncats',
    section: [
      { title: 'Soncats', url: '/mirar/soncats' },
      { title: 'Mapas ', url: '/mirar/mapas' }
    ]
  },
  {
    title: 'Horacio González',
    url: '/horacio-gonzalez/acerca',
    section: [
      { title: 'Acerca de HG', url: '/horacio-gonzalez/acerca' },
      { title: 'Dibujos  ', url: '/horacio-gonzalez/dibujos' },
      { title: 'Fotos', url: '/horacio-gonzalez/Fotos' },
      { title: 'Descargas', url: '/horacio-gonzalez/descargas' }
    ]
  },
  {
    title: 'Catálogos',
    url: '/catalogos',
    section: []
  },
  {
    title: 'Agenda',
    url: '/agenda',
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
