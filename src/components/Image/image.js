import React from 'react'
import classes from './image.module.css';

const Image = ({ avatar, alt }) => {

    const ShowName = () => {
        // for when no avatar
        const fullName = alt.split(" ");
        const shortName = fullName[0].substring(0, 1) + fullName[1].substring(0, 1);
        return shortName;
    };

    return (
        <>
            {avatar ? (
                <img className={classes.img} src={avatar} alt={alt} />
            ) : (
                <div className={classes.noAvatar}>
                    <span className={classes.noAvatar_span}>{ShowName()}</span>
                </div>
            )}
        </>
    )
}

export default Image
