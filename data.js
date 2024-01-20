let games = [
    {id: '1', title: 'Zelda, Tears of the Kingdom', creator_id: '1', platform: ['Switch']},
    {id: '2', title: 'Final Fantasy 7 Remake', creator_id: '2', platform: ['PS5', 'Xbox']},
    {id: '3', title: 'Elden Ring', creator_id: '1', platform: ['PS5', 'Xbox', 'PC']},
    {id: '4', title: 'Mario Kart', creator_id: '3', platform: ['Switch']},
    {id: '5', title: 'Pokemon Scarlet', creator_id: '2', platform: ['PS5', 'Xbox', 'PC']},
  ]

  let gameCreators = [
    {id: '1', name: 'Ubisoft'},
    {id: '2', name: 'Epic Games'},
    {id: '3', name: 'Rockstar'},
  ]
  
  let players = [
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'yoshi', verified: false},
    {id: '3', name: 'peach', verified: true},
  ]
  
  let reviews = [
    {id: '1', rating: 9, content: 'lorem ipsum', player_id: '1', game_id: '2'},
    {id: '2', rating: 10, content: 'lorem ipsum', player_id: '2', game_id: '1'},
    {id: '3', rating: 7, content: 'lorem ipsum', player_id: '3', game_id: '3'},
    {id: '4', rating: 5, content: 'lorem ipsum', player_id: '2', game_id: '4'},
    {id: '5', rating: 8, content: 'lorem ipsum', player_id: '2', game_id: '5'},
    {id: '6', rating: 7, content: 'lorem ipsum', player_id: '1', game_id: '2'},
    {id: '7', rating: 10, content: 'lorem ipsum', player_id: '3', game_id: '1'},
  ]
  
  module.exports = { games, gameCreators, players, reviews };