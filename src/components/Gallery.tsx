import React from "react";
import cloudinary from "cloudinary";
import Images from "./Images";

type SearchResult = { public_id: string };
const Gallery = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  console.log(results);
  return (
    <div className="grid grid-cols-4 gap-3">
      {results.resources.map((result) => (
        <Images
          key={result.public_id}
          width="300"
          height="300"
          src={result.public_id}
          alt="Description of my image"
        />
      ))}
    </div>
  );
};

export default Gallery;
