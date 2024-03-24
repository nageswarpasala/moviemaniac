import React from "react";

const FilterGroup = ({ minRating, onRatingClick, filters }) => {
  return (
    <ul className="align_center movie_filter">
      {filters.map((filter) => (
        <li
          key={filter}
          className={`movie_filter_item ${
            minRating === filter ? "active" : ""
          }`}
          onClick={() => onRatingClick(filter)}
        >
          {`${filter}+ Star`}
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
