import Image from "next/image";

const fetchComments = async( id ) => { 
  console.log("😿")
  
  await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error("error al cargar los comentarios")
 
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 50,
    },
    }).then((res) => res.json()) 
}

const Post = async ({ params }) => {
  const { id } = params;

  const comments = await fetchComments(id); 
  return (
    <section style={{fontSize: "10px", backgroundColor: "#222"}}>
      {
        comments.map(comment => {    
      const { name, email, body, id } = comment;
         
        return (
          <article style={{ padding: "1rem" }} key={id}>
            <Image
              alt={name}
              src={`https://avatars.dicebear.com/api/pixel-art-neutral/${email}.svg`}
              width="50"
              height="50"
            />
            <h2>{name}</h2>
            <small>{email}</small>
            <p>{body}</p>
          
        </article>
        )
        })
      }

    </section>
  );
};

export default Post;
