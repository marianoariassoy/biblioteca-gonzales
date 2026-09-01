-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-12-2022 a las 16:21:00
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `molinos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_cat` int(10) NOT NULL,
  `titulo_cat` varchar(120) COLLATE utf8_spanish2_ci NOT NULL,
  `titulo_ing_cat` varchar(120) COLLATE utf8_spanish2_ci NOT NULL,
  `top_cat` int(10) NOT NULL,
  `texto_cat` text COLLATE utf8_spanish2_ci NOT NULL,
  `texto_ing_cat` text COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(10) NOT NULL,
  `imagen` varchar(256) COLLATE utf8_spanish2_ci NOT NULL,
  `texto` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `texto_ing` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `item` int(10) NOT NULL,
  `top` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(10) NOT NULL,
  `tipo` int(1) DEFAULT NULL,
  `categoria` int(10) DEFAULT NULL,
  `titulo` varchar(256) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `titulo_ing` varchar(256) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `texto` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `texto_ing` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `imagen` varchar(256) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `top` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `client` varchar(120) COLLATE utf8_spanish2_ci NOT NULL DEFAULT '',
  `url` varchar(120) COLLATE utf8_spanish2_ci NOT NULL DEFAULT '',
  `date` varchar(120) COLLATE utf8_spanish2_ci NOT NULL DEFAULT '',
  `user` varchar(120) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(120) COLLATE utf8_spanish2_ci NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `client`, `url`, `date`, `user`, `password`) VALUES
(1, 'Hacienda de Molinos Hotel', '', 'Diciembre 2022', 'admin', 'Molinos2022');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
