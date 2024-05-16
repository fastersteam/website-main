import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Media } from "../../../payload-types";
import { formatDateTime } from "../../_utilities/formatDateTime";
import { RichText } from "../RichText";

type Props = {
  media: Media;
  title: string;
  authors: {
    id: string;
    name: string;
    photo?: Media;
  }[];
  publishedOn: string;
  text: {
    [k: string]: unknown;
  }[];
  slug: string;
  className?: string;
};

export const BlogCard: React.FC<Props> = (props) => {
  const { title, authors, media, publishedOn, text, slug, className } = props;

  return (
    <article className={className}>
      <Image src={media.url} alt={media.alt} width={media.width} height={media.height} />
      <header>
        <Link href={`/blog/${slug}`}>
          <h1>{title}</h1>
        </Link>
        <div>
          {authors.map(({ id, name, photo }) => (
            <div key={id} className="">
              {photo && <Image src={photo.url} alt={photo.alt} width="40" height="40" />}
              <p>{name}</p>
            </div>
          ))}
        </div>
        <p>
          <time>{formatDateTime(publishedOn)}</time>
        </p>
      </header>
      <div>
        <RichText content={text} />
        <Link href={`/blog/${slug}`}>
          <p>Read More</p>
        </Link>        
      </div>
      {media.attribution && (
        <p>
          <small>{media.attribution}</small>
        </p>
      )}      
    </article>
  );
};
