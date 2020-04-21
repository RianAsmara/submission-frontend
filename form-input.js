class FormInput extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="row justify-content-center items-center">
    <div class="col-lg-6">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label
            for="inputEmail4"
            class="text-uppercase font-weight-bold font-size-sm"
          >
            no resi
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="form-group col-md-6">
          <label
            for="inputPassword4"
            class="text-uppercase font-weight-bold font-size-md"
          >
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center items-center">
    <div class="col-lg-6">
      <button
        class="btn btn-info btn-block text-capitalize font-weight-bold"
      >
        cek paket
      </button>
    </div>
  </div>
        `
  }
}

customElements.define('form-input', FormInput)
