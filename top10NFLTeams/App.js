
import React, {Component} from 'react';
import { StyleSheet, Button } from 'react-native';
//import ApolloClient which is a default export to define your client for your ApolloProvider which will connect to Graphql server.
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
//import your ApolloProvider to call to your graphql server
import { ApolloProvider } from 'react-apollo';
//import your routes or your Drawer navigator.
import DrawerNavigator from './DrawerNavigator';
//import the icons you need
// import Icon from 'react-native-vector-icons/FontAwesome';



//Define your client using ApolloClient
const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:7000/graphql'}),
  cache: new InMemoryCache()
});



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        {/* <Icon name="rocket" size={30} color="#000" /> */}
        <DrawerNavigator style={{position: 'absolute', top: 0}}/>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
