import Image from "next/image";
import React from "react";
import { BlogObj } from "./BlogsBank";
const BlogItem: React.FC<BlogObj> = ({
  id,
  name,
  docUrl,
  stacks,
  imgUrl,
  description,
}) => {
  return (
    <div className="blogs__item">
      <div className="blogs__item--left">
        <h1>Featured Blog</h1>
        <h2>{name}</h2>
        <p>{description?.slice(0, 150)}...</p>
      </div>
      <div className="blogs__item--right">
        {/* <figure> */}
        <Image src={imgUrl} alt={name} width={318} height={160} />
        {/* </figure> */}
      </div>
    </div>
  );
};
export default BlogItem;
