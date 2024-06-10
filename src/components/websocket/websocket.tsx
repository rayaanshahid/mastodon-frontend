import React, { useEffect, useState } from "react";
import './websocket.css';

interface Post {
  id: string;
  content: string;
}

function Websocket() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws");

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      const post: Post = JSON.parse(event.data);
      setPosts((prevPosts) => [post, ...prevPosts]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => ws.close();
  }, []);

  return (
    <div className="Posts">
      <ul>
        {posts.map((post) => (
          <li key={post.id} dangerouslySetInnerHTML={{ __html: post.content }} />
        ))}
      </ul>
    </div>
  );
}

export default Websocket;

