import React from "react";

const Rating = (props) => {
  const { rating, numReviews } = props;
  let mRating = Math.floor(rating);
  let fRating = rating - mRating;
  let arrRating = [];
  for (let r = 1; r <= mRating; r++) {
    arrRating.push(1);
  }
  arrRating.push(fRating);
  if (arrRating.length < 5) {
    let remainLength = 5 - arrRating.length;
    for (let r = 1; r <= remainLength; r++) {
      arrRating.push(0);
    }
  }
  return (
    <div className="rating">
      {arrRating &&
        arrRating.map((ratingItem, index) => (
          <span key={index}>
            <i
              className={
                ratingItem === 1
                  ? "fa fa-star"
                  : ratingItem >= 0.5
                  ? "fa fa-star-half-o"
                  : "fa fa-star-o"
              }
            ></i>
          </span>
        ))}

      <span>{numReviews + " Reviews"}</span>
    </div>
  );
};

export default Rating;
