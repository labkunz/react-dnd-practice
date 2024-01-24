import React from "react";
import Card from "../Card/Card.component";

const DraggableCard = props => {
  return (
    <div>
      <Card task={props.task} />
    </div>
  );
};

export default DraggableCard;