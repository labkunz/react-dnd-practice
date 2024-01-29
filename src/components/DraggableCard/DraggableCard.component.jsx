import React, { useEffect } from "react";
import Card from "../Card/Card.component";

import { useDrag } from "react-dnd";
import { ItemTypes } from "../../Constants";

import { getEmptyImage } from "react-dnd-html5-backend";

const DraggableCard = props => {

  console.log(props);
  const [{}, dragRef, preview] = useDrag({
    // 寫法似乎有更新
    // 舊寫法 => item: { type: ItemTypes.CARD, ...props }
    type: ItemTypes.CARD,  //藉此回頭過來確認useDrag的變數是否有設定好
    item: { ...props }

    //目前已知type屬性是要設在該物件第一層
    //其餘相關設定變數可另外設置屬性存放
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <div ref={dragRef}>
      <Card task={props.task} />
    </div>
  );
};

export default DraggableCard;