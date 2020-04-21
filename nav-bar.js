class NavBar extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <style>
    .navbar-toggler {
        border: none !important;
    }
    </style>
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <a class="navbar-brand text-uppercase font-weight-bold" href="#">
          cek paket
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a
                class="nav-link text-uppercase font-weight-bold font-size-sm"
                href="#"
              >
                about
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
        `
  }
}

customElements.define('nav-bar', NavBar)
