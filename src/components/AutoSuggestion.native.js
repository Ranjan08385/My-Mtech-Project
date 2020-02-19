import React from 'react';
import { View } from 'react-native';
import CustomDropDown from './CustomDropdownV2';
class Autosuggestion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      GetHeaderforemaildomain,
      styleMenuOptions,
      menuName,
      optionStyle,
      menuOptionHeader,
      menuOptionComponent,
      menuOptionDataArray,
      propRenderer,
      preferredPlacement,
      onSelectionOption,
      onMenuOpen,
      onMenuClose
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={{}}>
          <View>
            {this.props.GetHeaderforemaildomain}
            <CustomDropDown
              styleMenuOptions={styleMenuOptions}
              menuName={menuName}
              optionStyle={optionStyle}
              menuOptionHeader={menuOptionHeader}
              menuOptionComponent={menuOptionComponent}
              menuOptionDataArray={menuOptionDataArray}
              propRenderer={propRenderer}
              preferredPlacement={preferredPlacement}
              onSelectionOption={onSelectionOption}
              onMenuOpen={onMenuOpen}
              onMenuClose={onMenuClose}
            ></CustomDropDown>
          </View>
        </View>
      </View>
    );
  }
}
export default Autosuggestion;
