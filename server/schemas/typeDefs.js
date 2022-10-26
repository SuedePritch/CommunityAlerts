const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Community{
        _id: ID
        communityname: String
        recipientlist: [Recipients]
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


    input RecipientInput{
        firstname: String
        lastname: String
        phonenumber: String
    }
    type Recipients{
        _id: ID!
        recipientTitle: String
        firstname: String
        lastname: String
        phonenumber: String
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
    newCommunity(communityname: String!, recipientlist:[ID]): Community
    createNewRecipientList(recipientTitle: String!, recipients: RecipientInput): Recipients
    # newRecipients(community: ID!, recipients: PhonelistInput): Community
}
`;



module.exports = typeDefs;
