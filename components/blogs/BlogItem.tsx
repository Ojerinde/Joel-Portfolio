import Image from "next/image";
import Link from "next/link";
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
        <Link href={docUrl}>
          View <span></span>
        </Link>
      </div>
      <div className="blogs__item--right">
        {/* <figure> */}
        <figure>
          <Image src={imgUrl} alt={name} width={320} height={150} />
        </figure>
        {/* </figure> */}
      </div>
    </div>
  );
};
export default BlogItem;
