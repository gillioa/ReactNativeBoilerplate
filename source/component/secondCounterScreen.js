import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../store/reducers/counterReducer';

import styles from './styles/mainStyle';

class SecondCounterScreen extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{this.props.counter}</Text>
              <Button title="Increment" onPress={this.props.increment} />
              <Button title="Decrement" onPress={this.props.decrement} />
              <Button
                title="Increment By Amount"
                onPress={() => this.props.incrementByAmount(5)}
              />
              <Button
                title="Increment Async"
                onPress={() => this.props.incrementAsync(5)}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: selectCount(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
    incrementAsync: (amount) => dispatch(incrementAsync(amount)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SecondCounterScreen);
