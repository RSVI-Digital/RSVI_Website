import React from "react";
import Style from "./style.module.css";
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import CardContentFront from "./CardContentFront";
import CardContentBack from "./CardContentBack";

function FlipCard(params) {

  return (<Flippy flipOnHover={true} flipOnClick={true} flipDirection={params.dir} className={Style.card}>
    <FrontSide animationDuration="300">
      <CardContentFront image={params.img} heading={params.head}/>
    </FrontSide>
    <BackSide animationDuration="300"><CardContentBack about={params.info}/></BackSide>
  </Flippy>)
}

export default FlipCard;
