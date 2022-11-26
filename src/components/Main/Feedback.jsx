import person from "./../../assets/png/moham.png"
import second from './../../assets/png/shihab.png'
import prog from "./../../assets/svg/svg.svg";
import Card from "./../Ui/Card"

let user = [
  {
    id: 7,
    email: "“Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”",
    first_name: "Mohammad Hatta",
    last_name: "Wakil Presiden Indonesia Pertama",
    avatar:{person},
  },
  {
    id: 8,
    email: "“Cuma perlu satu buku untuk jatuh cinta pada membaca, Cari Buku itu! Mari jatuh cinta!",
    first_name: "Najwa Shihab",
    last_name: "Duta Membaca",
    avatar:{second},
  },
];
console.log(user[1].avatar)
function Feed() {
  return (
    <>
      <section class="site-feedback">
        <div class="container">
          <div class="feedback">
            <div class="feed__top">
              <h2 class="feed-title">
                Kenapa Kita<span class="green">Harus</span>Membaca Buku?
              </h2>
            </div>
            <div class="feed__body">
                {user.map((e) => {
return (
    <Card user={e}/>
)
                })}
                </div>
            <div class="feed__bottom">
              <div class="progress">
                <img src={prog} width="80" height="80" alt="person" />
                <div class="progres__body--inner">
                  <h3 class="progress__title">500+</h3>
                  <p class="progres__text">Judul Buku</p>
                </div>
              </div>
              <div class="progress">
                <img src={prog} width="80" height="80" alt="person" />
                <div class="progres__body--inner">
                  <h3 class="progress__title">$0</h3>
                  <p class="progres__text">Gratis Peminjaman</p>
                </div>
              </div>
              <div class="progress">
                <img src={prog} width="80" height="80" alt="person" />
                <div class="progres__body--inner">
                  <h3 class="progress__title">5</h3>
                  <p class="progres__text">Kegiatan Rutin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feed;

// <div class="card">
// <div class="card-top">
// <blockquote cite="Mohammad Hatta">
// “Aku rela dipenjara asalkan <strong>bersama buku</strong>, karena dengan buku <strong> aku bebas</strong>”
// </blockquote>
// </div>
// <div class="card__body">
// <img src={person} width="80" height="80" alt="person"/>
// <div class="card__body--inner">
// <h3 class='card__title'>
// Mohammad Hatta
// </h3>
// <p class="card__text">
// Wakil Presiden Indonesia Pertama
// </p>
// </div>
// </div>
// </div>
// <div class="card">
// <div class="card-top">
// <blockquote cite="Najwa Shihab">
// “Cuma perlu <strong>satu buku</strong> untuk jatuh cinta pada membaca, Cari Buku itu! <strong>Mari jatuh cinta!</strong>
//         </blockquote>
// </div>
// <div class="card__body card__second">
// <img src={second} width="80" height="80" alt="person"/>
// <div class="card__body--inner">
// <h3 class='card__title'>
// Najwa Shihab
// </h3>
// <p class="card__text">
// Duta Membaca
// </p>
// </div>
// </div>
// </div>
