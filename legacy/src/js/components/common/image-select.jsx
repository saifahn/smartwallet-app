import React from 'react'
import PropTypes from 'prop-types';
import Radium from 'radium'
import accepts from 'attr-accept'

import IconButton from 'material-ui/IconButton'

class ImageSelect extends React.Component {
  static propTypes = {
    onError: PropTypes.func,
    onChange: PropTypes.func
  };

  open = () => {
    this.fileInputEl.value = null
    this.fileInputEl.click()
  };

  render() {
    return (
      <div>
        <input
          ref={el => { this.fileInputEl = el }}
          type="file"
          name="file"
          style={styles.file}
          multiple={false}
          onChange={this._handleSelectFile} />
        <IconButton
          iconClassName="material-icons"
          onClick={() => this.open()}
        >
          photo_camera
        </IconButton>
      </div>
    )
  }

  _handleSelectFile = ({target}) => {
    let file = target.files[0]

    if (!accepts(file, 'image/*')) {
      this.props.onError('Invalid file type')
    } else {
      this.props.onChange(file)
    }
  };
}

let styles = {
  file: {
    display: 'none'
  }
}

export default Radium(ImageSelect)