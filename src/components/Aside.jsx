import img1 from "./png/child.png";
import img2 from "./png/fr.png";
import img3 from "./png/fram.png";
import img4 from "./svg/donate.svg";
import img5 from "./svg/vat.svg";

function bar() {
  return (
    <>
      <secction>
        <div class="container">
          <div class="read">
            <div class="carousel__top">
              <div class="carousel__top--left">
                <h3 class="carousel__title">Apa Kata Mereka?</h3>
                <p class="carousel__text">
                  Mereka yang telah menjadi pengunjung tetap kami
                </p>
              </div>
              <div class="carousel__top--right">
                <p class="carousel__text">Selengkapnya</p>
              </div>
            </div>
            <div class="read__images">
              <img src={img1} width="380" height="340" alt="images" />
              <img src={img2} width="380" height="340" alt="images" />
              <img src={img3} width="380" height="340" alt="images" />
            </div>
          <div class="read__bottom">
            <h3 class="read__title">
              Ingin <span class="green">Membantu</span> Meningkatkan Literasi
              Anak-Anak Sekitar Kita?
            </h3>
            <p class="read__text">Percayakan melalui kegiatan kita</p>
            <a href="#link" class="read__link main-link active">
              Donasi dengan Kami
              <img src={img4} />
            </a>
            <span class="and">Atau</span>
            <a href="#link" class="read__link main-link">
              Hubungi Kami
              <img src={img5} />
            </a>
          </div>
          </div>
        </div>
      </secction>
    </>
  );
}

export default bar;
