import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, Keyboard } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { resetResult, addition, substration, multiplication, division } from '../redux/mathReducer';

class Calculator extends Component {

  constructor() {
    super()
    this.state = {
      firstNumber: 0,
      secondNumber: 0
    }
  }

  render() {

    const { firstNumber, secondNumber } = this.state;

    return (
      <View style={styles.container}>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

          <CustomTextInput placeholder='0' value={this.state.firstNumber} onChangeText={text => {
            this.setState({
              firstNumber: Number.parseInt(text)
            })
          }} />

          <Text>{this.props.mathOperation}</Text>

          <CustomTextInput placeholder='0' value={this.state.secondNumber} onChangeText={text => {
            this.setState({
              secondNumber: Number.parseInt(text)
            })
          }} />

          <Text>=</Text>

          <Text>{this.props.result.toFixed(2)}</Text>
        </View>

        <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomButton title={'+'} buttonAction={() => {
            Keyboard.dismiss()
            this.props.performAddition(firstNumber, secondNumber)
          }} />

          <CustomButton title={'-'} buttonAction={() => {
            Keyboard.dismiss()
            this.props.performSubstration(firstNumber, secondNumber)
          }} />

          <CustomButton title={'X'} buttonAction={() => {
            Keyboard.dismiss()
            this.props.performMultiplication(firstNumber, secondNumber)
          }} />

          <CustomButton title={'/'} buttonAction={() => {
            Keyboard.dismiss()
            this.props.performDivision(firstNumber, secondNumber)
          }} />
        </View>

        <CustomButton title={'Reset'} buttonAction={() => {
          Keyboard.dismiss()
          this.setState({
            firstNumber: '',
            secondNumber: ''
          })          
          this.props.reset()
        }} />

      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    result: state.mathReducer.result,
    mathOperation: state.mathReducer.mathOperation,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    performAddition(firstNumber, secondNumber) {
      dispatch(addition(firstNumber, secondNumber))
    },
    performSubstration(firstNumber, secondNumber) {
      dispatch(substration(firstNumber, secondNumber))
    },
    performMultiplication(firstNumber, secondNumber) {
      dispatch(multiplication(firstNumber, secondNumber))
    },
    performDivision(firstNumber, secondNumber) {
      dispatch(division(firstNumber, secondNumber))
    },
    reset() {
      dispatch(resetResult())
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);