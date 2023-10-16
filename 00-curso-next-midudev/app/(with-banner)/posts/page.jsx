import { Suspense } from "react";
import ListOfPosts from "./ListOfPosts";

const PostsPage = async () => {

  return (
    <div>
      <Suspense fallback={<p>Cargando posts...</p>} />
      <ListOfPosts />
    </div>
  );
};

export default PostsPage;
