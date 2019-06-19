import React from 'react';
import { initialReviews } from './data.js';

function Reviewer(props) {
  const { reviewer } = props;
  const reviews = initialReviews.filter(
    (review) => review.reviewerId === reviewer.id
  );
  return (
    <>
      <h1>{reviewer.name}</h1>
      <ul>
        {reviews.map((review) => (
          <li>{review.content}</li>
        ))}
      </ul>
    </>
  );
}

export default Reviewer;
