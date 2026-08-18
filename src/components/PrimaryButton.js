import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '../theme/colors';

const variants = {
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    textColor: '#FFFFFF',
  },
  light: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    textColor: colors.navy,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
    textColor: colors.ink,
  },
};

export function PrimaryButton({
  disabled = false,
  label,
  onPress,
  variant = 'primary',
}) {
  const palette = variants[variant] || variants.primary;

  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: palette.backgroundColor,
          borderColor: palette.borderColor,
        },
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.label, { color: palette.textColor }]}>{label}</Text>
      <Text aria-hidden style={[styles.arrow, { color: palette.textColor }]}>
        →
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 54,
    paddingHorizontal: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  arrow: {
    fontSize: 21,
    marginLeft: 10,
    marginTop: -1,
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    opacity: 0.48,
  },
});
