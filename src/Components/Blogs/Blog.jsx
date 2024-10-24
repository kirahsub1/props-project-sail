import "./Blog.css"

const Blog = (props) => {
  return (
    <div>
      <div className={`BlogCard ${props.color}`}>
        <h1 className="blog-title">{props.title}</h1>
        <p className="blog-author">
          By {props.author} on {props.date}
        </p>
        <div className="blog-content">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Blog