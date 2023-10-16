import React from 'react'
import Link  from 'next/link'
import LikeButton from './LikeButton'

const fetchPosts = () => {
  console.log('😭')

  // getStaticProps
  /*   return fetch('https://jsonplaceholder.typicode.com/posts',).then((res) => res.json()) */

  // getServerSideProps 
  /* return fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: "no-store"
  }).then((res) => res.json()) */

  // incremental static regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 20,
    },
  }).then((res) => res.json())
  
 /*  return [
    { title: "lorem", body: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi commodi, voluptatem magni minima optio omnis dolorem expedita natus excepturi labore! Vero veritatis atque, ab autem tempore sapiente maxime expedita blanditiis!", id: 1 },
    { title: "lorem", body: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi commodi, voluptatem magni minima optio omnis dolorem expedita natus excepturi labore! Vero veritatis atque, ab autem tempore sapiente maxime expedita blanditiis!", id: 2 },
    { title: "lorem", body: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi commodi, voluptatem magni minima optio omnis dolorem expedita natus excepturi labore! Vero veritatis atque, ab autem tempore sapiente maxime expedita blanditiis!", id: 3 }
  ] */
}

const ListOfPosts = async () => {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(({ title, body, id }) => {
    return (
      <article key={id}>
        <Link href={`posts/${id}`}>
          <h2 style={{ color: 'thistle' }}>{title}</h2>
        </Link>
          <p>{body}</p>
          <LikeButton id={id} />
        <hr />
      </article>
    )
  })
}

export default ListOfPosts
