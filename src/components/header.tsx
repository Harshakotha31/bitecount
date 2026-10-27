import { globalStyles } from '@/styles/global';
import { Text, View } from 'react-native';

export default function HomeHeader() {
  const currentDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  return (
    <View>
      <Text style={globalStyles.title}>MacroZone</Text>
      <Text style={globalStyles.empty}>{currentDate}</Text>
    </View>
  );
}

