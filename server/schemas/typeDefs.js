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


    input PhoneListInput{
        firstname: String
        lastname: String
        phonenumber: String
    }
    type PhoneList{
        _id: ID
        firstname: String
        lastname: String
        phonenumber: String
    }
    type PhoneLists {
        phonelisttitle: String
        phonelist: [PhoneList]
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
    addNewPhoneList(community: ID!, phonelisttitle: String!): Community
    addNewPhoneNumber(community: ID!, phonelists: String, phonelist: PhoneListInput): Community
}
`;



module.exports = typeDefs;
