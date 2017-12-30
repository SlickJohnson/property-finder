'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class SearchResults extends Component {
  keyExtractor = (item, index) => index;

  renderItem = ({item}) => {
    return (
      <TouchableHighlight underlayColor="#dddddd">
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.listings}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    )
  }
}