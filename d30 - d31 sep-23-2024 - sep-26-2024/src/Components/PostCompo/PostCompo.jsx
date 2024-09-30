
const PostCompo = ({post}) => {
    return (
        <div className="border shadow rounded p-3">
            <h1 className="text-xl font-bold mb-3">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCompo;