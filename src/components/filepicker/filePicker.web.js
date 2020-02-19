/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FilePicker } from 'react-file-picker';

class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeValue = data => {
    const { selectedData } = this.props;
    selectedData(data);
  };

  onErrorMsg = data => {
    const { errorThrow } = this.props;
    errorThrow(data);
  };

  render() {
    const { children, type, maxSize } = this.props;
    return (
      <FilePicker
        maxSize={maxSize || 2}
        extensions={type || ['pdf', 'jpg', 'jpeg', 'png', 'tiff']}
        onChange={base64EncodedString =>
          this.onChangeValue(base64EncodedString)
        }
        onError={errMsg => this.onErrorMsg(errMsg)}
      >
        {children}
      </FilePicker>
    );
  }
}

export default Picker;
