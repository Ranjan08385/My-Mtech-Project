/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';

const { Popover } = renderers;

class CustomDropdownV2 extends Component {
  openMenu = () => {
    const { onMenuOpen } = this.props;
    if (onMenuOpen) {
      onMenuOpen();
    }
  };

  closeMenu = () => {
    const { onMenuClose } = this.props;
    if (onMenuClose) {
      onMenuClose();
    }
  };

  render() {
    const {
      preferredPlacement,
      placement,
      propRenderer,
      anchorStyle,
      styleMenuOptions,
      menuOptionHeader,
      menuOptionComponent,
      menuOptionDataArray,
      scrollStyle,
      optionStyle,
      onSelectionOption,
      menuName,
      style
      //   openMenuBydefault
    } = this.props;

    return (
      <Menu
        onOpen={this.openMenu}
        onClose={this.closeMenu}
        name={menuName}
        renderer={propRenderer || Popover}
        style={style}
        rendererProps={{
          preferredPlacement: preferredPlacement || 'top',
          placement,
          anchorStyle: [
            {
              backgroundColor: 'black'
            },
            anchorStyle
          ]
        }}
      >
        <MenuTrigger>
          {typeof menuOptionHeader === 'function' ? (
            menuOptionHeader()
          ) : (
            <menuOptionHeader />
          )}
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={[styleMenuOptions]}>
          {typeof menuOptionComponent === 'function' ? (
            <ScrollView style={[{ maxHeight: 250 }, scrollStyle]}>
              {menuOptionDataArray &&
                menuOptionDataArray.map((data, index) => (
                  <MenuOption
                    value={data}
                    style={optionStyle}
                    onSelect={value => onSelectionOption(value, index)}
                  >
                    {menuOptionComponent(data)}
                  </MenuOption>
                ))}
            </ScrollView>
          ) : (
            <menuOptionComponent />
          )}
        </MenuOptions>
      </Menu>
    );
  }
}

export default CustomDropdownV2;
