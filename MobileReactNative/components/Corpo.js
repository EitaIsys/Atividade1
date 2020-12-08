import React, { Component } from 'react';
import { AppRegistry, Image} from 'react-native';

export default class Corpo extends Component {
  render() {
    let pic = {
      uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FL1J6oAgiRz0%2Fmaxresdefault.jpg&f=1&nofb=1'
    };
    return (
      <Image source={pic} style={{width:193, height:110}}/>
    )
  }
}
AppRegistry.registerComponent('ProjetoUfc', () => Corpo);