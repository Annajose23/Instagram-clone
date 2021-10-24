import Post from './Post';

const DUMMY_DATA = [{
    id:'123',
    username:'annble',
    userImg:'https://pbs.twimg.com/profile_images/1127678849775472647/0RYCSMrA_400x400.jpg',
    img:'https://c8.alamy.com/comp/2A3N7F3/jr-ramirez-and-melissa-roxburgh-attend-elle-women-in-music-presented-by-spotify-at-the-shed-on-september-05-2019-in-new-york-city-2A3N7F3.jpg',
    caption:'this is dope'
},
{
    id:'123',
    username:'annble',
    userImg:'https://pbs.twimg.com/profile_images/1127678849775472647/0RYCSMrA_400x400.jpg',
    img:'https://c8.alamy.com/comp/2A3N7F3/jr-ramirez-and-melissa-roxburgh-attend-elle-women-in-music-presented-by-spotify-at-the-shed-on-september-05-2019-in-new-york-city-2A3N7F3.jpg',
    caption:'this is dope'
}]

function Posts() {
    return (
        <div>
            {DUMMY_DATA.map(post => (
                <Post key={post.id} 
                id={post.id}
                username={post.username}
                userImage={post.userImg}
                img={post.img}
                caption={post.caption}/>
            ))}
            
        </div>
    )
}

export default Posts
