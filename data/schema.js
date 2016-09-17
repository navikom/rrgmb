import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLID
} from 'graphql';


const greetingsType = new GraphQLObjectType({
    name: 'Greetings',
    fields: () => ({
        hello: {
            type: GraphQLString,
            args: {
                message: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, { message }) {
                return `received: ${message}`;
            }
        }
    })
});


const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        greetings: {
            type: greetingsType,
            resolve: () => "",
        },
    })
});


export default new GraphQLSchema({
    query: queryType
});