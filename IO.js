import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text, View, AsyncStorage } from 'react-native';

export default class IO extends React.Component {

    static input = (value) => {
        console.log(value);
        try{
        //     key = Math.random();
            AsyncStorage.setItem(1, JSON.stringify(value));
            return 1;
        }
        catch(error){
            return -1;
        }
    };

    static edit = (key) => {
        try{
            const value = AsyncStorage.getItem(key);
            value = JSON.parse(value);
            console.log(value);
            value = this.props.navigation.navigate('add', value);
            AsyncStorage.mergeItem(key, JSON.stringify(this.value));
            return 1;
        }
        catch(error){
            return -1;
        }
    };

    static delete = (key) => {
        try{
            AsyncStorage.removeItem(key);
            return 1;
        }
        catch(error){
            return -1;
        }
    };

    static tag = (keys) => {
        try{
            AsyncStorage.removeItem(key);
            return 1;
        }
        catch(error){
            return -1;
        }
    };
}