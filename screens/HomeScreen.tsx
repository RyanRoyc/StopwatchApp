import { View, StyleSheet, Switch } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StopwatchDisplay from '../components/StopwatchDisplay';
import StopwatchControls from '../components/StopwatchControls';

export default function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const handleStartStop = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTime(0);
  }, []);

  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }
    ]}>
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        style={styles.switch}
      />
      <StopwatchDisplay 
        time={time}
        isDarkMode={isDarkMode}
      />
      <StopwatchControls
        isRunning={isRunning}
        onStartStop={handleStartStop}
        onReset={handleReset}
        isDarkMode={isDarkMode}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});