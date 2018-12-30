import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};

const { textStyle, viewStyle } = styles;

const Header = ({ headerText }) => (
  <View style={viewStyle}>
    <Text style={textStyle}>{headerText}</Text>
  </View>
);

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
