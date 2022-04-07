import { View, Text, Button, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';


export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button 
            title="send from father"
            onPress={() => dispatch({ type: "SEND_FROM_FATHER", data: "socola" })}
          />
            
          <Button 
            title="gui den ham cha"
            onPress={() => dispatch({ type: "GUI_DEN_HAMCHA", dulieu: "quabong" })}
          />

          <Button
            title="Go to newfeed"
            onPress={() =>
              navigation.navigate('NewFeed', {data: 'hello newfeed'})
            }
          />

          <View style={{ flex: 1, alignItems: 'center', justifyContent:'center', borderWidth: 1, borderColor: 'black', width: '90%'}}>
          <TouchableOpacity style={{borderColor: 'red', borderRadius: 10, width: '30%',
          borderwidth: 1, backgroundColor: '#ff7013', padding: 6, alignItems: 'center',}}
          
          onPress={() => 
          dispatch({ type: "GUI_USER", usernames: "KIEUDUYLUU" })}>

            <Text style={{color: '#fff',}}>GỬI ĐI</Text>
          </TouchableOpacity> 
          </View>
        
         
        </View>
      );
}