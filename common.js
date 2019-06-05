/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// navigation bar on the top
class Navbar extends React.Component {
  render () {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark" >
        <a class="navbar-brand" href="#">Nokia</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link " href="status.html">Status <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="company_input.html">Input data</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search.html">Search</a>
            </li>
          </ul>
          <span class="navbar-text">
                to be added...
          </span>
        </div>
      </nav>
    )
  }
}
