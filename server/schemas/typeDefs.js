const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    availableNow: Boolean
    hourlyRate: String
    github: String
    applications: [Projects]
    about: String
}

input UserInput{
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  availableNow: Boolean!
  hourlyRate: String!
  gitHub: String!
  about: String
}

type Skills {
  _id : ID
  description: String
}


type Projects {
    _id : ID
    description: String
    title: String 
    payPerHour: Float
    skills: [Skills]
    startDate: String
    endDate: String
}


type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    projects: [Projects]
    getSkills: [Skills]
  }



  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(input: UserInput): Auth
    saveProject(projectId: ID!): User
    deleteProject(projectId: ID!): User
  }
  
  `

module.exports = typeDefs;