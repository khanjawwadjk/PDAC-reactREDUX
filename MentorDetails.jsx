import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { mentSelector } from "../State/Selector/mentSelector";

export const MentorsDetails = () => {
  const selector = useSelector(mentSelector);
  const [selectdata, setSelectData] = useState(selector);
  console.log(selector);

  return (
    <div>
      {selectdata.map((item) => {
        return (
          <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Img src={item.img1}></Card.Img>
            <Card.Text>{item.age}</Card.Text>
            <Card.Text>{item.mob}</Card.Text>
            <Card.Text>{item.add}</Card.Text>
          </Card>
        );
      })}
    </div>
  );
};
