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
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (6,'Analisis Bisnis','Kami memahami bahwa setiap keputusan bisnis memerlukan dasar yang kuat dan data yang akurat. Oleh karena itu, layanan analisis bisnis kami dirancang untuk membantu perusahaan Anda menggali peluang dan mengidentifikasi tantangan yang mungkin tidak terlihat. Melalui pendekatan berbasis data, kami memberikan gambaran komprehensif tentang kondisi bisnis Anda saat ini.','/images/worker.jpg','2024-12-13 15:27:56','2024-12-13 15:27:56'),(7,'Pengembangan Strategi Bisnis','Tim kami berdedikasi untuk membantu Anda merumuskan strategi bisnis yang tidak hanya relevan, tetapi juga dapat diimplementasikan dengan mudah. Kami memulai dengan memahami visi dan misi perusahaan Anda, serta tantangan dan peluang yang Anda hadapi. Dari sini, kami menyusun pendekatan yang paling efektif untuk mencapai tujuan Anda. Fokus kami adalah menciptakan strategi yang inovatif dan berkelanjutan. Kami mempertimbangkan perkembangan pasar, kebutuhan konsumen, serta tren teknologi terbaru untuk merancang strategi yang unggul. Pendekatan kami menggabungkan kreativitas dengan analisis kritis untuk memberikan solusi yang relevan di tengah perubahan pasar yang cepat. Kami juga memastikan setiap strategi yang kami rancang dapat disesuaikan dan diadaptasi dengan mudah. Melalui kolaborasi intensif, kami memberikan dukungan yang Anda butuhkan untuk mengimplementasikan strategi dengan sukses dan mencapai hasil yang signifikan.','/images/worker.jpg','2024-12-13 15:29:57','2024-12-13 15:29:57'),(8,'Manajemen Resiko','Dalam lingkungan bisnis yang penuh ketidakpastian, penting bagi perusahaan Anda untuk memiliki sistem manajemen risiko yang tangguh. Layanan kami dirancang untuk membantu Anda meminimalkan potensi ancaman dan memastikan kelancaran operasional. Kami menganalisis berbagai jenis risiko, baik dari aspek internal maupun eksternal, yang dapat mempengaruhi bisnis Anda. Kami bekerja sama dengan Anda untuk mengidentifikasi area kritis yang memerlukan perhatian khusus. Dengan pendekatan yang proaktif, kami membantu Anda merancang rencana mitigasi risiko yang efisien dan terstruktur. Tujuannya adalah agar Anda dapat lebih fokus pada pengembangan bisnis tanpa khawatir akan ancaman yang tidak diinginkan. Selain itu, layanan kami mencakup pemantauan risiko secara berkelanjutan untuk menjaga perusahaan Anda tetap siap menghadapi perubahan. Dengan manajemen risiko yang terintegrasi, perusahaan Anda akan lebih kuat, fleksibel, dan siap menghadapi berbagai tantangan di masa depan.','/images/worker.jpg','2024-12-13 15:30:53','2024-12-13 15:30:53'),(9,'Optimalisasi Operasional','Kami memahami bahwa setiap keputusan bisnis memerlukan dasar yang kuat dan data yang akurat. Oleh karena itu, layanan analisis bisnis kami dirancang untuk membantu perusahaan Anda menggali peluang dan mengidentifikasi tantangan yang mungkin tidak terlihat. Melalui pendekatan berbasis data, kami memberikan gambaran komprehensif tentang kondisi bisnis Anda saat ini. Dengan analisis mendalam ini, perusahaan Anda akan lebih siap dalam merencanakan langkah-langkah strategis ke depan. Kami meninjau berbagai aspek mulai dari performa operasional hingga tren pasar yang relevan. Dengan begitu, Anda dapat lebih fokus pada area yang memiliki potensi besar untuk dikembangkan. Kami menyediakan wawasan yang dapat diandalkan untuk mendukung pertumbuhan jangka panjang. Layanan kami memastikan Anda membuat keputusan bisnis yang lebih baik dan tepat sasaran, memberikan perusahaan Anda keunggulan dalam persaingan yang dinamis.','/images/worker.jpg','2024-12-13 15:32:51','2024-12-13 15:32:51');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
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
