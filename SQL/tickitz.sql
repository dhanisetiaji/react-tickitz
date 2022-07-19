-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 18 Jul 2022 pada 21.01
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tickitz`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `booking`
--

CREATE TABLE `booking` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id_cinema` int(11) NOT NULL,
  `id_schedule` int(11) NOT NULL,
  `seat` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `time` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `booking`
--

INSERT INTO `booking` (`id`, `id_movie`, `id_cinema`, `id_schedule`, `seat`, `time`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '[\'C1\',\'B2\',\'C3\']', '8.30', '2022-06-26 07:34:49', '2022-06-26 07:34:49');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cinemas`
--

CREATE TABLE `cinemas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_cinema` varchar(255) NOT NULL,
  `address_cinema` varchar(255) NOT NULL,
  `image_cinema` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cinemas`
--

INSERT INTO `cinemas` (`id`, `name_cinema`, `address_cinema`, `image_cinema`, `created_at`, `updated_at`) VALUES
(8, 'Cineone', 'Jl. Diponegoro No.01, Purwokerto', '1658114850346-94943946-cineone.svg', '2022-07-18 03:27:30', '2022-07-18 03:27:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `movie`
--

CREATE TABLE `movie` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `release_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `directed_by` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `cast` varchar(255) NOT NULL,
  `synopsis` varchar(1000) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `movie`
--

INSERT INTO `movie` (`id`, `title`, `genre`, `release_date`, `directed_by`, `duration`, `cast`, `synopsis`, `image`, `created_at`, `updated_at`) VALUES
(32, 'Spider-Man 32: Coming Home', 'Adventure, Action, Sci-Fi', '2022-06-25 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1658083625926-77193566-movie.png', '2022-07-10 13:22:47', '2022-07-17 18:47:06'),
(33, 'Lion King', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526835205-122304762-movie.png', '2022-07-11 08:07:15', '2022-07-11 08:07:15'),
(34, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526867198-716599573-movie2.png', '2022-07-11 08:07:47', '2022-07-11 08:07:47'),
(35, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526868567-550121921-movie2.png', '2022-07-11 08:07:48', '2022-07-11 08:07:48'),
(36, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526869835-510499683-movie2.png', '2022-07-11 08:07:49', '2022-07-11 08:07:49'),
(37, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526871073-404114772-movie2.png', '2022-07-11 08:07:51', '2022-07-11 08:07:51'),
(38, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526872206-787124058-movie2.png', '2022-07-11 08:07:52', '2022-07-11 08:07:52'),
(39, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526873423-515668293-movie2.png', '2022-07-11 08:07:53', '2022-07-11 08:07:53'),
(40, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526874557-721199984-movie2.png', '2022-07-11 08:07:54', '2022-07-11 08:07:54'),
(41, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526875657-493088276-movie2.png', '2022-07-11 08:07:55', '2022-07-11 08:07:55'),
(42, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526876671-814430963-movie2.png', '2022-07-11 08:07:56', '2022-07-11 08:07:56'),
(43, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526877710-847420390-movie2.png', '2022-07-11 08:07:57', '2022-07-11 08:07:57'),
(44, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526878744-425408291-movie2.png', '2022-07-11 08:07:58', '2022-07-11 08:07:58'),
(45, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526879852-449019882-movie2.png', '2022-07-11 08:07:59', '2022-07-11 08:07:59'),
(46, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526881064-798474887-movie2.png', '2022-07-11 08:08:01', '2022-07-11 08:08:01'),
(47, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657526882548-291244144-movie2.png', '2022-07-11 08:08:02', '2022-07-11 08:08:02'),
(48, 'Spiderman', 'Adventure, Action, Sci-Fi', '2022-06-28 17:00:00', 'Jon Watss', '2  hours 30 minutes', 'Tom Holland, Michael Keaton, Robert Downey Jr', 'hrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.', '1657595821337-339811504-movie2.png', '2022-07-12 03:17:01', '2022-07-12 03:17:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `schedules`
--

CREATE TABLE `schedules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id_cinema` int(11) NOT NULL,
  `time` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `schedules`
--

INSERT INTO `schedules` (`id`, `id_movie`, `id_cinema`, `time`, `price`, `created_at`, `updated_at`) VALUES
(1, 34, 8, '{\'time\':[\'8.30\',\'9.50\'],\'full\':[]}', '10', '2022-06-26 07:34:04', '2022-07-18 03:27:06');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `firstName` varchar(120) NOT NULL,
  `lastName` varchar(120) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('User','Admin') NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `isVerify` enum('Y','N') NOT NULL,
  `code` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `phone`, `email`, `password`, `role`, `image`, `isVerify`, `code`, `created_at`, `updated_at`) VALUES
(1, 'Dhani', 'Setiaji', '88802893086', 'helo@email.com', 'U2FsdGVkX1/YAgdTYua2pzDY8M3OPVFr5KHaGJotqYQ=', 'User', '', 'Y', '', '2022-07-07 06:37:56', '2022-07-07 09:35:31'),
(4, 'Dhani', 'Setiaji', '88802893086', 'helo1@email.com', 'U2FsdGVkX18db3h197wGPFw3R6U40UlpNjp5rQ9Z4/U=', 'User', '', 'Y', '', '2022-07-07 09:34:57', '2022-07-07 09:34:57'),
(6, 'Dhani', 'Setiaji', '88802893086', 'dhanisetiaji99@gmail.com', 'U2FsdGVkX1+OOMtCWPnBDu8NRQFLDwqiFu5mjsjY0F4=', 'Admin', '', 'Y', '', '2022-07-08 12:24:39', '2022-07-13 16:12:31'),
(7, 'Dhani', 'Setiaji', '88802893086', 'dhani.setiaji@outlook.com', 'U2FsdGVkX1+OOMtCWPnBDu8NRQFLDwqiFu5mjsjY0F4=', 'User', '', 'Y', '', '2022-07-08 12:55:52', '2022-07-08 12:55:52'),
(11, 'Dhani', 'Setiaji', '88802893086', 'invokerplayed@gmail.com', 'U2FsdGVkX19dSvRuM1AeJyARN0ULnsiCu07tqSR+ICE=', 'User', '', 'Y', '', '2022-07-13 14:20:16', '2022-07-13 16:59:29'),
(20, 'Dhani', 'Setiaji', '88802893086', 'dhaniset12d@gmail.com', 'U2FsdGVkX1+c7FY6gpcoh0P/eIc857GvFSjiRfaHvRo=', 'User', '', 'N', 'R5rzyP3CL3ZHRpU6MXq6', '2022-07-15 16:50:09', '2022-07-15 16:50:09');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `booking`
--
ALTER TABLE `booking`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `movie`
--
ALTER TABLE `movie`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT untuk tabel `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
