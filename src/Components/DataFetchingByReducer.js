import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetchingByReducer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(" ");
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")

      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("something worng bro!!");
      });
  }, []);

  return (
    <div>
      {loading ? "loading" : post.title}
      <ul>
        {post.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </ul>

      {error ? error : null}
    </div>
  );
}

export default DataFetchingByReducer;
