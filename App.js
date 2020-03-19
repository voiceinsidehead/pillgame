/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Paracetamoe</Text>

      </View>
      <View style={{flex:1,flexDirection:"row"}}>
        <View style={{width:"50%",height:"85%"}}>
          <Image
            style={{width: "100%", height: "100%"}}
            source={require('./image/human.jpg')}
          />
        </View>
        <View style={{width:"50%",height:"85%",marginTop:"60%",alignItems:"center"}}>
          <Text style={styles.levelTextStyle}>Level 1</Text>
          <Text style={styles.levelTextStyle}>Level 2</Text>
          <Text style={styles.levelTextStyle}>Level 3</Text>
          <Text style={styles.levelTextStyle}>Level 4</Text>
          <Text style={styles.levelTextStyle}>Level 5</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    transform: [{rotate:"-20deg"}],
    fontSize: 20
  },
  headingView: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
    backgroundColor: "red"
  },
  levelTextStyle:{
    fontSize:20
  }
});

export default App;
