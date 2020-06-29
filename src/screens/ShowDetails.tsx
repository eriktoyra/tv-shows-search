import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../api-client';
import { IShowDetails } from '../models';

export const ShowDetails = () => {
  const { showId } = useParams();
  const [showDetails, setShowDetails] = useState<IShowDetails>();

  useEffect(() => {
    async function fetchShowDetails() {
      try {
        const response = await API<IShowDetails>(new Request(`http://api.tvmaze.com/shows/${showId}`));

        setShowDetails(response.data);
      } catch (error) {
        console.error('error', error);
      }
    }

    fetchShowDetails();
  }, [showId]);

  return (
    <>
      <h1>SeriesDetails</h1>
      {showDetails ? (
        <>
          <h2>{showDetails.name}</h2>
          <img src={showDetails.image?.medium} alt={`Poster: ${showDetails.name}`} />
        </>
      ) : (
        <p>No show details to show...</p>
      )}
    </>
  );
};
