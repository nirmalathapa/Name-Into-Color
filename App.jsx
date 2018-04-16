import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
  }

  state = {colors: []}

  submitHandler = ({name}) => {
    let data = new URLSearchParams()

    data.set('name', name)

    fetch(this.props.url, {
      method: 'POST',
      body: data,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      }),
    })
      .then(res => res.json())
      .catch(() => this.setState({colors: []}))
      .then(colors => this.setState({colors}))
  }

  render() {
    return (
      <div>
        <Form className="form-signin" onSubmitHook={this.submitHandler} />
        <ColorList colors={this.state.colors} />
      </div>
    )
  }
}

class Form extends Component {
  static propTypes = {
    onSubmitHook: PropTypes.func.isRequired,
  }

  state = {name: ''}

  handleNameChange = ({target}) => {
    this.setState({name: target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    const name = this.state.name.trim()
    if (!name) {
      return
    }
    this.props.onSubmitHook({name})
    this.setState({name: ''})
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          value="Submit"
        />
      </form>
    )
  }
}

const ColorBoxes = ({colors}) => {
  return colors.map((color, index) => {
    const styles = {
      backgroundColor: `#${color}`,
    }
    return <div className="color-swatch" style={styles} key={index} />
  })
}

const ColorList = ({colors}) => (
  <div className="color-swatches">
    <ColorBoxes colors={colors} />
  </div>
)

ColorList.propTypes = {
  colors: PropTypes.array,
}

ReactDOM.render(<App url="/api/colors" />, document.getElementById('app'))
