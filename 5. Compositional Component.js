// Compositional Component
// Component di React dapat menampung dan menghasilkan UI yang kompleks ataupun sederhana. 
// Biasanya, React component yang kompleks dibangun dari beberapa component lain yang lebih kecil. 
// Konsep ini dinamakan composition dan menjadi konsep inti seperti yang sudah Anda pelajari di modul Konsep Dasar React

// Semakin kecil kita membuat sebuah component, semakin reusable UI yang kita bangun dan 
// React mendorong kita untuk membangun aplikasi dengan pendekatan composition daripada inheritance untuk menghasilkan UI yang lebih kompleks

function FilterableProductTable() {
    return (
      <div className="container">
        <div className="search-bar__container">
          <input type="text" placeholder="Search..." />
          <div className="search-bar__in_stock_checkbox">
            <input type="checkbox" />
            <label>Only show products in stock</label>
          </div>
        </div>
        <div className="product-table__container">
          <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <td colSpan="2">
                <strong>Sporting Goods</strong>
              </td>
            </tr>
            <tr>
              <td>Football</td>
              <td>$49.99</td>
            </tr>
            <tr>
              <td>Baseball</td>
              <td>$9.99</td>
            </tr>
            <tr>
              <td>Basketball</td>
              <td>$29.99</td>
            </tr>
            <tr>
              <td colSpan="2">
                <strong>Electronics</strong>
              </td>
            </tr>
            <tr>
              <td>iPod Touch</td>
              <td>$99.99</td>
            </tr>
            <tr>
              <td>iPhone 5</td>
              <td>$399.99</td>
            </tr>
            <tr>
              <td>Nexus 7</td>
              <td>$199.99</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

//   Jawabannya adalah gunakan intuisi Anda untuk memutuskan apakah membutuhkan fungsi baru atau tidak. Namun, jangan lupa selalu benamkan dalam pemikiran Anda 
//   bahwa setiap fungsi haruslah memiliki satu tanggung jawab saja (single-responsibility principle). Nah, component pun sama. 
//   Idealnya, ia hanya melakukan satu hal saja. Jika memang component haruslah kompleks, ia akan memiliki beberapa component kecil lainnya.


// Sketsa di atas menunjukkan UI dapat dipecah menjadi 5 bagian component. Berikut nama dan tugas dari component tersebut.

// 1. FilterableProductTable (kuning): Sebagai container atau penampung seluruh UI yang perlu ditampilkan.
// 2. SearchBar (biru): Menerima input dari pengguna.
// 3. ProductTable (hijau): Sebagai tabel yang menampilkan data hasil dari input pengguna.
// 4. ProductCategoryRow (biru muda): Menampilkan heading untuk setiap kategori produk.
// 5. ProductRow (merah): Menampilkan item produk.

function SearchBar() {
    return (
      <div className="search-bar__container">
        <input type="text" placeholder="Search..." />
        <div className="search-bar__in_stock_checkbox">
          <input type="checkbox" />
          <label>Only show products in stock</label>
        </div>
      </div>
    );
  }
   
  function ProductCategoryRow({ name }) {
    return (
      <tr>
        <td colSpan="2">
          <strong>{name}</strong>
        </td>
      </tr>
    );
  }
   
  function ProductRow({ name, price }) {
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
   
  function ProductTable() {
    return (
      <div className="product-table__container">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <ProductCategoryRow name="Sporting Goods" />
          <ProductRow name="Football" price="$49.99" />
          <ProductRow name="Baseball" price="$9.99" />
          <ProductRow name="Baseketball" price="$49.99" />
          <ProductCategoryRow name="Electronics" />
          <ProductRow name="iPod Touch" price="$99.99" />
          <ProductRow name="iPhone 5" price="$399.99" />
          <ProductRow name="Nexus 7" price="$199.99" />
        </table>
      </div>
    );
  }
   
  function FilterableProductTable() {
    return (
      <div className="container">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }


// hirarki dari component di atas.

// --FilterableProductTable
//   -- SearchBar
//   -- ProductTable
//      -- ProductCategoryRow
//      -- ProductRow