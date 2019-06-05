/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

class Breadcrumb extends React.Component {
  render () {
    return (
      <nav aria-label="breadcrumb" class="mleft mrihght col-lg-12 col-md-12">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Search</a></li>
          <li class="breadcrumb-item active" aria-current="page">IoT Field</li>
        </ol>
      </nav>
    )
  }
}

// const tableS = { class = "table-success" }
// const tableA = { class = "table-active" }

class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: true,
      tableType: 'table-success',
      isNda: 'badge badge-primary'
    }
    console.log(this.state.isActive)
  }

  // if (active = true) {
  //   this.setState({
  //     tableType: 'table-dark',
  //     isNda: 'badge badge-danger'
  //   })
  // }

  render () {
    return (
      <div class="row">
        <div class="col-md-4" style={{ marginTop: '10%' }}>
          <table class="table table-bordered text-center">
            <thead class="thead-default">
              <tr>
                <th scope="col">Phase 1</th>
              </tr>
            </thead>
            <tbody>
              <tr action>
                <td class={this.state.tableType}>test
                  <span class={this.state.isNda} >NDA</span></td>
              </tr>

              <tr>
                <td class="table-active">Company 2</td>
              </tr>

              <tr>
                <td class="table-success">Company 3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="col-md-4" style={{ marginTop: '10%' }}>
          <table class="table table-bordered text-center">
            <thead class="thead-default">
              <tr>
                <th scope="col">Phase 2 </th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td class="table-active">Company 1</td>
              </tr>

              <tr>
                <td class="table-active">Company 2</td>
              </tr>

              <tr>
                <td class="table-success">Company 3</td>
              </tr>
              <tr >
                <td class="table-active">Company 1</td>
              </tr>

            </tbody>
          </table>
        </div>

        <div class="col-md-4" style={{ marginTop: '10%' }}>
          <table class="table table-bordered text-center">
            <thead class="thead-default">
              <tr>
                <th scope="col">Phase 3</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td class="table-success">Company 1</td>
              </tr>

              <tr>
                <td class="table-success">Company 2</td>
              </tr>

              <tr >
                <td class="table-success">Company 3</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class Root extends React.Component {
  render () {
    return (
      <div >
        <Navbar />
        <div class="container mt-5">
          <Breadcrumb />
          <Table />

        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
