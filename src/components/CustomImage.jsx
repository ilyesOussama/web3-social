import Image from "next/image";
import { useState, useEffect } from "react";

const CustomImage = (width, height, imageSrc) => {
  const [formatedImageUrl, setFormatedImageUrl] = useState();
  console.log(imageSrc);
  const imageUrl = imageSrc?.url;

  useEffect(() => {
    formatImageUrl(imageUrl);
  }, [formatedImageUrl]);

  function formatImageUrl(imageUrl) {
    let avatarUrl;
    if (imageUrl?.startsWith("ipfs://")) {
      let result = imageUrl.substring(7, imageUrl.length);
      avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`;
    } else {
      avatarUrl = imageUrl;
    }
    setFormatedImageUrl(avatarUrl);
  }

  console.log(formatedImageUrl);
  return (
    <div>
      {formatImageUrl ? (
        <Image width={width} height={height} src={formatedImageUrl} alt="alt" />
      ) : (
        <div>Laoding</div>
      )}
    </div>
  );
};

export default CustomImage;
