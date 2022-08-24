// 1. hindari penggunaan JavaScript object ketika mengirimkan data pada properti component.

function InstagramProfile(props) {
    const profile = props.profile;
    const name = profile.name;
    const username = profile.username;
    const bio = profile.bio;
    const isVerified = profile.isVerified;
    return (
      <div className="container">
        <dl>
          <dt>Name: </dt>
          <dd>{name}</dd>
          <dt>Username: </dt>
          <dd>{username}</dd>
          <dt>Bio: </dt>
          <dd>{bio}</dd>
          <dt>Verified: </dt>
          <dd>{isVerified ? 'yes' : 'no'}</dd>
        </dl>
      </div>
    );
  }
   
  const profile = {
    name: 'Dicoding Indonesia',
    username: 'dicoding',
    bio: 'Bangun Karirmu Sebagai Developer Profesional',
    isVerified: true
  };
   
  <InstagramProfile profile={profile} />; // sebisa mungkin, hindari praktik seperti ini

//   mungkin menggunakan objek sebagai “pembungkus” data terlihat lebih mudah karena kita hanya perlu mendefinisikan satu properti saja pada component yaitu profile. 
//   Namun, hal ini lah yang menyebabkan kontrak dalam penggunaan component tersebut tidak jelas. 
//   Sebab JavaScript merupakan bahasa yang tidak terikat dengan tipe data (weakly typed) sehingga praktik seperti ini sebaiknya dihindari.

// ---------------------------------------------------------------------------------------------------------
// Alih-alih mengirimkan props dalam bentuk objek, sebaiknya definisikanlah propertinya satu per satu. 
// Sehingga, kita tak lagi mengirimkan objek, melainkan cukup dengan nilai primitif seperti string, number, atau boolean.

function InstagramProfile(props) {
    const name = props.name;
    const username = props.username;
    const bio = props.bio;
    const isVerified = props.isVerified;
   
    return (
      <div className="container">
        <dl>
          <dt>Name: </dt>
          <dd>{name}</dd>
          <dt>Username: </dt>
          <dd>{username}</dd>
          <dt>Bio: </dt>
          <dd>{bio}</dd>
          <dt>Verified: </dt>
          <dd>{isVerified ? 'yes' : 'no'}</dd>
        </dl>
      </div>
    );
  }
   
  <InstagramProfile
    name="Dicoding Indonesia"
    username="dicoding"
    bio="Bangun Karirmu Sebagai Developer Profesional"
    isVerified // pemberian nilai boolean "true" cukup dengan menuliskan nama properti tanpa nilai apa pun
  />;

//   Dengan cara ini, kontrak dalam menggunakan component akan lebih terlihat lebih jelas. 
//   Selain itu, secara tidak langsung kita juga sudah menerapkan prinsip least privilege guna menghindari dalam mengirimkan data yang sebenarnya tidak diperlukan.

// ---------------------------------------------------------------------------------------------------------------
// 2. gunakan fitur ES6 agar sintaksis yang dituliskan lebih bersih, singkat, dan mudah dibaca.
// pada komponen InstagramProfile, kita dapat menggunakan object destructuring dalam mengakses nilai propertinya. 
// Sehingga, kita tidak perlu menuliskan kode satu per satu dalam membuat variabel lokal yang menampung nilai dari props.

function InstagramProfile({ name, username, bio, isVerified }) {
    return (
      <div className="container">
        <dl>
          <dt>Name: </dt>
          <dd>{name}</dd>
          <dt>Username: </dt>
          <dd>{username}</dd>
          <dt>Bio: </dt>
          <dd>{bio}</dd>
          <dt>Verified: </dt>
          <dd>{isVerified ? 'yes' : 'no'}</dd>
        </dl>
      </div>
    );
  }

	// properti bersifat read-only alias hanya boleh dibaca dan tidak boleh diubah nilainya. React component harus bersifat pure, 
	// salah satunya dengan tidak mengubah nilai yang diberikan melalui sebuah parameter atau properti. 
	// Hal ini sama seperti prinsip pure function pada functional programming. Jika di dalam component Anda menuliskan kode yang mengubah nilai dari properti,
	// silakan evaluasi kode tersebut. Pastikan Anda tidak melakukan perubahan pada nilainya.
