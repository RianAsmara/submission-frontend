class ResultFetch extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="row justify-content-center items-center">
        <div class="col-lg-8">
          <div class="table-responsive">
            <table class="table table-sm table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2020-02-16 11:30:38</th>
                  <td>Drop Point CILEGON, CILEGON</td>
                  <td>On Delivery by Iswadi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
        `
  }
}

customElements.define('result-fetch', ResultFetch)
