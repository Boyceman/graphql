/**
 * Created by boyce on 2017/7/18.
 */
import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from 'graphql'
import { UserModel, UserType, UserInput } from './models'

const User = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  // method that forms request and returns data
  resolve (root, params, options) {
    return UserModel
      .findById(params.id)
      .exec()  // return JSON
  }
}

const Users = {
  type: new GraphQLList(UserType),
  args: {},
  resolve (root, params, options) {
    return UserModel
      .find()
      .exec()
  }
}
export default {
  User,
  Users,
}