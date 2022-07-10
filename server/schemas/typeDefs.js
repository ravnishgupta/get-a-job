const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    availableNow: Boolean!
    hourlyRate: Float!
    github: String!
    applications: [Projects]

}

input UserInput{
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  availableNow: Boolean!
  hourlyRate: Float!
  gitHub: String!
}

type Projects {
    _id : ID
    description: String!
    title: String!
    payPerHour: Float
    Skills: [Skills]
}

type Skills {
  _id : ID
  description: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(input: UserInput!): Auth
    saveProject(projectId: ID!): User
    deleteProject(projectId: ID!): User
  }
  
  `

module.exports = typeDefs;