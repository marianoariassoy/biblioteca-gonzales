-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 16-02-2024 a las 11:29:37
-- Versión del servidor: 5.7.36-log
-- Versión de PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mda07_knop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `image` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item` int(10) NOT NULL,
  `top` int(1) NOT NULL,
  `text` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `text_eng` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `image`, `item`, `top`, `text`, `text_eng`) VALUES
(46, 'feo_d797934e0f.jpg', 90, 0, 'Morro — fotografía digital — Medidas variables — 2022', 'Morro — fotografía digital — Medidas variables — 2022'),
(47, 'feo_fefa3af7f7.jpg', 90, 0, '', ''),
(48, 'feo_6c06aa2960.jpg', 90, 0, '', ''),
(49, 'feo_d31a4aa042.jpg', 90, 0, '', ''),
(50, 'feo_90d2962a73.jpg', 90, 0, '', ''),
(51, 'feo_fc3cc5a37b.jpg', 90, 0, '', ''),
(52, 'feo_5ee38a8c80.jpg', 92, 0, '', ''),
(53, 'feo_090d3b55ad.jpg', 92, 0, '', ''),
(54, 'feo_59ed369faf.jpg', 92, 0, '', ''),
(55, 'feo_20482a17cd.jpg', 92, 0, '', ''),
(56, 'feo_ef625d8f5e.jpg', 92, 0, '', ''),
(57, 'feo_7da85a176b.jpg', 92, 0, '', ''),
(58, 'feo_96b946d7b6.jpg', 93, 0, '', ''),
(59, 'feo_a521b5408e.jpg', 93, 0, '', ''),
(60, 'feo_679abddbc2.jpg', 93, 0, '', ''),
(61, 'feo_ad687cee7a.jpg', 93, 0, '', ''),
(62, 'feo_17dbd72e49.jpg', 93, 0, '', ''),
(63, 'feo_ec7a7447b4.jpg', 93, 0, '', ''),
(64, 'feo_12d04fe3fc.jpg', 94, 0, '', ''),
(65, 'feo_7f2b51db4a.jpg', 94, 0, '', ''),
(66, 'feo_a5e0f7bd38.jpg', 94, 0, '', ''),
(67, 'feo_dd7a3f0230.jpg', 94, 0, '', ''),
(68, 'gloria_114444ba20.jpg', 95, 0, '', ''),
(69, 'gloria_86f16ca3be.jpg', 95, 0, '', ''),
(70, 'gloria_cdb354407f.jpg', 95, 0, '', ''),
(71, 'gloria_f891209534.jpg', 95, 0, '', ''),
(72, 'gloria_b60b4c3603.jpg', 95, 0, '', ''),
(73, 'gloria_1d6ffbe714.jpg', 96, 0, '', ''),
(74, 'gloria_63fe24b495.jpg', 96, 0, '', ''),
(75, 'gloria_779914953d.jpg', 97, 0, '', ''),
(76, 'gloria_8ad0e3e5b2.jpg', 97, 0, '', ''),
(77, 'gloria_4ae5e80df5.jpg', 97, 0, '', ''),
(78, 'gloria_d57684628c.jpg', 97, 0, '', ''),
(79, 'gloria_7f7c7c56e0.jpg', 97, 0, '', ''),
(80, 'gloria_cdad9c2fdb.jpg', 97, 0, '', ''),
(81, 'gloria_e14ff0c42f.jpg', 97, 0, '', ''),
(82, 'gloria_f32d1fcc98.jpg', 98, 0, '', ''),
(83, 'gloria_922f6fed81.jpg', 98, 0, '', ''),
(84, 'gloria_562433066c.jpg', 98, 0, '', ''),
(85, 'gloria_82587daa91.jpg', 98, 0, '', ''),
(86, 'gloria_2b600c3ca2.jpg', 98, 0, '', ''),
(87, 'gloria_f5ddc34961.jpg', 98, 0, '', ''),
(88, 'gloria_4219faf84f.jpg', 98, 0, '', ''),
(89, 'gloria_b7aef1ccec.jpg', 98, 0, '', ''),
(90, 'gloria_6282337432.jpg', 98, 0, '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(10) NOT NULL,
  `type` int(1) DEFAULT NULL,
  `category` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` text COLLATE utf8mb4_unicode_ci,
  `year` int(10) NOT NULL,
  `image` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `top` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `items`
