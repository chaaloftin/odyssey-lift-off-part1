const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query that returns a non-null list of non-null Tracks"
    tracksForHome: [Track!]!
  }

  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's author"
    author: Author!
    "The thumbnail that is displayed at the top track card or track page detail"
    thumbnail: String
    "The approximate length of a track (minutes)"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "The author's name"
    name: String!
    "URL to the authors photo"
    photo: String
  }
`;

module.exports = typeDefs;
