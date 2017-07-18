/**
 * Created by boyce on 2017/7/18.
 */
import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'
import UserQueries from './user/queries'
import UserMutations from './user/mutations'
export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: UserQueries
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: UserMutations
  })
})