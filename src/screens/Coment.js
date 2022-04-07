import { View, Text } from 'react-native'
import React from 'react'

export default function ComentsScreen({ route , navigation }) {
  const { data } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{data}</Text>
    </View>
  )
}