--

INSERT INTO `items` (`id`, `type`, `category`, `title`, `text`, `year`, `image`, `video`, `file`, `url`, `top`) VALUES
(1, 1, '0', NULL, NULL, 0, 'gloria_8c00191649.jpg', '', '', '', 0),
(3, 2, '0', 'Alex Zuy, Florencia Battiti y Pablo Knop con obras de Naum Knop y Jorge Demirjian.', NULL, 2020, 'saltaset_3b1ecf376e.jpg', '', '', '', 0),
(4, 2, '0', 'Ana Badii junto a la obra de Libero Badii', NULL, 2022, 'saltaset_cc9cabbf83.jpg', '', '', '', 0),
(5, 2, '0', 'Lorem ipsum ', NULL, 2019, 'saltaset_c22e726610.jpg', '', '', '', 0),
(6, 2, '0', 'Test', NULL, 2023, 'saltaset_475138ad90.jpg', '', '', '', 0),
(7, 2, '0', 'Alex Zuy, Florencia Battiti y Pablo Knop con obras de Naum Knop y Jorge Demirjian.', NULL, 2019, 'saltaset_9f661db8a4.jpg', '', '', '', 0),
(9, 3, 'dibujos', 'EpÃ­grafe de la obra', NULL, 1940, 'saltaset_98b2e4759d.jpg', '', '', '', 0),
(10, 3, 'dibujos', 'Obra', NULL, 1950, 'saltaset_ba00f7b531.jpg', '', '', '', 0),
(11, 3, 'esculturas', 'Otra obra', NULL, 1960, 'saltaset_9e51945b60.jpg', '', '', '', 0),
(12, 4, '', NULL, 'â€œNaum Knop. Esculturasâ€, Museu de Arte ContemporÃ¢nea JosÃ© Pancetti, San Pablo, Brasil â€œArgentine Art 1989â€, Arch Gallery, Nueva York, Estados Unidos.\r\nâ€œThe Lyric Structures of Naum Knopâ€, Museum of Modern Art of Latin America Gallery at the Organization of American States Building Washington, Estados Unidos.', 1989, NULL, '', '', '', NULL),
(13, 4, '', NULL, 'â€œNaum Knopâ€, Arch Gallery, Nueva York, Estados Unidos.', 1986, NULL, '', '', '', NULL),
(14, 4, '', NULL, 'â€œNaum Knopâ€, Angel NuÃ±ez Galleries, Washington, Estados Unidos.', 1984, NULL, '', '', '', NULL),
(15, 4, '', NULL, 'â€œNaum Knopâ€œ, Vincent Price Gallery, Los Angeles, Estados Unidos.', 1982, NULL, '', '', '', NULL),
(16, 4, '', NULL, 'â€œEncounter of Argentine Plastic Artistsâ€œ, The Argentine American Cultural Foundation,  Los Angeles, Estados Unidos.\r\nMuestra en B. Lewin Galleries, Palm Spring  Beverly Hills, Estados Unidos.', 1981, NULL, '', '', '', NULL),
(17, 4, '', NULL, 'â€œNaum Knopâ€œ, EP Galerie, DÃ¼sseldorf, Alemania.', 1977, NULL, '', '', '', NULL),
(18, 4, '', NULL, 'â€œN. Knop Sculpturesâ€, Art Gallery at Leivik House, Tel-Aviv, Israel.\r\nâ€œExhibition of Sculptures by the argentinian Sculptor Naum Knopâ€.', 1973, NULL, '', '', '', NULL),
(19, 5, '', NULL, 'Premio AdquisiciÃ³n, SalÃ³n de Arte â€œObras para el Hotel Albatrosâ€.', 1967, NULL, '', '', '', NULL),
(20, 5, '', NULL, 'Gran Premio de Honor, LIII SalÃ³n Nacional de Artes PlÃ¡sticas.', 1964, NULL, '', '', '', NULL),
(21, 5, '', NULL, 'Gran Premio de Escultura, XII SalÃ³n Municipal de Artes PlÃ¡sticas Manuel Belgrano.\r\n\r\n', 1963, NULL, '', '', '', NULL),
(22, 5, '', NULL, 'Premio de Honor â€œMinisterio de EducaciÃ³n y Justicia de La NaciÃ³nâ€, El SalÃ³n Nacional de Artes PlÃ¡sticas.', 1962, NULL, '', '', '', NULL),
(23, 5, '', NULL, 'Primer Premio AdquisiciÃ³n, XXXIX SalÃ³n de Rosario\r\n\r\n', 1961, NULL, '', '', '', NULL),
(24, 5, '', NULL, 'Premio AdquisiciÃ³n â€œProvincia de Santa Feâ€, 37 SalÃ³n Anual de Santa Fe.\r\n', 1960, NULL, '', '', '', NULL),
(25, 5, '', NULL, 'Premio, XXXVIII SalÃ³n Anual de Artes PlÃ¡sticas de Rosario.\r\n', 1959, NULL, '', '', '', NULL),
(26, 5, '', NULL, 'Primer Premio, SalÃ³n de Arte de Mar del Plata.', 1958, NULL, '', '', '', NULL),
(27, 6, '', 'Nota Clarin', NULL, 0, NULL, '', '', 'https://www.clarin.com/cultura/abre-puertas-casa-museo-naum-knop-nuevo-espacio-vital-arte_0_wp8aC7Gbd.html', 0),
(29, 6, '', 'TÃ­tulo de la nota', NULL, 0, NULL, '', '', 'https://www.google.com/', 0),
(30, 7, '', 'Legado', 'Lorem ipsum dolor sit amet, <b>consectetuer</b> adipiscing elit. Aenean <i>commodo</i> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.<br>', 0, NULL, '', '', '', NULL),
(39, 9, '', 'Epigrafe de la imagen', NULL, 0, 'saltaset_33dcfb10fe.jpg', '', '', '', 0),
(41, 9, '', 'Otra imagen de la biografia', NULL, 0, 'saltaset_27ad0b0082.jpg', '', '', '', 0),
(31, 7, '', 'La fundacion', 'La FundaciÃ³n Naum Knop (FNK) nace por iniciativa de Pablo y Gabriel \r\nKnop, hijos del escultor,&nbsp; siendo su sede la que fuera su Casa-Taller.<br>Cuenta\r\n con el aval y respaldo de un prestigioso Consejo Directivo formado por \r\nprofesionales de reconocida trayectoria en el campo artÃ­stico de nuestro\r\n paÃ­s.<br>El proyecto y la puesta en valor original de la Casa-Museo \r\ncontÃ³ con el apoyo del Fondo Nacional&nbsp; de las Artes, y culminÃ³ tras \r\nhaber sido restaurado el adoquinado del patio y reparadas las ahora \r\nsalas destinadas a la exhibiciÃ³n permanente de la colecciÃ³n.<br>La FNK \r\ncuenta con un archivo documental en el que se realizan tareas de \r\nrelevamiento, catalogaciÃ³n e investigaciÃ³n sobre la obra del artista e \r\nintercambio de material con diversas instituciones culturales del paÃ­s y\r\n del exterior. AdemÃ¡s, en donde funcionÃ³ el taller, actualmente hay un \r\nÃ¡rea dedicada a la restauraciÃ³n y conservaciÃ³n de las piezas.<br><br>', 0, NULL, '', '', '', NULL),
(32, 7, '', 'La casa museo', 'En 1970 Naum Knop comprÃ³ la casa, antiguo corralÃ³n de principios del siglo pasado, en el barrio de Parque Patricios.<br>', 0, NULL, '', '', '', NULL),
(33, 7, '', 'Consejo de Administracion', '<div><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta assumenda iusto, a ad minus necessitatibus pariatur ipsa dignissimos illo magni obcaecati laudantium, incidunt nemo, dolorem placeat quae explicabo deserunt.</div></div><br>', 0, NULL, '', '', '', NULL),
(34, 7, '', 'Staff', 'Pablo Knop<br>Florencia BelÃ©n MartÃ­nez<br>', 0, NULL, '', '', '', NULL),
(35, 7, '', 'Bibliografia', 'GenÃ©, Horacio Enrique, Conversaciones con Naum Knop, ca. 1990 en prensa, nunca publicado.<br>Chierico, Osiris, Naum Knop, Buenos Aires, Ediciones de Arte Gaglianone, 1987.<br>Svanascini, O., Aguinis, M., Naum Knop. Dibujos, Buenos Aires, Ediciones Lesague, 1983.<br>Brughetti, Romualdo, Naum Knop, Buenos Aires, Ediciones Lesague, 1975.<br>Caride, Vicente, Naum Knop, Buenos Aires, Ediciones Lesague, 1964.<br><br><br><br>', 0, NULL, '', '', '', NULL),
(36, 7, '', 'Eventos', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. <br>', 0, NULL, '', '', '', NULL),
(37, 1, '', NULL, NULL, 0, 'gloria_78e41a76d9.jpg', '', '', '', 0),
(38, 7, '', 'Biografia', 'Naum Knop nace en <b>1917 </b>en Buenos Aires, en el seno de una familia\r\n de origen ruso procedente de Ucrania. Su infancia transcurre en el \r\nbarrio de La Paternal, donde su padre tiene un taller de carpinterÃ­a, \r\nespacio en el que toma contacto por primera vez con la tÃ©cnica de la \r\ntalla en madera. Tras terminar la escuela primaria, trabaja con el \r\nmaestro Luis FernÃ¡ndez y poco despuÃ©s se dedica al diseÃ±o de muebles. \r\nHacia <b>1935 </b>ingresa a la Escuela de Bellas Artes Manuel Belgrano. Entre <b>1941 y 1942</b>\r\n asiste al curso para egresados que dictan Alberto Lagos y Alfredo \r\nBigatti en la Escuela Nacional de Bellas Artes y continÃºa formÃ¡ndose \r\nentre <b>1942 y 1945</b> en la Escuela Superior Ernesto de la CÃ¡rcova \r\ncon Soto AvedaÃ±o, Carlos de la CÃ¡rcova y JosÃ© Fioravanti. En esta Ã©poca \r\npone sus obras en diÃ¡logo con otros jÃ³venes artistas como Libero Badii y\r\n Aurelio Macchi. Hacia <b>1947 </b>realiza su viaje de estudios. Se \r\ndirige a California, Estados Unidos, donde ingresa al Art Institute de \r\nLos Ãngeles. Paralelamente visita museos y galerÃ­as. En enero de <b>1948</b>\r\n organiza su primera exposiciÃ³n en el extranjero, llevada a cabo en Hall\r\n of Ar ts de Beverly Hills en Los Ãngeles. Durante este perÃ­odo recorre \r\nChicago y luego Nueva York. Ese aÃ±o viaja a Europa; su itinerario \r\nincluye Francia, Italia, Suiza e Inglaterra. Como resultado toma \r\ncontacto con la obra de Henry Moore, Jean Arp, Lipchitz, Brancusi, \r\nUmberto Boccioni, Henry Laurens, Ossip Zadkine.<br><br>', 0, NULL, '', '', '', NULL),
(42, 1, '', NULL, NULL, 0, 'gloria_04a4de1e4a.jpg', '', '', '', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `client` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `url` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `date` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `client`, `url`, `date`, `user`, `password`) VALUES
(1, 'Naum Knop', 'http://naum-knop.org/', 'Enero 2024', 'admin', 'Foto30Buscar');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
