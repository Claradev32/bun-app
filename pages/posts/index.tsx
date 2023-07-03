import { useState } from 'react';
import { IBlog } from 'interface/Blog';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setContent] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const id = Math.random().toString(36).substr(2, 9);
    const newPost: IBlog = { id, title, body };

    // Send a POST request to the JSONPlaceholder API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await res.json();
    console.log(data);

    setTitle("");
    setContent("");
  };

  return (
    <div className="form-container">
      <h1>Create a New Post</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Content:
          <textarea
            value={body}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea"
          />
        </label>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}
