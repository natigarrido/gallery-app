import React from 'react';
import './List.scss';

import Picture from '../picture/Picture';
import { IPicture } from '../../models/IPicture';
import pictures from '../../pictures';


const List = () => {
    const listOfPictures: IPicture[] = pictures;

    return (
        <div className="list">
            {
                listOfPictures.map((picture) => (
                    <Picture key={picture.id} id={picture.id} url={picture.image}/>
                ))
            }
        </div>
    )
}

export default List;