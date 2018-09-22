import React, { PureComponent } from 'react';
//import your playercard component
import PlayerCard from './PlayerCard';
import { ScrollView, Text, StyleSheet, Platform } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

//Define the query that will be responsible for retrieving data.
const query = gql`
    query {
        # Can alias your graphql query so when you get the data you recognize it.
        bestPlayers: teams {
            id
            teamName
            bestPlayer
        }
    }
`;

//Now define your component
export default class ListOfBestPlayers extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Best Players'
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={[styles.text, styles.header]}>Best Players on the Best Teams</Text>
                <Query query={query}>
                    {/* With the query component, for it's props.children will be a callback*/}
                    {(response, error) => {
                        console.log('response-----------', response);
                        console.log('error-------', error);
                        if(error) return <Text style={[styles.error, styles.errorText]}>{JSON.stringify(error)}</Text>
                        if(response) return response.data.bestPlayers ? response.data.bestPlayers.map(player => (
                            <PlayerCard key={player.id} {...player} />
                        )): (<Text style={[styles.text, styles.loadingText]}>Loading......</Text>); 
                    }}
                </Query>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text: {
        fontSize: 24,
        fontWeight: '800',
        shadowOpacity: 0,
        shadowColor: '#fff',
    },
    loadingText: {
        color: 'orange',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    header: {
        fontSize: 22,
        fontFamily: Platform.select({
            ios: 'AmericanTypewriter-Bold',
            android: 'monospace'
        })
    }
})