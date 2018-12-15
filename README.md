#  react-native-text-collapse

react-native-text-collapse is a light animated React Native Instagram clone text collapser.

![](https://majid-amiri.github.io/images/rntc-sc1.gif)

## Installation

Install react-native-text-collapse using the following command:

``` npm install react-native-text-collapse --save```

## Usage

All you need to do is to import Native-Dates into your react native component and easily use it. Example:
```
import React, {Component} from 'react';  
import {View, StyleSheet} from "react-native";  
import TextCollapse from 'react-native-text-collapse';  
  
export default class App extends Component {
    render() {  
        return (
            <View style={styles.main}>
                <TextCollapse text={"Hi There!"}/>
            </View>
        );
    }  
}  
  
const styles = StyleSheet.create({  
    main: {  
	    flex:1,  
	    width: '100%',  
	    height: '100%',  
	}  
})
```

## Props

|Props name|Desciption|Values|Default value|
|--------------------|--------------------|------------------|-----------------|
|text|The text you want to collapse|(String)|'Lorem Ipsum...'|
|initialTextLength|Number of characters that is show in collapsed mode|(Number)|70
|containerStyle|The text container style|(Style Object)|null
|textStyle|The text style|(Style Object)|null
|showMoreTextStyle|'more' and 'less' words style|(Style Object)|```{color: '#858585',paddingStart: 5}```|
|collapseDuration|Duration of collapse|(Number)|250|
|collapseType|Animation type of collapse|'spring','easeInEaseOut','linear'|'spring'|
|springDamping|Damping amount when collapse type is 'spring'|(Number)|0.7|
