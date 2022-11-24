import hawkins from "./png/havkins.png"
import simmon from "./png/simmons.png"
import next from "./svg/per.svg"
import dot from "./svg/dot.svg"
import dt from "./svg/dt.svg"

function Rec() {
  return (
    <>
      <section>
        <div class="container">
          <div class="carousel">
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
            <div class="carousel__bottom">
                <img src={next} class="prev next" width="40" height="40"/>
                <img src={next} class="next" width="40" height="40"/>
              <div class="carousel-card">
                <div class="card-top">
                  <h2 class="card__caption">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </h2>
                </div>
                <div class="card__body card__second">
                  <img src={hawkins} width="80" height="80" alt="person" />
                  <div class="card__body--inner">
                    <h3 class="card__title">Guy Hawkins</h3>
                    <p class="card__text">32 Tahun, Karyawan</p>
                  </div>
                </div>
              </div>
              <div class="carousel-card">
                <div class="card-top">
                  <h2 class="card__caption">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </h2>
                </div>
                <div class="card__body card__second">
                  <img src={simmon} width="80" height="80" alt="person" />
                  <div class="card__body--inner">
                    <h3 class="card__title">Brooklyn Simmons</h3>
                    <p class="card__text">20 Tahun, Mahasiswa</p>
                  </div>

                </div>
              </div>
              <div class="dots">
              <img src={dot} width="16" height="16" alt="icon"/>
              <img src={dt} width="16" height="16" alt="icon"/>
              <img src={dt} width="16" height="16" alt="icon"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rec
