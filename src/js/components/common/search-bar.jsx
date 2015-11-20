import React from 'react'
import ReactDOM from 'react-dom'

import {AppBar, IconButton, Styles, FontIcon} from 'material-ui'

let {Colors} = Styles

export default React.createClass({

  getInitialState() {
    return {
      show: false,
      query: null
    }
  },

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  getStyles() {
    const textFieldTheme = this.context.muiTheme.textField

    let styles = {
      bar: {
        backgroundColor: Colors.white,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 6,
        opacity: this.state.show ? 1 : 0,
        transform: this.state.show ? 'translate(0, 0)' : 'translate(0, -100%)',
        transition: 'opacity .3s, transform .3s'
      },
      input: {
        tapHighlightColor: 'rgba(0,0,0,0)',
        padding: 0,
        position: 'relative',
        width: '100%',
        height: '100%',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        color: textFieldTheme.textColor,
        fontSize: '24px',
        lineHeight: '64px'
      }
    }

    return styles
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.state.show && !prevState.show) {
      let input = ReactDOM.findDOMNode(this.refs.input)
      input.focus()
    }
  },

  show() {
    this.setState({show: true})
  },

  hide() {
    this.setState({show: false, query: null})
    let input = ReactDOM.findDOMNode(this.refs.input)
    input.value = ''
  },

  onChange({target}) {
    this.setState({query: target.value})
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(target.value)
    }
  },

  render() {
    let styles = this.getStyles()

    let iconColor = this.context.muiTheme.rawTheme.palette.primary1Color

    return (
      <AppBar
        style={styles.bar}
        title={<input placeholder="Search..." onChange={this.onChange} ref="input" style={styles.input}/>}
        iconElementLeft={
          <IconButton onClick={this.hide}>
            <FontIcon className="material-icons" color={iconColor}>arrow_back</FontIcon>
          </IconButton>
        }
      />
    )
  }

})
