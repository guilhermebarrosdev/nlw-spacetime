import { TouchableOpacity, View, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { Link, useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as SecureStore from 'expo-secure-store'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()

  async function singOut() {
    await SecureStore.deleteItemAsync('token')

    router.push('/')
  }

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <NLWLogo />

        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={singOut}
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
          >
            <AntDesign name="logout" size={16} color="#000" />
          </TouchableOpacity>

          <Link href="/new" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <AntDesign name="plus" size={16} color="#000" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}
