

import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert } from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      word:' ',
      char_length:0,
      vowel:0,
      consonant:0,
     }
  }

  analyzer = () => {
    let consonant = 0, vowel = 0, char = 0;
    let word = this.state.word;
    
    let input = word.split("");
    char = word.length;
    for(var i = 0; i < word.length; i++){
      let alphabet = word[i].toUpperCase();
      if(alphabet =='A' || alphabet =='E' || alphabet =='I' || alphabet =='O' || alphabet =='U')
        vowel++;
      else
        consonant++;
    }
    this.setState({char:char,vowel:vowel,consonant:consonant});

 }

  render(){
  return (
    <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Welcom to Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(word) => this.setState({word})} style={Styles.instructions} placeholder='Please enter the word'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={Styles.container}>
        <Button color="#660033" onPress={this.analyzer} title='Analyze'/>
        <Text></Text>

        <Text style={Styles.instructions}>No of Characters: {this.state.char}</Text>
        <Text style={Styles.instructions}>vowels: {this.state.vowel}  </Text>
        <Text style={Styles.instructions}>consonents: {this.state.consonant}</Text>
        </View>
      </View>
  );
}

}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffccff',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#660033',
  },
  instructions: {
    textAlign: 'center',
    color: '#660033',
    marginBottom: 10,
  },
});