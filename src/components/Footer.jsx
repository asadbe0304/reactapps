import logo from "./svg/footerlog.svg";
import social from "./svg/facebok.svg";

function Footer() {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="footer">
            <div class="footer-top">
              <div class="footer__left">
                <a href="./" class="footer__link">
                  <img src={logo} />{" "}
                </a>{" "}
                <div class="footer__img">
                  <img src={social} class="social__img" />
                  <img src={social} class="social__img" />
                  <img src={social} class="social__img" />
                </div>{" "}
              </div>{" "}
              <div class="footer__right">
                <ul class="footer__list">
                  <li class="footer__list--item">
                      Kontak
                    <ul class="list__inner">
                      <li class="list__inner--item">
                        <a class="inner__item--link" href="#link"> Email </a>
                      </li>
                      <li class="list__inner--item"> 
                        <a class="inner__item--link" href="#link"> Alamat </a>
                      </li>
                      <li class="list__inner--item">
                        <a class="inner__item--link" href="#link"> No.Rekening </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer__list--item">
                    Tentang Kami
                    <ul class="list__inner">
                      <li class="list__inner--item">
                        <a class="inner__item--link" href="#link"> Umum </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer__list--item">
                    Galery
                    <ul class="list__inner">
                      <li class="list__inner--item">
                        <a class="inner__item--link" href="#link"> Kegiatan 2018 </a>
                      </li>
                      <li class="list__inner--item">
                        <a class="inner__item--link" href="#link"> Kegiatan 2019 </a>
                      </li>
                      <li class="list__inner--item">
                        <a class="inner__item--link" href="#link"> Kegiatan 2020 </a>
                      </li>
                      <li class="list__inner--item">
                        <a class="inner__item--link" href="#link"> Kegiatan 2021 </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="footer-bottom">
        <div class="container">
          <h3 class="footer__caption"> &copy; Pojok Baca Probolinggo 2022 </h3>
        </div>
      </div>
    </>
  );
}
export default Footer;
