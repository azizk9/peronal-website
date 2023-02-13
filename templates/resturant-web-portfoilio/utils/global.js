function render(html, root, position = "afterBegin") {
  root.insertAdjacentHTML(position, html);
}

const Loading = () => `<div id="overlay">
  <img src="/media/loading-spinner.png" alt="Loading" />
            </div>`;

const Navbar = () => `
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">

        <li class="dropdown">
          <a href="/coffe/">
          <span class="navbarItem">Coffee</span>
          <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/hot drinks">Hot Drinks</a></li>
            <li><a href="/beakary">beakary</a></li>
            <li><a href="/fresh drinks/">Fresh Drinks</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="/resturant/">
            <span class="navbarItem">Resturant</span>
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="/pizza/">Pizza</a></li>
            <li><a href="/Arabic Cuisine/">Arabic Cuisine</a></li>
            <li><a href="/sbagity/">sbagity</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="/kids-area/">
            <span class="navbarItem">Kids Area</span>
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" >
            <li><a href="/kids-meals/">Meals</a></li>
            <li><a href="/Party/">party</a></li>
            <li><a href="/play-area/">Play Area</a></li>
          </ul>
        </li>
        <li><a href="/recervision/">
          <span class="navbarItem">recervision</span>
        </a></li>
        <li><a href="/about-us/">
          <span class="navbarItem">About us</span>
        </a></li>
        <li><a href="/call-us/">
          <span class="navbarItem">Call us</span>
        </a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/order/" style="color:#c4ab7b">
          <span class="navbarItem">ORDER NOW</span>
        </a></li>
        <li><a href="/auth/login.html">
          <span class="navbarItem">Login</span>
          <span class="glyphicon glyphicon-log-in"></span>
        </a></li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
  </div>
  <!-- /.container-fluid -->
  <center><a href=/><img src="/media/logo-red.png"></a></center>
</nav>
  `;

const Footer = () => `<div class="footer">
            <div class="iron"></div>
            <div class="red-bg">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <p class="head1"> IF YOU'RE NOT AT "MOMS kiTCHIN"</p>
                    <p class="head2"><b>YOU ARE NOT AT HOME</b></p>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <p class="paragraph">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias soluta nisi fugit vel labore commodi
                      sint ad. Aperiam repellendus perferendis omnis dolores maxime, rem aliquam nesciunt suscipit
                      adipisci
                      iure? Doloribus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="wooden-bg">
              <div class="container">
                <center>
                  <div> <img src="/media/logo-red.png" alt="Logo"></div>
                </center>
                <div class="row">
                  <div class="col-xs-12 col-md-4">
                    <h2 style="color:#c4ab7b">contact</h2>
                    <p style="color:white;">3035 north hastings way eau claire,wl54703 715-838-8994</p>
                  </div>
                  <div class="col-xs-12 col-md-4">
                    <h3 style="color:#c4ab7b">hours</h3>
                    <p style="color:white;">monday 7:00am-2:00pm</p>
                    <p style="color:white;">tusday and wensday closed</p>
                    <p style="color:white;">thursday and fridy 7:ooam-2:00pm</p>
                    <p style="color:white;">sunday 8:00am-2:00am</p>
                  </div>
                  <div class="col-xs-12 col-md-4">
                    <h3 style="color:#c4ab7b">Social Media</h3>
                    <a href="#" class="socialMediaIcon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="socialMediaIcon"><i class="fa-brands fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

function main() {
  const body = document.querySelector("body");
  const navPlaceHolder = document.querySelector("body .nav-placeholder");
  render(Loading(), body);
  // Removing The Loading Overlay
  window.addEventListener("load", () => {
    const overlay = document.querySelector("#overlay");
    setTimeout(() => (overlay.style.display = "none"), 1000);
  });
  render(Navbar(), navPlaceHolder);
  render(Footer(), document.querySelector(".footer-placeholder"));
}

main();
