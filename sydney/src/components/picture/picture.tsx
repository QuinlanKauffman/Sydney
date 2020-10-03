import React from 'react';
import { Photo } from '../../interfaces/photo';


export const Picture: React.FC<Photo> = (photo) => {
    return (
        <div className="m-3 text-center">
            <img className="rounded mx-auto d-block" 
                src={photo.url}
                alt={"Loading"} 
                height={photo.height} 
                width={photo.width}/>
            {photo.caption}
        </div>
    )
}
