import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-zinc-950 items-center justify-center'>
      <Text className='text-zinc-50'>Hello World !!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
