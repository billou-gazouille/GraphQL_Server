
/*
======================================================
                An app to test test GraphQL
        Example of a super simplified Steam clone
======================================================
*/


const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

let { games, players, reviews, gameCreators } = require('./data');

const typeDefs = require('./schema');

const resolvers = {
    Query: {
        //game: (parent, args) => games.find(g => g.id === args.id),
        game: (parent, args) => games.find(g => g.title === args.title),
        review: (parent, args) => reviews.find(r => r.id === args.id),
    },
    Game: {
        title: (parent) => parent.title,
        creator: (parent) => 
            gameCreators.find(gc => parent.creator_id === gc.id),
    },
    GameCreator: {
        name: (parent) => parent.name,
        gamesPublished: (parent) => 
            games.filter(g => g.creator_id === parent.id),
    },
    Review: {
        content: (parent) => parent.content,
        player: (parent) => players.find(a => a.id === parent.player_id),
        game: (parent) => games.find(g => g.id === parent.game_id),
    },
    Player: {
        name: (parent) => parent.name,
        reviews: (parent) => 
            reviews.filter(r => r.player_id === parent.id),
    },
    Mutation: {
        deleteGame: (parent, args) => {
            games = games.filter(g => g.id !== args.id);
            return games;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});
  
startStandaloneServer(server, {
    listen: { port: 4000 }
})
.then(() => console.log('Server running'))
.catch(() => console.log('Failed to run server'));

/*
Example: 
If we want to get the games published by the creator of a given game:


    ----- query ----------------------------------------------------
    query ExampleQuery($title: String!) {
        game(title: $title){
            creator {
                name
                gamesPublished {
                    title
                }
            }
        }
    }
    ----- query ----------------------------------------------------



    ----- variables values -----------------------------------------
    {
        "title": "Final Fantasy 7 Remake",
    }
    ----- variables values -----------------------------------------



    ------ Result --------------------------------------------------
    {
        "data": {
            "game": {
                "creator": {
                    "name": "Epic Games",
                    "gamesPublished": [
                        {
                            "title": "Final Fantasy 7 Remake"
                        },
                        {
                            "title": "Pokemon Scarlet"
                        }
                    ]
                }
            }
        }
    }
    ------ Result --------------------------------------------------
*/