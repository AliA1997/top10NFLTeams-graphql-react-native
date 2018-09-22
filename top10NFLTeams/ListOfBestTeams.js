import React, {PureComponent} from 'react';
import { ScrollView, Text, StyleSheet, Platform } from 'react-native';
import TeamCard from './TeamCard';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const query = gql`
query {
    teams {
        id
        teamName
        city
        superBowls
    }
}
`

class ListOfBestTeams extends PureComponent {
    //Define your navgation oprions for your drawer
    static navigationOptions = {
        drawerLabel: 'Best Teams'
    }
    render() {
        return (
            <ScrollView>
                <Text style={[styles.text, styles.header]}>List of Best Teams</Text>
                <Query query={query}>
                    {(response, error) => {
                        {/*If there is an error return the error text else return the teams mapped over.*/}
                        if(error) return <Text style={[styles.text, styles.error]}>{error}</Text>
                        if(response) return response.data.teams ? 
                        response.data.teams.map(team => <TeamCard key={team.id} {...team} />) 
                        : (<Text style={[styles.text, styles.loadingText]}>Loading......</Text>)
                    }}
                </Query>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: '#000',
        fontWeight: '500',
        padding: 30
    },
    error: {
        color: 'red'
    },
    loadingText: {
        color: 'orange'
    },
    header: {
        fontSize: 24,
        paddingTop: 20,
        fontFamily: Platform.select({
            ios: 'AmericanTypewriter-Bold',
            android: 'monospace'
        })
    }
})

export default ListOfBestTeams;