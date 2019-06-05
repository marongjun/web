/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// console.log('try.js hello')

// Breadcrumb navigation bar - home/database list
class Breadcrumb extends React.Component {
  render () {
    return (
      <nav aria-label="breadcrumb" class="mleft mrihght col-lg-12 col-md-12">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Database list</li>
        </ol>
      </nav>
    )
  }
}

// Database list
class Listgroup extends React.Component {
  render () {
    return (
      <div class="list-group col-lg-12 col-md-12 ">
        <a href="company_input.html" class="list-group-item list-group-item-action">External company</a>
        <a href="#" class="list-group-item list-group-item-action">Bell labs</a>
        <a href="#" class="list-group-item list-group-item-action">Internet of Things</a>
        <a href="#" class="list-group-item list-group-item-action">5G devices</a>
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
          <Listgroup />

        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
