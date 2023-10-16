import Link from "next/link";

const fetchSinglePost = ( id ) => { 
    console.log("😿")
    
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 20,
    },
    }).then((res) => res.json())
}

const Post = async ({ children, params }) => {
  const { id } = params;

  const post = await fetchSinglePost(id); 
  const { title, body } = await post;

  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link href={`/posts/${id}/comments`}>ver comentarios</Link>
      { children }
    </article>
  );
};

export default Post;
