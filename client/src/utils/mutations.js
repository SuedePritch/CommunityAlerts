import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            password
            email
        }
    }
    }
`;

export const ADD_USER = gql`
    mutation addUser($community: ID!, $email: String!, $password: String!) {
        addUser(community: $community, email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const ADD_CONTACT = gql`
mutation addPhoneNumberToContactList($contactLists: ID!, $contacts: ContactInput) {
  addPhoneNumberToContactList(contactLists: $contactLists, contacts: $contacts) {
    _id
    contactListTitle
    contacts {
      _id
      firstname
      lastname
      phonenumber
    }
  }
}

`
