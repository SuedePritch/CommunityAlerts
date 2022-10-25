const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Community{
        _id: ID
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


    input PhonelistInput{
        firstname: String
        lastname: String
        phonenumber: String
    }
    type Phonelist{
        _id: ID
        firstname: String
        lastname: String
        phonenumber: String
    }
    type Recipients {
        _id: ID!
        recipients: [Phonelist]
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
    newRecipients(community: ID!, recipients: PhonelistInput): Community
}
`;



module.exports = typeDefs;
