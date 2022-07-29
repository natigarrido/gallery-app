import React from 'react';
import { useParams } from 'react-router-dom';

import './PictureDetails.scss';

import pictures from '../../pictures';

const PictureDetails = () => {
    const { id } = useParams();

    const currentPicture = pictures.filter((pic) => pic.id === id);

    return (
        <div>
            <img src={ currentPicture[0].image }/>
        </div>
    )
}

export default PictureDetails;