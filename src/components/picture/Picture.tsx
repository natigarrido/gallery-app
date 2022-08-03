import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Picture.scss';

interface IProps {
    id: string,
    url: string
}

const Picture = ({ id, url }: IProps) => {
    const navigate = useNavigate();
    const [isOver, setIsOver] = useState(false);

    const handleMouseOver = () => {
        setIsOver(true);
    }

    const handleMouseLeave = () => {
        setIsOver(false);
    }

    const handleClick = () => {
        navigate(`${id}`);
    }

    return (
        <div 
            className="picture" 
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}>
            <img 
                className={isOver ? 'picture--bigger': 'picture--regular'} 
                src={url} />
        </div>
    )
}

export default Picture;