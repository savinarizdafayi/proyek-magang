-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: web-app
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `newsposts`
--

DROP TABLE IF EXISTS `newsposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newsposts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsposts`
--

LOCK TABLES `newsposts` WRITE;
/*!40000 ALTER TABLE `newsposts` DISABLE KEYS */;
INSERT INTO `newsposts` VALUES (4,'Updated title.','Isi berita telah diperbarui.','/image/worker.jpg','2024-12-03 08:53:45','2024-12-05 08:42:15'),(5,'Updated title.','Presiden RI meresmikan jalan tol baru yang menghubungkan Jakarta dan Bandung. Jalan tol ini diharapkan dapat mengurangi waktu tempuh perjalanan hingga 30%.','/image/default.png','2024-12-03 08:53:45','2024-12-06 09:22:21'),(6,'Hari Lingkungan Hidup Sedunia Dirayakan di Surabaya','Peringatan Hari Lingkungan Hidup Sedunia berlangsung meriah di Jakarta. Berbagai komunitas lingkungan turut berpartisipasi untuk meningkatkan kesadaran akan pentingnya menjaga bumi.','/image/default.png','2024-12-03 08:53:45','2024-12-31 06:56:03'),(7,'Peluncuran Produk Baru','PT Surveyor Indonesia meluncurkan produk baru untuk mitigasi bencana.','/image/worker.jpg','2024-12-03 09:02:49','2024-12-06 10:45:37'),(8,'Peluang Bisnis untuk Para Investor','PT Surveyor Indonesia memberikan analisis terkait bisnis yang ada di Indonesia.','/image/berita-baru.jpg','2024-12-03 13:01:18','2024-12-19 09:27:13'),(9,'Contoh Berita Baru Ditambahkan','Ini deksripsi berita yang baru ditambahkan.','/image/worker.jpg','2024-12-04 15:35:16','2025-01-26 02:54:05'),(10,'PT Surveyor Indonesia Tandatangani MoU dengan Chaangzhou Architecture Science Research Institute Group','Demi mendorong penguatan penyediaan layanan berbasis TIC (testing, inspection, and certification), khususnya terkait survei, inspeksi, verifikasi, monitoring, dan konsultansi sekaligus meningkatkan penetrasi pasar perkeretaapian di Indonesia, PT Surveyor Indonesia bekerjasama dengan Changzhou Architecture Science Research Institute Group (CBS) dalam peningkatan jenis layanan dan keandalan TIC di sektor transportasi dan perkeretaapian.\n\nPenandatanganan kerja sama ini dilakukan langsung oleh Direktur Utama PT Surveyor Indonesia, Sandry Pasambuna dan Chief Executive Officer CBS, Zhou Jianfeng di Kota Changzhou, Cina.\n\nKerjasama ini terjalin berlandaskan potensi kebutuhan penguatan konektivitas melalui peningkatan keandalan transportasi nasional, salah satunya melalui perkeretaapian, serta mempertimbangkan pengalaman Surveyor Indonesia dalam sektor perkeretaapian sebelumnya, seperti keterlibatan dalam LRT Jabodebek, MRT Jakarta, dan Kereta Cepat Jakarta-Bandung.','/image/berita-1.jpg','2024-12-10 11:43:02','2024-12-31 07:09:05');
/*!40000 ALTER TABLE `newsposts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-26  9:58:53
