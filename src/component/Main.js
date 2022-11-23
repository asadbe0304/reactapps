import search from "./svg/akar-icons_search.svg";
import search2 from "./svg/s.svg";
import hero from "./png/hero1.png"

function Main() {
  return (
    <>
      <main>
        <div class="container">
          <div class="hero">
            <div class="hero-top">
              <div class="hero__top--inner">
                <p class="hero__text">
                  <span class="color">Pojok Baca Probolinggo</span>
                  Probolinggo
                </p>
                <h1 class="hero__title">
                  Pinjam Buku Secara
                  <span class="title-col">Gratis</span>
                  untuk Masyarakat
                </h1>
              </div>
              <div class="hero__link">
                <a href="#" class="main-link active">
                  Cari Judul Buku
                  <img src={search} width="20" height="20" alt="icon" />
                </a>
                <a href="#" class="main-link">
                  Cari Judul Buku
                  <img src={search2} width="20" height="20" alt="icon" />
                </a>
              <div class="line"></div>
              </div>
            </div>
        <div class="hero__bottom">
        <img src={hero} width="1238" height="580" alt="hero image" />
        </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
