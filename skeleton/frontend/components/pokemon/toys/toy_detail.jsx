import React from 'react';

const ToyDetail = (props) => {
  return (
    <ul>
      <li>Name: {props.toy.name}</li>
      <li>Happiness: {props.toy.happiness}</li>
      <li>Price: {props.toy.price}</li>
    </ul>
  );
};

export default ToyDetail;
