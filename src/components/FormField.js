import { forwardRef } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '../theme/colors';

export const FormField = forwardRef(function FormField(
  {
    error,
    label,
    onRightAction,
    rightAction,
    secureTextEntry,
    ...inputProps
  },
  ref,
) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputShell, error && styles.inputShellError]}>
        <TextInput
          accessibilityLabel={label}
          placeholderTextColor={colors.subtle}
          ref={ref}
          secureTextEntry={secureTextEntry}
          selectionColor={colors.primary}
          style={styles.input}
          {...inputProps}
        />
        {rightAction ? (
          <Pressable
            accessibilityLabel={`${rightAction} senha`}
            accessibilityRole="button"
            hitSlop={8}
            onPress={onRightAction}
            style={({ pressed }) => [
              styles.rightActionButton,
              pressed && styles.rightActionPressed,
            ]}
          >
            <Text style={styles.rightAction}>{rightAction}</Text>
          </Pressable>
        ) : null}
      </View>
      {error ? (
        <Text accessibilityLiveRegion="polite" style={styles.error}>
          {error}
        </Text>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  field: {
    gap: 8,
  },
  label: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '700',
  },
  inputShell: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 54,
    paddingHorizontal: 16,
  },
  inputShellError: {
    backgroundColor: '#FFF9F8',
    borderColor: colors.error,
  },
  input: {
    color: colors.ink,
    flex: 1,
    fontSize: 16,
    minHeight: 52,
    paddingVertical: 12,
  },
  rightAction: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  rightActionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -8,
    minHeight: 48,
    minWidth: 68,
    paddingLeft: 12,
    paddingRight: 8,
  },
  rightActionPressed: {
    opacity: 0.6,
  },
  error: {
    color: colors.error,
    fontSize: 12,
    lineHeight: 17,
  },
});
