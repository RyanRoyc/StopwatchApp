import { View, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';

type StopwatchControlsProps = {
  isRunning: boolean;
  onStartStop: () => void;
  onReset: () => void;
  isDarkMode: boolean;
};

export default function StopwatchControls({ 
  isRunning, 
  onStartStop, 
  onReset,
  isDarkMode
}: StopwatchControlsProps) {
  return (
    <Animated.View 
      entering={FadeIn} 
      style={styles.container}
    >
      <Pressable
        onPress={onStartStop}
        style={[
          styles.button,
          { backgroundColor: isRunning ? '#ff4757' : '#2ed573' }
        ]}
      >
        <MaterialCommunityIcons
          name={isRunning ? 'pause' : 'play'}
          size={24}
          color="white"
        />
      </Pressable>
      
      <Pressable
        onPress={onReset}
        style={[
          styles.button,
          { backgroundColor: isDarkMode ? '#444' : '#ddd' }
        ]}
      >
        <MaterialCommunityIcons
          name="refresh"
          size={24}
          color={isDarkMode ? '#fff' : '#333'}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});