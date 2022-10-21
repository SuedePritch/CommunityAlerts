const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Community{
        communityname: String
    }
    type User {
    _id: ID
    community: Community
    email: String
    password: String
    }
    type Auth {
        token: ID!
        user: User
    }





type Query{
    user: User
    #Community
    communities: [Community]
}
type Mutation {
    # USER
    addUser(community: ID!, email: String! password: String!): Auth
    login(email: String!, password: String!): Auth
    #Community
    newCommunity(communityname: String!): Community
}
`;



module.exports = typeDefs;
