import { Stack } from "expo-router"; 
import '../i18n'; 

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="Home" options={{headerTitle:'My App'}} />
  </Stack>
  )
  }
