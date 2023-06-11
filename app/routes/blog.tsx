import { Link } from '@remix-run/react';
import React from 'react';

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Link to='/'>back</Link>
    </div>
  );
};

export default Blog;
