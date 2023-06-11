import { Link } from '@remix-run/react';

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Link to='/'>back</Link>
    </div>
  );
};

export default Blog;
