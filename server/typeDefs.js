const { gql } = require('apollo-server');
//Define your typeDefs
export const typeDefs = gql`
    type Team {
        id: String
        teamName: String!
        city: String!
        superBowls: Int!
        bestPlayer: String!
    }
    type Query {
        helloString: String
        teams: [Team]
        team(name: String!): Team
    }
    schema {
        query: Query
    }
`;