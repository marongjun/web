/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Breadcrumb navigation bar - home/database list
class Breadcrumb extends React.Component {
  render () {
    return (
      <nav aria-label="breadcrumb" class="mleft mrihght col-lg-12 col-md-12">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item"><a href="#">External Company</a></li>
          <li class="breadcrumb-item active" aria-current="page">Input</li>
        </ol>
      </nav>
    )
  }
}

const submitButtonStyle = {
  marginTop: '2%'
}

const submitDivStyle = {
  textAlign: 'center'
}

const checkboxDivStyle = {
  paddingTop: '2%',
  paddingLeft: '8%'
}

// inactive reason popup -test
class Popup extends React.Component {
  render () {
    return (
      <div class="card text-center col-md-3" style={{ zIndex: '100', position: 'absolute', Top: '10%', left: '20%' }} >
        <div class="card-body text-center" className='popup'>
          <h class="card-title">Inactive Reason</h>
          <div class="input-group" >
            <textarea class="form-control" ></textarea>
          </div>
          <div style={{ marginTop: '5%', marginBottom: '5%' }}>
            <button class="btn-sm bth-light" onClick= {this.props.closePopup}>close me</button>
            <button class="btn-sm btn-warning" style={{ marginLeft: '20%' }}>submit</button>
          </div>
        </div>
      </div>)
  }
}

// Company Status
// class Status extends React.Component {
//   constructor (props) {
//     super(props)

//   }

//   render () {
//     return (

//     )
//   }
// }

// Company Info Form
class Form extends React.Component {
  constructor (props) {
    super(props)
    this.uploadFile = this.uploadFile.bind(this)

    this.state = {
      fileName: 'Choose File',
      checked1: true,
      checked2: false,
      checked3: false,
      showPopup: false
    }
  }

  uploadFile (event) {
    let file = event.target.files[0]
    console.log(file.name)

    if (file) {
      let data = new FormData()
      data.append('file', file.name)
      this.setState({ fileName: file.name })
    }
  }

  toggleChange=(id) => {
    if (id === 1) {
      this.setState({
        checked1: !this.state.checked1,
        showPopup: !this.state.showPopup
      })
      console.log(this.state.checked1, id)
    } else if (id === 2) {
      this.setState({
        checked2: !this.state.checked2
      })
      console.log(this.state.checked2, id)
    } else if (id === 3) {
      this.setState({
        checked3: !this.state.checked3
      })
      console.log(this.state.checked3, id)
    }
  }

  mSubmit () {
    // console.log(this.state)
    var that = this
    $.post('checkbox.php', that.state)
      .done(function (data) {
        console.log(data.split(','))
      })
  }

  render () {
    return (
      <div>
        <form >
          <div class="form-row">
            {/* <div class="form-group col-md-6" > */}
            <div class="form-check col-md-2" style={checkboxDivStyle}>
              <input class="form-check-input" type="checkbox" checked={this.state.checked1} onChange={this.toggleChange.bind(this, 1)}/>
              <label class="form-check-label" for="activecheck">Active
              </label>
            </div>

            {this.state.showPopup ? <Popup
              closePopup={this.toggleChange.bind(this)}/> : null
            }

            <div class="form-check col-md-2" style={checkboxDivStyle}>
              <input class="form-check-input" type="checkbox" onChange={this.toggleChange.bind(this, 2)} />
              <label class="form-check-label" for="procheck">Procurement
              </label>
            </div>

            <div class="form-check col-md-2" style={checkboxDivStyle}>
              <input class="form-check-input" type="checkbox" onChange={this.toggleChange.bind(this, 3)} />
              <label class="form-check-label" for="ndacheck">NDA
              </label>
            </div>

            <div class="form-group col-md-6">
              <label for="techarea">Action - Progress</label>
              <select class="form-control" id="techarea">
                <option>Phase 1</option>
                <option>Phase 2</option>
                <option>Phase 3</option>
              </select>
            </div>

          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label >Company name</label>
              <input type="text" id="companyname" class="form-control" placeholder="name here..."></input>
            </div>

            <div class="form-group col-md-6">
              <label >Location</label>
              <input id="location" type="text" class="form-control" placeholder="location here..."/>
            </div>
          </div>

          <div>
            <div class ="form-row">
              <label for="techarea" class="form-group col-md-6">Tech Area</label>
              <label class="form-group col-md-6">Uploading File</label>
            </div>
            <div class ="form-row">
              <div class="form-group col-md-6">
                <select class="form-control" id="techarea">
                  <option>IoT</option>
                  <option>Sensors</option>
                  <option>Machine Learning</option>
                  <option>Artificail Intelligence</option>
                  <option>Hardware -Chips</option>
                </select>
              </div>

              <div class="form-group custom-file col-md-6" >
                <input type="file" class="custom-file-input" id="fileupload" onChange={this.uploadFile}/>
                <label class="custom-file-label" for="fileupload">{this.state.fileName}</label>
              </div>

            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Contact - Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="email@example.com"></input>
            </div>

            <div class="form-group col-md-6">
              <label htmlFor="link" >Link</label>
              <input id="link" type="text" class="form-control" placeholder="paste the link here..."/>
            </div>
          </div>

          <div class="form-row">
            <label>Other Information - free text Area</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Comments</span>
              </div>
              <textarea class="form-control" aria-label="With textarea" placeholder="Product,PM intersts..." style={{ height: '200px' }}></textarea>
            </div>

          </div>

        </form>
        <div style={submitDivStyle} class="col-md-12">
          {/* <button type="submit" class="btn btn-primary" style={submitButtonStyle}>Submit</button> */}
          <button class="btn btn-primary" onClick={this.mSubmit.bind(this)} style={submitButtonStyle}>Submit</button>
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
          <Form />
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
