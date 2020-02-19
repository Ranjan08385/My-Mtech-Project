import React from 'react';
import { View, Image } from 'react-native';

class LoaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: props.isLoading,
    };
  }

  showLoader = isLoading => {
    if (isLoading !== undefined) {
      this.setState({ isLoading });
    }
  };

  render() {
    return this.state.isLoading ? (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#00000080',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image style={{ width: 50, height: 50 }} source={require('../assets/images/loader.gif')} />
      </View>
    ) : null;
  }
}

export default LoaderComponent;
