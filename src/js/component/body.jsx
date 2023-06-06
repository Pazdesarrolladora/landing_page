import React from "react";
import PropTypes from "prop-types";
import Card from "./card.jsx";

const contentCard = [
  {
    cardLink: "https://picsum.photos/id/237/500/325",
    cardTitle: "Black Dog",
    cardDescription:
      "In hac habitasse platea dictumst. In tempus felis nec justo semper consequat. Duis varius nisl sem. Etiam a suscipit nunc. Mauris quis felis bibendum",
    cardButtonDesc: "Aprietame",
  },
  {
    cardLink: "https://picsum.photos/id/238/500/325",
    cardTitle: "Gray City",
    cardDescription:
      "Pellentesque sollicitudin rhoncus elementum. Duis varius nisl sem. Etiam a suscipit nunc. Integer condimentum accumsan condimentum.",
    cardButtonDesc: "Aprietame x1",
  },
  {
    cardLink: "https://picsum.photos/id/239/500/325",
    cardTitle: "Dandelion",
    cardDescription:
      "Integer luctus, libero vel pharetra efficitur, orci ipsum tristique urna, in finibus lectus justo quis eros. Integer convallis leo id sem faucibus,",
    cardButtonDesc: "Aprietame x2",
  },
  {
    cardLink: "https://picsum.photos/id/241/500/325",
    cardTitle: "Gray Hill",
    cardDescription:
      "Phasellus venenatis posuere diam nec tristique. Mauris quis felis bibendum, malesuada lorem tristique, varius metus. Pellentesque ac congue eros.",
    cardButtonDesc: "Aprietame x3",
  },
];

const Body = (props) => {
  return (
    <>
      <div className="container-fluid ">
        <div className=" tittle jumbotron p-5">
          <h1 className="display-4">{props.title}</h1>
          <p>{props.description}</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              {props.buttonLabel}
            </a>
          </p>
        </div>
        <div className="row">
          {contentCard.map((content, index) => {
            return (
              <Card
                key={index}
                cardLink={content.cardLink}
                cardTitle={content.cardTitle}
                cardDescription={content.cardDescription}
                cardButtonDesc={content.cardButtonDesc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

Body.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Body;
