import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  viewStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const { inputStyle, labelStyle, viewStyle } = styles;

const Input = ({
  label, value, onChangeText, placeholder, autoCorrect, secureTextEntry,
}) => (
  <View style={viewStyle}>
    <Text style={labelStyle}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
      placeholder={placeholder}
      style={inputStyle}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

Input.defaultProps = {
  autoCorrect: false,
  secureTextEntry: false,
};
Input.propTypes = {
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
