// Generates web legal pages from the exact same source as the app.
const fs = require('node:fs');
const ts = require('../huda/node_modules/typescript');
const raw = fs.readFileSync('../huda/src/features/settings/content.ts', 'utf8');
const quranSource = fs.readFileSync('../huda/src/data/quran/index.ts', 'utf8');
const attribution = quranSource.match(/export const quranAttribution\s*=\s*("[^"]+")/)[1];
const source = raw.replace("import { quranAttribution } from '@/data/quran';", `const quranAttribution = ${attribution};`);
const copy = {exports:{}};
new Function('exports','module',ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(copy.exports,copy);
const {settingsPanels: panels, operator, policyDate} = copy.exports;
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const routes = [['index.html','Bantuan'],['privacy.html','Privasi'],['terms.html','Ketentuan'],['sources.html','Sumber'],['delete-account.html','Hapus akun']];
function sections(list) {return list.map(s=>`<section><h2>${esc(s.title)}</h2><p>${esc(s.body).replaceAll('\n\n','</p><p>').replaceAll('\n','<br>')}</p></section>`).join('\n');}
function page(file,title,lead,body) {
 const nav=routes.map(([url,label])=>`<a href="${url}"${url===file?' aria-current="page"':''}>${label}</a>`).join('');
 fs.writeFileSync(file,`<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#11695E"><meta name="description" content="${esc(lead)}"><title>${esc(title)} · Huda</title><link rel="icon" href="assets/icon.png"><link rel="stylesheet" href="styles.css"></head><body><a class="skip" href="#main">Lewati ke isi</a><header><a class="brand" href="index.html"><img src="assets/icon.png" alt="" width="48" height="48"><span>Huda<small>Sahabat perjalanan Al-Qur’an</small></span></a><nav aria-label="Navigasi utama">${nav}</nav></header><main id="main"><div class="intro"><span class="eyebrow">HUDA · INFORMASI PENGGUNA</span><h1>${esc(title)}</h1><p class="lead">${esc(lead)}</p><p class="date">Diperbarui ${esc(policyDate)}</p></div><article>${body}</article></main><footer><p>Huda dikelola oleh ${esc(operator.name)}.</p><a href="mailto:${operator.email}">${operator.email}</a><p>Aplikasi independen untuk menemani perjalanan bersama Al-Qur’an.</p></footer></body></html>\n`);
}
page('index.html','Ruang bantuan Huda','Panduan penggunaan dan informasi tentang akun, privasi, serta ketentuan Huda.', sections(panels.tentang.sections)+sections(panels.bantuan.sections)+sections(panels.kontak.sections));
page('privacy.html',panels.privasi.title,'Informasi yang sama dengan Kebijakan privasi di aplikasi Huda.',sections(panels.privasi.sections)+`<section><h2>Situs informasi Huda</h2><p>Situs ini tidak menambahkan formulir, cookie, atau pelacak analitik. Saat dihosting di GitHub Pages, GitHub mencatat alamat IP pengunjung untuk keamanan layanan. Baca <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">kebijakan privasi GitHub</a>. Informasi ini khusus untuk kunjungan situs web.</p></section><section><h2>Penghapusan akun</h2><p>Lihat <a href="delete-account.html">panduan penghapusan akun Huda</a>.</p></section>`);
page('terms.html',panels.ketentuan.title,'Ketentuan penggunaan yang sama dengan aplikasi Huda.',sections(panels.ketentuan.sections));
page('sources.html',panels.sumber.title,'Atribusi sumber dan lisensi yang sama dengan aplikasi Huda.',sections(panels.sumber.sections));
page('delete-account.html','Hapus akun Huda','Hapus akun sendiri dari Profil di aplikasi Huda, tanpa perlu menghubungi pengelola.',sections(panels.penghapusan.sections)+`<section class="callout"><h2>Alternatif jika tidak dapat mengakses aplikasi</h2><p>Gunakan email hanya jika kamu memerlukan jalur alternatif di luar aplikasi.</p><a class="button" href="mailto:${operator.email}?subject=Penghapusan%20akun%20Huda&amp;body=Saya%20ingin%20menghapus%20akun%20Huda%20dan%20data%20terkait%20alamat%20email%20ini.">Tulis email permintaan penghapusan</a><p>Tombol membuka aplikasi email dan tidak mengirim pesan otomatis.</p></section>`);
// Verify shared legal content is present verbatim after HTML escaping.
for(const [file,key] of [['privacy.html','privasi'],['terms.html','ketentuan'],['sources.html','sumber'],['delete-account.html','penghapusan']]) {
 const html=fs.readFileSync(file,'utf8');
 for(const section of panels[key].sections) if(!html.includes(esc(section.body).replaceAll('\n\n','</p><p>').replaceAll('\n','<br>'))) throw Error(`Content drift: ${file}`);
 console.log(`${file}: matches app copy`);
}
