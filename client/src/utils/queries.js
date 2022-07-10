import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`{
 projects {
      _id
      description
      title
      payPerHour
      skills{
        _id
        description
      }
      startDate
      endDate
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
      gitHub
      applications {
        _id
        description
        title
        payPerHour
        skills {
          description
        }
        startDate
        endDate
      }
    }
  }
`;
