import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { useMemo } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

type StopwatchDisplayProps = {
  time: number;
  isDarkMode: boolean;
};

export default function StopwatchDisplay({ time, isDarkMode }: StopwatchDisplayProps) {
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      milliseconds: milliseconds.toString().padStart(2, '0'),
    };
  }, [time]);

  return (
    <Animated.View 
      entering={FadeIn}
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5' }
      ]}
    >
      <Text style={[
        styles.time,
        { color: isDarkMode ? '#ffffff' : '#000000' }
      ]}>
        {formattedTime.minutes}:{formattedTime.seconds}.{formattedTime.milliseconds}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 15,
    marginVertical: 20,
    minWidth: 280,
    alignItems: 'center',
  },
  time: {
    fontSize: 48,
    fontWeight: '600',
    fontVariant: ['tabular-nums'],
  },
});