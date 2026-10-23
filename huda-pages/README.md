# Huda Pages

Halaman statis bantuan, kebijakan privasi, dan permintaan penghapusan akun Huda. Disiapkan dari informasi aplikasi pada 23 Oktober 2026. Tidak memerlukan npm, framework, JavaScript browser, atau build saat dihosting.

## Unggah ke GitHub Pages

1. Unggah `index.html`, `privacy.html`, `delete-account.html`, `styles.css`, `.nojekyll`, dan folder `assets/` ke root repositori `AbdiCC/huda-pages`, branch `main`.
2. Buka Settings → Pages → Build and deployment → Deploy from a branch.
3. Pilih branch `main` dan folder `/ (root)`, lalu Save.
4. Setelah deployment berhasil, periksa ketiga alamat berikut di browser tanpa login:
   - https://abdicc.github.io/huda-pages/
   - https://abdicc.github.io/huda-pages/privacy.html
   - https://abdicc.github.io/huda-pages/delete-account.html

URL di atas merupakan alamat yang diharapkan setelah Pages diaktifkan, belum bukti deployment berhasil.

Di Play Console, gunakan `privacy.html` sebagai URL kebijakan privasi dan `delete-account.html` sebagai URL permintaan penghapusan akun. Uji tautan email. Pastikan pengguna juga dapat menemukan jalur penghapusan dari aplikasi.

## Pengelolaan permintaan

Halaman mengarahkan pengguna ke setiya.a.wardoyo@gmail.com; tidak ada formulir atau layanan penghapusan otomatis. Pemilik aplikasi harus menerima, memverifikasi, dan menuntaskan permintaan, termasuk data pada penyedia akun. Penghapusan akun Google tidak termasuk.

Sebelum memakai untuk pengajuan toko, konfirmasi retensi aktual, waktu pemrosesan permintaan, dan kemampuan menghapus akun serta data terkait pada penyedia. Halaman tidak mengarang batas hari atau durasi retensi. Periode yang terkonfirmasi perlu ditambahkan ke kebijakan bila berlaku; jangan menganggap berkas ini sebagai audit kepatuhan menyeluruh. Tinjau juga audiens anak jika aplikasi memang ditujukan untuk anak.

## Mengubah isi

Edit HTML langsung; tidak ada langkah build yang diperlukan untuk GitHub Pages. `build.cjs` adalah alat bantu lokal untuk menghasilkan ulang HTML dari copy dalam proyek saudara `../huda/`; tidak perlu diunggah, dan menjalankannya akan menimpa HTML hasil edit. Tidak ada kredensial atau kode aplikasi yang diperlukan dalam repo publik.

Semua aset dilayani lokal; logo berasal dari aset Huda. Situs tidak menambahkan analitik, cookie, atau font eksternal. Pemrosesan koneksi oleh penyedia hosting dijelaskan pada halaman privasi.
