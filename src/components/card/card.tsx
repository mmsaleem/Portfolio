import Image from "next/image";

import "./card.scss";

const Card = (props) => {
  return (
    <div className="card wow fadeInUP">
      <div className="card-wrapper">
        <div
          className="card-front"
          style={{
            position: "relative",
          }}
        >
          <Image src={props.img.src} alt={props.img.alt} fill />
        </div>
        <div className="card-back">
          <div className="card-back-wrapper">
            <a href={props.link} target="_blank">
              <h5> {props.name} </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
