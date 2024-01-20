module.exports = `#grapghql
    type Game{
        id: ID!
        title: String!
        creator: GameCreator!
    }
    type GameCreator{
        id: ID!
        name: String!
        gamesPublished: [Game!]
    }
    type Review{
        id: ID!
        rating: Int!
        content: String!
        player: Player!
        game: Game!
    }
    type Player{
        id: ID!
        name: String!
        reviews: [Review!]
    }
    type Query{
        games: [Game!]
        game(title: String): Game!
        gameCreator(id: ID!): [GameCreator!]
        review(id: ID!): Review!
    }
`;