import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function NewFeedsScreen({route,  navigation }) {
  const { data } = route.params;
  const list = useSelector(store => store.productReducer.gifts)
  const sp = useSelector(store => store.productReducer.products);
  const tk = useSelector(store => store.userReducer.users);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>data:</Text>
        {list?.map((e, i) => <Text key={i}>{e}</Text>)}
        <Text>dulieu:</Text>
        {sp?.map((e, i) => <Text key={i}>{e}</Text>)}
        <Text>username:</Text>
        {tk?.map((e, i) => <Text key={i}>{e}</Text>)}
      </View>
      <Button
            title="Go to Comment"
            onPress={() =>
              navigation.navigate('Coment', {data: 'hello Comment'})
            }
          />
    </View>
  )
}