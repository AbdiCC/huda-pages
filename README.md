# Huda Pages

Halaman statis bantuan, kebijakan privasi, dan permintaan penghapusan akun Huda. Disiapkan dari informasi aplikasi pada 23 Oktober 2026. Tidak memerlukan npm, framework, JavaScript browser, atau build saat dihosting.

## Unggah ke GitHub Pages

1. Unggah `index.html`, `privacy.html`, `terms.html`, `sources.html`, `delete-account.html`, `styles.css`, `.nojekyll`, dan folder `assets/` ke root repositori `AbdiCC/huda-pages`, branch `main`.
2. Buka Settings → Pages → Build and deployment → Deploy from a branch.
3. Pilih branch `main` dan folder `/ (root)`, lalu Save.
4. Setelah deployment berhasil, periksa ketiga alamat berikut di browser tanpa login:
   - https://abdicc.github.io/huda-pages/
   - https://abdicc.github.io/huda-pages/privacy.html
   - https://abdicc.github.io/huda-pages/delete-account.html

URL di atas merupakan alamat yang diharapkan setelah Pages diaktifkan, belum bukti deployment berhasil.

Di Play Console, gunakan `privacy.html` sebagai URL kebijakan privasi dan `delete-account.html` sebagai URL permintaan penghapusan akun. Uji tautan email. Pastikan pengguna juga dapat menemukan jalur penghapusan dari aplikasi.

## Pengelolaan permintaan

Penghapusan mandiri dilakukan di aplikasi melalui Profil → Hapus akun dengan konfirmasi permanen. Clerk harus mengizinkan pengguna menghapus akun sendiri (`deleteSelfEnabled`). Akun/profil dihapus melalui API pengguna aktif, rentang latihan lokal akun dibersihkan setelah berhasil. Data perangkat bersama tetap tersimpan. Rebuild APK/AAB diperlukan agar fitur baru tersedia; uji menggunakan akun khusus pengujian.

Web statis ini menjelaskan jalur aplikasi; tidak memiliki login/backend penghapusan sendiri. Email setiya.a.wardoyo@gmail.com tetap sebagai jalur alternatif di luar aplikasi. Pemilik aplikasi harus memproses permintaan alternatif tersebut. Penghapusan akun Google tidak termasuk.

Sebelum memakai untuk pengajuan toko, konfirmasi retensi aktual, waktu pemrosesan permintaan, dan kemampuan menghapus akun serta data terkait pada penyedia. Halaman tidak mengarang batas hari atau durasi retensi. Periode yang terkonfirmasi perlu ditambahkan ke kebijakan bila berlaku; jangan menganggap berkas ini sebagai audit kepatuhan menyeluruh. Tinjau juga audiens anak jika aplikasi memang ditujukan untuk anak.

## Mengubah isi

Ubah teks legal di `../huda/src/features/settings/content.ts`, lalu jalankan `node build.cjs` di folder ini. Generator mengambil juga atribusi sebenarnya dari `../huda/src/data/quran/index.ts` dan memeriksa bahwa semua paragraf legal web sama persis dengan aplikasi. Jangan mengubah HTML legal secara terpisah. Informasi hosting GitHub hanya ditambahkan di web karena khusus kunjungan situs. Ketentuan dan sumber/lisensi juga tersedia sebagai halaman terpisah. Tidak ada build yang diperlukan saat hosting. `build.cjs` hanya alat lokal; tidak perlu diunggah. Tidak ada kredensial atau kode aplikasi yang diperlukan dalam repo publik.

Semua aset dilayani lokal; logo berasal dari aset Huda. Situs tidak menambahkan analitik, cookie, atau font eksternal. Pemrosesan koneksi oleh penyedia hosting dijelaskan pada halaman privasi.
