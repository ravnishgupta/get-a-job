import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($input: UserInput! ) {
    addUser(input: $input) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const WITHDRAW = gql`
  mutation deleteProject($projectId: ID! ) {
    deleteProject(projectId: $projectId) {
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
        skills {
          description
        }
      }
    }
  }
`;


export const SAVE_PROJECT = gql`
  mutation saveProject($projectId: ID! ) {
    saveProject(projectId: $projectId) {
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
        skills {
          description
        }
      }
    }
  }
`;