const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Community{
        _id: ID
        communityname: String
        contactlists: [ContactLists]
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


    input ContactInput{
        firstname: String
        lastname: String
        phonenumber: String
    }
    type Contact{
        _id: ID
        firstname: String
        lastname: String
        phonenumber: String
    }
    type ContactLists{
        _id: ID
        contactListTitle: String
        contacts: [Contact]
        
    }





type Query{
    user: User
    #Community
    communities: [Community]
    # ContactList
    contactList: Community

}
type Mutation {
    # USER
    addUser(community: ID!, email: String! password: String!): Auth
    login(email: String!, password: String!): Auth
    #Community
    newCommunity(communityname: String!, contactlists:[ID]): Community
    # ContactList
    createNewContactList(contactListTitle: String!, contacts: [ContactInput]): ContactLists
    addPhoneNumberToContactList(contactLists: ID!, contacts:ContactInput): ContactLists
    
}
`;



module.exports = typeDefs;
