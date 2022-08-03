import React from 'react';
import { useParams } from 'react-router-dom';

import './PictureDetails.scss';

import pictures from '../../pictures';

const PictureDetails = () => {
    const { id } = useParams();

    const pic = pictures.filter((pic) => pic.id === id)[0];

    return (
        <div className="details">
            <div className="details-img-container">
                <img className="details--img" src={ pic.image }/>
            </div>
            <div>
                <p className="details--title">{pic.title}</p>
                <p>{pic.description}</p>
                <p>{
                    pic.tags.map((tag) => (
                        <span>{`#${tag} `}</span>
                    ))
                }</p>
                <p>{pic.measures}</p>
                <p>{pic.paper}</p>
            </div>
        </div>
    )
}

export default PictureDetails;