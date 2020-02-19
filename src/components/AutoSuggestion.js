import React from 'react';
import { View } from 'react-native';
import Autocomplete from './autoComplete';

class Autosuggestion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      value,
      placeholder,
      error,
      onChange,
      onChangeText,
      terms,
      onItemPress
    } = this.props;
    return (
      <View style={{ backgroundColor: 'transparent', flex: 1, zIndex: 9999 }}>
        <Autocomplete
          value={value}
          placeholder={placeholder}
          maxLength={50}
          inputStyle={{
            fontSize: 15
          }}
          error={error}
          onChange={onChange}
          onChangeText={onChangeText}
          terms={terms}
          onItemPress={onItemPress}
        />
      </View>
    );
  }
}

export default Autosuggestion;
