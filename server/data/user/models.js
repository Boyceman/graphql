/**
 * Created by boyce on 2017/7/18.
 */
import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql'
import mongoose from 'mongoose'
const schema = new mongoose.Schema({
  firstName: { type: String, },
  lastName: { type: String, }
})
// define User collection and connect schema to it
export const UserModel = mongoose.model('User', schema)

// type for queries
export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  }
})

// type for mutations
export const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  }
})