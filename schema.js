module.exports = `#grapghql
    type Game{
        id: ID!
        title: String!
        noice: String
    }
    type Review{
        id: ID!
        trating: Int!
    }
    type Author{
        id: ID!
        name: String!
    }
    type Query{
        hello: String!
        games: [Game!]
        game(id: ID!): Game!
    }
`;