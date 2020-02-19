import React, { Component } from 'react';
import { Platform } from 'react-native';
import CustomTextInput from './customTextInput';

export default class CustomTextFieldCutPasteDisabled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value || '',
      selection: undefined,
      dirty: false,
    };
  }

  render() {
    console.log(`curr text: ${this.state.text}`);
    return (
      <CustomTextInput
        {...this.props}
        selection={this.state.selection}
        value={this.state.text}
        onChange={() => {}}
        onChangeText={() => {}}
        onSelectionChange={this.onSelectionChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }

  onSelectionChange = event => {
    console.log(event.nativeEvent.selection);
    if (!this.state.dirty) {
      this.setState({ selection: event.nativeEvent.selection });
    }
    this.setState({ dirty: false });
  };

  handleKeyPress = event => {
    const key = Platform.OS === 'web' ? event.key : event.nativeEvent.key;
    console.log(`key: ${key}`);
    const { text, selection } = this.state;
    console.log(`text: ${text}`);
    const { isValid } = this.props;
    if (key === 'Backspace') {
      const selectionDiff = selection.end - selection.start;
      if (text.length > 0) {
        if (selectionDiff === 0) {
          // no highlighted selection
          if (selection.start === text.length) {
            // cursor is at last
            this.setState({ text: text.substring(0, text.length - 1) }); // remove last character
          } else {
            const start = selection.start - 1;
            this.setState({
              text: this.getMiddleStringChopped(start, selection.start),
            });
          }
        } else {
          const { start } = selection;
          this.setState({
            text: this.getMiddleStringChopped(start, selection.end),
            dirty: true,
          });
        }
      }
      return;
    }
    if (key.length === 1) {
      // only characters; not other buttons like shift, tab, left etc
      const nextText = text + key;
      if (isValid) {
        if (isValid(nextText)) {
          this.setState({ text: nextText });
        } else {
          this.setState({
            dirty: true,
            selection: { start: text.length, end: text.length },
          });
        }
      } else {
        this.setState({ text: nextText });
      }
    }
  };

  getMiddleStringChopped = (start, end) => {
    const { text } = this.state;
    return text.substring(0, start) + text.substring(end, text.length);
  };
}
