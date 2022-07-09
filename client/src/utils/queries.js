import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query projects($username: String) {
    projects(username: $username) {
      _id
      description
      title
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      availableNow
      hourlyRate
      github
      applications {
        _id
        description
        title
        payPerHour
        Skills
      }
    }
  }
`;
