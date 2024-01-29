import React from "react";
import Card from "../Card/Card.component";

import { useDrag } from "react-dnd";
import { ItemTypes } from "../../Constants";

const DraggableCard = props => {

  const [{}, dragRef] = useDrag({
    // 寫法似乎有更新
    // 舊寫法 => item: { type: ItemTypes.CARD, ...props }
    type: ItemTypes.CARD
  });

  return (
    <div ref={dragRef}>
      <Card task={props.task} />
    </div>
  );
};

export default DraggableCard;