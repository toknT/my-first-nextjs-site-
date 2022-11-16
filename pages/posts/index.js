import client from './../../src/lib/apolloClient'
import { gql } from '@apollo/client';
export default function Posts({posts}) {
    return <div>posts list

        {JSON.stringify(posts)}
    </div>
}
export async function getStaticProps() {
    // note: not use useQuery in next.js
    const { data } = await client.query({
        query: gql`
            query allPosts{
 posts:blogPostCollection {
   items{
     title
     date
     tags
     sys{
       id
     }
   }
 }
}
      `,
    });
    return {
        props: {
            posts: data.posts.items,
        },
    };
}