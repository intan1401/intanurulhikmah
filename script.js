function showFriendInfo() {
  var selectBox = document.getElementById("friendList");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  var friendInfoContainer = document.getElementById("friendInfo");
  var friendImageElement = document.getElementById("friendImage");

  // Reset container
  friendInfoContainer.innerHTML = "";

  // Add information based on the selected friend
  switch (selectedValue) {
    case "marsella-wati":
      friendInfoContainer.innerHTML =
        "<h2>Marsella Wati</h2><img src='fotomarsel.jpg' alt='Marsella Wati Foto'><p>Marsella Wati, lahir di Lebak pada 30 Maret 2004. Saat ini berusia 19 tahun, hobi membaca dan mengganggu pacar. Kesibukannya sebagai mahasiswa teknik informatika di Universitas Pamulang, cita-citanya ingin membahagiakan orang tua, memiliki gaji 20jt/bulan, dan sukses.</p><p><strong>Cast:</strong> Teman Kuliah Intan</p>";
      friendImageElement.src = "fotomarsel.jpg";
      break;
    case "bella-rossa":
      friendInfoContainer.innerHTML =
        "<h2>Bella Rossa</h2><img src='fotobella.jpg' alt='Bella Rossa Foto'><p>Bella Rossa, lahir di Jakarta pada 22 Juni 2003. Saat ini berusia 20 tahun, hobi mencintai. Kesibukannya sebagai mahasiswa teknik informatika di Universitas Pamulang, cita-citanya ingin menjadi kaya.</p><p><strong>Cast:</strong> Teman Kuliah Intan</p>";
      friendImageElement.src = "fotobella.jpg";
      break;
    case "nadya-dau-putri":
      friendInfoContainer.innerHTML =
        "<h2>Nadya Dau Putri</h2><img src='fotonadya.jpg' alt='Nadya Dau Putri Foto'><p>Nadya Dau Putri nama lengkap: Nadya Dau Putri lahir di palembang pada 13 Oktober 2004. umur 19 tahun, hobi apa ya bingung tan. kesibukan saat ini kuliah di jurusan farmasi, universitas Muhammadiyah prof Dr hamka cita cita untuk saat ini lulus dengan gelar S.Farm Apt.</p><p><strong>Cast:</strong> Teman SMP Intan</p>";
      friendImageElement.src = "fotobella.jpg";
      break;
    case "audrey-rahmadanty":
      friendInfoContainer.innerHTML =
        "<h2>Audrey Rahmadanty</h2><img src='fotoaudrey.jpg' alt='Audrey Rahmadanty Foto'><p>Audrey Rahmadanty, lahir di Tangerang pada 16 April 2004. umur 19 tahun, hobi playinggg n typingg. kuliah di Untirta Prodi Pendidikan Sosiologi cita citaingin menjadi humble teacher.</p><p><strong>Cast:</strong> Teman SMA Intan</p>";
      friendImageElement.src = "fotoaudrey.jpg";
      break;
    case "danty-amelya-putri":
      friendInfoContainer.innerHTML =
        "<h2>Danty Amelya Putri</h2><img src='fotoamel.jpg' alt='Danty Amelya Putri Foto'><p>Danti Amelya Putri, lahir di Jakarta 19 juli 2004. umur 19 tahun, hobi berenang. Kesibukannya sebagai mahasiswa teknik informatika di Universitas Pamulang, cita-citanya ingin menjadi orang sukses</p><p><strong>Cast:</strong> Teman Kuliah Intan</p>";
      friendImageElement.src = "fotoamel.jpg";
      break;
    case "sarah-meylina":
      friendInfoContainer.innerHTML =
        "<h2>Sarah Meylina</h2><img src='fotosarah.jpg' alt='Sarah Meylina Foto'><p>Sarah Meylina, lahir di Bogor 31 mei 2003. umur 20 tahun, hobi scroll tiktok sampe subuh. Kesibukan saat ini bekerja di bandung, cita-citanya yg penting sukses banyak duid</p><p><strong>Cast:</strong> Teman Kerja Intan</p>";
      friendImageElement.src = "fotosarah.jpg";
      break;
    case "naelatul-hikmah":
      friendInfoContainer.innerHTML =
        "<h2>Naelatul Hikmah</h2><img src='fotonael.jpg' alt='Naelatul Hikmah Foto'><p>Naelatul Hikmah, lahir di Tangerang 05 maret 2004. umur 19 tahun, hobi main bola. Kesibukannya bekerja ditangerang, cita-citanya ingin menjadi orang sukses</p><p><strong>Cast:</strong> Teman SMP Intan</p>";
      friendImageElement.src = "fotonael.jpg";
      break;
    case "linda-wati":
      friendInfoContainer.innerHTML =
        "<h2>Linda Wati</h2><img src='fotolinda.jpg' alt='Linda Wati Foto'><p>Linda Wati, lahir di Tangerang 08 maret 2003. umur 20 tahun, hobi traveling. Kesibukannya bekerja dan kuliah jurusan teknik informatika di pamulang, cita-citanya ingin menjadi orang sukses</p><p><strong>Cast:</strong> Teman Rumah Intan</p>";
      friendImageElement.src = "fotolinda.jpg";
      break;
    // Add cases for other friends as needed
  }
}
