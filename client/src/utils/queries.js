import { gql } from '@apollo/client';

export const GET_ME = gql`
query user {
user {
    email
    }
}
`;
export const GET_COMMUNITIES = gql`
query communities{
communities {
    _id
    communityname
  }
}
`