import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const Spinner = ({ size }) => {
  const spinnerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size} />
    </View>
  );
};

Spinner.defaultProps = { size: 'large' };
Spinner.propTypes = { size: PropTypes.string };

export default Spinner;
