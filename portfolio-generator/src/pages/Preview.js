import React from "react";

const Preview = ({ content }) => {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-lg">
      <div
        className="portfolio-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Preview;
