import Layout from '../components/Layout';
import { getAllPostsData } from '../lib/posts';
import Post from '../components/Post';

export default function Blog({ posts }) {
  return (
    <Layout title='Blog'>
      <ul className='m-10'>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

// build時に取ってくる
export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts }, //propsとして使えるように渡してあげる
  };
}
