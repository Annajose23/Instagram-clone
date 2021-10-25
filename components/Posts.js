import Post from './Post';
import { useState, useEffect } from 'react';
import { onSnapshot, orderBy, query, collection } from '@firebase/firestore';
import {db} from '../firebase'

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => 
         onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
             console.log(snapshot.docs);
            setPosts(snapshot.docs);
    }), [db]);

    console.log(posts);
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} 
                id={post.id}
                username={post.data().username}
                userImage={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}/>
            ))}
            
        </div>
    )
}

export default Posts
