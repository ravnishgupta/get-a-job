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

export const GET_SKILLS = gql `
  query getSkills {
      _id
      description
  }
`

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      availableNow
      hourlyRate
      gitHub
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
