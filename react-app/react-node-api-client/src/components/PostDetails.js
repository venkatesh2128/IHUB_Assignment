import React, { useState, useEffect } from "react";
import axios from "axios";

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/ghost/post/${postId}`);
      setPost(response.data.posts[0]);
    };
    fetchPost();
  }, [postId]);

  return (
    <div>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.html}</p>
        </>
      )}
    </div>
  );
};

export default PostDetails;
