const graphql = require("graphql");
// const _ = require("lodash");
const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
} = graphql;

// const users = [
//   {
//     id: "1",
//     firstName: "Tom",
//     lastName: "Hardy",
//     age: 20,
//     married: false,
//     gender: "Male",
//   },
//   {
//     id: "2",
//     firstName: "Tim",
//     lastName: "Jo",
//     age: 28,
//     married: true,
//     gender: "Male",
//   },
//   {
//     id: "3",
//     firstName: "Sam",
//     lastName: "Cook",
//     age: 42,
//     married: false,
//     gender: "Female",
//   },
// ];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLInt },
    married: { type: GraphQLBoolean },
    gender: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then((resp) => resp.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
