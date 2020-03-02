import { Component, Injectable, defineInjectable, InjectionToken, Input, EventEmitter, Inject, Output, ViewChild, ContentChildren, ComponentFactoryResolver, inject, Pipe, Directive, ElementRef, HostBinding, Renderer2, HostListener, NgModule } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContextMenuModule } from 'ngx-contextmenu';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { AccordionModule, AlertModule, BsDatepickerModule, BsDropdownModule, CollapseModule, ModalModule, ProgressbarModule, TabsModule, PaginationModule, TimepickerModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';
import { NgxSelectModule } from 'ngx-select-ex';
import { Subject, BehaviorSubject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pilar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PilarComponent {
}
PilarComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-pilar',
                template: ``
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pilar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PilarService {
    constructor() { }
}
PilarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PilarService.ctorParameters = () => [];
/** @nocollapse */ PilarService.ngInjectableDef = defineInjectable({ factory: function PilarService_Factory() { return new PilarService(); }, token: PilarService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/languages/lang-en.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// lang-en.ts
/** @type {?} */
const LANG_EN_NAME = 'en';
/** @type {?} */
const LANG_EN_TRANS = {
    // Button Label
    'add': 'Add',
    'create': 'Create',
    'edit': 'Edit',
    'update': 'Update',
    'delete': 'Delete',
    'back': 'Back',
    'save': 'Save',
    'read': 'Read',
    'reject': 'Reject',
    'revision': 'Revision',
    'validasi': 'Validation',
    'verify': 'Verification',
    'verifikasi': 'Verifikasi',
    'exp_imp': 'Export Import',
    // Login
    'login greet title': 'welcome in UII gateway',
    'login greet message': 'Lorem ipsum dolor sit amet',
    'login user label': 'primary number',
    'login password label': 'password',
    'login button label': 'log in',
    'forgot password label': 'forgot password?',
    'have account label': 'have no account?',
    'create account label': 'create account',
    // Error
    'error empty username': 'NIU can\'t be empty',
    'error empty password': 'Password can\'t be empty',
    '107': 'Username or password is incorrect',
    // Menu
    'MASTER': 'Master Data',
    'ADMISI': 'Admisi App',
    'ACADEMIC': 'Academic App',
    'LIBRARY': 'Library App',
    'FINANCE': 'Finance App',
    'REPORT': 'Report'
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/languages/lang-id.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// lang-id.ts
/** @type {?} */
const LANG_ID_NAME = 'id';
/** @type {?} */
const LANG_ID_TRANS = {
    // General Label
    'id_ID': 'Indonesia',
    'en_EN': 'Inggris',
    'view': 'Lihat',
    'user profile': 'Profile user',
    'search': 'Cari',
    'show': 'Tampilkan',
    'showing': 'Menampilkan',
    'entries': 'Data',
    'total': 'Total',
    'from': 'Mulai',
    'to': 'Sampai',
    'of': 'Dari',
    'serial number': 'Nomor Urut',
    'filtered from': 'Tersaring dari',
    'total entries': 'Total Data',
    'authority': 'Otoritas',
    'authority data': 'Data Otoritas',
    'search authority': 'Cari otoritas',
    'no authorize': 'Tidak ada otoritas',
    'theme': 'Tema',
    'language': 'Bahasa',
    'choose': 'Pilih',
    'choose application': 'Pilih aplikasi',
    'choose module': 'Pilih modul',
    'relogin': 'Lakukan login ulang',
    'required': 'Harus diisi.',
    'file oversize': 'Berkas melebihi ukuran',
    'file not allowed': 'Tipe berkas tidak diizinkan.',
    'exist': 'Sudah Ada',
    'added': 'Sudah ditambahkan',
    'import title': 'Apakah Anda yakin untuk melakukan impor?',
    'import warning': 'Data yang sudah Anda tambahkan akan terhapus, dan digantikan dengan data hasil impor',
    'app auth required': 'Silakan pilih aplikasi dan isi otorisasi',
    'group auth required': 'Silakan pilih group dan isi otorisasi',
    'choose icon': 'Pilih Ikon',
    'empty notifications': 'Tidak ada notifikasi',
    'show more': 'Tampilkan lebih banyak',
    'show all': 'Lihat semua',
    'others': 'Lainnya',
    'student': 'Mahasiswa',
    'home': 'Beranda',
    'logout': 'Keluar',
    'activity log': 'Log Aktifitas',
    'message': 'Pesan',
    'date': 'Tanggal',
    'id member': 'ID Member',
    'no data to display': 'Tidak ada data yang ditampilkan',
    'faculty': 'Fakultas',
    'study program': 'Program studi',
    'not found': 'Tidak ditemukan',
    'authentication': 'Otentikasi',
    'search icon': 'Cari ikon',
    // Button Label
    'add': 'Tambah',
    'create': 'Tambah',
    'edit': 'Ubah',
    'update': 'Ubah',
    'delete': 'Hapus',
    'back': 'Kembali',
    'save': 'Simpan',
    'read': 'Lihat',
    'reject': 'Tolak',
    'revision': 'Revisi',
    'validasi': 'Validasi',
    'verify': 'Verifikasi',
    'verifikasi': 'Verifikasi',
    'exp_imp': 'Ekspor Impor',
    // days label
    'all day': 'Semua hari',
    'sunday': 'Ahad',
    // 'monday': 'Senin',
    'tuesday': 'Selasa',
    'wednesday': 'Rabu',
    'thursday': 'Kamis',
    'friday': 'Jumat',
    'saturday': 'Sabtu',
    // validators
    'should not contain spaces': 'Tidak boleh mengandung spasi. ',
    'must be a number': 'Harus berupa angka. ',
    'at least 8 characters long': 'Panjang karakter minimal 8. ',
    // Field Label
    'no': 'No.',
    'sort number': 'Nomor urut',
    'name': 'Nama',
    'telp': 'No. Telp',
    'fax': 'No. Fax',
    'email': 'Email',
    'created': 'Dibuat',
    'modified': 'Diperbaharui',
    'api data': 'Data API',
    'action': 'Aksi',
    'http method': 'HTTP method',
    'endpoint': 'Endpoint',
    'unit parent': 'Unit Induk',
    'level': 'Level',
    'unit code': 'Kode Unit',
    'unit name': 'Nama Unit',
    'short name': 'Nama Singkat',
    'description': 'Deskripsi',
    'address': 'Alamat',
    'version': 'Versi',
    'application name': 'Nama aplikasi',
    'application code': 'Kode aplikasi',
    'url': 'URL',
    'website': 'Website',
    'role name': 'Nama Peran',
    'group name': 'Nama Grup',
    'user name': 'Nama pengguna',
    'member code': 'Kode member',
    'user id': 'Id Pengguna',
    'primary group': 'Grup Utama',
    'other group': 'Grup Lain',
    'otentification': 'Otentifikasi',
    'status': 'Status',
    'niu': 'NIU',
    'password': 'Password',
    'confirm password': 'Konfirmasi Password',
    'validity period': 'Masa berlaku',
    'active period': 'Masa aktif',
    'module name': 'Nama Modul',
    'action type': 'Tipe Aksi',
    'active': 'Aktif',
    'province': 'Provinsi',
    'primary menu': 'Menu Utama',
    'icon': 'Ikon',
    'type': 'Tipe',
    'primary data': 'Data utama',
    'code': 'Kode',
    'data type': 'Tipe Data',
    'password old': 'Password Lama',
    'password new': 'Password Baru',
    'password is not the same': 'Password tidak sama',
    'two factor authentication': 'Two Factor Authentication',
    'enable': 'Enable',
    'disabled': 'Disable',
    'download the google authenticator app': 'Unduh Aplikasi Google Authenticator',
    'scan and backup the following QRCode': 'Pindai Dan Cadangkan QRCode berikut',
    'enter the code from Google Authenticator': 'Masukkan kode dari Google Authenticator',
    'code authenticator': 'Kode Authenticator',
    'verify 2fa': 'Verifikasi',
    'change': 'Ubah',
    'load data': 'Mengunduh Data ...',
    'user kind': 'Jenis Pengguna',
    'reset password': 'Reset Kata sandi',
    'phone number': 'Nomor ponsel',
    'organization': 'Organisasi',
    'name of agency': 'Nama instansi',
    'authority name': 'Nama otoritas',
    'organizational access': 'Akses organisasi',
    // Login
    'login greet title': 'Selamat Datang <br />di UII<strong>Gateway</strong>',
    'login greet message': ' ',
    'login user label': 'Username',
    'login password label': 'Password',
    'login button label': 'Masuk',
    'forgot password label': 'Lupa password?',
    'have account label': 'Tidak punya akun?',
    'create account label': 'Buat akun',
    'my account': 'Akun Saya',
    'username email label': 'Username/email',
    'login button SSO': 'Masuk dengan SSO',
    // Error
    'error empty username': 'Username tidak boleh kosong',
    'error empty password': 'Password tidak boleh kosong',
    'error empty username email': 'Username/email tidak boleh kosong',
    'error empty code authenticator': 'Kode Authenticator tidak boleh kosong',
    'username/email not registered': 'Email atau username tidak terdaftar',
    '000': 'Layanan sedang sibuk, silakan coba beberapa saat lagi',
    '107': 'Username atau password salah',
    '108': 'Kode authenticator salah',
    '109': 'Username/email tidak terdaftar',
    '401': 'Akun tidak dikenali oleh sistem',
    '403': 'Anda tidak memiliki akses',
    '404': 'Layanan tidak ditemukan',
    '405': 'Permintaan tidak diizinkan',
    '406': 'Permintaan tidak diterima',
    '407': 'Diperlukan autentikasi proxy',
    '408': 'Proses membutuhkan waktu yang lebih lama',
    '500': 'Terjadi kesalahan pada server',
    '501': 'Permintaan tidak dapat diterapkan',
    '502': 'Server mendapat respon yang tidak valid',
    '503': 'Server sedang dalam perawatan',
    '504': 'Server tidak dapat menerima respon tepat waktu',
    '505': 'Versi http tidak didukung',
    // Application Name
    'Administrasi Sistem': 'Administrasi Sistem',
    'MASTER_DATA': 'Data Induk',
    'ADMISI': 'PMB',
    'ACADEMIC': 'Akademik',
    'LIBRARY': 'Perpustakaan',
    'FINANCE': 'Keuangan',
    'REPORT': 'Report',
    // Application Description
    'MASTER_DATA_DESC': 'Lorem ipsum dolor sit amet',
    'ADMISI_DESC': 'Penerimaan Mahasiswa Baru',
    'ACADEMIC_DESC': 'Lorem ipsum dolor sit amet',
    'FINANCE_DESC': 'Lorem ipsum dolor sit amet',
    'REPORT_DESC': 'Lorem ipsum dolor sit amet',
    // System Administration Breadcrumb
    'setting': 'Pengaturan',
    'college': 'Perguruan tinggi',
    'college description': 'Deskripsi perguruan tinggi',
    'unit': 'Unit',
    'unit description': 'Deskripsi Unit',
    'application': 'Aplikasi',
    'application data': 'Data Aplikasi',
    'menu': 'Menu',
    'menu name': 'Nama menu',
    'menu data': 'Data Menu',
    'menu code': 'Kode menu',
    'parent menu': 'Menu induk',
    'module': 'Modul',
    'module data': 'Data Modul',
    'user': 'Pengguna',
    'admin user': 'Pengguna admin',
    'user data': 'Data pengguna',
    'user description': 'Deskripsi Pengguna',
    'group': 'Grup',
    'Group': 'Grup',
    'group data': 'Data Grup',
    'group detail': 'Detail Group',
    'group description': 'Deskripsi Grup',
    'manage group': 'Kelola Grup',
    'role': 'Peran',
    'Role': 'Peran',
    'role data': 'Data Peran',
    'role detail': 'Detail Peran',
    'role description': 'Deskripsi Peran',
    'manage authority': 'Kelola Otoritas',
    'partner': 'Mitra',
    'partner description': 'Deskripsi Mitra',
    'manage action': 'Kelola Aksi',
    'manage menu': 'Kelola menu',
    'mane internal api': 'Kelola api internal',
    'country': 'Negara',
    'district': 'Kabupaten',
    'sub district': 'Kecamatan',
    // System Administration Menu
    // Wizard Step Label
    'step': 'Langkah',
    'first data': 'Data awal',
    'contact': 'Kontak',
    'logo': 'Logo',
    'cancel': 'Batal',
    'next': 'Selanjutnya',
    'previous': 'Sebelumnya',
    'done': 'Simpan',
    'configuration': 'Konfigurasi',
    'manage user': 'Kelola pengguna',
    'manage user authority': 'Kelola otoritas pengguna',
    // Modal Dialog
    'button label no': 'Tidak, batalkan',
    'item delete confirm': 'Apakah anda yakin, akan menghapus data ',
    'item update confirm': 'Apakah anda yakin, akan mengubah data ',
    'items delete confirm': 'Apakah anda yakin, akan menghapus semua data yang anda pilih?',
    'item status reject confirm': 'Apakah anda yakin, akan menolak data ',
    'item status revice confirm': 'Apakah anda yakin, akan merevisi data ',
    'item status verify confirm': 'Apakah anda yakin, akan memverifikasi data ',
    'please choose options': 'Silakan pilih terlebih dahulu opsi ',
    'changeapp confirm title': 'Apakah Anda yakin akan meninggalkan halaman ini?',
    'changeapp confirm message': 'Semua perubahan yang telah dilakukan akan hilang!',
    'disable two factor authentication': 'Apakah anda yakin akan menonaktifkan two factor authentication',
    // SKPI
    'skpi': 'SKPI',
    'skpi mahasiswa': 'SKPI Mahasiswa',
    'data skpi': 'Data SKPI',
    'info umum': 'Informasi Umum',
    'nama matakuliah 0 sks': 'Nama matakuliah 0 SKS',
    'nilai': 'Nilai',
    'verification confirm title': 'Apakah anda yakin data SKPI sudah sesuai dan ingin verifikasi?',
    'verification confirm message': 'Data SKPI yang telah diverifikasi tidak bisa diubah kembali',
    'verification button yes': 'Ya, verifikasi',
    'mahasiswa belum verifikasi': 'Mahasiswa belum verifikasi',
    'data awal skpi': 'Data perbaikan SKPI',
    'cetak skpi': 'Cetak SKPI',
    'program studi': 'Program studi',
    'nim': 'NIM',
    'nama': 'Nama',
    'tanggal status': 'Tanggal status',
    'no ijazah': 'No. Ijazah',
    'validation confirm title': 'Apakah Anda yakin akan memvalidasi data?',
    'validation confirm message': 'Data yang telah divalidasi tidak bisa diubah kembali',
    'validation button yes': 'Ya, validasi',
    'submit confirm title': 'Apakah Anda yakin?',
    'submit confirm message': 'Anda akan menyimpan data perbaikan SKPI',
    'submit button yes': 'Ya, simpan',
    'submit general info confirm message': 'Anda akan menyimpan data informasi umum.',
    'revised information': 'Data SKPI anda sedang direvisi',
    'denied information': 'Pengajuan perbaikan SKPI tidak disetujui oleh Akademik Fakultas. Silakan ubah perbaikan data SKPI Anda',
    // tslint:disable-next-line:max-line-length
    'approved information': 'Pengajuan perbaikan SKPI sudah disetujui oleh Divisi Akademik Fakultas. Jika masih ada data yang ingin diperbaiki silakan ajukan perbaikan lagi, jika tidak silakan verifikasi',
    'verified information': 'Anda sudah melakukan verifikasi. SKPI Anda dapat dilihat setelah Akademik Fakultas selesai mencetak.',
    'printed information': 'SKPI anda sudah dicetak',
    'abstraction': 'Abstraksi',
    'spti': 'Sistem Pendidikan Tinggi di Indonesia',
    'kkni': 'Kerangka Kualifikasi Nasional Indonesia',
    'note': 'Catatan',
    'activated success': 'Berhasi Aktifasi',
    'activated status success': 'Berhasil update status aplikasi',
    'curriculum': 'Kurikulum',
    'achievement of graduate learning': 'Capaian pembelajaran lulusan',
    'achievement of learning': 'Capaian pembelajaran',
    'domain of learning': 'Ranah pembelajaran',
    'cpl code': 'Kode CPL',
    'print confirm title': 'Apakah Anda yakin akan mencetak data?',
    'print button yes': 'Ya, cetak',
    // rujukan
    'report name': 'Nama report',
    'jasper report': 'Jasper report',
    'template report': 'Template report',
    'url jasper': 'URL Jasper',
    'parameter': 'Parameter',
    'reference': 'Rujukan',
    // regional data
    'regional data': 'Data wilayah',
    'country code': 'Kode negara',
    'country name': 'Nama negara',
    'province code': 'Kode provinsi',
    'province name': 'Nama provinsi',
    'district code': 'Kode kabupaten',
    'district name': 'Nama kabupaten',
    'sub district code': 'Kode kecamatan',
    'sub district name': 'Nama kecamatan',
    // college
    'accreditation': 'Akreditasi',
    'choose accreditation': '- Pilih Akreditasi-',
    'sk establishment': 'SK Pendirian',
    // SKP
    'data master': 'Master data',
    'master type': 'Master tipe',
    'activity': 'Kegiatan',
    'type name': 'Nama tipe',
    'type description': 'Deskripsi tipe',
    'activity name': 'Nama kegiatan',
    'activity status': 'Status kegiatan',
    'activity type': 'Jenis kegiatan',
    'scope of activity': 'Lingkup kegiatan',
    'skp of activity': 'Kegiatan SKP',
    'activity classification': 'Klasifikasi kegiatan',
    'activity level': 'Tingkat kegiatan',
    'proof of activity': 'Bukti kegiatan',
    'activity kind': 'Jenis',
    'location activity': 'Lokasi kegiatan',
    'organizers activity': 'Penyelenggara kegiatan',
    'skp points': 'Bobot SKP',
    'select': 'Pilih',
    'select the organizer': 'Pilih Penyelenggara Kegiatan',
    'other organizer': 'Penyelenggara lain',
    'event publish url': 'URL publikasi kegiatan',
    'date of event': 'Tanggal kegiatan',
    'hours of event': 'Jam kegiatan',
    'point range of skp': 'Rentang bobot SKP',
    'minimum points': 'Bobot minimum',
    'maksimum points': 'Bobot maksimum',
    'participation': 'Keikutsertaan',
    'student name': 'Nama mahasiswa',
    'type of participation': 'Jenis partisipasi',
    'verification': 'Verifikasi',
    'data name': 'Nama data',
    'data description': 'Deskripsi data',
    'activity description': 'Deskripsi kegiatan',
    'location': 'Lokasi',
    'organizers': 'Penyelenggara',
    // Monitor
    'accepted at': 'Diterima di',
    'accepted': 'Diterima',
    'all building': 'Semua gedung',
    'all capacity': 'Semua kapasitas',
    'all category': 'Semua kategori',
    'all selection': 'Semua jalur',
    'all periode': 'Semua gelombang',
    'apply': 'Terapkan',
    'building': 'Gedung',
    'capacity': 'Kapasitas',
    'category': 'Kategori',
    'choose building': 'Pilih gedung',
    'choose capacity': 'Pilih kapasitas',
    'choose category': 'Pilih kategori',
    'choose date range': 'Pilih rentang tanggal',
    'choose selection': 'Pilih jalur',
    'choose periode': 'Pilih gelombang',
    'customize date': 'Sesuaikan tanggal',
    'detail': 'Detail',
    'doing test': 'Sedang tes',
    'english': 'B. Inggris',
    'export': 'Ekspor',
    'failed': 'Gagal',
    'female capacity': 'Kapasitas (Perempuan)',
    'female filled': 'Terisi (Perempuan)',
    'file received': 'Berkas diterima',
    'file validation': 'Validasi berkas',
    'filled': 'Terisi',
    'from date': 'Dari tanggal',
    'gender': 'Gender',
    'graph': 'Grafik',
    'logic and analytic': 'Logika & Analisis',
    'logic': 'Logika',
    'male capacity': 'Kapasitas (Laki-laki)',
    'male filled': 'Terisi (Laki-laki)',
    'mandiri': 'Mandiri',
    'math': 'Matematika',
    'medical': 'Kedokteran',
    'no. upcm': 'No. UPCM',
    'not doing test': 'Belum tes',
    'not verified': 'Gagal terverifikasi',
    'filled data': 'Isi data',
    'overview': 'Ikhtisar',
    'potency': 'Potensi',
    'print': 'Cetak',
    'program 1': 'Program studi pilihan 1',
    'program 2': 'Program studi pilihan 2',
    'registration date': 'Tanggal daftar',
    'registration time': 'Waktu daftar',
    'religion': 'Agama',
    'room': 'Ruang',
    'set date': 'Atur tanggal',
    'set time': 'Atur waktu',
    'table number': 'No. meja',
    'table': 'Tabel',
    'this month': 'Bulan ini',
    'this week': 'Minggu ini',
    'this year': 'Tahun ini',
    'time': 'Jam',
    'today': 'Hari ini',
    'until date': 'Sampai tanggal',
    'verified': 'Terverifikasi',
    'waiting': 'Menunggu',
    'international': 'Internasional',
    'national': 'Nasional',
    'average': 'Rata-rata',
    'Remaining time': 'Sisa waktu',
    'is done': 'Dikerjakan',
    'pbt type': 'Jenis',
    'pbt category': 'Kategori',
    'Male': 'Laki-laki',
    'Female': 'Perempuan',
    // curriculum
    'university curriculum': 'Kurikulum universitas',
    'program curriculum': 'Kurikulum prodi',
    'vision': 'Visi',
    'mission': 'Misi',
    'graduate profile': 'Profil lulusan',
    'value': 'Nilai',
    'score': 'Bobot',
    'duplicate': 'Salin',
    'availability code': 'Kode ketersediaan',
    'availability name': 'Nama ketersediaan',
    'retrieval type code': 'Kode sifat pengambilan',
    'retrieval type name': 'Nama sifat pengambilan',
    'learning media code': 'Kode media pembelajaran',
    'learning media name': 'Nama media pembelajaran',
    'lecture type code': 'Kode jenis kuliah',
    'lecture type name': 'Nama jenis kuliah',
    'learning type code': 'Kode bentuk pembelajaran',
    'learning type name': 'Nama bentuk pembelajaran',
    'educational level': 'Jenjang pendidikan',
    'educational level code': 'Kode jenjang pendidikan',
    'educational level name': 'Nama jenjang pendidikan',
    'assessment type code': 'Kode jenis penilaian',
    'assessment type name': 'Nama jenis penilaian',
    'final assessment name': 'Nama sistem penilaian akhir',
    'curriculum group name': 'Nama kelompok kurikulum',
    'semester code': 'Kode semester',
    'semester name': 'Nama semester',
    'course group name': 'Nama kelompok matakuliah',
    'course group short name': 'Nama singkat kelompok matakuliah',
    'curriculum code': 'Kode kurikulum',
    'curriculum name': 'Nama kurikulum',
    'certificate of validation number': 'Nomor SK pengesahan',
    'certificate of validation date': 'Tanggal SK pengesahan',
    'start date': 'Mulai berlaku',
    'at least one selected': 'Pilih minimal satu',
    'duplicate assassement type from curriculum': 'Salin jenis penilaian dari kurikulum',
    'duplicate subject type from curriculum': 'Salin matakuliah dari kurikulum',
    'assessment type must not be the same': 'Jenis penilaian tidak boleh sama',
    'total score': 'Nilai total',
    'report score': 'Nilai rapor',
    'recitation (juz)': 'Hafalan (juz)',
    'quota': 'Kuota',
    'changing': 'Keterisian (%)',
    'remaining quota': 'Sisa kuota',
    'CBT registrant': 'Pendaftar CBT',
    'CBT accepted': 'CBT diterima',
    'PBT registrant': 'Pendaftar PBT',
    'PBT accepted': 'PBT diterima',
    'PSB registrant': 'Pendaftar PSB',
    'PSB accepted': 'PSB diterima',
    'PHA registrant': 'Pendaftar PHA',
    'PHA accepted': 'PHA diterima',
    'registration': 'Registrasi',
    'resign': 'Undur diri',
    'final registrant': 'Reg. bersih',
    'stage': 'Jenjang',
    'choice one': 'Pilihan 1',
    'choice two': 'Pilihan 2',
    'total registran': 'Pendaftar total',
    'registran': 'Pendaftar',
    'study programs': 'Prodi',
    'reguler': 'Reguler',
    // Schedule
    'Academic year': 'Tahun akademik',
    'academic year': 'Tahun akademik',
    'All': 'Semua',
    'Choose': 'Pilih',
    'Description': 'Keterangan',
    'exam schedule': 'Jadwal ujian',
    'exam session': 'Sesi ujian',
    'exam': 'Ujian',
    'finish': 'Selesai',
    'No': 'Tidak',
    'periode': 'Semester',
    'pic': 'Penanggung jawab',
    'publish': 'Terbitkan',
    'Published by': 'Diterbitkan oleh',
    'Published date': 'Tanggal terbit',
    'range starts': 'Rentang mulai',
    'Regular schedule': 'Jadwal reguler',
    'regular session': 'Sesi reguler',
    'regular sync': 'Sinkron reguler',
    'session name': 'Nama sesi',
    'start': 'Mulai',
    'Study program': 'Program studi',
    'sync': 'Sinkronisasi',
    'Synchronized by': 'Disinkronisasi oleh',
    'Synchronized data': 'Data yang disinkronkan',
    'Yes': 'Ya',
    'return sync': 'Sinkronisasi balik',
    // ras
    'package': 'Paket',
    'period': 'Periode',
    'course': 'Matakuliah',
    'credits': 'SKS',
    'lecturer': 'Dosen',
    'day': 'Hari',
    'session': 'Sesi',
    'package name': 'Nama paket',
    'list of subject': 'Daftar matakuliah',
    'all session': 'Semua sesi',
    'publisher': 'Penerbit',
    'publish date': 'Tanggal terbit',
    'all semester': 'Semua semester',
    'all class': 'Semua kelas',
    'all quota': 'Semua kuota',
    'courses not found': 'Matakuliah tidak ditemukan',
    'search course': 'Cari matakuliah',
    'class name': 'Kelas',
    'credit quota': 'Jatah SKS',
    'list of ras': 'Isian RAS',
    'total course': 'Total matakuliah',
    'total course credits': 'Total SKS matakuliah',
    'subject schedule collision': 'Ada tabrakan jadwal kuliah',
    'the course has been chosen': 'Matakuliah sudah dipilih',
    'this package will be publish for': 'Paket ini akan diterbitkan untuk',
    'nim range': 'Rentang NIM',
    'RAS self': 'RAS mandiri',
    'RAS revision': 'RAS revisi',
    'on time schedule': 'Jadwal RAS',
    'revision schedule': 'Jadwal revisi RAS',
    'setting RAS': 'Pengaturan RAS',
    'no courses can be displayed': 'Tidak ada matakuliah yang tersedia',
    'no recommended courses': 'Tidak ada rekomendasi matakuliah',
    'RAS history': 'Riwayat RAS',
    'courses': 'Matakuliah',
    'sks': 'SKS',
    'date RAS': 'Tanggal awal RAS',
    'date action': 'Tanggal aksi',
    'doer': 'Pelaku',
    'nik/nim': 'NIK / NIM',
    'not enough credit': 'Jatah SKS tidak mencukupi',
    'cart empty': 'Keranjang RAS masih kosong',
    'exam schedule collision': 'Ada tabrakan jadwal ujian',
    'last synchronized': 'Terakhir disinkronisasi',
    'warning': 'Peringatan',
    'confirm button delete yes': 'Ya, hapus',
    'from this class': 'dari kelas ini ?',
    'can not keyin because has invoice': 'Anda belum bayar angsuran',
    'can not keyin because not an active student': 'Anda bukan mahasiswa aktif',
    'can not keyin because below minimum semester': 'Anda tidak boleh melakukan key-in mandiri',
    'can not keyin because KKN': 'Anda tidak dapat melakukan key-in, karena sedang KKN',
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/providers/translations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// translation token
/** @type {?} */
const TRANSLATIONS = new InjectionToken('translations');
// all traslations
// export const dictionary : any = {
// 	[LANG_EN_NAME]: LANG_EN_TRANS,
// 	[LANG_ID_NAME]: LANG_ID_TRANS,
// };
/** @type {?} */
const dictionary = {
    'en': LANG_EN_TRANS,
    'id': LANG_ID_TRANS,
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/accordion.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionService {
    constructor() {
        /**
         * isOpen subscription
         */
        this.subject = new Subject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setIsOpen(value) {
        this.subject.next(value);
    }
    /**
     * @return {?}
     */
    getIsOpen() {
        return this.subject.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setIsAnimated(value) {
        this._isAnimated = value;
    }
    /**
     * @return {?}
     */
    getIsAnimated() {
        return this._isAnimated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setCloseOthers(value) {
        this._closeOthers = value;
    }
    /**
     * @return {?}
     */
    getCloseOthers() {
        return this._closeOthers;
    }
}
AccordionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AccordionService.ctorParameters = () => [];
/** @nocollapse */ AccordionService.ngInjectableDef = defineInjectable({ factory: function AccordionService_Factory() { return new AccordionService(); }, token: AccordionService, providedIn: "root" });
if (false) {
    /**
     * turn on/off animation
     * @type {?}
     * @protected
     */
    AccordionService.prototype._isAnimated;
    /**
     * if 'true', expanding one item will close other panels
     * @type {?}
     * @protected
     */
    AccordionService.prototype._closeOthers;
    /**
     * isOpen subscription
     * @type {?}
     */
    AccordionService.prototype.subject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/accordion/accordion.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionComponent {
    /**
     * @param {?} accordionSvc
     */
    constructor(accordionSvc) {
        this.accordionSvc = accordionSvc;
        this.groups = [];
    }
    /**
     * turn on/off animation
     * @param {?} value
     * @return {?}
     */
    set isAnimated(value) {
        this.accordionSvc.setIsAnimated(value);
    }
    /**
     * if 'true', expanding one item will close others
     * @param {?} value
     * @return {?}
     */
    set closeOthers(value) {
        this.accordionSvc.setCloseOthers(value);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    closeOthersPanels(openGroup) {
        if (!this.accordionSvc.getCloseOthers()) {
            return;
        }
        this.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        (group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        }));
    }
    /**
     * @param {?} group
     * @return {?}
     */
    addGroup(group) {
        this.groups.push(group);
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-accordion',
                template: `<ng-content></ng-content>`,
                providers: [AccordionService]
            }] }
];
/** @nocollapse */
AccordionComponent.ctorParameters = () => [
    { type: AccordionService }
];
AccordionComponent.propDecorators = {
    isAnimated: [{ type: Input, args: ['isAnimated',] }],
    closeOthers: [{ type: Input, args: ['closeOthers',] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AccordionComponent.prototype.groups;
    /**
     * @type {?}
     * @private
     */
    AccordionComponent.prototype.accordionSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/accordion/accordion-group/accordion-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionGroupComponent {
    /**
     * @param {?} accordionSvc
     * @param {?} accordion
     */
    constructor(accordionSvc, accordion) {
        this.accordionSvc = accordionSvc;
        /**
         * initialize accordion group condition
         */
        this.isOpen = false;
        /**
         * disable an accordion
         */
        this.isDisabled = false;
        /**
         * an emitter which will trigerred if user open/close a panel
         */
        this.isOpenChange = new EventEmitter();
        /**
         * enable/disable isAnimated for button
         */
        this.isAnimated = false;
        this.currentClass = 'uii-accordion-group-heading panel-default';
        this.accordion = accordion;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.accordion.addGroup(this);
        this.initIsAnimated();
    }
    /**
     * @return {?}
     */
    initIsAnimated() {
        this.isAnimated = this.accordionSvc.getIsAnimated();
    }
    /**
     * @return {?}
     */
    panelClicked() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
            this.accordionSvc.setIsOpen(this.isOpen);
            this.accordion.closeOthersPanels(this);
            this.isOpenChange.emit(this.isOpen);
        }
    }
}
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-accordion-group',
                template: `
    <div
      class="uii-accordion-group panel-default"
      [ngClass]="{
        'panel-primary': this.panelClass === 'panel-primary',
        'panel-secondary': this.panelClass === 'panel-secondary',
        'panel-tertiary': this.panelClass === 'panel-tertiary',
        'panel-info': this.panelClass === 'panel-info',
        'panel-warning': this.panelClass === 'panel-warning',
        'panel-danger': this.panelClass === 'panel-danger'
      }">
      <div (click)="panelClicked()"
           [class]="currentClass"
           [ngClass]="{
              'disabled': isDisabled,
              'panel-primary': this.panelClass === 'panel-primary',
              'panel-secondary': this.panelClass === 'panel-secondary',
              'panel-tertiary': this.panelClass === 'panel-tertiary',
              'panel-info': this.panelClass === 'panel-info',
              'panel-warning': this.panelClass === 'panel-warning',
              'panel-danger': this.panelClass === 'panel-danger'
            }">
        <h4 *ngIf="heading; else noHeading">
          {{ heading }}
          <span class="animate-button" *ngIf="isAnimated; else nonAnimate">
            <i class="fa fa-chevron-down"
               [ngClass]="{ 'open': isOpen }"></i>
          </span>
          <ng-template #nonAnimate>
            <span class="non-animate-button">
              <i class="fa fa-chevron-down"
                [ngClass]="{ 'open': isOpen }"></i>
            </span>
          </ng-template>
        </h4>
        <ng-template #noHeading>
          <h4>
            <ng-content select="[uii-accordion-heading]"></ng-content>
          </h4>
        </ng-template>
      </div>
      <div uiiCollapse [isOpen]="isOpen" [selectedGroup]="isOpen" class="uii-accordion-group-content uii-accordion-group-content-none uii-accordion-group-content-hide">
        <div>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
                styles: [".relative{position:relative}.uii-accordion-group{padding:1px;box-shadow:0 6px 15px rgba(36,37,38,.08);margin-bottom:2rem}.uii-accordion-group-heading>h4{font-size:14px;color:#fff;padding:1.5rem;position:relative!important;margin:0}.uii-accordion-group-heading>h4>span.animate-button:first-child{position:absolute;top:30%;right:0;margin-right:2rem}.uii-accordion-group-heading>h4>span.animate-button:first-child>i{color:#fff;transition:.25s ease-in-out}.uii-accordion-group-heading>h4>span.animate-button:first-child>i.open{transform:rotate(180deg)}.uii-accordion-group-heading>h4>span.non-animate-button:first-child{position:absolute;top:30%;right:0;margin-right:2rem}.uii-accordion-group-heading>h4>span.non-animate-button:first-child>i{color:#fff}.uii-accordion-group-heading>h4>span.non-animate-button:first-child>i.open{transform:rotate(180deg)}.uii-accordion-group-heading:hover{cursor:pointer}.uii-accordion-group-heading.disabled{background-color:#bdbdbd!important}.uii-accordion-group-heading.disabled:hover{cursor:default!important}.uii-accordion-group-content{transition:.25s ease-in-out;background-color:#f5f5f5}.uii-accordion-group-content-none{display:none}.uii-accordion-group-content-none>div{padding:15px}.uii-accordion-group-content-hide{max-height:0;overflow:hidden}.uii-accordion-group-content-hide>div{padding:15px}.panel-default{background-color:#bdbdbd}.panel-primary{background-color:#093697!important}.panel-secondary{background-color:#29b6f6!important}.panel-tertiary{background-color:#c0ca33!important}.panel-info{background-color:#01579b!important}.panel-warning{background-color:#f9a825!important}.panel-danger{background-color:#d32f2f!important}"]
            }] }
];
/** @nocollapse */
AccordionGroupComponent.ctorParameters = () => [
    { type: AccordionService },
    { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] }] }
];
AccordionGroupComponent.propDecorators = {
    isOpen: [{ type: Input, args: ['isOpen',] }],
    heading: [{ type: Input, args: ['heading',] }],
    isDisabled: [{ type: Input, args: ['isDisabled',] }],
    panelClass: [{ type: Input, args: ['panelClass',] }],
    isOpenChange: [{ type: Output, args: ['isOpenChange',] }],
    panelColor: [{ type: Input, args: ['panelColor',] }]
};
if (false) {
    /**
     * initialize accordion group condition
     * @type {?}
     */
    AccordionGroupComponent.prototype.isOpen;
    /**
     * initialize displayed heading
     * @type {?}
     */
    AccordionGroupComponent.prototype.heading;
    /**
     * disable an accordion
     * @type {?}
     */
    AccordionGroupComponent.prototype.isDisabled;
    /**
     * attach custom panel class
     * @type {?}
     */
    AccordionGroupComponent.prototype.panelClass;
    /**
     * an emitter which will trigerred if user open/close a panel
     * @type {?}
     */
    AccordionGroupComponent.prototype.isOpenChange;
    /**
     * panel's color option
     * @type {?}
     */
    AccordionGroupComponent.prototype.panelColor;
    /**
     * enable/disable isAnimated for button
     * @type {?}
     */
    AccordionGroupComponent.prototype.isAnimated;
    /**
     * @type {?}
     * @protected
     */
    AccordionGroupComponent.prototype.accordion;
    /** @type {?} */
    AccordionGroupComponent.prototype.currentClass;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype.accordionSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/alert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Alert {
}
if (false) {
    /** @type {?} */
    Alert.prototype.title;
    /** @type {?} */
    Alert.prototype.text;
    /** @type {?} */
    Alert.prototype.type;
    /** @type {?} */
    Alert.prototype.showCancelButton;
    /** @type {?} */
    Alert.prototype.confirmButtonColor;
    /** @type {?} */
    Alert.prototype.cancelButtonColor;
    /** @type {?} */
    Alert.prototype.confirmButtonText;
    /** @type {?} */
    Alert.prototype.cancelButtonText;
    /** @type {?} */
    Alert.prototype.confirmButtonClass;
    /** @type {?} */
    Alert.prototype.cancelButtonClass;
    /** @type {?} */
    Alert.prototype.buttonsStyling;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/paginate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Paginate {
}
if (false) {
    /** @type {?} */
    Paginate.prototype.first;
    /** @type {?} */
    Paginate.prototype.last;
    /** @type {?} */
    Paginate.prototype.previous;
    /** @type {?} */
    Paginate.prototype.next;
    /** @type {?} */
    Paginate.prototype.cancel;
    /** @type {?} */
    Paginate.prototype.done;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pagination.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageModel {
}
if (false) {
    /** @type {?} */
    PageModel.prototype.label;
    /** @type {?} */
    PageModel.prototype.value;
    /** @type {?} */
    PageModel.prototype.active;
}
/**
 * @record
 */
function PageEventModel() { }
if (false) {
    /** @type {?} */
    PageEventModel.prototype.page;
    /** @type {?} */
    PageEventModel.prototype.dataPerPage;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/toast.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Toast {
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} description
     * @param {?} timeOut
     * @param {?} index
     * @param {?} removeOnClick
     */
    constructor(type, title, description, timeOut, index, removeOnClick) {
        this.type = type;
        this.title = title;
        this.description = description;
        this.timeOut = timeOut;
        this.index = index;
        this.removeOnClick = removeOnClick;
    }
}
if (false) {
    /** @type {?} */
    Toast.prototype.type;
    /** @type {?} */
    Toast.prototype.title;
    /** @type {?} */
    Toast.prototype.description;
    /** @type {?} */
    Toast.prototype.timeOut;
    /** @type {?} */
    Toast.prototype.index;
    /** @type {?} */
    Toast.prototype.removeOnClick;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/table-page.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class PilTablePagedData {
    constructor() {
        this.data = new Array();
        this.page = new PilTablePage();
        this.response = new Array();
    }
}
if (false) {
    /** @type {?} */
    PilTablePagedData.prototype.data;
    /** @type {?} */
    PilTablePagedData.prototype.page;
    /** @type {?} */
    PilTablePagedData.prototype.response;
}
class PilTablePage {
    constructor() {
        this.size = 0;
        this.totalElements = 0;
        this.totalPages = 0;
        this.pageNumber = 0;
    }
}
if (false) {
    /** @type {?} */
    PilTablePage.prototype.size;
    /** @type {?} */
    PilTablePage.prototype.page;
    /** @type {?} */
    PilTablePage.prototype.totalElements;
    /** @type {?} */
    PilTablePage.prototype.totalPages;
    /** @type {?} */
    PilTablePage.prototype.pageNumber;
    /** @type {?} */
    PilTablePage.prototype.keyword;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/table-page.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TablePageService {
    constructor() {
        this.page = new BehaviorSubject({});
    }
    /**
     * @param {?} page
     * @return {?}
     */
    setTablePage(page) {
        this.page.next(page);
    }
    /**
     * @return {?}
     */
    getTablePage() {
        return this.page.asObservable();
    }
}
TablePageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TablePageService.ctorParameters = () => [];
/** @nocollapse */ TablePageService.ngInjectableDef = defineInjectable({ factory: function TablePageService_Factory() { return new TablePageService(); }, token: TablePageService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TablePageService.prototype.page;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/client-table/client-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClientTableComponent {
    /**
     * @param {?} _tablePageSvc
     */
    constructor(_tablePageSvc) {
        this._tablePageSvc = _tablePageSvc;
        this.editClicked = new EventEmitter();
        this.deleteClicked = new EventEmitter();
        this.detailClicked = new EventEmitter();
        this.inValidateClicked = new EventEmitter();
        this.pageChanged = new EventEmitter();
        this.printClicked = new EventEmitter();
        this.publishClicked = new EventEmitter();
        this.radioSelect = new EventEmitter();
        this.reloadClicked = new EventEmitter();
        this.selectedRows = new EventEmitter();
        this.switchChanged = new EventEmitter();
        this.validateClicked = new EventEmitter();
        this.verifyClicked = new EventEmitter();
        this.limitChanged = new EventEmitter();
        this.inputTextValueChange = new EventEmitter();
        this.inputRadioValueChange = new EventEmitter();
        this.page = new PilTablePage();
        this._isAllRowsSelected = false;
        this._columns = [];
        this._rows = [];
        this._rowsCollection = [];
        this._rowsTemp = [];
        this._selectedRows = [];
        this.previousRadioItem = [];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set columns(data) {
        data.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            column.sort = '';
        }));
        this._columns = data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set rows(data) {
        this._rowsCollection = data;
        this._rowsTemp = data;
        this.page.totalElements = data.length;
        this._isAllRowsSelected = false;
        this._selectedRows = [];
        this._rows = this.getDataOfCurrentPage(data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.page.size = 10;
        this.page.totalElements = this._rowsCollection.length;
        this._rows = this.getDataOfCurrentPage(this._rowsCollection);
        this._tablePageSvc.setTablePage(this.page);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearInterval(this.sortTimerInterval);
    }
    /**
     * @param {?} colleciton
     * @return {?}
     */
    getDataOfCurrentPage(colleciton) {
        /** @type {?} */
        const data = colleciton.slice((this.getStartPage(this.page) - 1), this.getEndPage(this.page));
        data.forEach((/**
         * @param {?} element
         * @param {?} i
         * @return {?}
         */
        (element, i) => {
            element.hasAuth = this.setRowElementAuthStatus(element.auth);
            element.number = this.getStartPage(this.page) + i;
        }));
        return data;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getEndPage(page) {
        /** @type {?} */
        let end = (page.pageNumber * page.size) + page.size;
        end = end > page.totalElements ? page.totalElements : end;
        return end;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getStartPage(page) {
        return page.pageNumber * page.size + 1;
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    mapActions(prop) {
        /** @type {?} */
        const data = this._rows[prop.index];
        switch (prop.type) {
            case 'update':
                this.editClicked.emit(data);
                break;
            case 'delete':
                this.deleteClicked.emit(data);
                break;
            case 'detail':
                this.detailClicked.emit(data);
                break;
            case 'print':
                this.printClicked.emit(data);
                break;
            case 'reload':
                this.reloadClicked.emit(data);
                break;
            case 'verify':
                this.verifyClicked.emit(data);
                break;
            case 'validate':
                this.validateClicked.emit(data);
                break;
            case 'invalidate':
                this.inValidateClicked.emit(data);
                break;
            case 'publish':
                this.publishClicked.emit(data);
                break;
            case 'activate':
                this.switchChanged.emit({ value: prop.$event, data: data });
                break;
        }
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    onLimitChange(limit) {
        this.page.size = Number(limit);
        this.page.pageNumber = 0;
        this._rows = this.getDataOfCurrentPage(this._rowsCollection);
        this._tablePageSvc.setTablePage(this.page);
    }
    /**
     * @param {?} rowIndex
     * @param {?} prop
     * @return {?}
     */
    onInputRadioChange(rowIndex, prop) {
        this._columns.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.type && item.type === 'input-radio') {
                this._rows[rowIndex][item.prop] = (item.prop === prop) ? 1 : 0;
            }
        }));
        this.inputRadioValueChange.emit(this._rows[rowIndex]);
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    onInputTextChange(index, column) {
        this.inputTextValueChange.emit({
            index: index,
            column: column,
            data: this._rows[index]
        });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPageChange($event) {
        this.page.pageNumber = $event.page;
        this._rows = this.getDataOfCurrentPage(this._rowsTemp);
        this._tablePageSvc.setTablePage(this.page);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onRadioSelect(data) {
        this.reloadClicked.emit(data);
    }
    /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    onRowSelect(type, $event, data) {
        if ($event.target.checked) {
            (type === 'single') ? this._selectedRows.push(data) : this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
        }
        else {
            this._selectedRows = (type === 'single') ? this._selectedRows.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.number !== data.number)) : [];
        }
        this.selectedRows.emit(this._selectedRows);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRowSelectMobile($event) {
        if ($event.target.checked) {
            this._isAllRowsSelected = true;
            this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
        }
        else {
            this._isAllRowsSelected = false;
            this._selectedRows = [];
        }
        this.selectedRows.emit(this._selectedRows);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    onSearchChange(keyword) {
        /** @type {?} */
        const filteredKeyword = keyword.toLowerCase();
        /** @type {?} */
        const columnsFiltered = this._columns;
        /** @type {?} */
        let tempFiltered = [];
        if (!filteredKeyword) {
            tempFiltered = this._rowsCollection;
        }
        else {
            tempFiltered = this._rowsCollection.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                for (const key in columnsFiltered) {
                    if (columnsFiltered.hasOwnProperty(key)) {
                        /** @type {?} */
                        const value = item[columnsFiltered[key].prop];
                        if (value !== undefined && String(value).toLowerCase().includes(filteredKeyword)) {
                            return true;
                        }
                    }
                }
                return false;
            }));
        }
        this._rowsTemp = tempFiltered;
        this.page.pageNumber = 0;
        this.page.totalElements = this._rowsTemp.length;
        this._tablePageSvc.setTablePage(this.page);
        this._rows = this.getDataOfCurrentPage(this._rowsTemp);
    }
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    setColumnSortDirection(column, index) {
        clearInterval(this.sortTimerInterval);
        this._columns.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        (item, idx) => {
            if (idx !== index) {
                item.sort = '';
            }
        }));
        column.sort = (column.sort === 'asc') ? 'desc' : 'asc';
        this.sortTimerInterval = setTimeout((/**
         * @return {?}
         */
        () => {
            column.sort = '';
        }), 2000);
    }
    /**
     * @param {?} auth
     * @return {?}
     */
    setRowElementAuthStatus(auth) {
        if (auth) {
            /** @type {?} */
            const authValues = Object.keys(auth).map((/**
             * @param {?} key
             * @return {?}
             */
            key => auth[key]));
            return authValues.includes(true);
        }
        return false;
    }
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    sortTableColumn(column, index) {
        this.setColumnSortDirection(column, index);
        this._rows.sort(this.sortColumValue(column));
    }
    /**
     * @param {?} column
     * @return {?}
     */
    sortTableColumnMobile(column) {
        this._rows.sort(this.sortColumValue(column));
        column.sort = '';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    sortColumValue(data) {
        /** @type {?} */
        let sortOrder = 1;
        if (data.prop[0] === '-') {
            sortOrder = -1;
            data.prop = data.prop.substr(1);
        }
        return (/**
         * @param {?} currentValue
         * @param {?} nextValue
         * @return {?}
         */
        function (currentValue, nextValue) {
            /** @type {?} */
            let result;
            if (data.sort === 'asc') {
                result = (currentValue[data.prop] < nextValue[data.prop]) ? -1 : (currentValue[data.prop] > nextValue[data.prop]) ? 1 : 0;
            }
            else {
                result = (currentValue[data.prop] > nextValue[data.prop]) ? -1 : (currentValue[data.prop] < nextValue[data.prop]) ? 1 : 0;
            }
            return result * sortOrder;
        });
    }
}
ClientTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-client-table',
                template: "<uii-table-filter\n  [limitOptions]=\"limitOptions\"\n  [searchOptions]=\"searchOptions\"\n  (limitChanged)=\"onLimitChange($event)\"\n  (searchChanged)=\"onSearchChange($event)\">\n</uii-table-filter>\n<div class=\"gateway-table\">\n  <div class=\"gateway-table-header\">\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" id=\"aba\" class=\"gateway-rcb-select\" [checked]=\"_isAllRowsSelected\" (change)=\"_isAllRowsSelected = !_isAllRowsSelected; onRowSelect('multiple', $event)\" />\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"radioColumn\"></div>\n    <div *ngFor=\"let column of _columns; let idx = index;\" class=\"header-cell\" [class.cell-number]=\"column.prop === 'number'\">\n      <span\n        *ngIf=\"!column.hasOwnProperty('header-type')\"\n        class=\"cell order-able\"\n        (click)=\"sortTableColumn(column, idx)\"\n        [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\">{{column.name}}</span>\n      <span\n        *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\"\n        class=\"cell order-able\"\n        (click)=\"sortTableColumn(column, idx)\"\n        [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\" [innerHTML]=\"column.name\"></span>\n    </div>\n    <div *ngIf=\"actionColumn\" class=\"header-cell cell-action\">\n      <span>{{actionTitle}}</span>\n    </div>\n  </div>\n  <uii-mobile-filter\n    [checkboxColumn]=\"checkboxColumn\"\n    [columns]=\"_columns\"\n    [isAllRowsSelected]=\"_isAllRowsSelected\"\n    [limitOptions]=\"limitOptions\"\n    [searchOptions]=\"searchOptions\"\n    (limitChanged)=\"onLimitChange($event)\"\n    (searchChanged)=\"onSearchChange($event)\"\n    (allRowsOnMobileSelected)=\"onRowSelectMobile($event)\"\n    (columnSorted)=\"sortTableColumnMobile($event)\">\n  </uii-mobile-filter>\n  <div *ngFor=\"let item of _rows; let i = index\" class=\"row-container\">\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"radioColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"radio\" name=\"mtable-radio-item\" [attr.id]=\"'mitem-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n        <p class=\"gateway-rcb-label radio-label\"></p>\n      </div>\n    </div>\n    <div class=\"gateway-table-data\">\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n          <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n        </div>\n      </div>\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"radioColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"radio\" name=\"table-radio-item\" [attr.id]=\"'item-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n          <p class=\"gateway-rcb-label radio-label\"></p>\n        </div>\n      </div>\n      <ng-container *ngFor=\"let column of _columns; let colIdx = index\">\n        <div class=\"data-cell\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" [class.hide-in-mobile]=\"column.hasOwnProperty('hide_in_mobile') && column.hide_in_mobile\">\n          <div class=\"mobile-view-header\">\n            <span *ngIf=\"!column.hasOwnProperty('header-type')\">{{column.name}}</span>\n            <span *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\" [innerHTML]=\"column.name\"></span>\n          </div>\n          <div class=\"table-small-content\">\n            <ng-container *ngIf=\"column.hasOwnProperty('type')\">\n              <span *ngIf=\"column.type === 'label'\" class=\"cell-label\" [ngClass]=\"item.class\">{{item[column.prop.toString()]}}</span>\n              <span *ngIf=\"column.type === 'html'\" class=\"cell-html\" [innerHTML]=\"item[column.prop.toString()]\"></span>\n              <span *ngIf=\"column.type === 'date' && !column.format\">{{item[column.prop.toString()] | date: 'dd MMMM y'}}</span>\n              <span *ngIf=\"column.type === 'input-text'\">\n                <input \n                  type=\"{{column.inputType}}\"\n                  maxlength=\"{{column.inputMaxLength}}\"\n                  class=\"table-input-text\"\n                  [class.uppercase]=\"column.textUppercase\"\n                  [class.lowercase]=\"column.textLowercase\"\n                  [(ngModel)]=\"item[column.prop.toString()]\" \n                  (change)=\"onInputTextChange(i, column.name)\">\n              </span>\n              <span *ngIf=\"column.type === 'input-radio'\">\n                <form>\n                  <div class=\"gateway-rcb\">\n                    <input type=\"radio\" \n                      [attr.name]=\"'radio-' + i\"\n                      [attr.id]=\"'radio-' + i + '-' + colIdx\"\n                      [checked]=\"item[column.prop] === 1\"\n                      (change)=\"onInputRadioChange(i, column.prop)\"\n                      class=\"gateway-rcb-select\" />\n                    <p class=\"gateway-rcb-label radio-label\"></p>\n                  </div>\n                </form>\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!column.hasOwnProperty('type')\">\n              <span class=\"cell\">{{item[column.prop.toString()]}}</span>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"data-cell data-cell-action\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" *ngIf=\"actionColumn\">\n        <div class=\"mobile-view-header\"><span>{{actionTitle}}</span></div>\n        <div class=\"table-small-content\">\n          <span>\n            <uii-table-action\n              [index]=\"i\"\n              [item]=\"item\"\n              [auth]=\"item.auth\"\n              [actionInValidation]=\"actionInValidation\"\n              (emitAction)=\"mapActions($event)\">\n            </uii-table-action>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"gateway-empty-data\" *ngIf=\"_rowsTemp === undefined || _rowsTemp.length === 0\">\n  <span>Tidak ada data yang ditampilkan</span>\n</div>\n<uii-table-footer\n  [footerInfo]=\"footerInfo\"\n  [paginationOptions]=\"paginationOptions\"\n  [totalElements]=\"page.totalElements\"\n  [startPage]=\"getStartPage(page)\"\n  [endPage]=\"getEndPage(page)\"\n  (pageChanged)=\"onPageChange($event)\">\n</uii-table-footer>"
            }] }
];
/** @nocollapse */
ClientTableComponent.ctorParameters = () => [
    { type: TablePageService }
];
ClientTableComponent.propDecorators = {
    actionColumn: [{ type: Input }],
    actionTitle: [{ type: Input }],
    actionInValidation: [{ type: Input }],
    checkboxColumn: [{ type: Input }],
    footerInfo: [{ type: Input }],
    footerOptions: [{ type: Input }],
    limitOptions: [{ type: Input }],
    paginationOptions: [{ type: Input }],
    radioColumn: [{ type: Input }],
    searchOptions: [{ type: Input }],
    columns: [{ type: Input }],
    rows: [{ type: Input }],
    editClicked: [{ type: Output }],
    deleteClicked: [{ type: Output }],
    detailClicked: [{ type: Output }],
    inValidateClicked: [{ type: Output }],
    pageChanged: [{ type: Output }],
    printClicked: [{ type: Output }],
    publishClicked: [{ type: Output }],
    radioSelect: [{ type: Output }],
    reloadClicked: [{ type: Output }],
    selectedRows: [{ type: Output }],
    switchChanged: [{ type: Output }],
    validateClicked: [{ type: Output }],
    verifyClicked: [{ type: Output }],
    limitChanged: [{ type: Output }],
    inputTextValueChange: [{ type: Output }],
    inputRadioValueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ClientTableComponent.prototype.actionColumn;
    /** @type {?} */
    ClientTableComponent.prototype.actionTitle;
    /** @type {?} */
    ClientTableComponent.prototype.actionInValidation;
    /** @type {?} */
    ClientTableComponent.prototype.checkboxColumn;
    /** @type {?} */
    ClientTableComponent.prototype.footerInfo;
    /** @type {?} */
    ClientTableComponent.prototype.footerOptions;
    /** @type {?} */
    ClientTableComponent.prototype.limitOptions;
    /** @type {?} */
    ClientTableComponent.prototype.paginationOptions;
    /** @type {?} */
    ClientTableComponent.prototype.radioColumn;
    /** @type {?} */
    ClientTableComponent.prototype.searchOptions;
    /** @type {?} */
    ClientTableComponent.prototype.editClicked;
    /** @type {?} */
    ClientTableComponent.prototype.deleteClicked;
    /** @type {?} */
    ClientTableComponent.prototype.detailClicked;
    /** @type {?} */
    ClientTableComponent.prototype.inValidateClicked;
    /** @type {?} */
    ClientTableComponent.prototype.pageChanged;
    /** @type {?} */
    ClientTableComponent.prototype.printClicked;
    /** @type {?} */
    ClientTableComponent.prototype.publishClicked;
    /** @type {?} */
    ClientTableComponent.prototype.radioSelect;
    /** @type {?} */
    ClientTableComponent.prototype.reloadClicked;
    /** @type {?} */
    ClientTableComponent.prototype.selectedRows;
    /** @type {?} */
    ClientTableComponent.prototype.switchChanged;
    /** @type {?} */
    ClientTableComponent.prototype.validateClicked;
    /** @type {?} */
    ClientTableComponent.prototype.verifyClicked;
    /** @type {?} */
    ClientTableComponent.prototype.limitChanged;
    /** @type {?} */
    ClientTableComponent.prototype.inputTextValueChange;
    /** @type {?} */
    ClientTableComponent.prototype.inputRadioValueChange;
    /** @type {?} */
    ClientTableComponent.prototype.page;
    /** @type {?} */
    ClientTableComponent.prototype._isAllRowsSelected;
    /** @type {?} */
    ClientTableComponent.prototype.sortTimerInterval;
    /** @type {?} */
    ClientTableComponent.prototype._columns;
    /** @type {?} */
    ClientTableComponent.prototype._rows;
    /** @type {?} */
    ClientTableComponent.prototype._rowsCollection;
    /** @type {?} */
    ClientTableComponent.prototype._rowsTemp;
    /** @type {?} */
    ClientTableComponent.prototype._selectedRows;
    /** @type {?} */
    ClientTableComponent.prototype.previousRadioItem;
    /**
     * @type {?}
     * @private
     */
    ClientTableComponent.prototype._tablePageSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dialog/confirm-dialog/confirm-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmdialogComponent {
    /**
     * @param {?} _activeModal
     */
    constructor(_activeModal) {
        this._activeModal = _activeModal;
        this.active = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onClose = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onCancel();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    showConfirmationModal(config) {
        this.title = config.title ? config.title : '';
        this.message = config.message ? config.message : '';
        this.confirmBtnlabel = config.confirmBtnlabel ? config.confirmBtnlabel : '';
        this.cancelBtnLabel = config.cancelBtnLabel ? config.cancelBtnLabel : '';
        this.active = true;
    }
    /**
     * @return {?}
     */
    onConfirm() {
        this.active = false;
        this.onClose.next(true);
        this._activeModal.hide();
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.active = false;
        this.onClose.next(false);
        this._activeModal.hide();
    }
    /**
     * @return {?}
     */
    hideConfirmationModal() {
        this.active = false;
        this.onClose.next(null);
        this._activeModal.hide();
    }
}
ConfirmdialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-confirmdialog',
                template: "<div class=\"modal-header\">\n</div>\n<div class=\"modal-body\">\n    <div class=\"modal-icon\">\n        <span class=\"fa fa-info icon-modal-info\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-check icon-modal-success\" aria-hidden=\"true\"></span>\n        <span class=\"material-icons icon-modal-warning\">priority_high</span>\n        <span class=\"fa fa-times icon-modal-danger\" aria-hidden=\"true\"></span>\n    </div>\n    <h3 class=\"modal-title\">{{ title || 'Konfirmasi' }}</h3>\n    <div class=\"modal-message\">\n        <p>{{ message }}</p>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel()\">{{ cancelBtnLabel || 'Tidak, batalkan' }}</button>\n    <button type=\"button\" class=\"btn btn-confirm\" (click)=\"onConfirm()\">{{ confirmBtnlabel || 'Ya, lanjutkan' }}</button>\n</div>"
            }] }
];
/** @nocollapse */
ConfirmdialogComponent.ctorParameters = () => [
    { type: BsModalRef }
];
if (false) {
    /** @type {?} */
    ConfirmdialogComponent.prototype.confirmBtnlabel;
    /** @type {?} */
    ConfirmdialogComponent.prototype.cancelBtnLabel;
    /** @type {?} */
    ConfirmdialogComponent.prototype.active;
    /** @type {?} */
    ConfirmdialogComponent.prototype.message;
    /** @type {?} */
    ConfirmdialogComponent.prototype.title;
    /** @type {?} */
    ConfirmdialogComponent.prototype.onClose;
    /** @type {?} */
    ConfirmdialogComponent.prototype._activeModal;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/file-upload/file-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadComponent {
    constructor() {
        this.multiple = false;
        this.fileType = '.csv, .xlsx, application/pdf';
        this.maxFileSize = 1;
        this.maxFileType = 'MB';
        this.inputLabel = 'Upload';
        this.showPreview = true;
        this.showFileSize = true;
        this.filesSelected = new EventEmitter();
        this.files = [];
        this.sizes = [];
        this.fileSizeOver = false;
        this._previewPosition = 'bottom';
    }
    /**
     * @param {?} position
     * @return {?}
     */
    set previewPosition(position) {
        // for single upload only
        this._previewPosition = (this.multiple) ? 'bottom' : position;
    }
    /**
     * @param {?} files
     * @return {?}
     */
    set fileList(files) {
        if (files) {
            this.onFileChange(files);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.convertMaxFileSize();
    }
    /**
     * @private
     * @param {?} bytes
     * @return {?}
     */
    countFileSize(bytes) {
        if (bytes < 1024) {
            return bytes + 'B';
        }
        else if (bytes < 1048576) {
            return (bytes / 1024).toFixed(3) + ' KB';
        }
        else if (bytes < 1073741824) {
            return (bytes / 1048576).toFixed(3) + ' MB';
        }
        else {
            return (bytes / 1073741824).toFixed(3) + ' GB';
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFileChange($event) {
        this.fileSizeOver = false;
        /** @type {?} */
        const files = $event.target.files;
        if (this.multiple) {
            this.attacheMultipleFiles(files);
        }
        else {
            this.attachSingleFile(files);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onFileItemRemove(index) {
        this.files.splice(index, 1);
        this.sizes.splice(index, 1);
        if (this.files.length > 0) {
            this.fileSizeOver = false;
            this.files.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.size > this._maxFileSize) {
                    this.fileSizeOver = true;
                }
            }));
            if (this.fileSizeOver) {
                this.filesSelected.emit(null);
                this.fileTag.nativeElement.value = '';
                return;
            }
            this.filesSelected.emit(this.files);
        }
        else {
            this.filesSelected.emit(null);
        }
        this.fileTag.nativeElement.value = '';
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    attacheMultipleFiles(files) {
        Array.from(files).forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.size > this._maxFileSize) {
                this.fileSizeOver = true;
            }
            if (this.isFileExist(item.name) < 0) {
                this.files.push(item);
                this.sizes.push(this.countFileSize(item.size));
            }
        }));
        this.fileTag.nativeElement.value = '';
        if (this.fileSizeOver) {
            this.filesSelected.emit(null);
            return;
        }
        this.filesSelected.emit(this.files);
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    attachSingleFile(files) {
        this.files[0] = files[0];
        this.sizes[0] = this.countFileSize(files[0].size);
        if (files[0].size > this._maxFileSize) {
            this.fileSizeOver = true;
            this.filesSelected.emit(null);
            return;
        }
        this.filesSelected.emit(this.files);
    }
    /**
     * @return {?}
     */
    convertMaxFileSize() {
        switch (this.maxFileType.toUpperCase()) {
            case 'KB':
                this._maxFileSize = this.maxFileSize * 1024;
                break;
            case 'MB':
                this._maxFileSize = this.maxFileSize * 1024 * 1024;
                break;
            case 'GB':
                this._maxFileSize = this.maxFileSize * 1024 * 1024 * 1024;
                break;
            case 'B':
                this._maxFileSize = this.maxFileSize;
                break;
            default:
                this._maxFileSize = this.maxFileSize;
                break;
        }
    }
    /**
     * @private
     * @param {?} fileName
     * @return {?}
     */
    isFileExist(fileName) {
        return this.files.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.name === fileName));
    }
}
FileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-file-upload',
                template: "<div class=\"control-note max-file-upload\">\n  <p>Maksimal {{ maxFileSize }}{{maxFileType.toUpperCase()}}</p>\n</div>\n<div class=\"form-upload-file\" [class.flex-display]=\"_previewPosition !== 'bottom'\">\n  <button class=\"btn btn-primary form-control-file-upload\">\n    {{inputLabel}} <input #file type=\"file\" [accept]=\"fileType\" [multiple]=\"multiple\" (change)=\"onFileChange($event)\">\n  </button>\n  <div class=\"file-list\" *ngIf=\"files.length > 0 && showPreview\">\n    <p *ngFor=\"let file of files; let i = index\" \n      class=\"control-label file-name\" \n      [class.not-allowed]=\"file.size > _maxFileSize\" \n      [class.left-marign]=\"_previewPosition !== 'bottom'\">\n      <span class=\"fa fa-times table-cell\" aria-hidden=\"true\" (click)=\"onFileItemRemove(i)\"></span>\n      <span class=\"name table-cell\">{{file.name}}</span>\n      <span *ngIf=\"showFileSize\" class=\"table-cell\">{{sizes[i]}}</span>\n    </p>\n  </div>\n</div>\n<small *ngIf=\"fileSizeOver && files.length > 0\" class=\"text-danger\">\n  {{ 'Ukuran berkas terlalu besar' | translate }}\n</small>",
                styles: [".max-file-upload p{font-size:11px!important;margin:2px 0}.form-upload-file.flex-display{display:flex;align-items:flex-end}.form-upload-file .file-name{align-items:center;display:table-row-group;margin:2px 0;font-weight:400;font-size:13px}.form-upload-file .file-name .fa{font-size:18px;cursor:pointer;margin-right:5px}.form-upload-file .file-name.not-allowed{color:#a94442}.form-upload-file .file-name.left-marign{display:unset;margin-left:10px}.form-upload-file .file-name .table-cell{display:table-cell;padding:2px 3px}.form-control-file-upload{font-size:14px;position:relative}.form-control-file-upload input[type=file]{position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;outline:0;cursor:inherit;display:block}"]
            }] }
];
FileUploadComponent.propDecorators = {
    fileTag: [{ type: ViewChild, args: ['file',] }],
    multiple: [{ type: Input }],
    fileType: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    maxFileType: [{ type: Input }],
    inputLabel: [{ type: Input }],
    showPreview: [{ type: Input }],
    showFileSize: [{ type: Input }],
    previewPosition: [{ type: Input }],
    fileList: [{ type: Input }],
    filesSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FileUploadComponent.prototype.fileTag;
    /** @type {?} */
    FileUploadComponent.prototype.multiple;
    /** @type {?} */
    FileUploadComponent.prototype.fileType;
    /** @type {?} */
    FileUploadComponent.prototype.maxFileSize;
    /** @type {?} */
    FileUploadComponent.prototype.maxFileType;
    /** @type {?} */
    FileUploadComponent.prototype.inputLabel;
    /** @type {?} */
    FileUploadComponent.prototype.showPreview;
    /** @type {?} */
    FileUploadComponent.prototype.showFileSize;
    /** @type {?} */
    FileUploadComponent.prototype.filesSelected;
    /** @type {?} */
    FileUploadComponent.prototype.files;
    /** @type {?} */
    FileUploadComponent.prototype.sizes;
    /** @type {?} */
    FileUploadComponent.prototype.fileSizeOver;
    /** @type {?} */
    FileUploadComponent.prototype._maxFileSize;
    /** @type {?} */
    FileUploadComponent.prototype._previewPosition;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/info-box/info-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InfoBoxComponent {
    constructor() {
        this.title = 'Title';
        this.subtitle = 'Subtitle';
        this.infoIcon = '';
        this.type = 'default';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
InfoBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-info-box',
                template: "<div [class]=\"'ugw-info-box info-box-' + type\" role=\"info-box\">\n  <h5 class=\"title\">{{title}}</h5>\n  <h6 class=\"subtitle\">{{subtitle}}</h6>\n  <i class=\"info-icon\">\n    <span class=\"{{infoIcon}}\"></span>\n  </i>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".ugw-info-box{position:relative;padding:10px;width:100%;justify-content:space-between;margin:0;list-style:none;color:#fff;min-height:85px}.ugw-info-box h5.title{font-size:larger}.ugw-info-box h6.subtitle{font-weight:300;font-size:small}.ugw-info-box.info-box-default{background-color:#093697}.ugw-info-box.info-box-success{background-color:#00796b}.ugw-info-box.info-box-info{background-color:#4db6ac}.ugw-info-box.info-box-danger{background-color:#ff5252}.ugw-info-box.info-box-warning{background-color:#fbc02d}.ugw-info-box.info-box-primary{background-color:#007bff}.ugw-info-box.info-box-dark{background-color:#343a40}.ugw-info-box.info-box-secondary{background-color:#6c757d}.ugw-info-box.info-box-oc-pink{background-color:#e91e63}.ugw-info-box.info-box-oc-purple{background-color:#9c27b0}.ugw-info-box.info-box-oc-deep-purple{background-color:#673ab7}.ugw-info-box.info-box-oc-cyan{background-color:#00bcd4}.ugw-info-box.info-box-oc-green{background-color:#4caf50}.ugw-info-box.info-box-oc-lime{background-color:#cddc39}.ugw-info-box.info-box-oc-orange{background-color:#ff9800}.ugw-info-box.info-box-oc-deep-orange{background-color:#ff5722}.ugw-info-box.info-box-oc-brown{background-color:#795548}.ugw-info-box.info-box-oc-blue-grey{background-color:#607d8b}.ugw-info-box i.info-icon{transition:.3s linear;position:absolute;top:-10px;right:10px;z-index:0;font-size:65px;color:rgba(0,0,0,.15)}.ugw-info-box:hover{transition:.3s linear}.ugw-info-box:hover i{font-size:70px}"]
            }] }
];
/** @nocollapse */
InfoBoxComponent.ctorParameters = () => [];
InfoBoxComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    infoIcon: [{ type: Input }],
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InfoBoxComponent.prototype.title;
    /** @type {?} */
    InfoBoxComponent.prototype.subtitle;
    /** @type {?} */
    InfoBoxComponent.prototype.infoIcon;
    /** @type {?} */
    InfoBoxComponent.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/mobile-filter/mobile-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MobileFilterComponent {
    constructor() {
        this.isAllRowsSelected = false;
        this.limitChanged = new EventEmitter();
        this.allRowsOnMobileSelected = new EventEmitter();
        this.searchChanged = new EventEmitter();
        this.columnSorted = new EventEmitter();
        this.limitOpts = [
            {
                label: '10',
                value: 10
            },
            {
                label: '25',
                value: 25
            },
            {
                label: '50',
                value: 50
            },
            {
                label: '100',
                value: 100
            }
        ];
        this.toogleSearch = false;
        this.toggleLimit = false;
        this.isSortAsc = true;
        this.toggleSort = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectedLimit = this.limitOpts[0].value;
    }
    /**
     * @return {?}
     */
    emitColumnSort() {
        this.selectedColumn.sort = this.isSortAsc ? 'asc' : 'desc';
        this.columnSorted.emit(this.selectedColumn);
    }
    /**
     * @param {?} column
     * @return {?}
     */
    onColumnSelect(column) {
        this.selectedColumn = column;
        this.emitColumnSort();
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    onLimitChange(limit) {
        this.selectedLimit = Number(limit);
        this.limitChanged.emit(Number(limit));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRowSelect($event) {
        this.allRowsOnMobileSelected.emit($event);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    onSearchChange(keyword) {
        this.searchChanged.emit(keyword);
    }
    /**
     * @return {?}
     */
    onSortTypeChange() {
        this.isSortAsc = !this.isSortAsc;
        if (this.selectedColumn !== undefined && this.selectedColumn !== null) {
            this.emitColumnSort();
        }
    }
}
MobileFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-mobile-filter',
                template: "<div *ngIf=\"limitOptions || searchOptions\" class=\"mobile-filter-container\">\n  <div class=\"limit-check-container\">\n    <ul>\n      <li class=\"mobile-checkbox-container\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"isAllRowsSelected\" class=\"gateway-rcb-select\" (change)=\"onRowSelect($event)\" />\n          <label class=\"gateway-rcb-label\"></label>\n          <p>&nbsp;Semua &nbsp;&nbsp;</p>\n        </div>\n      </li>\n      <li *ngIf=\"limitOptions\" class=\"mobile-limit-container\">\n        <div class=\"limiting\">\n          <span class=\"filter-select\" (click)=\"toggleLimit = !toggleLimit; toogleSearch = false; toggleSort = false;\">{{selectedLimit}} ditampilkan</span>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div *ngIf=\"searchOptions\" class=\"mobile-search-container\">\n    <ul>\n      <li (click)=\"toggleSort = true; toggleLimit = false; toogleSearch = false\">\n        <span class=\"ikon fa fa-sort\"></span>\n        <span>&nbsp;urutkan &nbsp;</span>\n      </li>\n      <li (click)=\"toogleSearch = !toogleSearch; toggleLimit = false; toggleSort = false\">\n        <span class=\"ikon fa\" [ngClass]=\"toogleSearch ? 'fa-times' : 'fa-search'\" ></span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"mobile-limit-overlay\" [ngClass]=\"toggleLimit ? '' : 'hide-limit-select'\">\n    <ol class=\"limit-item\">\n      <li *ngFor=\"let limit of limitOpts\" (click)=\"onLimitChange(limit.value) ;toggleLimit = !toggleLimit\" >{{limit.label}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"mobile-searching\" [ngClass]=\"toogleSearch ? '' : 'hide-search'\">\n  <input #searchKeyword type=\"text\" placeholder=\"Cari...\" (keyup.enter)=\"onSearchChange(searchKeyword.value)\" />\n  <div class=\"erase-keyword\" (click)=\"onSearchChange(''); searchKeyword.value = ''\" >\n    <p *ngIf=\"searchKeyword.value !== ''\">&times;</p>\n  </div>\n</div>\n<div class=\"mobile-sorting\" [ngClass]=\"toggleSort ? '' : 'hide-sort'\">\n  <div class=\"close-sort-container\" (click)=\"toggleSort = false;\">\n    <span class=\"fa fa-times\" ></span>\n  </div>\n  <div class=\"sort-type-container\">\n    <p><b>Jenis urutan</b></p>\n    <input type=\"checkbox\" id=\"sort-toggle\" (change)=\"onSortTypeChange()\" />\n    <label for=\"sort-toggle\">\n      <span class=\"fa\" [ngClass]=\"isSortAsc ? 'fa-sort-amount-desc' : 'fa-sort-amount-asc'\"></span>&nbsp;\n      Urut {{isSortAsc ? 'naik' : 'turun'}}\n    </label>\n  </div>\n  <div class=\"column-container\">\n    <p><b>Pilih kolom</b></p>\n    <ul class=\"column-list\">\n      <li *ngFor=\"let item of columns; let i = index\">\n        <input type=\"radio\" [attr.id]=\"'item-' + i\" name=\"radio-culoumn-filter\" (change)=\"onColumnSelect(item)\" />\n        <label class=\"radio-col\" [attr.for]=\"'item-' + i\" for>{{item.name}}</label>\n      </li>\n    </ul>\n  </div>\n</div>",
                styles: [".gateway-rcb{height:15px!important;position:relative;display:flex;align-items:center}.gateway-rcb .gateway-rcb-select{position:absolute;top:0;opacity:0}.gateway-rcb .gateway-rcb-select:checked+.gateway-rcb-label:before{content:\"\\f00c\";display:flex;justify-content:space-around;background:#4db6ac;border-color:#4db6ac}.gateway-rcb .gateway-rcb-label::before{content:\"\";margin:5px 0 0;padding:0;display:block;width:15px;height:15px;color:#fff;font-size:10px!important;font-family:FontAwesome;text-rendering:auto;border:1px solid #bdbdbd}.gateway-rcb .radio-label::before{border-radius:50%}.gateway-rcb p{font-size:13px;padding:0;margin:0}.mobile-filter-container,.mobile-searching,.mobile-sorting{display:none}@media screen and (max-width:770px){.mobile-filter-container{position:relative;display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:1px solid #ccc}.mobile-filter-container ul{list-style:none;padding:0;margin:0;display:flex;align-items:center}.mobile-filter-container ul li{height:35px;display:flex;align-items:center;justify-content:space-around;cursor:pointer}.mobile-filter-container .mobile-limit-container .filter-select{cursor:pointer}.mobile-filter-container .mobile-limit-container .filter-select::after{content:\"\\f078\";margin-left:5px;font-family:FontAwesome;text-rendering:auto;font-size:10px}.mobile-filter-container .mobile-search-container{width:auto}.mobile-filter-container .mobile-search-container ul .ikon{font-size:18px}.mobile-filter-container .mobile-search-container ul li:last-child{width:35px}.mobile-filter-container .mobile-search-overlay{position:absolute;left:0;top:35px;z-index:100;display:flex;align-items:center;width:100%}.mobile-filter-container .mobile-search-overlay input{height:35px;padding-left:5px;width:100%;outline:0;border-width:1px 1px 0;border-style:solid;border-color:#ccc}.mobile-filter-container .mobile-search-overlay button{width:35px;height:35px;font-size:18px;background:#093697;color:#fff;outline:0;border:none}.mobile-filter-container .mobile-search-overlay.hide-search{display:none!important}.mobile-filter-container .mobile-limit-overlay{position:absolute;display:block;left:0;top:35px;z-index:100;background:#fff;width:100%;border:1px solid #ccc}.mobile-filter-container .mobile-limit-overlay ol.limit-item{list-style:none;padding:0;margin:0}.mobile-filter-container .mobile-limit-overlay li{cursor:pointer;line-height:35px;padding-left:5px}.mobile-filter-container .mobile-limit-overlay li:hover{color:#fff;background:#093697}.mobile-filter-container .mobile-limit-overlay.hide-limit-select{display:none!important}.mobile-searching{position:relative;display:flex;align-items:center;width:100%;margin:-12px 0 15px}.mobile-searching input{height:35px;padding-left:5px;width:100%;outline:0;border-width:0 0 1px;border-style:solid;border-color:#ccc}.mobile-searching .erase-keyword{position:absolute;z-index:20;top:0;right:0;font-size:30px;cursor:pointer;color:#bdbdbd;background:#fff;height:33px;width:21px}.mobile-searching .erase-keyword p{margin:-4px 0 0;padding:0}.mobile-searching.hide-search{display:none!important}.mobile-sorting{padding:.75rem .75rem 0;width:100%;border:1px solid #bdbdbd;margin:-16px 0 15px;position:relative;display:block}.mobile-sorting div.close-sort-container{position:absolute;z-index:10;top:4px;right:0;font-size:14px;height:20px;width:20px;color:#bdbdbd}.mobile-sorting .sort-type-container{position:relative}.mobile-sorting .sort-type-container label{cursor:pointer;font-weight:400;border:2px solid #bdbdbd;padding:4px 0;width:90px;text-align:center}.mobile-sorting .sort-type-container input{position:absolute;opacity:0}.mobile-sorting .column-container{margin-top:5px}.mobile-sorting .column-container ul.column-list{list-style:none;padding:0}.mobile-sorting .column-container ul.column-list li{display:inline-block;position:relative}.mobile-sorting .column-container ul.column-list li .radio-col{cursor:pointer;border:2px solid #bdbdbd;padding:4px 7px;border-radius:10px;margin:3px 5px 3px 0;font-weight:400}.mobile-sorting .column-container ul.column-list li input{position:absolute;opacity:0;width:100%}.mobile-sorting .column-container ul.column-list li input:checked+.radio-col{background:#093697;border-color:#093697;color:#fff}.mobile-sorting.hide-sort{display:none}}"]
            }] }
];
/** @nocollapse */
MobileFilterComponent.ctorParameters = () => [];
MobileFilterComponent.propDecorators = {
    checkboxColumn: [{ type: Input }],
    columns: [{ type: Input }],
    limitOptions: [{ type: Input }],
    searchOptions: [{ type: Input }],
    isAllRowsSelected: [{ type: Input }],
    limitChanged: [{ type: Output }],
    allRowsOnMobileSelected: [{ type: Output }],
    searchChanged: [{ type: Output }],
    columnSorted: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MobileFilterComponent.prototype.checkboxColumn;
    /** @type {?} */
    MobileFilterComponent.prototype.columns;
    /** @type {?} */
    MobileFilterComponent.prototype.limitOptions;
    /** @type {?} */
    MobileFilterComponent.prototype.searchOptions;
    /** @type {?} */
    MobileFilterComponent.prototype.isAllRowsSelected;
    /** @type {?} */
    MobileFilterComponent.prototype.limitChanged;
    /** @type {?} */
    MobileFilterComponent.prototype.allRowsOnMobileSelected;
    /** @type {?} */
    MobileFilterComponent.prototype.searchChanged;
    /** @type {?} */
    MobileFilterComponent.prototype.columnSorted;
    /** @type {?} */
    MobileFilterComponent.prototype.limitOpts;
    /** @type {?} */
    MobileFilterComponent.prototype.selectedLimit;
    /** @type {?} */
    MobileFilterComponent.prototype.toogleSearch;
    /** @type {?} */
    MobileFilterComponent.prototype.toggleLimit;
    /** @type {?} */
    MobileFilterComponent.prototype.isSortAsc;
    /** @type {?} */
    MobileFilterComponent.prototype.toggleSort;
    /** @type {?} */
    MobileFilterComponent.prototype.selectedColumn;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dialog/modal-dialog/modal-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalDialogComponent {
    /**
     * @param {?} _activeModal
     */
    constructor(_activeModal) {
        this._activeModal = _activeModal;
        this.title = 'Information';
        this.message = 'Check what your done';
    }
}
ModalDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-infodialog',
                template: "<div class=\"modal-header\">\n</div>\n<div class=\"modal-body\">\n  <div class=\"modal-icon\">\n    <span class=\"fa fa-info icon-modal-info\" aria-hidden=\"true\"></span>\n    <span class=\"fa fa-check icon-modal-success\" aria-hidden=\"true\"></span>\n    <span class=\"material-icons icon-modal-warning\">priority_high</span>\n    <span class=\"fa fa-times icon-modal-danger\" aria-hidden=\"true\"></span>\n  </div>\n  <h4 class=\"modal-title\">{{ title }}</h4>\n  <div class=\"modal-message\">\n    <p>{{ message }}</p>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-confirm btn-info\" (click)=\"_activeModal.hide()\">{{ 'OK' | translate }}</button>\n</div>\n"
            }] }
];
/** @nocollapse */
ModalDialogComponent.ctorParameters = () => [
    { type: BsModalRef }
];
if (false) {
    /** @type {?} */
    ModalDialogComponent.prototype.title;
    /** @type {?} */
    ModalDialogComponent.prototype.message;
    /** @type {?} */
    ModalDialogComponent.prototype._activeModal;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/pagination/pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationComponent {
    constructor() {
        this.paginationALign = 'center';
        this.pageChanged = new EventEmitter();
        this.currentPageChange = new EventEmitter();
        this.selectedPage = 1;
        this.isInitilized = false;
        this._dataPerPage = 10;
    }
    /**
     * @return {?}
     */
    get dataPerPage() {
        return this._dataPerPage;
    }
    /**
     * @param {?} total
     * @return {?}
     */
    set dataPerPage(total) {
        this._dataPerPage = total;
        if (this.isDefined) {
            this.pageTotal = this.countPageTotal();
        }
    }
    /**
     * @return {?}
     */
    get amountOfData() {
        return this._amountOfData;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set amountOfData(data) {
        this._amountOfData = data;
        if (this.isDefined) {
            this.pageTotal = this.countPageTotal();
        }
    }
    /**
     * @return {?}
     */
    get pageTotal() {
        return this._pageTotal;
    }
    /**
     * @param {?} total
     * @return {?}
     */
    set pageTotal(total) {
        this._pageTotal = total;
        if (this.isInitilized) {
            this.doSelectPage(this.selectedPage);
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    set currentPage(page) {
        if (page !== undefined) {
            this.doSelectPage(page);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.pages = this.renderPage(1, this._pageTotal);
        this.isInitilized = true;
    }
    /**
     * @return {?}
     */
    countPageTotal() {
        return Math.ceil(this.amountOfData / this.dataPerPage);
    }
    /**
     * @param {?} currentPage
     * @param {?} pageTotal
     * @return {?}
     */
    renderPage(currentPage, pageTotal) {
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = pageTotal;
        if (pageTotal > 5) {
            startPage = Math.max(currentPage - Math.floor(5 / 2), 1);
            endPage = startPage + 5 - 1;
        }
        if (endPage > pageTotal) {
            endPage = pageTotal;
            startPage = endPage - 5 + 1;
        }
        /** @type {?} */
        const _pages = [];
        for (let num = startPage; num <= endPage; num++) {
            /** @type {?} */
            const page = this.makePage(num.toString(), num, num === currentPage);
            _pages.push(page);
        }
        return _pages;
    }
    /**
     * @param {?} label
     * @param {?} value
     * @param {?} active
     * @return {?}
     */
    makePage(label, value, active) {
        return { label, value, active };
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    onPageSelect(pageNumber) {
        this.doSelectPage(pageNumber);
        this.pageChanged.emit({ page: this.selectedPage - 1, dataPerPage: this._dataPerPage });
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    doSelectPage(pageNumber) {
        this.selectedPage = pageNumber;
        this.pages = this.renderPage(this.selectedPage, this.pageTotal);
        this.currentPageChange.emit(this.selectedPage);
    }
    /**
     * @return {?}
     */
    isDefined() {
        return this.amountOfData !== undefined && this.dataPerPage !== undefined;
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-pagination',
                template: "<div *ngIf=\"amountOfData > dataPerPage\" class=\"ugw-pagination-container\" [ngClass]=\"paginationALign\">\n  <ul class=\"ugw-pagination-list\">\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === 1\" (click)=\"onPageSelect(1)\">\n      <span class=\"nav-icon ugw-page-first fa fa-angle-double-left\"></span>\n    </li>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === 1\" (click)=\"onPageSelect(selectedPage - 1)\">\n      <span class=\"nav-icon ugw-page-prev fa fa-angle-left\"></span>\n    </li>\n    <ng-container *ngFor=\"let page of pages; let i = index\">\n      <li class=\"page-box\" [class.active]=\"page.active\" (click)=\"onPageSelect(page.value)\">\n        <span>{{page.label}}</span>\n      </li>\n    </ng-container>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === pageTotal\" (click)=\"onPageSelect(selectedPage + 1)\">\n      <span class=\"nav-icon ugw-page-next fa fa-angle-right\"></span>\n    </li>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === pageTotal\" (click)=\"onPageSelect(pageTotal)\">\n      <span class=\"nav-icon ugw-page-last fa fa-angle-double-right\"></span>\n    </li>\n  </ul>\n</div>\n",
                styles: [".ugw-pagination-container{display:flex}.ugw-pagination-container.left{justify-content:flex-start}.ugw-pagination-container.center{justify-content:center}.ugw-pagination-container.right{justify-content:flex-end}.ugw-pagination-container ul.ugw-pagination-list{display:flex;list-style:none;padding:0}.ugw-pagination-container li.page-box{cursor:pointer;color:#093697;display:flex;align-items:center;justify-content:center;font-size:16px;min-width:40px;height:40px;border-width:1px 1px 1px 0;border-color:#ddd;border-style:solid}.ugw-pagination-container li.page-box:first-child{border-left:1px solid #ddd}.ugw-pagination-container li.page-box:last-child{border-right:1px solid #ddd}.ugw-pagination-container li.page-box.active,.ugw-pagination-container li.page-box:hover{background:#093697;color:#fff;border-color:#093697}.ugw-pagination-container li.page-box.disabled-box{pointer-events:none}.ugw-pagination-container li.page-box.disabled-box span{opacity:.4}.ugw-pagination-container .nav-icon{padding:0 7px;font-size:15px}"]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [];
PaginationComponent.propDecorators = {
    dataPerPage: [{ type: Input }],
    amountOfData: [{ type: Input }],
    currentPage: [{ type: Input }],
    paginationALign: [{ type: Input }],
    pageChanged: [{ type: Output }],
    currentPageChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.paginationALign;
    /** @type {?} */
    PaginationComponent.prototype.pageChanged;
    /** @type {?} */
    PaginationComponent.prototype.currentPageChange;
    /** @type {?} */
    PaginationComponent.prototype._amountOfData;
    /** @type {?} */
    PaginationComponent.prototype._dataPerPage;
    /** @type {?} */
    PaginationComponent.prototype._pageTotal;
    /** @type {?} */
    PaginationComponent.prototype.selectedPage;
    /** @type {?} */
    PaginationComponent.prototype.isInitilized;
    /** @type {?} */
    PaginationComponent.prototype.pages;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/server-table/server-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServerTableComponent {
    /**
     * @param {?} _tablePageSvc
     */
    constructor(_tablePageSvc) {
        this._tablePageSvc = _tablePageSvc;
        this.editClicked = new EventEmitter();
        this.deleteClicked = new EventEmitter();
        this.detailClicked = new EventEmitter();
        this.inValidateClicked = new EventEmitter();
        this.pageChanged = new EventEmitter();
        this.printClicked = new EventEmitter();
        this.publishClicked = new EventEmitter();
        this.radioChanged = new EventEmitter();
        this.reloadClicked = new EventEmitter();
        this.selectedRows = new EventEmitter();
        this.switchChanged = new EventEmitter();
        this.validateClicked = new EventEmitter();
        this.verifyClicked = new EventEmitter();
        this.limitChanged = new EventEmitter();
        this.searchChanged = new EventEmitter();
        this.inputTextValueChange = new EventEmitter();
        this.inputRadioValueChange = new EventEmitter();
        this.page = new PilTablePage();
        this._isAllRowsSelected = false;
        this._columns = [];
        this._rows = [];
        this._rowsCollection = [];
        this._selectedRows = [];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set columns(data) {
        data.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            column.sort = '';
        }));
        this._columns = data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set rows(data) {
        if (data) {
            this._rows = this.setDataNumber(data);
            this._rowsCollection = data;
            this._tablePageSvc.setTablePage(this.page);
        }
        this._selectedRows = [];
        this._isAllRowsSelected = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.page.size = 10;
        this.page.page = 0;
        this.onPageChange(this.page);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearInterval(this.sortTimerInterval);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getEndPage(page) {
        /** @type {?} */
        let end = (page.pageNumber * page.size) + page.size;
        end = end > page.totalElements ? page.totalElements : end;
        return end;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getStartPage(page) {
        return page.pageNumber * page.size + 1;
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    mapActions(prop) {
        /** @type {?} */
        const data = this._rowsCollection[prop.index];
        switch (prop.type) {
            case 'update':
                this.editClicked.emit(data);
                break;
            case 'delete':
                this.deleteClicked.emit(data);
                break;
            case 'detail':
                this.detailClicked.emit(data);
                break;
            case 'print':
                this.printClicked.emit(data);
                break;
            case 'reload':
                this.reloadClicked.emit(data);
                break;
            case 'verify':
                this.verifyClicked.emit(data);
                break;
            case 'validate':
                this.validateClicked.emit(data);
                break;
            case 'invalidate':
                this.inValidateClicked.emit(data);
                break;
            case 'publish':
                this.publishClicked.emit(data);
                break;
            case 'activate':
                this.switchChanged.emit({ value: prop.$event, data: data });
                break;
        }
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    onLimitChange(limit) {
        this.page.size = Number(limit);
        this.page.pageNumber = 0;
        this.limitChanged.emit(this.page);
    }
    /**
     * @param {?} rowIndex
     * @param {?} prop
     * @return {?}
     */
    onInputRadioChange(rowIndex, prop) {
        this._columns.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.type && item.type === 'input-radio') {
                this._rows[rowIndex][item.prop] = (item.prop === prop) ? 1 : 0;
            }
        }));
        this.inputRadioValueChange.emit(this._rows[rowIndex]);
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    onInputTextChange(index, column) {
        this.inputTextValueChange.emit({
            index: index,
            column: column,
            data: this._rows[index]
        });
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.page.pageNumber = page.page;
        this.pageChanged.emit(this.page);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onRadioSelect(data) {
        this.reloadClicked.emit(data);
    }
    /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    onRowSelect(type, $event, data) {
        if ($event.target.checked) {
            (type === 'single') ? this._selectedRows.push(data) : this._selectedRows = this._rowsCollection;
        }
        else {
            this._selectedRows = (type === 'single') ? this._selectedRows.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.number !== data.number)) : [];
        }
        this.selectedRows.emit(this._selectedRows);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRowSelectMobile($event) {
        if ($event.target.checked) {
            this._isAllRowsSelected = true;
            this._selectedRows = this._rowsCollection;
        }
        else {
            this._isAllRowsSelected = false;
            this._selectedRows = [];
        }
        this.selectedRows.emit(this._selectedRows);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    onSearchChange(keyword) {
        this.page.pageNumber = 0;
        this.page.keyword = keyword.toLowerCase();
        this.searchChanged.emit(this.page);
    }
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    setColumnSortDirection(column, index) {
        clearInterval(this.sortTimerInterval);
        this._columns.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        (item, idx) => {
            if (idx !== index) {
                item.sort = '';
            }
        }));
        column.sort = (column.sort === 'asc') ? 'desc' : 'asc';
        this.sortTimerInterval = setTimeout((/**
         * @return {?}
         */
        () => {
            column.sort = '';
        }), 2000);
    }
    /**
     * @param {?} colleciton
     * @return {?}
     */
    setDataNumber(colleciton) {
        colleciton.forEach((/**
         * @param {?} element
         * @param {?} i
         * @return {?}
         */
        (element, i) => {
            element.hasAuth = this.setRowElementAuthStatus(element.auth);
            element.number = this.getStartPage(this.page) + i;
        }));
        return colleciton;
    }
    /**
     * @param {?} auth
     * @return {?}
     */
    setRowElementAuthStatus(auth) {
        if (auth) {
            /** @type {?} */
            const authValues = Object.keys(auth).map((/**
             * @param {?} key
             * @return {?}
             */
            key => auth[key]));
            return authValues.includes(true);
        }
        return false;
    }
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    sortTableColumn(column, index) {
        this.setColumnSortDirection(column, index);
        this._rows.sort(this.sortColumValue(column));
    }
    /**
     * @param {?} column
     * @return {?}
     */
    sortTableColumnMobile(column) {
        this._rows.sort(this.sortColumValue(column));
        column.sort = '';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    sortColumValue(data) {
        /** @type {?} */
        let sortOrder = 1;
        if (data.prop[0] === '-') {
            sortOrder = -1;
            data.prop = data.prop.substr(1);
        }
        return (/**
         * @param {?} currentValue
         * @param {?} nextValue
         * @return {?}
         */
        function (currentValue, nextValue) {
            /** @type {?} */
            let result;
            if (data.sort === 'asc') {
                result = (currentValue[data.prop] < nextValue[data.prop]) ? -1 : (currentValue[data.prop] > nextValue[data.prop]) ? 1 : 0;
            }
            else {
                result = (currentValue[data.prop] > nextValue[data.prop]) ? -1 : (currentValue[data.prop] < nextValue[data.prop]) ? 1 : 0;
            }
            return result * sortOrder;
        });
    }
}
ServerTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-server-table',
                template: "<uii-table-filter\n  [limitOptions]=\"limitOptions\"\n  [searchOptions]=\"searchOptions\"\n  (limitChanged)=\"onLimitChange($event)\"\n  (searchChanged)=\"onSearchChange($event)\">\n</uii-table-filter>\n<div class=\"gateway-table\">\n  <div class=\"gateway-table-header\">\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" id=\"aba\" class=\"gateway-rcb-select\" [checked]=\"_isAllRowsSelected\" (change)=\"_isAllRowsSelected = !_isAllRowsSelected; onRowSelect('multiple', $event)\"/>\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"radioColumn\"></div>\n    <div *ngFor=\"let column of _columns; let idx = index;\" class=\"header-cell\" [class.cell-number]=\"column.prop === 'number'\">\n      <span\n        *ngIf=\"!column.hasOwnProperty('header-type')\"\n        class=\"cell order-able\"\n        (click)=\"sortTableColumn(column, idx)\"\n        [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\">{{column.name}}</span>\n        <span\n          *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\"\n          class=\"cell order-able\"\n          (click)=\"sortTableColumn(column, idx)\"\n          [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\" [innerHTML]=\"column.name\"></span>\n    </div>\n    <div *ngIf=\"actionColumn\" class=\"header-cell cell-action\">\n      <span>{{actionTitle}}</span>\n    </div>\n  </div>\n  <uii-mobile-filter\n    [checkboxColumn]=\"checkboxColumn\"\n    [columns]=\"_columns\"\n    [isAllRowsSelected]=\"_isAllRowsSelected\"\n    [limitOptions]=\"limitOptions\"\n    [searchOptions]=\"searchOptions\"\n    (limitChanged)=\"onLimitChange($event)\"\n    (searchChanged)=\"onSearchChange($event)\"\n    (allRowsOnMobileSelected)=\"onRowSelectMobile($event)\"\n    (columnSorted)=\"sortTableColumnMobile($event)\">\n  </uii-mobile-filter>\n  <div *ngFor=\"let item of _rows; let i = index\" class=\"row-container\">\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"radioColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"radio\" name=\"mtable-radio-item\" [attr.id]=\"'mitem-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n        <p class=\"gateway-rcb-label radio-label\"></p>\n      </div>\n    </div>\n    <div class=\"gateway-table-data\">\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n          <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n        </div>\n      </div>\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"radioColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"radio\" name=\"table-radio-item\" [attr.id]=\"'item-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n          <p class=\"gateway-rcb-label radio-label\"></p>\n        </div>\n      </div>\n      <ng-container *ngFor=\"let column of _columns; let colIdx = index\">\n        <div class=\"data-cell\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" [class.hide-in-mobile]=\"column.hasOwnProperty('hide_in_mobile') && column.hide_in_mobile\">\n          <div class=\"mobile-view-header\">\n            <span *ngIf=\"!column.hasOwnProperty('header-type')\">{{column.name}}</span>\n            <span *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\" [innerHTML]=\"column.name\"></span>\n          </div>\n          <div class=\"table-small-content\">\n            <ng-container *ngIf=\"column.hasOwnProperty('type')\">\n              <span *ngIf=\"column.type === 'label'\" class=\"cell-label\" [ngClass]=\"item.class\">{{item[column.prop.toString()]}}</span>\n              <span *ngIf=\"column.type === 'html'\" class=\"cell-html\" [innerHTML]=\"item[column.prop.toString()]\"></span>\n              <span *ngIf=\"column.type === 'date' && !column.format\">{{item[column.prop.toString()] | date: 'dd MMMM y'}}</span>\n              <span *ngIf=\"column.type === 'input-text'\">\n                <input \n                  type=\"{{column.inputType}}\"\n                  maxlength=\"{{column.inputMaxLength}}\"\n                  class=\"table-input-text\" \n                  [class.uppercase]=\"column.textUppercase\"\n                  [class.lowercase]=\"column.textLowercase\"\n                  [(ngModel)]=\"item[column.prop.toString()]\" \n                  (change)=\"onInputTextChange(i, column.name)\">\n              </span>\n              <span *ngIf=\"column.type === 'input-radio'\">\n                <form>\n                  <div class=\"gateway-rcb\">\n                    <input type=\"radio\" \n                      [attr.name]=\"'radio-' + i\"\n                      [attr.id]=\"'radio-' + i + '-' + colIdx\"\n                      [checked]=\"item[column.prop] === 1\"\n                      (change)=\"onInputRadioChange(i, column.prop)\"\n                      class=\"gateway-rcb-select\" />\n                    <p class=\"gateway-rcb-label radio-label\"></p>\n                  </div>\n                </form>\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!column.hasOwnProperty('type')\">\n              <span>{{item[column.prop.toString()]}}</span>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"data-cell data-cell-action\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" *ngIf=\"actionColumn\">\n        <div class=\"mobile-view-header\"><span>{{actionTitle}}</span></div>\n        <div class=\"table-small-content\">\n          <span>\n            <uii-table-action\n              [index]=\"i\"\n              [item]=\"item\"\n              [auth]=\"item.auth\"\n              [actionInValidation]=\"actionInValidation\"\n              (emitAction)=\"mapActions($event)\">\n            </uii-table-action>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"gateway-empty-data\" *ngIf=\"_rowsCollection === undefined || _rowsCollection.length === 0\">\n  <span>Tidak ada data yang ditampilkan</span>\n</div>\n<uii-table-footer\n  [footerInfo]=\"footerInfo\"\n  [paginationOptions]=\"paginationOptions\"\n  [totalElements]=\"page.totalElements\"\n  [startPage]=\"getStartPage(page)\"\n  [endPage]=\"getEndPage(page)\"\n  (pageChanged)=\"onPageChange($event)\">\n</uii-table-footer>"
            }] }
];
/** @nocollapse */
ServerTableComponent.ctorParameters = () => [
    { type: TablePageService }
];
ServerTableComponent.propDecorators = {
    actionColumn: [{ type: Input }],
    actionTitle: [{ type: Input }],
    actionInValidation: [{ type: Input }],
    checkboxColumn: [{ type: Input }],
    footerInfo: [{ type: Input }],
    footerOptions: [{ type: Input }],
    limitOptions: [{ type: Input }],
    paginationOptions: [{ type: Input }],
    radioColumn: [{ type: Input }],
    searchOptions: [{ type: Input }],
    columns: [{ type: Input }],
    rows: [{ type: Input }],
    editClicked: [{ type: Output }],
    deleteClicked: [{ type: Output }],
    detailClicked: [{ type: Output }],
    inValidateClicked: [{ type: Output }],
    pageChanged: [{ type: Output }],
    printClicked: [{ type: Output }],
    publishClicked: [{ type: Output }],
    radioChanged: [{ type: Output }],
    reloadClicked: [{ type: Output }],
    selectedRows: [{ type: Output }],
    switchChanged: [{ type: Output }],
    validateClicked: [{ type: Output }],
    verifyClicked: [{ type: Output }],
    limitChanged: [{ type: Output }],
    searchChanged: [{ type: Output }],
    inputTextValueChange: [{ type: Output }],
    inputRadioValueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ServerTableComponent.prototype.actionColumn;
    /** @type {?} */
    ServerTableComponent.prototype.actionTitle;
    /** @type {?} */
    ServerTableComponent.prototype.actionInValidation;
    /** @type {?} */
    ServerTableComponent.prototype.checkboxColumn;
    /** @type {?} */
    ServerTableComponent.prototype.footerInfo;
    /** @type {?} */
    ServerTableComponent.prototype.footerOptions;
    /** @type {?} */
    ServerTableComponent.prototype.limitOptions;
    /** @type {?} */
    ServerTableComponent.prototype.paginationOptions;
    /** @type {?} */
    ServerTableComponent.prototype.radioColumn;
    /** @type {?} */
    ServerTableComponent.prototype.searchOptions;
    /** @type {?} */
    ServerTableComponent.prototype.editClicked;
    /** @type {?} */
    ServerTableComponent.prototype.deleteClicked;
    /** @type {?} */
    ServerTableComponent.prototype.detailClicked;
    /** @type {?} */
    ServerTableComponent.prototype.inValidateClicked;
    /** @type {?} */
    ServerTableComponent.prototype.pageChanged;
    /** @type {?} */
    ServerTableComponent.prototype.printClicked;
    /** @type {?} */
    ServerTableComponent.prototype.publishClicked;
    /** @type {?} */
    ServerTableComponent.prototype.radioChanged;
    /** @type {?} */
    ServerTableComponent.prototype.reloadClicked;
    /** @type {?} */
    ServerTableComponent.prototype.selectedRows;
    /** @type {?} */
    ServerTableComponent.prototype.switchChanged;
    /** @type {?} */
    ServerTableComponent.prototype.validateClicked;
    /** @type {?} */
    ServerTableComponent.prototype.verifyClicked;
    /** @type {?} */
    ServerTableComponent.prototype.limitChanged;
    /** @type {?} */
    ServerTableComponent.prototype.searchChanged;
    /** @type {?} */
    ServerTableComponent.prototype.inputTextValueChange;
    /** @type {?} */
    ServerTableComponent.prototype.inputRadioValueChange;
    /** @type {?} */
    ServerTableComponent.prototype.page;
    /** @type {?} */
    ServerTableComponent.prototype._isAllRowsSelected;
    /** @type {?} */
    ServerTableComponent.prototype.sortTimerInterval;
    /** @type {?} */
    ServerTableComponent.prototype._columns;
    /** @type {?} */
    ServerTableComponent.prototype._rows;
    /** @type {?} */
    ServerTableComponent.prototype._rowsCollection;
    /** @type {?} */
    ServerTableComponent.prototype._selectedRows;
    /**
     * @type {?}
     * @private
     */
    ServerTableComponent.prototype._tablePageSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/switch/switch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SwitchComponent {
    constructor() {
        this.useOverlay = false;
        this.changed = new EventEmitter();
        this.changeEvent = new EventEmitter();
        this._checked = false;
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set checked(val) {
        this._checked = val;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        this._disabled = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onSwitchToggle() {
        this._checked = !this._checked;
        this.changed.emit(this._checked);
    }
    /**
     * @return {?}
     */
    onOverlayToggle() {
        this.changeEvent.emit(this._checked);
    }
}
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-switch',
                template: "<div class=\"ugw-switch-container\">\n  <label\n    for=\"ugw-switch\"\n    [class.switch-pane-checked]=\"_checked\"\n    class=\"ugw-switch-label-container\"\n    [class.disabled-switch]=\"_disabled\"\n    (click)=\"_disabled ? $event.preventDefault() : onSwitchToggle()\">\n    <label\n      for=\"ugw-switch\"\n      class=\"ugw-switch-ball\"\n      [class.switch-ball-checked]=\"_checked\"\n      [class.disabled-switch]=\"_disabled\">\n    </label>\n  </label>\n  <div\n    *ngIf=\"useOverlay\"\n    class=\"switch-overlay\"\n    [class.disabled-switch]=\"_disabled\"\n    (click)=\"_disabled ? $event.preventDefault() : onOverlayToggle()\"></div>\n    <ng-content></ng-content>\n</div>",
                styles: [".ugw-switch-container{position:relative;height:22px;width:40px;display:inline-block}.ugw-switch-container label.ugw-switch-label-container{border:1px solid #ccc;position:absolute;z-index:0;top:0;left:0;height:100%;width:100%;border-radius:12px;cursor:pointer;transition:background 150ms}.ugw-switch-container label.ugw-switch-label-container.switch-pane-checked{background:#093697}.ugw-switch-container label.ugw-switch-ball{position:absolute;top:-1px;left:-1px;height:23px;width:23px;background:#fff;border:1px solid #ccc;border-radius:50%;cursor:pointer;transition:left .5s}.ugw-switch-container label.ugw-switch-ball.switch-ball-checked{left:40%}.ugw-switch-container .switch-overlay{position:absolute;width:100%;height:100%;z-index:100;cursor:pointer}.ugw-switch-container .disabled-switch{cursor:not-allowed!important;opacity:.5}"]
            }] }
];
/** @nocollapse */
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    useOverlay: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    changed: [{ type: Output }],
    changeEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SwitchComponent.prototype.useOverlay;
    /** @type {?} */
    SwitchComponent.prototype.changed;
    /** @type {?} */
    SwitchComponent.prototype.changeEvent;
    /** @type {?} */
    SwitchComponent.prototype._checked;
    /** @type {?} */
    SwitchComponent.prototype._disabled;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent {
    constructor() {
        this.actionColumn = true;
        this.actionInValidation = false;
        this.actionTitle = 'Aksi';
        this.checkboxColumn = false;
        this.columns = [];
        this.footerInfo = true;
        this.footerOptions = true;
        this.limitOptions = true;
        this.paginationOptions = true;
        this.radioColumn = false;
        this.rows = [];
        this.searchOptions = true;
        this.serverMode = false;
        this.deleteClicked = new EventEmitter();
        this.detailClicked = new EventEmitter();
        this.editClicked = new EventEmitter();
        this.inValidateClicked = new EventEmitter();
        this.limitChanged = new EventEmitter();
        this.pageChanged = new EventEmitter();
        this.printClicked = new EventEmitter();
        this.publishClicked = new EventEmitter();
        this.radioChange = new EventEmitter();
        this.reloadClicked = new EventEmitter();
        this.searchChanged = new EventEmitter();
        this.selectedRow = new EventEmitter();
        this.switchChanged = new EventEmitter();
        this.validateClicked = new EventEmitter();
        this.verifyClicked = new EventEmitter();
        this.inputTextValueChange = new EventEmitter();
        this.inputRadioValueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onEditClick(data) {
        this.editClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onDeleteClick(data) {
        this.deleteClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onDetailClick(data) {
        this.detailClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onInValidateClick(data) {
        this.inValidateClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onLimitChange(data) {
        this.limitChanged.emit(data);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onPrintClick(data) {
        this.printClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onPublishClick(data) {
        this.publishClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onRadioSelect(data) {
        this.radioChange.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onReloadClick(data) {
        this.reloadClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onRowSelect(data) {
        this.selectedRow.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onSearchChange(data) {
        this.searchChanged.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onSwitchChange(data) {
        this.switchChanged.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onValidateClick(data) {
        this.validateClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onVerifyClick(data) {
        this.verifyClicked.emit(data);
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table',
                template: `
    <uii-server-table
      *ngIf="serverMode; else clientMode"
      [actionColumn]="actionColumn"
      [actionTitle]="actionTitle"
      [checkboxColumn]="checkboxColumn"
      [columns]="columns"
      [footerInfo]="footerInfo"
      [footerOptions]="footerOptions"
      [limitOptions]="limitOptions"
      [radioColumn]="radioColumn"
      [rows]="rows"
      [searchOptions]="searchOptions"
      [searchOptions]="searchOptions"
      (limitChanged)="onLimitChange($event)"
      (pageChanged)="onPageChange($event)"
      (editClicked)="onEditClick($event)"
      (deleteClicked)="onDeleteClick($event)"
      (detailClicked)="onDetailClick($event)"
      (inValidateClicked)="onInValidateClick($event)"
      (printClicked)="onPrintClick($event)"
      (publishClicked)="onPublishClick($event)"
      (reloadClicked)="onReloadClick($event)"
      (searchChanged)="onSearchChange($event)"
      (switchChanged)="onSwitchChange($event)"
      (validateClicked)="onValidateClick($event)"
      (verifyClicked)="onVerifyClick($event)"
      (selectedRows)="onRowSelect($event)"
      (inputTextValueChange)="inputTextValueChange.emit($event)"
      (inputRadioValueChange)="inputRadioValueChange.emit($event)">
    </uii-server-table>
    <ng-template #clientMode>
      <uii-client-table
        [actionColumn]="actionColumn"
        [actionInValidation]="actionInValidation"
        [actionTitle]="actionTitle"
        [checkboxColumn]="checkboxColumn"
        [columns]="columns"
        [footerInfo]="footerInfo"
        [footerOptions]="footerOptions"
        [limitOptions]="limitOptions"
        [radioColumn]="radioColumn"
        [searchOptions]="searchOptions"
        [rows]="rows"
        (editClicked)="onEditClick($event)"
        (deleteClicked)="onDeleteClick($event)"
        (detailClicked)="onDetailClick($event)"
        (inValidateClicked)="onInValidateClick($event)"
        (printClicked)="onPrintClick($event)"
        (publishClicked)="onPublishClick($event)"
        (radioSelect)="onRadioSelect($event)"
        (reloadClicked)="onReloadClick($event)"
        (switchChanged)="onSwitchChange($event)"
        (validateClicked)="onValidateClick($event)"
        (verifyClicked)="onVerifyClick($event)"
        (selectedRows)="onRowSelect($event)"
        (inputTextValueChange)="inputTextValueChange.emit($event)"
        (inputRadioValueChange)="inputRadioValueChange.emit($event)">
      </uii-client-table>
    </ng-template>`
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    actionColumn: [{ type: Input }],
    actionInValidation: [{ type: Input }],
    actionTitle: [{ type: Input }],
    checkboxColumn: [{ type: Input }],
    columns: [{ type: Input }],
    footerInfo: [{ type: Input }],
    footerOptions: [{ type: Input }],
    limitOptions: [{ type: Input }],
    paginationOptions: [{ type: Input }],
    radioColumn: [{ type: Input }],
    rows: [{ type: Input }],
    searchOptions: [{ type: Input }],
    serverMode: [{ type: Input }],
    deleteClicked: [{ type: Output }],
    detailClicked: [{ type: Output }],
    editClicked: [{ type: Output }],
    inValidateClicked: [{ type: Output }],
    limitChanged: [{ type: Output }],
    pageChanged: [{ type: Output }],
    printClicked: [{ type: Output }],
    publishClicked: [{ type: Output }],
    radioChange: [{ type: Output }],
    reloadClicked: [{ type: Output }],
    searchChanged: [{ type: Output }],
    selectedRow: [{ type: Output }],
    switchChanged: [{ type: Output }],
    validateClicked: [{ type: Output }],
    verifyClicked: [{ type: Output }],
    inputTextValueChange: [{ type: Output }],
    inputRadioValueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableComponent.prototype.actionColumn;
    /** @type {?} */
    TableComponent.prototype.actionInValidation;
    /** @type {?} */
    TableComponent.prototype.actionTitle;
    /** @type {?} */
    TableComponent.prototype.checkboxColumn;
    /** @type {?} */
    TableComponent.prototype.columns;
    /** @type {?} */
    TableComponent.prototype.footerInfo;
    /** @type {?} */
    TableComponent.prototype.footerOptions;
    /** @type {?} */
    TableComponent.prototype.limitOptions;
    /** @type {?} */
    TableComponent.prototype.paginationOptions;
    /** @type {?} */
    TableComponent.prototype.radioColumn;
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.searchOptions;
    /** @type {?} */
    TableComponent.prototype.serverMode;
    /** @type {?} */
    TableComponent.prototype.deleteClicked;
    /** @type {?} */
    TableComponent.prototype.detailClicked;
    /** @type {?} */
    TableComponent.prototype.editClicked;
    /** @type {?} */
    TableComponent.prototype.inValidateClicked;
    /** @type {?} */
    TableComponent.prototype.limitChanged;
    /** @type {?} */
    TableComponent.prototype.pageChanged;
    /** @type {?} */
    TableComponent.prototype.printClicked;
    /** @type {?} */
    TableComponent.prototype.publishClicked;
    /** @type {?} */
    TableComponent.prototype.radioChange;
    /** @type {?} */
    TableComponent.prototype.reloadClicked;
    /** @type {?} */
    TableComponent.prototype.searchChanged;
    /** @type {?} */
    TableComponent.prototype.selectedRow;
    /** @type {?} */
    TableComponent.prototype.switchChanged;
    /** @type {?} */
    TableComponent.prototype.validateClicked;
    /** @type {?} */
    TableComponent.prototype.verifyClicked;
    /** @type {?} */
    TableComponent.prototype.inputTextValueChange;
    /** @type {?} */
    TableComponent.prototype.inputRadioValueChange;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/table-action/table-action.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableActionComponent {
    constructor() {
        this.emitAction = new EventEmitter();
    }
}
TableActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table-action',
                template: `
  <div class="cell-action">
    <span *ngIf="auth && auth.canPublish" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'publish'})" tooltip="Terbit">
      <span class="fa fa-arrow-circle-up"></span>
    </span>
    <span *ngIf="auth && auth.canUpdate" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'update'})" tooltip="Edit">
      <span class="fa fa-pencil"></span>
    </span>
    <span *ngIf="auth && auth.canRead" class="action-icon i-mat icon-primary " (click)="emitAction.emit({index: index, type: 'detail'})" tooltip="Detail">
      <span class="material-icons">visibility</span>
    </span>
    <span *ngIf="auth && auth.canVerify" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'verify'})" tooltip="Verifikasi">
      <span class="fa fa-comment"></span>
    </span>
    <span *ngIf="auth && auth.canValidate" class="action-icon i-mat icon-primary " (click)="emitAction.emit({index: index, type: 'validate'})" tooltip="Validasi">
      <span class="material-icons">playlist_add_check</span>
    </span>
    <span *ngIf="auth && auth.canPrint" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'print'})" tooltip="Cetak">
      <span class="fa fa-print"></span>
    </span>
    <span *ngIf="auth && auth.canReload" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'reload'})" tooltip="Muat ulang">
      <span class="fa fa-repeat"></span>
    </span>
    <span *ngIf="actionInValidation === true" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'invalidate'})" tooltip="Batalkan validasi">
      <span class="fa fa-lock"></span>
    </span>
    <span *ngIf="auth && auth.canDelete" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'delete'})" tooltip="Hapus">
      <span class="fa fa-trash"></span>
    </span>
    <span *ngIf="auth && auth.canActivate" class="action-icon i-on-off icon-primary" tooltip="Aktivasi">
      <uii-switch
        [useOverlay]="true"
        [checked]="item.is_active === 1 || item.flag_aktif === 1 ? true : false"
        (changeEvent)="emitAction.emit({$event: $event, index: index, type: 'activate'})">
      </uii-switch>
    </span>
  </div>
  `,
                styles: [".cell-action{font-size:20px;width:100%}.cell-action .action-icon{cursor:pointer;margin:0 5px;vertical-align:middle;display:inline}.cell-action .action-icon.i-mat,.cell-action .action-icon.i-on-off{position:relative;top:5px}"]
            }] }
];
TableActionComponent.propDecorators = {
    actionInValidation: [{ type: Input }],
    item: [{ type: Input }],
    auth: [{ type: Input }],
    index: [{ type: Input }],
    emitAction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableActionComponent.prototype.actionInValidation;
    /** @type {?} */
    TableActionComponent.prototype.item;
    /** @type {?} */
    TableActionComponent.prototype.auth;
    /** @type {?} */
    TableActionComponent.prototype.index;
    /** @type {?} */
    TableActionComponent.prototype.emitAction;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/table-filter/table-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableFilterComponent {
    constructor() {
        this.limitChanged = new EventEmitter();
        this.searchChanged = new EventEmitter();
        this.limitOpts = [
            {
                label: '10',
                value: 10
            },
            {
                label: '25',
                value: 25
            },
            {
                label: '50',
                value: 50
            },
            {
                label: '100',
                value: 100
            }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    onSearchChange(keyword) {
        this.searchChanged.emit(keyword);
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    onLimitChange(limit) {
        this.limitChanged.emit(limit);
    }
}
TableFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table-filter',
                template: "<div class=\"filter-options\" *ngIf=\"limitOptions || searchOptions\">\n  <div class=\"limit-options\" *ngIf=\"limitOptions\">\n    <span>\n      Tampilkan\n      <select (change)=\"onLimitChange($event.target.value)\">\n        <option *ngFor=\"let option of limitOpts\" [value]=\"option.value\">{{ option.label }}</option>\n      </select>\n      data\n    </span>\n  </div>\n  <div class=\"search-options\" *ngIf=\"searchOptions\">\n    <div class=\"input-container\">\n        <input #searchInput class=\"search-input\" type=\"text\" placeholder=\"Cari...\" (keyup.enter)=\"onSearchChange(searchInput.value)\"/>\n        <button><span class=\"fa fa-search\" (click)=\"onSearchChange(searchInput.value)\"></span></button>\n      </div>\n  </div>\n</div>",
                styles: [".filter-options{width:100%;height:40px;position:relative;margin-bottom:15px}.filter-options .limit-options{font-size:12px}.filter-options .limit-options select{width:55px;height:40px;font-size:13px;background:#fff;outline:0}.filter-options .search-options{position:absolute;top:0;right:0;z-index:20}.filter-options .search-options .input-container{display:flex;align-items:center}.filter-options .search-options .search-input{height:40px;width:384px;margin:0;padding:0 10px;border:1px solid #ccc;outline:0}.filter-options .search-options button{background:#093697;box-shadow:none;color:#fff;height:40px;width:40px;border:none;outline:0;margin:0;font-size:20px}@media screen and (max-width:770px){.filter-options{display:none}}"]
            }] }
];
/** @nocollapse */
TableFilterComponent.ctorParameters = () => [];
TableFilterComponent.propDecorators = {
    limitOptions: [{ type: Input }],
    searchOptions: [{ type: Input }],
    limitChanged: [{ type: Output }],
    searchChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableFilterComponent.prototype.limitOptions;
    /** @type {?} */
    TableFilterComponent.prototype.searchOptions;
    /** @type {?} */
    TableFilterComponent.prototype.limitChanged;
    /** @type {?} */
    TableFilterComponent.prototype.searchChanged;
    /** @type {?} */
    TableFilterComponent.prototype.limitOpts;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/table-footer/table-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableFooterComponent {
    /**
     * @param {?} _tablePageSvc
     */
    constructor(_tablePageSvc) {
        this._tablePageSvc = _tablePageSvc;
        this.pageChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setPageInfo();
    }
    /**
     * @return {?}
     */
    setPageInfo() {
        this._tablePageSvc.getTablePage().subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            this._page = page;
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectedPageChange($event) {
        this.pageChanged.emit($event);
    }
}
TableFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table-footer',
                template: `
    <div class="table-footer" *ngIf="footerInfo && totalElements > 0">
      <span>Menampilkan {{startPage}} sampai {{endPage}} dari {{totalElements}} data</span>
    </div>
    <ng-container *ngIf="true">
      <uii-pagination
        [currentPage]="(_page.pageNumber + 1)"
        [dataPerPage]="_page.size"
        [amountOfData]="totalElements"
        (pageChanged)="selectedPageChange($event)">
      </uii-pagination>
    </ng-container>`,
                styles: [`
    .table-footer {
      font-size: 12px;
      margin: 20px 0;
    }`]
            }] }
];
/** @nocollapse */
TableFooterComponent.ctorParameters = () => [
    { type: TablePageService }
];
TableFooterComponent.propDecorators = {
    footerInfo: [{ type: Input }],
    footerOptions: [{ type: Input }],
    paginationOptions: [{ type: Input }],
    pageChanged: [{ type: Output }],
    totalElements: [{ type: Input }],
    startPage: [{ type: Input }],
    endPage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableFooterComponent.prototype.footerInfo;
    /** @type {?} */
    TableFooterComponent.prototype.footerOptions;
    /** @type {?} */
    TableFooterComponent.prototype.paginationOptions;
    /** @type {?} */
    TableFooterComponent.prototype.pageChanged;
    /** @type {?} */
    TableFooterComponent.prototype.totalElements;
    /** @type {?} */
    TableFooterComponent.prototype.startPage;
    /** @type {?} */
    TableFooterComponent.prototype.endPage;
    /** @type {?} */
    TableFooterComponent.prototype._page;
    /**
     * @type {?}
     * @private
     */
    TableFooterComponent.prototype._tablePageSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function fadeIn() {
    return [
        state('in', style({ opacity: 1 })),
        transition(':enter', [
            style({ opacity: 0 }),
            animate(400)
        ])
    ];
}
/**
 * @return {?}
 */
function fadeOut() {
    return [
        state('out', style({ opacity: 0 })),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(400)
        ])
    ];
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/skeletons/table-skeleton/table-skeleton.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableSkeletonComponent {
    constructor() {
        this.columnCount = 3;
        this.rowCount = 10;
        this.showActionColumn = true;
        this.showButtonCreate = true;
        this.showCheckButton = false;
        this.showLimitOptions = true;
        this.showMobileLimitOptions = true;
        this.showNumberColumn = true;
        this.showRadioButton = false;
        this.showSearchOptions = true;
        this.useCustomElement = false;
        this.rows = Array;
        this.columns = Array;
    }
}
TableSkeletonComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table-skeleton',
                template: "<div [@fadeIn]=\"'in'\">\n  <div *ngIf=\"showButtonCreate\" class=\"button-action-right\">\n      <button class=\"btn btn-skeleton\"></button>\n  </div>\n  <div *ngIf=\"showMobileLimitOptions\" class=\"search-limit-mobile-options\"></div>\n  <div class=\"mobile-skeleton-container\">\n    <div *ngFor=\"let row of rows(rowCount)\" class=\"table-skeleton-mobile\">\n      <div class=\"cell-left\">\n          <ul class=\"mobile-cell-container\">\n            <li *ngIf=\"showNumberColumn\"></li>\n            <li *ngFor=\"let colum of columns(columnCount)\"></li>\n          </ul>\n        </div>\n      <div class=\"cell-right\">\n          <ul class=\"mobile-cell-container\">\n            <li *ngIf=\"showNumberColumn\"></li>\n            <li *ngFor=\"let colum of columns(columnCount)\"></li>\n          </ul>\n        </div>\n    </div>\n  </div>\n  <div class=\"row search-limit-options\" *ngIf=\"showSearchOptions || showLimitOptions\">\n      <div class=\"col-sm-6 skeleton\">\n        <div *ngIf=\"showLimitOptions\" class=\"linear-lg pull-left\"></div>\n      </div>\n      <div class=\"col-sm-6 skeleton\">\n        <div *ngIf=\"showSearchOptions\" class=\"linear-xl pull-right\"></div>\n      </div>\n  </div>\n  <table class=\"table table-skeleton table-striped\">\n    <thead>\n      <tr>\n        <th *ngIf=\"showNumberColumn\" width=\"40\"><label class=\"header-number\"></label></th>\n        <th *ngIf=\"showCheckButton || showRadioButton\" width=\"40\"><label class=\"header-number\"></label></th>\n        <th *ngFor=\"let colum of columns(columnCount)\"><label></label></th>\n        <th *ngIf=\"showActionColumn\" class=\"header-action\"><label></label></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let row of rows(rowCount)\">\n        <td *ngIf=\"showNumberColumn\"><label class=\"body-number\"></label></td>\n        <td *ngIf=\"showCheckButton || showRadioButton\"><label class=\"body-number\"></label></td>\n        <td *ngFor=\"let colum of columns(columnCount)\"><label class=\"body-label\"></label></td>\n        <td *ngIf=\"showActionColumn\" class=\"body-action\"><label class=\"body-label\"></label></td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                animations: [
                    trigger('fadeIn', fadeIn()),
                    trigger('fadeOut', fadeOut())
                ]
            }] }
];
TableSkeletonComponent.propDecorators = {
    customElement: [{ type: Input }],
    columnCount: [{ type: Input }],
    rowCount: [{ type: Input }],
    showActionColumn: [{ type: Input }],
    showButtonCreate: [{ type: Input }],
    showCheckButton: [{ type: Input }],
    showLimitOptions: [{ type: Input }],
    showMobileLimitOptions: [{ type: Input }],
    showNumberColumn: [{ type: Input }],
    showRadioButton: [{ type: Input }],
    showSearchOptions: [{ type: Input }],
    useCustomElement: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableSkeletonComponent.prototype.customElement;
    /** @type {?} */
    TableSkeletonComponent.prototype.columnCount;
    /** @type {?} */
    TableSkeletonComponent.prototype.rowCount;
    /** @type {?} */
    TableSkeletonComponent.prototype.showActionColumn;
    /** @type {?} */
    TableSkeletonComponent.prototype.showButtonCreate;
    /** @type {?} */
    TableSkeletonComponent.prototype.showCheckButton;
    /** @type {?} */
    TableSkeletonComponent.prototype.showLimitOptions;
    /** @type {?} */
    TableSkeletonComponent.prototype.showMobileLimitOptions;
    /** @type {?} */
    TableSkeletonComponent.prototype.showNumberColumn;
    /** @type {?} */
    TableSkeletonComponent.prototype.showRadioButton;
    /** @type {?} */
    TableSkeletonComponent.prototype.showSearchOptions;
    /** @type {?} */
    TableSkeletonComponent.prototype.useCustomElement;
    /** @type {?} */
    TableSkeletonComponent.prototype.rows;
    /** @type {?} */
    TableSkeletonComponent.prototype.columns;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/tabset/tabset.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsetComponent {
    constructor() {
        this.tabMobileAttr = 'both';
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        this.tabs.push(tab);
        this.tabs[0].active = true;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    onTabClick(tab) {
        this.tabs.forEach((/**
         * @param {?} tabItem
         * @return {?}
         */
        (tabItem) => {
            if (tabItem === tab) {
                tabItem.active = true;
                tabItem.selectedTab = tab;
            }
            else {
                tabItem.active = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    getLeft() {
        /** @type {?} */
        const index = this.tabs.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.active === true));
        return index * (100 / this.tabs.length);
    }
    /**
     * @return {?}
     */
    borderWidth() {
        return (100 / this.tabs.length);
    }
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    selectTab(tabIndex) {
        this.tabs.forEach((/**
         * @param {?} tabItem
         * @param {?} index
         * @return {?}
         */
        (tabItem, index) => {
            if (index === tabIndex) {
                tabItem.active = true;
                tabItem.selectedTab = tabItem;
            }
            else {
                tabItem.active = false;
            }
        }));
    }
}
TabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-tabset',
                template: "<ul class=\"ugw-tab-container\">\n  <li *ngFor=\"let tabItem of tabs; let i = index\"\n    [style.width.%]=\"(100 / tabs.length)\"\n    [class.tab-active]=\"tabItem.active\"\n    (click)=\"onTabClick(tabItem)\">\n    <a href=\"javascript:void(0);\">\n      <span class=\"tab-title-container\">\n        <span \n          *ngIf=\"tabItem.tabIcon\"\n          class=\"tab-icon\"\n          [ngClass]=\"tabItem.tabIcon ? tabItem.tabIcon : ''\"\n          [class.hide-tab-icon]=\"tabMobileAttr === 'title'\">\n        </span>\n        <span\n          class=\"tab-title\"\n          [class.hide-tab-title]=\"tabMobileAttr === 'icon'\">\n          {{tabItem.title}}</span>\n      </span>\n    </a>\n    <div class=\"tab-border\" [style.width.%]=\"borderWidth()\" [style.left.%]=\"getLeft()\" ></div>\n  </li>\n</ul>\n<div class=\"tab-item-content\">\n  <ng-content></ng-content>\n</div>",
                styles: ["::-webkit-scrollbar{display:none}@media screen and (max-width:700px){.ugw-tab-container{-webkit-overflow-scrolling:touch;white-space:nowrap;overflow-y:scroll;list-style:none}.ugw-tab-container li{position:relative;display:inline-block;min-width:33%}.ugw-tab-container li span.tab-title-container{overflow:visible;vertical-align:middle}.ugw-tab-container li .hide-tab-icon,.ugw-tab-container li .hide-tab-title{display:none}.ugw-tab-container li.tab-active::after{content:'';position:absolute;left:0;bottom:0;height:4px;width:100%;background:#093697}.ugw-tab-container .tab-border{display:none}}.ugw-tab-container{position:relative;width:100%;display:flex;justify-content:space-between;padding:0;margin:0;border-bottom:1px solid #fbc02d;list-style:none}.ugw-tab-container li{margin:0;cursor:pointer;text-align:center;height:45px;font-weight:700;color:#093697;padding:0 4px}.ugw-tab-container li a{display:flex;align-items:center;justify-content:space-around;width:100%;height:100%}.ugw-tab-container li span.tab-icon{margin-right:2px}.ugw-tab-container li span.tab-title-container{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}.ugw-tab-container .tab-border{position:absolute;bottom:0;height:4px;transition:left .3s;background:#093697}.tab-item-content{width:100%}.tab-item-content ::ng-deep .tab-active{display:block!important}.tab-item-content ::ng-deep .tab-pane{display:none}"]
            }] }
];
/** @nocollapse */
TabsetComponent.ctorParameters = () => [];
TabsetComponent.propDecorators = {
    tabMobileAttr: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TabsetComponent.prototype.tabMobileAttr;
    /** @type {?} */
    TabsetComponent.prototype.tabs;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/text-editor/text-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextEditorComponent {
    constructor() {
        this.height = 250;
        this.menuBar = false;
        this.toolBar = true;
        this.statusBar = true;
        this.editorContentChanged = new EventEmitter();
        this.editorBlured = new EventEmitter();
        this.tinyMceConfig = {
            menubar: this.menuBar,
            height: Number(this.height),
            branding: false,
            resize: false,
            statusbar: this.statusBar,
            toolbar: this.toolBar ?
                [
                    'undo redo | styleselect | fontselect | fontsizeselect | subscript superscript | bullist numlist | bold italic underline strikethrough  | alignleft aligncenter alignright alignjustify  |  outdent indent| link | image'
                ] : false,
            plugins: ['link', 'paste', 'lists', 'image'],
            mobile: {
                theme: 'silver',
                menubar: false,
                statusbar: false,
                toolbar: this.toolBar ?
                    [
                        'undo redo | styleselect | bullist numlist| subscript superscript | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent'
                    ] : false,
            },
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            (editor) => {
                editor.on('blur', (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const content = editor.getContent();
                    this.editorBlured.emit(content);
                }));
                editor.on('change', (/**
                 * @return {?}
                 */
                () => {
                    this.editorContentChanged.emit(editor.getContent());
                }));
            })
        };
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.editor) {
            if (this.content && this.content.length > 0) {
                this.editor.setContent(this.content);
            }
            else {
                this.editor.setContent('');
            }
        }
    }
}
TextEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-text-editor',
                template: "<div *ngIf=\"group\" [formGroup]=\"group\">\n  <editor\n    id=\"{{ elementId }}\"\n    apiKey=\"test\"\n    [init]= \"tinyMceConfig\"\n    [formControlName]=\"controlName\"></editor>\n</div>\n<div *ngIf=\"!group\">\n  <editor\n    id=\"{{ elementId }}\"\n    apiKey=\"test\"\n    [init]=\"tinyMceConfig\"></editor>\n</div>\n  ",
                styles: [".mce-notification{display:none!important}"]
            }] }
];
/** @nocollapse */
TextEditorComponent.ctorParameters = () => [];
TextEditorComponent.propDecorators = {
    elementId: [{ type: Input }],
    group: [{ type: Input }],
    controlName: [{ type: Input }],
    content: [{ type: Input }],
    height: [{ type: Input }],
    menuBar: [{ type: Input }],
    toolBar: [{ type: Input }],
    statusBar: [{ type: Input }],
    editorContentChanged: [{ type: Output }],
    editorBlured: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TextEditorComponent.prototype.elementId;
    /** @type {?} */
    TextEditorComponent.prototype.group;
    /** @type {?} */
    TextEditorComponent.prototype.controlName;
    /** @type {?} */
    TextEditorComponent.prototype.content;
    /** @type {?} */
    TextEditorComponent.prototype.height;
    /** @type {?} */
    TextEditorComponent.prototype.menuBar;
    /** @type {?} */
    TextEditorComponent.prototype.toolBar;
    /** @type {?} */
    TextEditorComponent.prototype.statusBar;
    /** @type {?} */
    TextEditorComponent.prototype.editorContentChanged;
    /** @type {?} */
    TextEditorComponent.prototype.editorBlured;
    /** @type {?} */
    TextEditorComponent.prototype.editor;
    /** @type {?} */
    TextEditorComponent.prototype.tinyMceConfig;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pilar.constant.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const IMAGES_ROOT = 'assets/img/';
// tslint:disable-next-line:max-line-length
/** @type {?} */
const IMAGE_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MzJERDRFRkJERUYxMUU3QkUzRkJEOTJCNTZERjhCRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MzJERDRGMEJERUYxMUU3QkUzRkJEOTJCNTZERjhCRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMkRENEVEQkRFRjExRTdCRTNGQkQ5MkI1NkRGOEJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzMkRENEVFQkRFRjExRTdCRTNGQkQ5MkI1NkRGOEJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xQAUNwAAASBJREFUeNrs0jERAAAIxDDAv+fHACNjIqHXTlLwbSTAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsuK0AAwBL0gQp9PLLgwAAAABJRU5ErkJggg==';
/** @type {?} */
const MODAL = {
    ALERT: {
        INFO: 'modal-alert modal-info',
        SUCCESS: 'modal-alert modal-info',
        WARNING: 'modal-alert modal-warning',
        DANGER: 'modal-alert modal-danger'
    },
    DETAIL: {
        SMALL: 'modal-sm modal-detail',
        DEFAULT: 'modal-detail',
        MEDIUM: 'modal-md modal-detail',
        LARGE: 'modal-lg modal-detail',
        XL: 'modal-xl modal-detail'
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/image.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageService {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    imageBase64fromFile(file, callback) {
        /** @type {?} */
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (/**
         * @return {?}
         */
        () => {
            callback(reader.result);
        });
    }
    /**
     * @param {?} url
     * @param {?} callback
     * @return {?}
     */
    imageBase64fromUrl(url, callback) {
        /** @type {?} */
        const xhr = new XMLHttpRequest();
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            function () {
                callback(reader.result);
            });
            reader.readAsDataURL(xhr.response);
        });
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
}
ImageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ImageService.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    ImageService.prototype.dangerousUrl;
    /** @type {?} */
    ImageService.prototype.trustedUrl;
    /**
     * @type {?}
     * @private
     */
    ImageService.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/image-upload/image-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiiImageUploadComponent {
    /**
     * @param {?} imageSvc
     */
    constructor(imageSvc) {
        this.imageSvc = imageSvc;
        this.required = false;
        this.fileType = ['png'];
        this.imageSelected = new EventEmitter();
        this.fileOversize = false;
        this.fileNotAllowed = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fileTypeAllowed = '';
        this.fileType.forEach((/**
         * @param {?} type
         * @param {?} index
         * @return {?}
         */
        (type, index) => {
            if (index > 0) {
                this.fileTypeAllowed += ', ';
            }
            this.fileTypeAllowed += '*.' + type;
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFileChange(event) {
        if (event.target.files.length > 0) {
            /** @type {?} */
            const file = event.target.files[0];
            this.imageBase64 = IMAGE_PLACEHOLDER;
            /** @type {?} */
            const typeAllowed = this.fileType.filter((/**
             * @param {?} type
             * @return {?}
             */
            type => file.type === 'image/' + type));
            this.imageSelected.emit(null);
            if (typeAllowed.length === 0) {
                this.fileNotAllowed = true;
                return;
            }
            if (file.size >= this.maxFileSize) {
                this.fileOversize = true;
                return;
            }
            this.fileOversize = false;
            this.fileNotAllowed = false;
            /** @type {?} */
            const self = this;
            this.imageSvc.imageBase64fromFile(file, (/**
             * @param {?} base64
             * @return {?}
             */
            function (base64) {
                self.imageBase64 = base64;
            }));
            this.imageSelected.emit(file);
        }
    }
}
UiiImageUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-image-upload',
                template: "<div class=\"form-upload-image\">\n  <div class=\"form-upload-image-input\">\n      <label class=\"control-label\" for=\"\">{{ label }}</label>\n      <label class=\"btn btn-primary form-control-file\">\n        {{ 'Pilih gambar' | translate }} <input type=\"file\" (change)=\"onFileChange($event)\" #fileInput>\n      </label>\n      <div class=\"control-note\">\n        <p>Format {{ fileTypeAllowed }} <br /> Maksimal {{ maxFileSize | fileSize:'MB' }}</p>\n      </div>\n  </div>\n  <div class=\"form-upload-image-preview\">\n    <img src=\"{{ imageBase64 }}\" alt=\"\">\n  </div>\n</div>\n<div class=\"failed-upload-photo\">\n  <small *ngIf=\"fileOversize\" class=\"text-danger\">\n    {{ 'file oversize' | translate }}\n  </small>\n  <small *ngIf=\"fileNotAllowed\" class=\"text-danger\">\n    {{ 'file not allowed' | translate }}\n  </small>\n</div>"
            }] }
];
/** @nocollapse */
UiiImageUploadComponent.ctorParameters = () => [
    { type: ImageService }
];
UiiImageUploadComponent.propDecorators = {
    label: [{ type: Input }],
    required: [{ type: Input }],
    fileType: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    imageBase64: [{ type: Input }],
    imageSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiiImageUploadComponent.prototype.label;
    /** @type {?} */
    UiiImageUploadComponent.prototype.required;
    /** @type {?} */
    UiiImageUploadComponent.prototype.fileType;
    /** @type {?} */
    UiiImageUploadComponent.prototype.maxFileSize;
    /** @type {?} */
    UiiImageUploadComponent.prototype.imageBase64;
    /** @type {?} */
    UiiImageUploadComponent.prototype.imageSelected;
    /** @type {?} */
    UiiImageUploadComponent.prototype.fileTypeAllowed;
    /** @type {?} */
    UiiImageUploadComponent.prototype.fileOversize;
    /** @type {?} */
    UiiImageUploadComponent.prototype.fileNotAllowed;
    /**
     * @type {?}
     * @private
     */
    UiiImageUploadComponent.prototype.imageSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/data-grid/data-grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiiDataGridComponent {
    constructor() {
        this.gridTitle = '';
        this.columnTitle = [];
        this.rowTitle = [];
        this.data = [];
        this.itemClick = new EventEmitter();
        this._enableItemClick = false;
    }
    /**
     * @param {?} enable
     * @return {?}
     */
    set enableItemCLick(enable) {
        this._enableItemClick = enable;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onItemClick(data) {
        if (this._enableItemClick) {
            this.itemClick.emit(data);
        }
    }
}
UiiDataGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-datagrid',
                template: "<div class=\"datagrid\">\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr class=\"active\">\n        <th style=\"width: 100px\">\n          <div class=\"text-center\" style=\"margin: auto; width: 100px\">{{ gridTitle }}</div>\n        </th>\n        <th *ngFor=\"let colTitle of columnTitle\">\n          <div class=\"text-center\" style=\"width: 250px;\">{{ colTitle }}</div>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let rTitle of rowTitle\" style=\"height: 100px;\">\n        <th class=\"text-center active\" style=\"vertical-align: middle;\">{{ rTitle }}</th>\n        <td *ngFor=\"let colTitle of columnTitle\" style=\"width: 300px; font-size: 13px\">\n          <ng-container *ngIf=\"data[rTitle]\">\n            <ng-container *ngIf=\"data[rTitle][colTitle]\" >\n              <div class=\"grid-item-wrapper\" [ngStyle]=\"_enableItemClick && {'cursor' : 'pointer'}\" (click)=\"onItemClick(data[rTitle][colTitle].value)\">\n                <span class=\"text-center\" [innerHTML]=\"data[rTitle][colTitle].label\"></span>\n              </div>\n            </ng-container>\n          </ng-container>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                styles: [".datagrid{overflow:scroll;width:100%;max-height:35em}.datagrid thead th{position:-webkit-sticky;position:sticky;top:0}.datagrid thead th:first-child{left:0;z-index:1}.datagrid tbody th{position:-webkit-sticky;position:sticky;left:0;background:#f0f0f0}.datagrid table{border-collapse:collapse;width:100%}"]
            }] }
];
UiiDataGridComponent.propDecorators = {
    gridTitle: [{ type: Input }],
    columnTitle: [{ type: Input }],
    rowTitle: [{ type: Input }],
    data: [{ type: Input }],
    enableItemCLick: [{ type: Input }],
    itemClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiiDataGridComponent.prototype.gridTitle;
    /** @type {?} */
    UiiDataGridComponent.prototype.columnTitle;
    /** @type {?} */
    UiiDataGridComponent.prototype.rowTitle;
    /** @type {?} */
    UiiDataGridComponent.prototype.data;
    /** @type {?} */
    UiiDataGridComponent.prototype.itemClick;
    /** @type {?} */
    UiiDataGridComponent.prototype._enableItemClick;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/wizard/wizard-step.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WizardStepComponent {
    constructor() {
        this.hidden = false;
        this.isValid = true;
        this.isAllowed = -1;
        this.showNext = true;
        this.showPrev = true;
        // tslint:disable-next-line:no-output-on-prefix
        this.onNext = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onPrev = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onComplete = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onCancel = new EventEmitter();
        this._isActive = false;
        this.isDisabled = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} isActive
     * @return {?}
     */
    set isActive(isActive) {
        this._isActive = isActive;
        this.isDisabled = false;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this._isActive;
    }
}
WizardStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-wizard-step',
                template: `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
            }] }
];
/** @nocollapse */
WizardStepComponent.ctorParameters = () => [];
WizardStepComponent.propDecorators = {
    activeStepIndex: [{ type: Input }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    hidden: [{ type: Input }],
    isValid: [{ type: Input }],
    isAllowed: [{ type: Input }],
    showNext: [{ type: Input }],
    showPrev: [{ type: Input }],
    onNext: [{ type: Output }],
    onPrev: [{ type: Output }],
    onComplete: [{ type: Output }],
    onCancel: [{ type: Output }],
    isActive: [{ type: Input, args: ['isActive',] }]
};
if (false) {
    /** @type {?} */
    WizardStepComponent.prototype.activeStepIndex;
    /** @type {?} */
    WizardStepComponent.prototype.title;
    /** @type {?} */
    WizardStepComponent.prototype.subtitle;
    /** @type {?} */
    WizardStepComponent.prototype.hidden;
    /** @type {?} */
    WizardStepComponent.prototype.isValid;
    /** @type {?} */
    WizardStepComponent.prototype.isAllowed;
    /** @type {?} */
    WizardStepComponent.prototype.showNext;
    /** @type {?} */
    WizardStepComponent.prototype.showPrev;
    /** @type {?} */
    WizardStepComponent.prototype.onNext;
    /** @type {?} */
    WizardStepComponent.prototype.onPrev;
    /** @type {?} */
    WizardStepComponent.prototype.onComplete;
    /** @type {?} */
    WizardStepComponent.prototype.onCancel;
    /** @type {?} */
    WizardStepComponent.prototype._isActive;
    /** @type {?} */
    WizardStepComponent.prototype.isDisabled;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/wizard/wizard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WizardComponent {
    constructor() {
        this._steps = [];
        this._isCompleted = false;
        this.cancelLbl = 'Cancel';
        this.previousLbl = 'Previous';
        this.nextLbl = 'Next';
        this.doneLbl = 'Done';
        this.clickTabEnable = true;
        this.formSubmitting = false;
        // tslint:disable-next-line:no-output-on-prefix
        this.onStepChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        step => this._steps.push(step)));
        if (this.steps.length) {
            this.steps[0].isActive = true;
        }
        if (this.wizardNextTrigger) {
            this.wizardNextTrigger.subscribe((/**
             * @param {?} step
             * @return {?}
             */
            step => {
                /** @type {?} */
                const nextStep = this.steps[step];
                nextStep.isDisabled = false;
                this.activeStep = nextStep;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.forceStep) {
            // this.revertToStep(this.forceStep);
        }
    }
    /**
     * @return {?}
     */
    get steps() {
        return this._steps.filter((/**
         * @param {?} step
         * @return {?}
         */
        step => !step.hidden));
    }
    /**
     * @return {?}
     */
    get isCompleted() {
        return this._isCompleted;
    }
    /**
     * @return {?}
     */
    get activeStep() {
        return this.steps.find((/**
         * @param {?} step
         * @return {?}
         */
        step => step.isActive));
    }
    /**
     * @param {?} step
     * @return {?}
     */
    set activeStep(step) {
        if (step !== this.activeStep && !step.isDisabled) {
            this.activeStep.isActive = false;
            step.isActive = true;
            step.activeStepIndex = this.activeStepIndex;
            this.onStepChanged.emit(step);
        }
    }
    /**
     * @return {?}
     */
    get activeStepIndex() {
        return this.steps.indexOf(this.activeStep);
    }
    /**
     * @return {?}
     */
    get hasNextStep() {
        return this.activeStepIndex < this.steps.length - 1;
    }
    /**
     * @return {?}
     */
    get hasPrevStep() {
        return this.activeStepIndex > 0;
    }
    /**
     * @param {?} step
     * @return {?}
     */
    goToStep(step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    }
    /**
     * @param {?} stepIndex
     * @return {?}
     */
    revertToStep(stepIndex) {
        this._isCompleted = false;
        /** @type {?} */
        const nextStep = this.steps[stepIndex];
        this.goToStep(nextStep);
    }
    /**
     * @return {?}
     */
    next() {
        if (this.hasNextStep) {
            this.activeStep.onNext.emit(this.activeStepIndex);
            if (this.wizardNextTrigger) {
                this.wizardNextTrigger.subscribe((/**
                 * @param {?} step
                 * @return {?}
                 */
                step => {
                    /** @type {?} */
                    const nextStep = this.steps[step];
                    nextStep.isDisabled = false;
                    this.activeStep = nextStep;
                }));
            }
            else {
                /** @type {?} */
                const nextStep = this.steps[this.activeStepIndex + 1];
                nextStep.isDisabled = false;
                this.activeStep = nextStep;
            }
        }
    }
    /**
     * @return {?}
     */
    previous() {
        if (this.hasPrevStep) {
            this.activeStep.onPrev.emit();
            /** @type {?} */
            const prevStep = this.steps[this.activeStepIndex - 1];
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    }
    /**
     * @return {?}
     */
    complete() {
        this.activeStep.onComplete.emit();
        if (this.forceStep) {
            this.revertToStep(this.forceStep);
        }
        else {
            this._isCompleted = true;
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.activeStep.onCancel.emit();
    }
}
WizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-form-wizard',
                template: `<div class="card">
    <div class="card-header">
      <ul class="nav nav-justified nav-wizard">
        <li
          class="nav-item"
          *ngFor="let step of steps"
          [ngClass]="{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}">
          <a (click)="clickTabEnable ? goToStep(step) : false;">
            <h3>{{step.title}}</h3>
            <p *ngIf="step.subtitle">{{step.subtitle}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="card-block">
      <ng-content></ng-content>
    </div>
    <div class="card-footer" [hidden]="isCompleted">
        <button type="button" class="btn btn-default float-left" (click)="cancel()">{{ pagingLabel.cancel }}</button>
        <button
          type="button"
          class="btn btn-success pull-right"
          (click)="complete()"
          [disabled]="!activeStep.isValid || formSubmitting"
          [hidden]="hasNextStep">
            {{ pagingLabel.done }}
        </button>
        <button
          type="button"
          class="btn btn-primary pull-right"
          (click)="next()"
          [disabled]="!activeStep.isValid"
          [hidden]="!hasNextStep || !activeStep.showNext">
            {{ pagingLabel.next }} <span class="fa fa-arrow-right"></span>
        </button>
        <button
          type="button"
          class="btn btn-default pull-right"
          (click)="previous()"
          [hidden]="!hasPrevStep || !activeStep.showPrev">
            <span class="fa fa-arrow-left"></span> {{ pagingLabel.previous }}
        </button>
    </div>
  </div>`,
                styles: ['.card { height: 100%; }',
                    '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
                    '.card-footer { background-color: #fff; border-top: 0 none; }',
                    '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
                    '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
                    '.disabled { color: #ccc; }',
                    '.completed { cursor: default; }']
            }] }
];
/** @nocollapse */
WizardComponent.ctorParameters = () => [];
WizardComponent.propDecorators = {
    wizardSteps: [{ type: ContentChildren, args: [WizardStepComponent,] }],
    cancelLbl: [{ type: Input }],
    previousLbl: [{ type: Input }],
    nextLbl: [{ type: Input }],
    doneLbl: [{ type: Input }],
    clickTabEnable: [{ type: Input }],
    forceStep: [{ type: Input }],
    formSubmitting: [{ type: Input }],
    pagingLabel: [{ type: Input }],
    wizardNextTrigger: [{ type: Input }],
    onStepChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    WizardComponent.prototype.wizardSteps;
    /** @type {?} */
    WizardComponent.prototype._steps;
    /** @type {?} */
    WizardComponent.prototype._isCompleted;
    /** @type {?} */
    WizardComponent.prototype.cancelLbl;
    /** @type {?} */
    WizardComponent.prototype.previousLbl;
    /** @type {?} */
    WizardComponent.prototype.nextLbl;
    /** @type {?} */
    WizardComponent.prototype.doneLbl;
    /** @type {?} */
    WizardComponent.prototype.clickTabEnable;
    /** @type {?} */
    WizardComponent.prototype.forceStep;
    /** @type {?} */
    WizardComponent.prototype.formSubmitting;
    /** @type {?} */
    WizardComponent.prototype.pagingLabel;
    /** @type {?} */
    WizardComponent.prototype.wizardNextTrigger;
    /** @type {?} */
    WizardComponent.prototype.onStepChanged;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/photo-upload/photo-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PhotoUploadComponent {
    /**
     * @param {?} imageSvc
     */
    constructor(imageSvc) {
        this.imageSvc = imageSvc;
        this.required = false;
        this.fileType = ['png', 'jpg', 'jpeg'];
        this.maxFileSize = 5;
        this.maxFileType = 'MB';
        this.width = '120px';
        this.height = '160px';
        this.isImageExist = false;
        this.imageSelected = new EventEmitter();
        this.fileOversize = false;
        this.fileNotAllowed = false;
        this.index = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fileTypeAllowed = '';
        this.fileType.forEach((/**
         * @param {?} type
         * @param {?} index
         * @return {?}
         */
        (type, index) => {
            if (index > 0) {
                this.fileTypeAllowed += ', ';
            }
            this.fileTypeAllowed += '*.' + type;
        }));
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    onFileChange(event, index) {
        if (event.target.files.length > 0) {
            /** @type {?} */
            const file = event.target.files[0];
            this.imageBase64 = IMAGE_PLACEHOLDER;
            /** @type {?} */
            const typeAllowed = this.fileType.filter((/**
             * @param {?} type
             * @return {?}
             */
            type => file.type === 'image/' + type));
            this.imageSelected.emit(null);
            this.fileOversize = false;
            this.fileNotAllowed = false;
            if (typeAllowed.length === 0) {
                this.onImageDelete();
                this.fileNotAllowed = true;
                return;
            }
            if (file.size >= this.maxFileSize) {
                this.onImageDelete();
                this.fileOversize = true;
                return;
            }
            /** @type {?} */
            const self = this;
            this.imageSvc.imageBase64fromFile(file, (/**
             * @param {?} base64
             * @return {?}
             */
            function (base64) {
                self.imageBase64 = base64;
            }));
            this.imageSelected.emit(file);
            this.isImageExist = true;
            this.index = index + 1;
        }
    }
    /**
     * @return {?}
     */
    onImageDelete() {
        this.isImageExist = false;
        this.imageSelected.emit(null);
        this.tagar.nativeElement.value = '';
    }
}
PhotoUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-photo-upload',
                template: "<label class=\"control-label\" [ngClass]=\"required ? 'control-required' : ''\">{{ label }}</label>\n<div class=\"form-upload-photo\" [ngStyle]=\"{'width': width, 'height': height}\">\n  <div class=\"form-upload-photo-input\">\n    <div class=\"control-label\" [ngStyle]=\"isImageExist ? {'display': 'none'} : ''\">\n        <label class=\"btn btn-primary form-control-file\">\n            Unggah\n            <input #tagar type=\"file\" (change)=\"onFileChange($event, index)\" #fileInput>\n        </label>\n        <div class=\"control-note\">\n          <p>Format<br/> {{ fileTypeAllowed }} <br /> Maksimal {{ maxFileSize | fileSize:maxFileType }}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-upload-photo-preview\" [ngClass]=\"isImageExist ? 'showImage' : '' \">\n      <img src=\"{{ imageBase64 }}\" alt=\"\">\n      <div class=\"change-photo\">\n          <span class=\"fa fa-edit\" >\n            <input #tagar type=\"file\" (change)=\"onFileChange($event, index)\" #fileInput>\n          </span>\n          <span class=\"fa fa-times\" (click)=\"onImageDelete()\"></span>\n      </div>\n      \n  </div>\n  <div class=\"form-upload-photo-failed\" [ngStyle]=\"{'top': height}\">\n      <small *ngIf=\"fileOversize\" class=\"text-danger\">\n        {{ 'file oversize' | translate }}\n      </small>\n      <small *ngIf=\"fileNotAllowed\" class=\"text-danger\">\n          {{ 'file not allowed' | translate }}\n      </small>\n  </div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
PhotoUploadComponent.ctorParameters = () => [
    { type: ImageService }
];
PhotoUploadComponent.propDecorators = {
    tagar: [{ type: ViewChild, args: ['tagar',] }],
    label: [{ type: Input }],
    required: [{ type: Input }],
    fileType: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    maxFileType: [{ type: Input }],
    imageBase64: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    isImageExist: [{ type: Input }],
    imageSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PhotoUploadComponent.prototype.tagar;
    /** @type {?} */
    PhotoUploadComponent.prototype.label;
    /** @type {?} */
    PhotoUploadComponent.prototype.required;
    /** @type {?} */
    PhotoUploadComponent.prototype.fileType;
    /** @type {?} */
    PhotoUploadComponent.prototype.maxFileSize;
    /** @type {?} */
    PhotoUploadComponent.prototype.maxFileType;
    /** @type {?} */
    PhotoUploadComponent.prototype.imageBase64;
    /** @type {?} */
    PhotoUploadComponent.prototype.width;
    /** @type {?} */
    PhotoUploadComponent.prototype.height;
    /** @type {?} */
    PhotoUploadComponent.prototype.isImageExist;
    /** @type {?} */
    PhotoUploadComponent.prototype.imageSelected;
    /** @type {?} */
    PhotoUploadComponent.prototype.fileTypeAllowed;
    /** @type {?} */
    PhotoUploadComponent.prototype.fileOversize;
    /** @type {?} */
    PhotoUploadComponent.prototype.fileNotAllowed;
    /** @type {?} */
    PhotoUploadComponent.prototype.index;
    /**
     * @type {?}
     * @private
     */
    PhotoUploadComponent.prototype.imageSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastService {
    /**
     * @param {?} factoryResolver
     */
    constructor(factoryResolver) {
        this.factoryResolver = factoryResolver;
        this.toasts = [];
        this.subject = new Subject();
        this.toastHovered = false;
    }
    /**
     * @param {?} viewContainerRef
     * @return {?}
     */
    setToastRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    /**
     * @return {?}
     */
    addToastDynamicComponent() {
        /** @type {?} */
        const factory = this.factoryResolver.resolveComponentFactory(ToastComponent);
        /** @type {?} */
        const component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    }
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    error(description, title, config, callback) {
        /** @type {?} */
        const message = new Toast('error', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    }
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    info(description, title, config, callback) {
        /** @type {?} */
        const message = new Toast('info', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    }
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    success(description, title, config, callback) {
        /** @type {?} */
        const message = new Toast('success', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    }
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    warning(description, title, config, callback) {
        /** @type {?} */
        const message = new Toast('warning', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    }
    /**
     * @private
     * @param {?} message
     * @return {?}
     */
    pushToast(message) {
        this.toasts.push(message);
        this.subject.next(this.toasts);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeToast(index) {
        this.toasts = this.toasts.filter((/**
         * @param {?} toast
         * @return {?}
         */
        toast => {
            return toast.index !== index;
        }));
        this.subject.next(this.toasts);
    }
    /**
     * @return {?}
     */
    retrieveToast() {
        return this.subject.asObservable();
    }
}
ToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
/** @nocollapse */ ToastService.ngInjectableDef = defineInjectable({ factory: function ToastService_Factory() { return new ToastService(inject(ComponentFactoryResolver)); }, token: ToastService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.toasts;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.rootViewContainer;
    /** @type {?} */
    ToastService.prototype.toastHovered;
    /** @type {?} */
    ToastService.prototype.factoryResolver;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastComponent {
    /**
     * @param {?} toastSvc
     */
    constructor(toastSvc) {
        this.toastSvc = toastSvc;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.toastSvc.retrieveToast().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.toasts = result;
        }));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeToast(index) {
        this.toastSvc.removeToast(index);
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-toast',
                template: `
  <div class="container uii-toast uii-toast-fixed">
    <div class="row">
      <div
        class="col-xs-9 col-xs-offset-3 uii-toast-box"
        [ngClass]="{
          'uii-toast-box-success': toast.type === 'success',
          'uii-toast-box-warning': toast.type === 'warning',
          'uii-toast-box-error': toast.type === 'error',
          'uii-toast-box-info': toast.type === 'info'
        }"
        *ngFor="let toast of toasts; let i = index"
        uiiToast
        [timeOut]=toast.timeOut
        [toastIndex]=toast.index
        [removeOnClick]="toast.removeOnClick"
      >
        <div class="col-xs-12 padding-0">
          <p class="uii-toast-title margin-0"><strong>{{ toast.title }}</strong></p>
          <p class="uii-toast-description margin-0">{{ toast.description }}</p>
        </div>
      </div>
    </div>
  </div>`,
                styles: [".padding-0{padding:0}.margin-0{margin:0}.uii-toast{top:0;right:0;width:45rem;z-index:9999999;overflow:hidden;background:0 0!important}.uii-toast-title{font-size:14px;color:#fff}.uii-toast-description{word-wrap:break-word;color:#fff}.uii-toast-fixed{position:fixed}.uii-toast .row{padding:1rem 4rem;width:100%;background:0 0!important}.uii-toast-box{transition:.2s ease-in-out;padding:1.7rem;margin-top:.6rem;margin-bottom:.6rem;background-color:#fff;box-shadow:0 6px 15px rgba(36,37,38,.3);display:flex;align-items:center;opacity:0}.uii-toast-box-success{background-color:#4db6ac}.uii-toast-box-warning{background-color:#fbc02d}.uii-toast-box-error{background-color:#ff5252}.uii-toast-box-info{background-color:#0277bd}.uii-toast-symbol{width:2.5rem}.uii-toast-cancel{position:absolute;top:50%;right:1.3rem;transform:translateY(-50%)}.uii-toast-cancel:focus{outline:0}.uii-toast-cancel-image{width:1.5rem}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [
    { type: ToastService }
];
if (false) {
    /** @type {?} */
    ToastComponent.prototype.toasts;
    /** @type {?} */
    ToastComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    ToastComponent.prototype.toastSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/information/information.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InformationComponent {
    constructor() {
        this.type = 'info';
        this.message = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InformationComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-information',
                template: `
    <div class="uii-information container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 padding-0">
          <p class="uii-information-message uii-information-message-success margin-0" *ngIf="type === 'success'">{{ message }}</p>
          <p class="uii-information-message uii-information-message-warning margin-0" *ngIf="type === 'warning'">{{ message }}</p>
          <p class="uii-information-message uii-information-message-error margin-0" *ngIf="type === 'error'">{{ message }}</p>
          <p class="uii-information-message uii-information-message-info margin-0" *ngIf="type === 'info'">{{ message }}</p>
        </div>
      </div>
    </div>
  `,
                styles: [".border{border:1px dashed #00f}.padding-0{padding:0}.margin-0{margin:0}.uii-information-message{font-size:1.5rem;padding:1.5rem;font-weight:500;color:#555}.uii-information-message-success{background-color:#e0f2f1;border:1px solid #009688}.uii-information-message-warning{background-color:#fff9c4;border:1px solid #f9a825}.uii-information-message-error{background-color:#ffcdd2;border:1px solid #d32f2f}.uii-information-message-info{background-color:#e1f5fe;border:1px solid #01579b}"]
            }] }
];
/** @nocollapse */
InformationComponent.ctorParameters = () => [];
InformationComponent.propDecorators = {
    type: [{ type: Input, args: ['type',] }],
    message: [{ type: Input, args: ['message',] }]
};
if (false) {
    /** @type {?} */
    InformationComponent.prototype.type;
    /** @type {?} */
    InformationComponent.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/translate.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateService {
    // inject our translations
    /**
     * @param {?} _translations
     */
    constructor(_translations) {
        this._translations = _translations;
        this.PLACEHOLDER = '%';
        this.onLangChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get currentLang() {
        return this._currentLang || this._defaultLang;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    setDefaultLang(lang) {
        this._defaultLang = lang;
    }
    /**
     * @param {?} enable
     * @return {?}
     */
    enableFallback(enable) {
        this._fallback = enable;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        // set current language
        this._currentLang = lang;
        this.onLangChanged.emit(lang);
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    translate(key) {
        /** @type {?} */
        const translation = key;
        // found in current language
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        // fallback disabled
        if (!this._fallback) {
            return translation;
        }
        // found in default language
        if (this._translations[this._defaultLang] && this._translations[this._defaultLang][key]) {
            return this._translations[this._defaultLang][key];
        }
        // not found
        return translation;
    }
    /**
     * @param {?=} word
     * @param {?=} words
     * @return {?}
     */
    replace(word = '', words = '') {
        /** @type {?} */
        let translation = word;
        /** @type {?} */
        const values = [].concat(words);
        values.forEach((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        (e, i) => {
            translation = translation.replace(this.PLACEHOLDER.concat((/** @type {?} */ (i))), e);
        }));
        return translation;
    }
    /**
     * @param {?} key
     * @param {?=} words
     * @return {?}
     */
    instant(key, words) {
        // public perform translation
        /** @type {?} */
        const translation = this.translate(key);
        if (!words) {
            return translation;
        }
        return this.replace(translation, words);
    }
}
TranslateService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._currentLang;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._defaultLang;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._fallback;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.PLACEHOLDER;
    /** @type {?} */
    TranslateService.prototype.onLangChanged;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._translations;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/translate.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} translateSvc
     */
    constructor(translateSvc) {
        this.translateSvc = translateSvc;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (!value) {
            return;
        }
        return this.translateSvc.instant(value, args);
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false // impure pipe, update value when change language
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translateSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/file-size.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileSizePipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        try {
            if (args) {
                /** @type {?} */
                let size;
                switch (args) {
                    case 'KB':
                        if (value >= 1024) {
                            size = (value / 1024) + 'KB';
                        }
                        else {
                            size = value + 'B';
                        }
                        break;
                    case 'MB':
                        if (value >= (1024 * 1024)) {
                            size = (value / (1024 * 1024)) + 'MB';
                        }
                        else {
                            size = value + 'B';
                        }
                        break;
                    default:
                        break;
                }
                return size;
            }
            return value;
        }
        catch (error) {
            console.log(error);
            return value;
        }
    }
}
FileSizePipe.decorators = [
    { type: Pipe, args: [{
                name: 'fileSize'
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigService {
    /**
     * @param {?} translateSvc
     */
    constructor(translateSvc) {
        this.translateSvc = translateSvc;
    }
    /**
     * @return {?}
     */
    paginateConfig() {
        return {
            previous: this.translateSvc.instant('previous'),
            next: this.translateSvc.instant('next'),
            cancel: this.translateSvc.instant('cancel'),
            done: this.translateSvc.instant('done')
        };
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: TranslateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.translateSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/loadingBar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const LoadingBarEventType = {
    PROGRESS: 0,
    HEIGHT: 1,
    COLOR: 2,
    VISIBLE: 3,
};
LoadingBarEventType[LoadingBarEventType.PROGRESS] = 'PROGRESS';
LoadingBarEventType[LoadingBarEventType.HEIGHT] = 'HEIGHT';
LoadingBarEventType[LoadingBarEventType.COLOR] = 'COLOR';
LoadingBarEventType[LoadingBarEventType.VISIBLE] = 'VISIBLE';
/**
 * @param {?} obj
 * @return {?}
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
class LoadingBarEvent {
    /**
     * @param {?} type
     * @param {?} value
     */
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
if (false) {
    /** @type {?} */
    LoadingBarEvent.prototype.type;
    /** @type {?} */
    LoadingBarEvent.prototype.value;
}
class LoadingBarService {
    constructor() {
        this._progress = 0;
        this._height = '2px';
        this._color = 'firebrick';
        this._visible = true;
        this._intervalCounterId = 0;
        this.interval = 500; // in milliseconds
        // in milliseconds
        this.eventSource = new Subject();
        this.events = this.eventSource.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set progress(value) {
        if (isPresent(value)) {
            if (value > 0) {
                this.visible = true;
            }
            this._progress = value;
            this.emitEvent(new LoadingBarEvent(LoadingBarEventType.PROGRESS, this._progress));
        }
    }
    /**
     * @return {?}
     */
    get progress() {
        return this._progress;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        if (isPresent(value)) {
            this._height = value;
            this.emitEvent(new LoadingBarEvent(LoadingBarEventType.HEIGHT, this._height));
        }
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        if (isPresent(value)) {
            this._color = value;
            this.emitEvent(new LoadingBarEvent(LoadingBarEventType.COLOR, this._color));
        }
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        if (isPresent(value)) {
            this._visible = value;
            this.emitEvent(new LoadingBarEvent(LoadingBarEventType.VISIBLE, this._visible));
        }
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    emitEvent(event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    }
    /**
     * @param {?=} onCompleted
     * @return {?}
     */
    start(onCompleted = null) {
        // Stop current timer
        this.stop();
        // Make it visible for sure
        this.visible = true;
        // Run the timer with milliseconds iterval
        this._intervalCounterId = setInterval((/**
         * @return {?}
         */
        () => {
            // Increment the progress and update view component
            this.progress++;
            // If the progress is 100% - call complete
            if (this.progress === 100) {
                this.complete(onCompleted);
            }
        }), this.interval);
    }
    /**
     * @return {?}
     */
    stop() {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.stop();
        this.progress = 0;
    }
    /**
     * @param {?=} onCompleted
     * @return {?}
     */
    complete(onCompleted = null) {
        this.progress = 100;
        this.stop();
        setTimeout((/**
         * @return {?}
         */
        () => {
            // Hide it away
            this.visible = false;
            setTimeout((/**
             * @return {?}
             */
            () => {
                // Drop to 0
                this.progress = 0;
                if (onCompleted) {
                    onCompleted();
                }
            }), 250);
        }), 250);
    }
}
LoadingBarService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoadingBarService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._progress;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._height;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._color;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._visible;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._intervalCounterId;
    /** @type {?} */
    LoadingBarService.prototype.interval;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype.eventSource;
    /** @type {?} */
    LoadingBarService.prototype.events;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tabset-tab/tabset.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsetDirective {
    /**
     * @param {?} tabset
     * @param {?} elRef
     */
    constructor(tabset, elRef) {
        this.elRef = elRef;
        this.addClass = true;
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        if (this._active && !active) {
            this.deselected.emit(this);
        }
        this._active = active;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    set selectedTab(tab) {
        this.selected.emit(tab);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TabsetDirective.decorators = [
    { type: Directive, args: [{
                selector: 'uiiTabItem, [uiiTabItem]'
            },] }
];
/** @nocollapse */
TabsetDirective.ctorParameters = () => [
    { type: TabsetComponent },
    { type: ElementRef }
];
TabsetDirective.propDecorators = {
    title: [{ type: Input }],
    tabIcon: [{ type: Input }],
    active: [{ type: HostBinding, args: ['class.tab-active',] }, { type: Input }],
    selectedTab: [{ type: Input }],
    addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
    selected: [{ type: Output }],
    deselected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TabsetDirective.prototype.title;
    /** @type {?} */
    TabsetDirective.prototype.tabIcon;
    /** @type {?} */
    TabsetDirective.prototype.addClass;
    /** @type {?} */
    TabsetDirective.prototype.selected;
    /** @type {?} */
    TabsetDirective.prototype.deselected;
    /** @type {?} */
    TabsetDirective.prototype.tabset;
    /**
     * @type {?}
     * @protected
     */
    TabsetDirective.prototype._active;
    /** @type {?} */
    TabsetDirective.prototype.elRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/toast/toast.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastDirective {
    /**
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?} toastSvc
     */
    constructor(renderer, hostElement, toastSvc) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.toastSvc = toastSvc;
        this.mouseClickCounter = 0;
        this.mouseOverCounter = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initToastInterval();
        this._fadeInTimeOut = setTimeout((/**
         * @return {?}
         */
        () => {
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '1');
            this.createToastFadeOutBehaviour(this.timeOut);
        }), 50);
    }
    /**
     * @param {?} remainingTimeOut
     * @return {?}
     */
    createToastFadeOutBehaviour(remainingTimeOut) {
        this._fadeOutTimeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '0');
            this._removeTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.toastSvc.removeToast(this.toastIndex);
            }), 170);
        }), remainingTimeOut);
    }
    /**
     * @return {?}
     */
    initToastInterval() {
        this.start = new Date();
        this.remaining = this.timeOut;
    }
    /**
     * @return {?}
     */
    pauseToastInterval() {
        /** @type {?} */
        const current = new Date();
        this.remaining = this.remaining - (current - this.start);
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.removeOnClick) {
            if (this.mouseClickCounter < 1) {
                clearTimeout(this._fadeOutTimeout);
                this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '1');
            }
            else {
                this.createToastFadeOutBehaviour(1);
            }
            this.mouseClickCounter++;
        }
    }
    /**
     * @return {?}
     */
    onMouseHover() {
        this.renderer.setStyle(this.hostElement.nativeElement, 'cursor', 'pointer');
        if (this.mouseOverCounter < 1) {
            clearTimeout(this._fadeOutTimeout);
            this.pauseToastInterval();
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '0.95');
        }
        this.mouseOverCounter++;
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (!(this.mouseClickCounter > 0)) {
            this.renderer.setStyle(this.hostElement.nativeElement, 'cursor', 'default');
            this.mouseOverCounter = 0;
            this.createToastFadeOutBehaviour(this.remaining);
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '1');
        }
    }
}
ToastDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uiiToast]'
            },] }
];
/** @nocollapse */
ToastDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ToastService }
];
ToastDirective.propDecorators = {
    timeOut: [{ type: Input, args: ['timeOut',] }],
    toastIndex: [{ type: Input, args: ['toastIndex',] }],
    removeOnClick: [{ type: Input, args: ['removeOnClick',] }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onMouseHover: [{ type: HostListener, args: ['mouseover',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    ToastDirective.prototype.timeOut;
    /** @type {?} */
    ToastDirective.prototype.toastIndex;
    /** @type {?} */
    ToastDirective.prototype.removeOnClick;
    /** @type {?} */
    ToastDirective.prototype.mouseClickCounter;
    /** @type {?} */
    ToastDirective.prototype.mouseOverCounter;
    /** @type {?} */
    ToastDirective.prototype._fadeInTimeOut;
    /** @type {?} */
    ToastDirective.prototype._fadeOutTimeout;
    /** @type {?} */
    ToastDirective.prototype._removeTimeout;
    /** @type {?} */
    ToastDirective.prototype.start;
    /** @type {?} */
    ToastDirective.prototype.remaining;
    /**
     * @type {?}
     * @private
     */
    ToastDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ToastDirective.prototype.hostElement;
    /**
     * @type {?}
     * @private
     */
    ToastDirective.prototype.toastSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/collapse/collapse.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseDirective {
    /**
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?} accordionSvc
     */
    constructor(renderer, hostElement, accordionSvc) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.accordionSvc = accordionSvc;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * styles which will be applied if isAnimated = false
         */
        this.DISPLAY_SHOW_VALUE = 'block';
        this.DISPLAY_HIDE_VALUE = 'none';
        /**
         * a class which will be applied if isAnimated = false
         */
        this.DISPLAY_NONE_CLASS = 'uii-accordion-group-content-none';
        /**
         * a class which will be applied if isAnimated = true
         */
        this.DISPLAY_ANIMATED_CLASS = 'uii-accordion-group-content-hide';
        /**
         * store temporary changing height
         */
        this.tempHeight = 0;
    }
    /**
     * update accordion group condition
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        this.initOpenStatus(this.accordionSvc.getIsAnimated(), value);
        this.changeOpenStatus(this.accordionSvc.getIsAnimated(), value);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.hostElement.nativeElement.clientHeight !== this.tempHeight) {
            this.tempHeight = this.hostElement.nativeElement.clientHeight;
        }
    }
    /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    initOpenStatus(isAnimated, isOpen) {
        if (!isAnimated) {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-hide');
            if (isOpen) {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_SHOW_VALUE);
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_HIDE_VALUE);
            }
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-none');
            if (isOpen) {
                /** @type {?} */
                const content = this.hostElement.nativeElement.scrollHeight;
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', content + 'px');
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 0 + 'px');
            }
        }
    }
    /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    changeOpenStatus(isAnimated, isOpen) {
        if (!isAnimated) {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-hide');
            if (isOpen) {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_SHOW_VALUE);
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_HIDE_VALUE);
            }
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-none');
            if (isOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.renderer.setStyle(this.hostElement.nativeElement, 'overflow', 'hidden');
                }), 1);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const content = this.hostElement.nativeElement.scrollHeight;
                    this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', content + 'px');
                }), 2);
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.renderer.setStyle(this.hostElement.nativeElement, 'overflow', 'hidden');
                }), 1);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 0 + 'px');
                }), 2);
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', this.tempHeight + 'px');
            }
        }
    }
    /**
     * @return {?}
     */
    onTransitionEnd() {
        if (this.selectedGroup) {
            this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 'none');
            this.renderer.setStyle(this.hostElement.nativeElement, 'overflow', 'visible');
        }
    }
}
CollapseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uiiCollapse]'
            },] }
];
/** @nocollapse */
CollapseDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: AccordionService }
];
CollapseDirective.propDecorators = {
    isOpen: [{ type: Input }],
    selectedGroup: [{ type: Input }],
    onTransitionEnd: [{ type: HostListener, args: ['transitionend',] }]
};
if (false) {
    /**
     * if closeOther(s) is true, then prevent the closed groups to execute onTransitionEnd
     * @type {?}
     */
    CollapseDirective.prototype.selectedGroup;
    /**
     * turn on/off animation
     * @type {?}
     */
    CollapseDirective.prototype.isAnimated;
    /**
     * styles which will be applied if isAnimated = false
     * @type {?}
     */
    CollapseDirective.prototype.DISPLAY_SHOW_VALUE;
    /** @type {?} */
    CollapseDirective.prototype.DISPLAY_HIDE_VALUE;
    /**
     * a class which will be applied if isAnimated = false
     * @type {?}
     */
    CollapseDirective.prototype.DISPLAY_NONE_CLASS;
    /**
     * a class which will be applied if isAnimated = true
     * @type {?}
     */
    CollapseDirective.prototype.DISPLAY_ANIMATED_CLASS;
    /**
     * store temporary changing height
     * @type {?}
     */
    CollapseDirective.prototype.tempHeight;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype.hostElement;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype.accordionSvc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pilar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PilarModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PilarModule,
            providers: [
                { provide: TRANSLATIONS, useValue: dictionary },
                DatePipe,
                ImageService,
                LoadingBarService,
                TranslateService,
                TablePageService,
                ConfigService,
                ToastService
            ]
        };
    }
}
PilarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    /* components */
                    PilarComponent,
                    AccordionComponent,
                    AccordionGroupComponent,
                    ClientTableComponent,
                    ConfirmdialogComponent,
                    FileUploadComponent,
                    InfoBoxComponent,
                    MobileFilterComponent,
                    ModalDialogComponent,
                    PaginationComponent,
                    ServerTableComponent,
                    PhotoUploadComponent,
                    SwitchComponent,
                    TableComponent,
                    TableActionComponent,
                    TableFilterComponent,
                    TableFooterComponent,
                    TableSkeletonComponent,
                    TabsetComponent,
                    TextEditorComponent,
                    UiiDataGridComponent,
                    UiiImageUploadComponent,
                    WizardComponent,
                    WizardStepComponent,
                    ToastComponent,
                    InformationComponent,
                    /* pipes */
                    FileSizePipe,
                    TranslatePipe,
                    /* directives */
                    TabsetDirective,
                    SwitchComponent,
                    ToastDirective,
                    CollapseDirective
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    LazyLoadImagesModule,
                    NgxSelectModule,
                    ReactiveFormsModule,
                    RouterModule,
                    AccordionModule.forRoot(),
                    AlertModule.forRoot(),
                    BsDatepickerModule.forRoot(),
                    BsDropdownModule.forRoot(),
                    CollapseModule.forRoot(),
                    ContextMenuModule.forRoot(),
                    ModalModule.forRoot(),
                    ProgressbarModule.forRoot(),
                    TabsModule.forRoot(),
                    PaginationModule.forRoot(),
                    TimepickerModule.forRoot(),
                    TooltipModule.forRoot(),
                    TypeaheadModule.forRoot(),
                    EditorModule
                ],
                exports: [
                    /* components */
                    PilarComponent,
                    AccordionComponent,
                    AccordionGroupComponent,
                    ClientTableComponent,
                    ConfirmdialogComponent,
                    ContextMenuModule,
                    FileUploadComponent,
                    InfoBoxComponent,
                    MobileFilterComponent,
                    LazyLoadImagesModule,
                    ModalDialogComponent,
                    PaginationComponent,
                    PhotoUploadComponent,
                    ServerTableComponent,
                    SwitchComponent,
                    TableComponent,
                    TableActionComponent,
                    TableFilterComponent,
                    TableFooterComponent,
                    TableSkeletonComponent,
                    TabsetComponent,
                    TextEditorComponent,
                    UiiDataGridComponent,
                    UiiImageUploadComponent,
                    WizardComponent,
                    WizardStepComponent,
                    ToastComponent,
                    InformationComponent,
                    FileSizePipe,
                    TranslatePipe,
                    /* directives */
                    TabsetDirective,
                    ToastDirective,
                    CollapseDirective,
                    AccordionModule,
                    AlertModule,
                    BsDatepickerModule,
                    BsDropdownModule,
                    CollapseModule,
                    CommonModule,
                    FormsModule,
                    ModalModule,
                    NgxSelectModule,
                    ProgressbarModule,
                    ReactiveFormsModule,
                    TabsModule,
                    PaginationModule,
                    TimepickerModule,
                    TooltipModule,
                    TypeaheadModule,
                ],
                entryComponents: [
                    ConfirmdialogComponent,
                    ToastComponent
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: pilar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccordionComponent, AccordionGroupComponent, AccordionService, Alert, ConfigService, ConfirmdialogComponent, FileSizePipe, IMAGES_ROOT, IMAGE_PLACEHOLDER, ImageService, InfoBoxComponent, InformationComponent, LoadingBarEvent, LoadingBarEventType, LoadingBarService, MODAL, ModalDialogComponent, Paginate, PaginationComponent, PhotoUploadComponent, PilarComponent, PilarModule, PilarService, SwitchComponent, TablePageService, TableSkeletonComponent, TabsetComponent, TabsetDirective, TextEditorComponent, ToastComponent, ToastDirective, ToastService, TranslatePipe, TranslateService, UiiDataGridComponent, UiiImageUploadComponent, WizardComponent, WizardStepComponent, fadeIn, fadeOut, isPresent, AccordionService as ɵa, ClientTableComponent as ɵb, TablePageService as ɵc, FileUploadComponent as ɵd, MobileFilterComponent as ɵe, ServerTableComponent as ɵf, ImageService as ɵg, TableComponent as ɵh, TableActionComponent as ɵi, TableFilterComponent as ɵj, TableFooterComponent as ɵk, ToastService as ɵl, TranslateService as ɵm, TRANSLATIONS as ɵn, dictionary as ɵo, CollapseDirective as ɵp, LANG_EN_TRANS as ɵq, LANG_ID_TRANS as ɵr, LoadingBarService as ɵs, ConfigService as ɵt };
//# sourceMappingURL=pilar.js.map
