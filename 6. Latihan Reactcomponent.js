// Latihan kali ini.

// Membuat React component menggunakan fungsi JavaScript.
// Membuat React component menjadi reusable dengan memanfaatkan props.
// Komposisi React component guna membangun component yang kompleks.

// Ada 6 component yang akan kita buat dalam menyusun UI tersebut :

// -- News (oranye) : Component yang bertanggung jawab sebagai parent untuk menampung seluruh UI yang ditampilkan.
// -- Header (biru tua) : Component yang bertanggung jawab sebagai UI header dari News.
// -- Card (hijau) : Component yang bertanggung jawab sebagai parent untuk menampung card (item) dari berita. Component ini nantinya akan digunakan kembali untuk menampilkan item berita dengan data yang berbeda.
// -- CardHeader (biru muda) : Component yang bertanggung jawab menampilkan bagian header dari item berita.
// -- CardBody (merah) : Component yang bertanggung jawab menampilkan bagian body dari item berita.
// -- Button (ungu) : Component yang bertanggung jawab untuk menampilkan tautan ke berita (dumi).


import React from 'react';
import { createRoot } from 'react-dom/client';
 
function Button() {
  // TODO: selesaikan component-nya
}
 
function CardHeader() {
  // TODO: selesaikan component-nya
}
 
function CardBody() {
  // TODO: selesaikan component-nya
}
 
function Card() {
  // TODO: selesaikan component-nya
}
 
function Header() {
  // TODO: selesaikan component-nya
}
 
function News() {
    // data news
    const someNews = [
      {
        title: 'CNN Acuire BEME',
        date: 'March 20 2022',
        content: "CNN purchased Casey Neistat's Beme app for $25million.",
        image: 'https://source.unsplash.com/user/erondu/600x400',
        category: 'News',
        link: '#'
      },
      {
        title: 'React and the WP-API',
        date: 'March 19 2022',
        content: 'The first ever decoupled starter theme for React & the WP-API.',
        image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
        category: 'News',
        link: '#'
      },
      {
        title: 'Nomad Lifestyle',
        date: 'March 19 2022',
        content: 'Learn our tips and tricks on living a nomadic lifestyle.',
        image: 'https://source.unsplash.com/user/erondu/600x400',
        category: 'Travel',
        link: '#'
      }
    ];
   
    // TODO: selesaikan component-nya
    return (
      <div>
        <Header title="Latest News" subtitle="Covering March & April 2022" />
        <Card 
          title={someNews[0].title}
          date={someNews[0].date}
          content={someNews[0].content}
          image={someNews[0].image}
          category={someNews[0].category}
          link={someNews[0].link}
        />
        <Card 
          title={someNews[1].title}
          date={someNews[1].date}
          content={someNews[1].content}
          image={someNews[1].image}
          category={someNews[1].category}
          link={someNews[1].link}
        />
        <Card 
          title={someNews[2].title}
          date={someNews[2].date}
          content={someNews[2].content}
          image={someNews[2].image}
          category={someNews[2].category}
          link={someNews[2].link}
        />
      </div>
    );
  }
 
const root = createRoot(document.getElementById('root'));
root.render(<News />;