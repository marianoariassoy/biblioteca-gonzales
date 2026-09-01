-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2024 a las 17:27:38
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `image` varchar(256) NOT NULL,
  `item` int(10) NOT NULL,
  `top` int(1) NOT NULL,
  `text` mediumtext NOT NULL,
  `title` varchar(256) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `image`, `item`, `top`, `text`, `title`) VALUES
(1, 'gonzalez58eb91cd16.jpg', 16, 0, '', ''),
(2, 'gonzalez2d54697669.jpg', 16, 0, '', ''),
(3, 'gonzalez04d31dddfd.jpg', 16, 0, '', ''),
(4, 'gonzalezd9c7d7f203.jpg', 16, 0, '', ''),
(5, 'gonzalezafdd37b3e2.jpg', 19, 0, '', 'Julio Cortazar & Pompi'),
(6, 'gonzalezf7a168a3da.jpg', 19, 0, '', 'María Elena Walsh & Confite'),
(7, 'gonzalezb0a8467e77.jpg', 20, 0, '', 'Mapas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(10) NOT NULL,
  `type` int(1) DEFAULT NULL,
  `category` varchar(256) NOT NULL,
  `title` varchar(256) DEFAULT NULL,
  `subtitle` varchar(256) NOT NULL,
  `text` text DEFAULT NULL,
  `text2` text NOT NULL,
  `image` varchar(256) DEFAULT NULL,
  `video` varchar(256) NOT NULL,
  `file` varchar(256) NOT NULL,
  `url` varchar(256) NOT NULL,
  `top` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `items`
--

INSERT INTO `items` (`id`, `type`, `category`, `title`, `subtitle`, `text`, `text2`, `image`, `video`, `file`, `url`, `top`) VALUES
(2, 1, '', 'Página/12. Entrevista. 28/12/23', '', '“Los últimos 60, 70 años de programas universitarios. La revisión no anula, relee. La relectura de Sartre, Lévi-Strauss y Derrida son urgentes. Humanismo no es solamente \r\nhumanitarismo, una estructura moral. No es una fórmula de beneficencia o rescatismo de la naturaleza en peligro”. ', '0', 'gonzalezbd3458456b.jpg', '', '', '', 0),
(3, 1, '', 'Le Figaró. Entrevista. 4/9/75', '', '“El amor es como una telenovela, siempre tiene giros inesperados y finales sorprendentes”. ', '0', 'gonzalez3b73c5be68.jpg', '', '', '', 0),
(5, 2, '', 'Espacio de formación  académica, artística y  no formal', 'Ciclos de Lectura', '   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium perferendis, fugit voluptatem eligendi voluptate sint autem amet, sit, cumque possimus eaque. Voluptatibus mollitia fugit pariatur, eos explicabo culpa eaque numquam?', '0', 'saltaset_8f25c9af8b.jpg', '', '', '', 0),
(6, 3, '', 'História del proyecto', '', 'La idea surgió en el 2018: hacer una Biblioteca Popular. Nos juntamos cuatro personas con las que sentimos afinidad inmediata, comenzamos a hablar y a organizarnos sin mucho más que la convicción firme de tener un espacio donde poder socializar nuestros libros y revistas. Comenzamos a barajar cómo llamarla, pues fundar una BP requiere tener un nombre de una personalidad con la que a la vez, pudiéramos forjar una línea, una identidad. De ahí surgieron: “Osvaldo Bayer” - gustaba pero no era muy original -, “Orlando” - gustaba pero hacía pensar más Miami que en Virginia Woolf-, “Favalli” - el profesor que juega a truco con Juan Salvo antes de la nieve en “El Eternauta” - pero ya existía -. Pensamos en mujeres y surgieron “Juana Rouco Buela” y “Eduarda Mansilla” pero ya estaban utilizados. También probamos con nombres más prosaicos como “El Balcón” - para mirar desde la superestructura - o “Galpón sur” por la consabida localización.\r\nTranscurría el Mundial Rusia 2018. Primera ronda y un partido que prometía entre México y Alemania, para hinchar a favor del equipo americano. Era un domingo de junio, día del padre y me disponía a ver el partido pero suena el teléfono. Era Horacio tal cuál era su costumbre los días del padre o cuando cumplía años de llamarme para asegurarse que no me olvidara de saludarlo. Era el fantasma de su espejo pues era él quien muchas veces se olvidaba del mío. Nunca me olvidaba, sólo que llamaría a la tarde, un momento en el que usualmente siento más ganas de saludar. Me citó en el Havanna, cerca de su casa del barrio de Boedo. Me presenté con la camiseta soviética, roja - claro - y con la hoz y el martillo, dispuesta a hablarle de hacer una Biblioteca Popular, ya que no podría ver el partido. Se lo propuse. Él aportaría los libros que quisiera y yo haría lo mismo con los míos. Así fue dicho, rematando con: “socializar los libros” a tono con mi atuendo.\r\n\r\n- ¿Qué te parece? - ¿Y se podrían dar charlas?\r\n\r\nMe sorprendió la respuesta porque tenía un sí implícito y una apuesta encaminada a lo que a él le importaba\r\n\r\n- Claro, respondí - Muy buena idea, Florencia, contá con eso.\r\n\r\nNunca quedó muy en claro qué significaba “contá con eso”, pero así era nuestra relación como la de muchos, muchas con sus padres y madres. Relaciones de silencios y pocas palabras personales. Así era nuestra. Sin embargo supe que le gustó la propuesta ya que ese día así lo labró en la dedicatoria del libro sobre que acababa de editar. No me lo dedicó con el lacónico “Con cariño, Horacio” de siempre, - sonreía cada vez que se lo recordaba pero volvía a poner lo mismo - sino que esta vez dibujó una hoz y un martillo que tomé en respuesta a “socializar nuestros libros”. Ganó México 1 a 0. Pero había un inconveniente mayor que buscar el nombre pues para tener una BP: tener un lugar, un espacio que se relacionara con un territorio y su gente, No lo teníamos, aún no lo tenemos. Luego de la pandemia, acomodamos unas habitaciones en una terraza donde tenemos el material para catalogar.\r\nEl endeudamiento de Macri estaba en marcha, vinieron las elecciones, la devaluación y después la pandemia. La idea se mantuvo en un clima de incertidumbre y hubo que hacer una pausa. Las ganas no se fueron pero mi padre sí, el 22 de junio de 2021 por el Covid. Cuando Liliana Herrero, su compañera de tantos años, quiso ordenar, dar los libros y papeles de la casa que compartían, quizá para poder soportar mejor su ausencia, me dio parte de los libros de mi padre. Con ellos reflotamos la idea de la Biblioteca e iniciamos el camino de crear una Fundación, ahora sí con nombre: Horacio González, con el objetivo de encontrar los recursos para alojar en un lugar físico la Biblioteca, motor y motivo principal de nuestro proyecto que denominamos González, pues ese nombre reúne, lo personal y colectivo, lo anónimo y también a Horacio. En definitiva, un apellido común que contiene en sí el carácter popular que buscábamos.', '0', 'saltaset_e48fcb784d.jpg', '', '', '', 0),
(8, 4, '', 'Archivo', '', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sit minus modi voluptatem voluptatibus non similique cumque veritatis quidem provident labore quis ut cum, fugit exercitationem quam maiores nemo est!\r\n\r\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sit minus modi voluptatem voluptatibus non similique cumque veritatis quidem provident labore quis ut cum, fugit exercitationem quam maiores nemo est!\r\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sit minus modi voluptatem voluptatibus non similique cumque veritatis quidem provident labore quis ut cum, fugit exercitationem quam maiores nemo est!\r\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sit minus modi voluptatem voluptatibus non similique cumque veritatis quidem provident labore quis ut cum, fugit exercitationem quam maiores nemo est!', '0', '', '', '', '', 0),
(9, 4, '', 'Biblioteca', '', 'Text', '0', '', '', '', '', 0),
(10, 4, '', 'Cinefilias', '', 'Text', '0', '', '', '', '', 0),
(12, 5, '', 'Title 1', '', NULL, '0', 'gonzalez_6f8cb30950.jpg', '', 'gonzalez8fa79e567a.pdf', '', 0),
(13, 5, '', 'Title 2', '', NULL, '0', 'gonzalez56e0bd3217.jpg', '', 'gonzaleza2223d7cc6.pdf', '', 0),
(14, 5, '', 'Title 3', '', NULL, '0', 'gonzalezb813e53802.jpg', '', 'La_hora_de_los_hornos-675423889-mmed.jpg', '', 0),
(16, 6, '', 'Evas', '', 'Los recorridos en torno a Eva, se encuentran en el centro de la escena político-poética \r\nde la argentina, con visos trágicos y luminosos en igual medida. Una sección de “Montajes” \r\nestá dedicada a su nombre, a Eva: la “abanderada de los humildes”, Eva Duarte, \r\nEva María Ibarguren, Cholita, Negrita, María Eva Duarte de Perón, la “chancha”, la señora, \r\nla “yegua”, la madonna”, “la mujer del látigo”, la “jefa espiritual de la Nación”, “Esa mujer”, \r\nEvita montonera o simplemente Evita, como ella misma dijo que quería ser recordada. \r\nMás Evas engloban su nombre: compañera, madre-mala-buena, mujer-hombre, Eva-Ave, \r\ntravesti, puta, trepadora, la creación de Perón, la araña hembra, la piraña Sacerdotisa, \r\nEmpoderatriz, mito, Santa, bastarda, pueblerina y actriz protagónica que la historia coloca y\r\n vuelve a colocar, con solo nombrarla, en el centro teatral de la memoria política argentina.', 'Montajes es un recorrido por libros y películas de acuerdo a un tópico, autor/a o tema. El material pertenece a nuestros archivos y se encuentra a disposición. ', NULL, '', '', '', 0),
(17, 6, '', 'Insurrecciones ', '', '', '', NULL, '', '', '', 0),
(18, 6, '', 'Recomendaciones', '', '', '', NULL, '', '', '', 0),
(19, 7, '', 'Soncats ', 'Memes de gatos, libros y archivos', NULL, '', NULL, '', '', '', 0),
(20, 7, '', 'Mapas', '', NULL, '', NULL, '', '', '', 0),
(21, 8, '', 'Title', '', NULL, '', 'gonzalez2b80d94177.jpg', '', '', '', 0),
(22, 9, '', '', '', NULL, '', 'gonzalez2d789a6c3d.jpg', '', '', '', 0),
(23, 9, '', '', '', NULL, '', 'gonzalez7469535daf.jpg', '', '', '', 0),
(24, 9, '', '', '', NULL, '', 'gonzalez7505bc96ee.jpg', '', '', '', 0),
(25, 9, '', '', '', NULL, '', 'gonzalezd938dec22e.jpg', '', '', '', 0),
(26, 10, '', 'Archivo', '', NULL, '', NULL, '', '7bdb313c0aab080b77512620b21040a5_BIG.jpg', '', 0),
(27, 13, '', 'Hacer una Biblioteca Popular entendida como puente, pasaje, paraje, lugar “entre”,   alianza entre tiempos, generaciones y sueños.', '', NULL, '', NULL, '', '', '', 0),
(28, 13, '', 'Disponer de un lugar donde conviven variedades, diversas situaciones sociales e historias personales.  Un lugar para ir al encuentro aunque este pueda ser personal y en silencio, entre la multitud o el bullicio.', '', NULL, '', NULL, '', '', '', 0),
(29, 13, '', 'Que cada cual haga lo que cree que puede hacer mejor. Como cuando en un exámen se comienza por la pregunta más fácil', '', NULL, '', NULL, '', '', '', 0),
(30, 13, '', 'No queremos lucrar pero queremos producir. Si conseguimos retribuciones económicas son para ampliar el proyecto,  hacer más cosas, comprar insumos y poder pagar el trabajo', '', NULL, '', NULL, '', '', '', 0),
(31, 13, '', 'El proyecto es colectivo, no para alimentar egos ni nombres propios. Eso no quita que eventual y  alternativamente se ponga en relieve alguno', '', NULL, '', NULL, '', '', '', 0),
(32, 13, '', 'Llevar a cabo la BG es mucho trabajo. Pero cada uno hace una parte y esa parte no es mensurable', '', NULL, '', NULL, '', '', '', 0),
(33, 13, '', 'No creemos en el método comparativo, cuantificable ni competitivo', '', NULL, '', NULL, '', '', '', 0),
(34, 13, '', 'Creemos en el otro, en el juego, en el riesgo, el complemento y la organización.  No necesariamente en ese orden ni en ningún otro', '', NULL, '', NULL, '', '', '', 0),
(35, 13, '', 'Usamos y no usamos la “e” como lenguaje inclusivo de manera estrictamente contingente, sin juzgar a quien lo hace o no', '', NULL, '', NULL, '', '', '', 0),
(36, 13, '', 'Hacemos una red basada en la confianza que amplía sus bases y costados', '', NULL, '', NULL, '', '', '', 0),
(37, 13, '', 'Nos proponemos hacer uso de todos los recursos a nuestro alcance. Identificarlos. Explotarlos, Potenciarlos. ', '', NULL, '', NULL, '', '', '', 0),
(38, 13, '', 'Adoramos los archivos, libros y películas. Historia, imagen y palabra. Pero los archivos no son más importante  son las personas', '', NULL, '', NULL, '', '', '', 0),
(39, 13, '', 'UN orden, no es EL orden', '', NULL, '', NULL, '', '', '', 0),
(40, 13, '', 'Igualar para arriba, privilegiando en cualquier situación a quienes han sido postergadas históricamente ', '', NULL, '', NULL, '', '', '', 0),
(41, 13, '', 'Ante la duda, probar', '', NULL, '', NULL, '', '', '', 0),
(42, 13, '', 'No temer la originalidad. No temer la copia', '', NULL, '', NULL, '', '', '', 0),
(43, 13, '', 'Vale decir: preferiría no hacerlo', '', NULL, '', NULL, '', '', '', 0),
(44, 13, '', 'La potencia del “nosotros” está en la multitud de subjetividades, en la diferencia más que en la repetición.  ¿Con cuántas diferencias somos capaces de convivir?', '', NULL, '', NULL, '', '', '', 0),
(45, 13, '', 'Considerar acción al pensamiento', '', NULL, '', NULL, '', '', '', 0),
(46, 13, '', 'Hacernos preguntas. Por ejemplo, ¿Todavía son necesarias las bibliotecas?', '', NULL, '', NULL, '', '', '', 0),
(47, 3, '', 'Acerca de HC', '', 'En el verano de del 1º de febrero de 1944, a la 1 de la tarde, nació Horacio en la maternidad del Hospital Rivadavia, de la ciudad de Buenos Aires. Hacía pocos días, el 15 de enero, la provincia de San Juan había sufrido un terremoto que la destruyó totalmente. Un comienzo de año que sacudía al país a la vez que anunciaba el comienzo de una nueva etapa política.\r\n\r\nLa familia de Horacio vivía en Villa Pueyrredón, un barrio porteño en los confines de la Capital, cerca de la estación del ferrocarril. Aída Canalini, su mamá, pertenecía a una familia de inmigrantes italianos, provenientes de Recanati, un pueblo de las colinas que bajan al puerto de Ancona, a orillas del Mar Adriático.\r\n\r\nEl nacimiento de Horacio y la llegada de Perón auspiciaban alegría y cierta prosperidad en la familia. Fotografías de la mamá con tapado de piel, paseos en Palermo, vacaciones en Córdoba. Cuando nació su hermana, casi nueve años después, el hogar ya estaba roto. El padre abandonó a la familia y de a poco se dejó de nombrarlo.\r\n\r\nEl abuelo Ulderico había llegado a la Argentina poco antes de la Primera Guerra Mundial, con diez y nueve años. Las dos únicas fábricas que existían en Recanati, una de fisarmónicas y otra de peines de hueso (donde él trabajaba) habían cerrado. Y fue el cura del pueblo quien empezó a reclutar a los jóvenes que se habían quedado sin trabajo. La Iglesia se ocupó de conectarse con los obispados de la Argentina, que recibían a los muchachos no bien llegaban. Mano de obra fresca que, en su mayoría, terminó trabajando en la extensión del ferrocarril, entonces, en manos de los ingleses. El abuelo no tocaba la fisarmónica, tocaba el clarinete en la Banda Municipal de Recanati. En Buenos Aires formó una pequeña banda con otros jóvenes del mismo pueblo pero sólo tocaban los domingos y feriados en las glorietas de las plazas o acompañando las películas mudas en el foso del cine. El abuelo entró al mundo ferroviario hasta llegar a ser capataz en la línea del ferrocarril Mitre, cuyo taller funcionaba detrás de la Estación Miguelete, hoy sede de la UNSAM.\r\n\r\nEn Recanati, la abuela Geltrude Gigli vivía en la calle San Vito 15, muy cerca de la Iglesia, a cuyas espaldas se enterraban a los muertos. Debía ser por eso que la abuela vivía con cierta religiosidad, sin faltar un domingo a misa. Ese día se vestía con lo mejor, calzado nuevo y mantilla negra siempre perfumada. Para llegar a la iglesia del barrio se hacía acompañar por el abuelo, que algún juramento habría hecho porque jamás entró a una. La abuela se embarcó con su padre, de oficio zapatero, rumbo a Buenos Aires, donde la esperaba el abuelo Ulderico para casarse. Pascualina, la madre de la abuela se había quedado en Italia, era albañila, tan ruda levantando paredes, como sutil cuando bordaba encajes que copiaba de las mantillas usadas en las misas. Al terminar la gran guerra, se embarcó para Buenos Aires.\r\n\r\nEn el viejo galpón para herramientas que sobrevivió en la casa había unos pesados moldes de hierro para calzado que habían sido del bisabuelo Lorenzo y dentro de una valija, un mantel amarillento, desgajado, con un bordado calado donde se adivinaban dos pájaros a punto de remontar vuelo.\r\n\r\nUn mundo de obreros con ciertos dones artísticos. Había también un primo escultor y otro cantante lírico que no parecían alterar la vida de la familia. Quizás alguna vez. – ¿Que Beniamino era fascista?, ¿y qué podía hacer si al teatro asistía Mussolini?–. Después de todo era un artista internacional, gloria de Recanati.\r\n\r\nCuando vino a la Argentina, la fama del tenor ya lo había alejado de sus parientes inmigrantes. –No importa–. La hija de los abuelos, o sea la madre de Horacio, recibió por nombre Aída, la ópera que Beniamino cantó en el Colón en 1919, justo cuando ella nació.\r\n\r\nLa casa de los abuelos maternos, el barrio y el ferrocarril dieron entorno a la infancia de Horacio, marcada por la aparición temprana de un asma que lo dejaba en cama por un tiempo. El tiempo de la lectura. Horacio empezó a coleccionar las revistas de historietas, MisterX, Rayo rojo, El sargento Kirk, sueños de aventuras que se empezaron a apilar en una casa donde no había biblioteca, los libros que se apilaban en la mesa de luz eran los de préstamo de la Biblioteca Popular “Pueyrredón Sud”, que estaba a pocas cuadras de Zamudio 4930, la casa que el abuelo Ulderico construyó y donde Horacio vivió hasta los 24 años.', '', 'gonzalezd24bf4dafc.jpg', '', '', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `client` varchar(120) NOT NULL DEFAULT '',
  `url` varchar(120) NOT NULL DEFAULT '',
  `date` varchar(120) NOT NULL DEFAULT '',
  `user` varchar(120) NOT NULL,
  `password` varchar(120) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `client`, `url`, `date`, `user`, `password`) VALUES
(1, 'Biblioteca González', '', 'Mayo 2024', 'admin', 'Foto30Buscar');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
