 import React from "react";
    function Tailwind ({Tailwind}) {
    return( 
<div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
    )

}
export default ProductListn