import type { AfterReadHook } from "payload/dist/collections/config/types";

export const populateAuthors: AfterReadHook = async ({
  doc,
  req: { payload },
}) => {
  if (doc?.authors) {
    const authorDocs = await Promise.all(
      doc.authors.map(
        async (author) =>
          await payload.findByID({
            collection: "users",
            id: typeof author === "object" ? author?.id : author,
            depth: 1,
          })
      )
    );

    doc.populatedAuthors = authorDocs.map((authorDoc) => ({
      id: authorDoc.id,
      name: authorDoc.name,
      photo: authorDoc.photo,
    }));
  }

  return doc;
};
