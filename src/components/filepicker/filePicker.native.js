/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { PermissionsAndroid, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

class FilePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formats: [DocumentPicker.types.images, DocumentPicker.types.pdf], // allFiles,audio,pdf,images,plainText
    };
  }

  componentWillMount() {
    const data = [];
    const { type } = this.props;
    if (type) {
      type.map(item => {
        let items;
        if (item === 'allFiles') {
          items = DocumentPicker.types.allFiles;
        } else if (item === 'audio') {
          items = DocumentPicker.types.audio;
        } else if (item === 'pdf') {
          items = DocumentPicker.types.pdf;
        } else if (item === 'images') {
          items = DocumentPicker.types.images;
        } else if (item === 'plainText') {
          items = DocumentPicker.types.plainText;
        }
        data.push(items);
      });
      this.setState({
        formats: data,
      });
    }
  }

  async requestCameraPermission() {
    const { onPress, getPermissions, permissionError } = this.props;

    // onPress();

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        // {
        //   title: 'Money2India Camera Permission',
        //   message:
        //     'Cool Photo App needs access to your camera ' + 'so you can take awesome pictures.',
        //   buttonNeutral: 'Ask Me Later',
        //   buttonNegative: 'Cancel',
        //   buttonPositive: 'OK',
        // }
      );
      // getPermissions(granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.selectFile();
      } else {
        // console.log('Camera permission denied');
      }
      getPermissions(granted);
    } catch (err) {
      permissionError(err);
      // console.warn(err);
    }
    onPress();
  }

  async selectFile() {
    const { selectedData, isCancel, errorThrow } = this.props;
    const { formats } = this.state;

    try {
      const res = await DocumentPicker.pick({
        type: formats,
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      selectedData(res);
      // console.log(`res : ${JSON.stringify(res)}`);
      // console.log(`URI : ${res.uri}`);
      // console.log(`Type : ${res.type}`);
      // console.log(`File Name : ${res.name}`);
      // console.log(`File Size : ${res.size}`);
      // Setting the state to show single file attributes
    } catch (err) {
      // Handling any exception (If any)
      errorThrow(err);
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        isCancel(err);
      } else {
        // For Unknown Error
        // alert(`Unknown Error: ${JSON.stringify(err)}`);
        throw err;
      }
    }
  }

  render() {
    const { children, touchableStyle } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.requestCameraPermission()}
        style={touchableStyle}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

export default FilePicker;
