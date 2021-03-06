import React, { Component } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class About extends Component {
  static navigationOptions = {
    title: 'About',
    headerStyle: {
      backgroundColor: '#36485f'
    },
    headerTintColor: 'white'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.imageview}><Image style={styles.image} source={require('../images/rains.jpg')}/></View>
        <View style={styles.overlay}>
        <ScrollView>
          <View style={styles.urlform}>
            <Text style={styles.slowyour}>slow your</Text>
            <Text style={styles.title}>S C R O L L</Text>
            <Text style={styles.aboutText}>Slow Your Screen is a Dev Bootcamp final project created by Eric Chiang, Matthew Black, Charlie Weber, and Michelle Di Biase.</Text>
            <Text/>
            <Text style={styles.aboutText}>The original background photo is by</Text>
            <Text/>
            <Text style={styles.linkText} onPress={() => Linking.openURL('https://unsplash.com/photos/Kwi60PbAM9I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText')}>Gabriele Diwald</Text>
             <Text/>
             <Text style={styles.linkText} onPress={() => Linking.openURL('https://unsplash.com')}>on Unsplash</Text>
          </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutText: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30,
  },
  image: {
    flex: 1,
  },
  imageview: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  linkText: {
    color: '#87cefa',
    fontSize: 20,
  },
  overlay:{
    margin: 0,
    padding: 30,
    backgroundColor: 'rgba(54, 72, 95, 0.7)',
    borderRadius: 10,
  },
  slowyour: {
    // textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontWeight: '400'
    // fontWeight: 'bold'
  },
  title: {
    textAlign: 'center',
    fontSize: 44,
    color: '#FCA658',
    fontWeight: '300',
    paddingBottom: 10,
    marginBottom: 20,
    fontFamily: 'Montserrat',
    lineHeight: 44,
  },
  urlform: {
    alignSelf: 'stretch',
  },
});
