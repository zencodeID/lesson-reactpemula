import React from 'react';
import { createRoot } from 'react-dom/client';
import niaga from './niaga.jpeg';

const element = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
      {/*jika file gambar di public tinggal panggil image nya */}
      <img src="dicoding-logo.png" alt="Dicoding logo" />

      {/* jika file gambar di src ,perlu adanya import: */}
      <img src={niaga} alt="niaga" />
    </ul>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
