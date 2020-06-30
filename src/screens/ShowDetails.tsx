import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API } from '../api-client';
import { FeedbackMessage, Main } from '../components/Common';
import { ShowDetailsMeta, ShowDetailsPoster, ShowDetailsSummary } from '../components/ShowDetails';
import { IShowDetails } from '../models';
import styled from '../styled';

export const ShowDetailsLayout = styled.div(({ theme }) => ({
  '& > .show-summary-wrapper': {},

  '& > .show-poster-wrapper': {
    float: 'left',
    marginBottom: 10,
    marginRight: 20,

    '& > img ': {
      width: '100%',
      maxWidth: 100,
    },
  },

  '& > .show-meta-wrapper': {
    width: '100%',
  },

  [theme.breakpoints.tabletAndHigher]: {
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',

    flexDirection: 'row',
    flexWrap: 'wrap',

    '& > .show-summary-wrapper': {
      width: 'calc(70% - 20px)',
      marginLeft: 20,
    },

    '& > .show-poster-wrapper': {
      float: 'none',
      maxWidth: '30%',
      margin: 0,

      '& > img ': {
        width: '100%',
        maxWidth: 'none',
      },
    },

    '& > .show-meta-wrapper': {
      width: '100%',
    },
  },

  [theme.breakpoints.desktopAndHigher]: {
    '& > .show-summary-wrapper': {
      marginLeft: 20,
      width: '50%',
    },

    '& > .show-poster-wrapper': {
      maxWidth: 240,
    },

    '& > .show-meta-wrapper': {
      width: '20%',
      marginLeft: 20,
    },
  },
}));

export const ShowDetails = () => {
  const { showId } = useParams();
  const [showDetails, setShowDetails] = useState<IShowDetails>();

  useEffect(() => {
    async function fetchShowDetails() {
      try {
        const response = await API<IShowDetails>(new Request(`http://api.tvmaze.com/shows/${showId}`));

        setShowDetails(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('error', error);
      }
    }

    fetchShowDetails();
  }, [showId]);

  return (
    <Main>
      {showDetails ? (
        <>
          <h2>{showDetails.name}</h2>
          <ShowDetailsLayout>
            <div className="show-poster-wrapper">
              <ShowDetailsPoster alt={showDetails.name} src={showDetails.image?.medium} />
            </div>
            <div className="show-summary-wrapper">
              <ShowDetailsSummary dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
            </div>
            <div className="show-meta-wrapper">
              <ShowDetailsMeta show={showDetails} />
            </div>
          </ShowDetailsLayout>
        </>
      ) : (
        <FeedbackMessage>
          No show found matching the id. Try <Link to="/shows">searching for it</Link> instead.
        </FeedbackMessage>
      )}
    </Main>
  );
};
