import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import { QueryResult } from "../components";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  let allTrackCards = [];

  if (data && data.tracksForHome) {
    console.log("not empty");
    allTrackCards = data.tracksForHome.map((track) => (
      <TrackCard key={track.id} track={track} />
    ));
  }

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {allTrackCards}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
