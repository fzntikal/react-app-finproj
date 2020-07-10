import React from 'react';
import Website from './pages/website';
import './App.css';

/**
 * Konsep utama dalam website ini adalah Online Shop.
 * Pada halaman Home, terdapat informasi mengenai toko dan barangnya.
 *  code dapat diubah dengan mudah untuk menambah/mengurangi informasi yang ada.
 * 
 * Pada halaman Contact Us, terdapat sebuah form.
 *  Form ini digunakan agar customer dapat menghubungi email toko.
 * 
 * Pada halaman Products, customer dapat melihat tabel produk.
 *  Terdapat fitur filter dan search sederhana yang bisa digunakan.
 * 
 * Pada halaman EXTRA, hanya terdapat sebuah tombol.
 *  Halaman ini dibuat di luar konteks Online shop,
 *  dan hanya berisikan tombol untuk merubah warna latar,
 *  serta menampilkan animasi sederhana.
 */

export default function App() {
    return(
        <Website /> // menampung keseluruhan webpages
    )
}

