import img from "./component/svg/Group 137.svg";

function App() {
  return (
    <>
      <header>
        <div class="container">
          <div class="header">
            <a href="./index.html" class="header__link">
              <img src={img} width="60" height="60" alt="logo" />
            </a>
            <ul class="header__list">
              <li class="header__list--item">
                <a class="list__item--link" href="#link">
                  Beranda
                </a>
              </li>
              <li class="header__list--item">
                <a class="list__item--link" href="#link">
                  Koleksi
                </a>
              </li>
              <li class="header__list--item">
                <a class="list__item--link" href="#link">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li class="header__list--item">
                <a class="list__item--link" href="#link">
                  Kontak
                </a>
              </li>
            </ul>
            <div class="sign">
              <a class="sign__link" href="#link">
                Masuk
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
