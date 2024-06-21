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
    <article
      className={`
      w-80 rounded-md bg-slate-100 text-slate-600
      ${className}
    `}
    >
      <div className="w-full h-44 overflow-hidden rounded-t-md">
        <Image
          src={media.url}
          alt={media.alt}
          width={media.width}
          height={media.height}
        />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <header className="flex flex-col gap-4">
          <Link href={`/blog/${slug}`}>
            <h2 className="font-bold text-xl hover:text-slate-900 transition-colors">
              {title}
            </h2>
          </Link>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4">
              {authors.map(({ id, name, photo }) => (
                <div key={id} className="flex flex-row gap-2 items-center">
                  {photo && (
                    <div className="w-8 h-8 rounded-full overflow-hidden relative">
                      <Image
                        src={photo.url}
                        alt={photo.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="100vw"
                      />
                    </div>
                  )}
                  <p className="font-medium text-sm text-teal-700">{name}</p>
                </div>
              ))}
            </div>
            <p>
              <time className="text-xs">{formatDateTime(publishedOn)}</time>
            </p>
          </div>
        </header>
        <RichText content={text} className="w-full text-sm" />
        <div className="flex flex-col gap-2">
          <Link href={`/blog/${slug}`}>
            <p className="font-semibold text-md text-teal-500 hover:text-teal-600 transition-colors">
              Read More
            </p>
          </Link>
          {media.attribution && (
            <p>
              <small>Photo by {media.attribution}</small>
            </p>
          )}
        </div>
      </div>
    </article>
  );
};
