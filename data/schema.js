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

import {
    getTodo,
    getTodos,
    searchTodos,
    createTodo,
    updateTodo,
    removeTodo,
} from './database';

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

const todoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        _id: {
            type: GraphQLString,
            resolve: ({ _id }) => _id,
        },
        todo: {
            type: GraphQLString,
            resolve: ({ todo }) => todo,
        },
        completed: {
            type: GraphQLBoolean,
            resolve: ({ completed }) => completed
        }
    })
});

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        todo: {
            type: todoType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, { _id }) => getTodo(_id),
        },
        todos: {
            type: new GraphQLList(todoType),
            resolve: () => getTodos(),
        },
        searchTodos: {
            type: new GraphQLList(todoType),
            args: {
                pattern: { type: GraphQLString },
            },
            resolve: (_, { pattern }) => searchTodos(pattern),
        },
        greetings: {
            type: greetingsType,
            resolve: () => "",
        },
    })
});

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createTodo: {
            type: todoType,
            args: {
                todo: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, { todo }) => createTodo(todo),
        },
        updateTodo: {
            type: todoType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                todo: { type: new GraphQLNonNull(GraphQLString) },
                completed: { type: GraphQLBoolean },
            },
            resolve: (_, { _id, todo, completed }) =>
                updateTodo(_id, todo, completed),
        },
        removeTodo: {
            type: todoType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, { _id }) => removeTodo(_id),
        }
    })
});

export default new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
});