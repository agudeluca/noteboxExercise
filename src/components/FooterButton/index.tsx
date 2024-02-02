import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type FooterButtonProps = {
  label: string;
  onPress: () => void;
  isDisabled?: boolean;
};

const FooterButton = ({
  label,
  onPress,
  isDisabled,
}: FooterButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.footerButton, isDisabled && styles.disabledFooterButton]}
      onPress={onPress}
    >
      <Text style={styles.footerText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default FooterButton;
