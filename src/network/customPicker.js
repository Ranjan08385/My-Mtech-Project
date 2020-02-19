import React from 'react';
import { Picker, Platform, PickerIOS } from 'react-native-web';
import PropTypes from 'prop-types';


CustomPicker.propTypes = {
    items: PropTypes.array,
    selectedValue: PropTypes.string,
    onValueChange: PropTypes.func,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func
}



function CustomPicker(props) {



    let items = props.items.map((s, i) => {
        return <Picker.Item key={i} value={s} label={s} />
    });
    return (
        <Picker selectedValue={props.selectedValue} onValueChange={(itemValue, itemIndex) =>
            props.onPickerValueChange()
        }
            style={{ height: 50, width: 100 }}
        >
            {items}
        </Picker>)



}

CustomPicker.defultProps = {
    items =['Selected'],
    selectedValue ="selected"
}

export default CustomPicker;