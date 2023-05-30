import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="offset-xl-0 offset-lg-0 offset-md-0 offset-sm-0 offset-2 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8">
            <div className="card" style={{ "width": " 18rem" }}>
                <img src={props.cardLink} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardDescription}</p>
                    <a href="#" className="btn btn-primary">{props.cardButtonDesc}</a>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardLink: PropTypes.string,
    cardTitle: PropTypes.string,
    cardDescription: PropTypes.string,
    cardButtonDesc: PropTypes.string
}

export default Card;