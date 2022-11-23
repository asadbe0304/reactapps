import logo from "./svg/footerlog.svg";
import social from "./svg/facebok.svg";

function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="footer">
            <div class="footer-top">
              <div class="footer__left">
                <a href="./" class="footer__link">
                  <img src={logo} />
                </a>
                <div class="footer__img">
                  <img src={social} class="social__img" />
                  <img src={social} class="social__img" />
                  <img src={social} class="social__img" />
                </div>
              </div>
              <div class="footer__right">
                <ul class="footer__list">
                  <li class="footer__list--item">
                    <a href="#link" class="footer__list--link">
                      Kontak
                    </a>
                    <ul class="list__inner">
                      <li class="list__inner--item">
                        <a class="inner__item--link">Email</a>
                      </li>
                      <li class="list__inner--item">
                        <a class="inner__item--link">Alamat</a>
                      </li>
                      <li class="list__inner--item">
                        <a class="inner__item--link">No. Rekening</a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer__list--item">
                  Tentang Kami
                  <ul class="list__inner">
                      <li class="list__inner--item">
                        <a class="inner__item--link">Umum</a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer__list--item">
                  Galery 
                    <ul class="list__inner">
                      <li class="list__inner--item">
                        <a class="inner__item--link">Kegiatan 2018</a>
                      </li>
                      <li class="list__inner--item">
                        <a class="inner__item--link">Kegiatan 2019</a>
                      </li>
                      <li class="list__inner--item">
                        <a class="inner__item--link">Kegiatan 2020</a>
                      </li>
                      <li class="list__inner--item">
                        <a class="inner__item--link">Kegiatan 2021</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer