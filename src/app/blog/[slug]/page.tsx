import { Fragment } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import qs from "qs";

import type { Media, Post } from "../../../payload-types";
import { BlogCard } from "../../_components/BlogCard";
import { Gutter } from "../../_components/Gutter";
import { RichText } from "../../_components/RichText";
import { formatDateTime } from "../../_utilities/formatDateTime";
import { formatList } from "../../_utilities/formatList";

export const dynamic = "force-dynamic";

export default async function Post({ params: { slug } }) {
  let post: Post | null = null;

  const stringifiedQuery = qs.stringify(
    {
      where: {
        slug: {
          equals: slug,
        },
      },
    },
    { addQueryPrefix: true }
  );

  try {
    const docs = await fetch(
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts${stringifiedQuery}`
    ).then((res) => res.json().then((data) => data.docs));
    if (docs.length > 0) {
      post = docs[0] as Post;
    }
  } catch (err) {
    throw err;
  }

  if (!post) {
    notFound();
  }

  const { title, content, populatedAuthors: authors } = post;
  const media = post.media as Media;

  return (
    <Fragment>
      <main className="bg-slate-900 text-slate-100">
        <Gutter>
          <div className="px-12 lg:px-24 xl:px-48 py-6 lg:py-12 xl:py-24 flex flex-col gap-12">
            <header className="flex flex-col gap-6">
              <h1 className="font-bold text-5xl text-teal-200">{title}</h1>
              <div className="w-full flex gap-4 justify-between">
                <p>
                  By{" "}
                  <span>
                    {formatList(authors.map((author) => author.name))}
                  </span>
                </p>
                <p>
                  <time>{formatDateTime(post.publishedOn)}</time>
                </p>
              </div>
            </header>
            <div className="w-full flex flex-col gap-6">
              {content.map((block) => {
                const { text, id, style } = block;
                const media = block.media as Media | undefined;
                return (
                  <div
                    key={id}
                    className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 items-center prose-slate prose-invert lg:prose-lg"
                  >
                    {media && (
                      <Image
                        src={media.url}
                        alt={media.alt}
                        width={media.width}
                        height={media.height}
                        className="rounded-md"
                      />
                    )}
                    <RichText
                      content={text}
                      className={style == "quote" ? "prose-blockquote" : ""}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Gutter>
      </main>
    </Fragment>
  );
}
