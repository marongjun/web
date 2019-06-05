/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

class Breadcrumb extends React.Component {
  render () {
    return (
      <nav aria-label="breadcrumb" class="mleft mrihght col-lg-12 col-md-12">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Search</li>
        </ol>
      </nav>
    )
  }
}

class Search extends React.Component {
  render () {
    return (
      <div class="row justify-content-center" style={{ marginTop: '8%' }}>
        <div class="row no-gutters justify-content-center col-md-10">
          <div class="col-auto">
            <i class="fas fa-search h4 text-body"></i>
          </div>

          <div class="col">
            <input class="form-control form-control-borderless" type="search" placeholder="Keywords here..."/>
          </div>

          <div class="col-auto">
            <button class="btn btn-primary" type="submit">Search</button>
          </div>
        </div>
      </div>
    )
  }
}

class Button extends React.Component {
  render () {
    return <button class="dropdown-item" type="button">{this.props.data}</button>
  }
}

class DropdownList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // btns: []
      btns: []
    }
    let that = this
    $.post('search.php', { search: this.props.type })
      .done(function (data) {
        let res = data.split(',')
        console.log(data)
        res.forEach(element => {
          // that.setState({ btns: that.state.btns.concat([<Button key={element} data={element}/>]) })
          that.setState({ btns: [element, ...that.state.btns] })
        })
      })
  }

  render () {
    let renEles = this.state.btns.map((ele) =>
      <Button data={ele} key={ele} />
    )

    return renEles
  }
}

class SearchBtn extends React.Component {
  render () {
    return (
      <div class="col-md-4" style={{ marginTop: '8%', textAlign: 'center' }}>
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.text}
          </button>
          <div class="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenu1" style={{ height: 'auto',
            maxHeight: '200px',
            overflowX: 'hidden' }}>
            <DropdownList type={this.props.type} />
          </div>
        </div>
      </div>
    )
  }
}

class SearchByCom extends React.Component {
  render () {
    return (
      <div class="form-row ">
        <SearchBtn text="Company Name" type="companyname"/>
        <SearchBtn text="Fileds" type="fileds"/>
        <SearchBtn text="Status" type="status"/>
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
          <Search />
          <SearchByCom />
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
