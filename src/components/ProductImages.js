import React from 'react';

export default function ProductImages({images}) {

    let imageMarkup = images.map(im => {
        let {url, color, _id} = im;
        return (
            <div style={{flex: 1}} key={_id}>
                <p>Color: {color && color.color_name}</p>
                <img src={url} alt={'product_image'} width={100} />
            </div>
        );
    });
    return (
        <div style={{display: 'flex'}}>
            {imageMarkup}
        </div>
    );
}