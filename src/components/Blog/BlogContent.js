import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

export default function BlogContent(props) {
  const [blogs, setBlog] = useState(null);
  const [limit, setLimit] = useState(5);
  const loadMore = () => {
    setLimit(limit + 5);
  };
  async function fetchBlog() {
    const url = "http://localhost:3000/posts";
    const response = await fetch(url);
    setBlog(await response.json());
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  if (!blogs) {
    return "loading...";
  }

  return (
    <>
      {blogs.slice(0, limit).map((element) => {
        return (
          <BlogCard
            key={element.id}
            mode={props.mode}
            heading={element.title}
            author={element.author}
            addedOn={element.createdAt}
            image={element.image}
            description={element.description.slice(0, 300)}
          />
        );
      })}
      <button className="btn btn-primary" onClick={loadMore}>
        Load More
      </button>
    </>
  );
}
