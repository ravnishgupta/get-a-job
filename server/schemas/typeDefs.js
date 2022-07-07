const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    email: String
    applications: String
    password: String
    availableNow: Boolean
    hourlyRate: Number
    github: String
}

type Projects {
    _id : ID
    description: String
    title: String
}

type Skills {
  _id : ID
  description: String
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
    addUser(email: String!, password: String!): Auth
    saveProject(description: String!, title: String!): Auth
  }
  
  `

module.exports = typeDefs;