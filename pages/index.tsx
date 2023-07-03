import { IBlog } from "interface/Blog";
import Link from "next/link";
function Home({ posts }: { posts: IBlog[] }) {
  return (
    <div className="posts-container">
      <Link href="/posts">
        <a>Create New Post</a>
      </Link>
      {posts.map((post: IBlog) => (
        <article key={post.id} className="post-article">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch the posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Return the posts as a prop
  return {
    props: {
      posts,
    },
  };
}

export default Home;
