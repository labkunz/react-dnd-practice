import React from "react";
import { useDragLayer } from "react-dnd";
import { ItemTypes } from "../../Constants";
import Card from "../Card/Card.component";

//css物件, 原來還可以這樣用
const layerStyles = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0
};

//設定style
function getItemStyles (initialOffset, currentOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: "none"
        };
    }

    let { x, y } = currentOffset;
    //這裡沒有做出歪斜效果?
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform
    };
}

const CustomDragLayer = () => {
    console.log("CustomDragLayer test")

    const {
        itemType,
        isDragging,
        item,
        initialOffset,
        currentOffset
    } = useDragLayer(monitor => ({
        //這裡所使用的function應該都是useDragLayer中附帶的
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    }));

    function renderItem () {
        console.log(item);
        switch (itemType) {
            case ItemTypes.CARD:
                return <Card task={item.task} />;
            default:
                return null;
        }
    }

    //這裡的判斷式是用來確認元件是否要繼續進行的?
    if (!isDragging) {
        return null;
    }

    return (
        <div style={layerStyles}>
            <div style={getItemStyles(initialOffset, currentOffset)}>
                {renderItem()}
            </div>
        </div>
    );
};

export default CustomDragLayer;