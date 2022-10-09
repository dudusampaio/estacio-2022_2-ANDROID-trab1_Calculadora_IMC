import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  
  //Cálculos
  constructor(props){
    super(props)
    this.state = {peso: '', altura: '', info: ':', resultado: 0.0}
    this.calculaIMC = this.calculaIMC.bind(this)
  }
 
    calculaIMC(){
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    if(s.resultado < 18.5){
      s.info ='Abaixo do Peso'
    }
    else if (s.resultado < 24.9){
     s.info ='Peso Normal'
    }
    else if (s.resultado < 29.9){
     s.info ='Sobrepeso'
    }
    else if (s.resultado < 34.9) {
     s.info ='Obesidade grau I'
    }
    else if (s.resultado < 39.9) {
     s.info ='Obesidade grau II'
    }
    else if (s.resultado > 39.9) {
     s.info ='Obesidade grau III ou mórbida'
    }


    this.setState(s)
  }

  clear = () => {
    this.setState({
      peso: '',
      altura: '',
      resultado: 0.0,
      info: '-'
    })
  }

  render() {
     
     //Entradas

     return (
      <View style={styles.viewContainer}>
          <TextInput
          style={styles.textInput}
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          placeholder='ALTURA'
          keyboardType={'numeric'}
        />
          <TextInput
          style={styles.textInput}
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          placeholder='PESO'
          keyboardType={'numeric'}
        />
        <Separator/>
        <Button  
         onPress={this.calculaIMC}
         title='Calcula'
         color='green'
         
         />


        <Separator />

        <Button 
        onPress={this.clear}
        title='Limpa'
        color='red'
        />

        <Separator />
        
        <Text style={styles.input}>
         Seu IMC é {this.state.resultado.toFixed(2)} {this.state.info}
        </Text>
      </View>
    );
  }
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#71EC4C',
    alignItems: 'center',
    justifyContent: 'center',
},
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 20,
    
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 80,
    borderWidth: 5,
    borderColor: 'green',
    paddingLeft: 140,
    margin: 20,
    borderRadius: 20
  }
});



