import { Link, useParams } from 'react-router'
import Markdown from 'react-markdown'
import { posts } from '../../blog/posts'
import '../../css/blog.scss'

function Blog() {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)

  if (slug && !post) {
    return (
      <main className="blog">
        <h1 className="sub-heading">post not found</h1>
        <p className="body-text">That note isn&apos;t here.</p>
        <Link to="/blog">back to blog</Link>
      </main>
    )
  }

  if (post) {
    return (
      <main className="blog">
        <Link className="blog-back" to="/blog">← all notes</Link>
        <article className="blog-post">
          <header>
            <time dateTime={post.date}>{post.date}</time>
            <h1>{post.title}</h1>
          </header>
          <div className="blog-body">
            <Markdown>{post.content}</Markdown>
          </div>
        </article>
      </main>
    )
  }

  return (
    <main className="blog">
      <div className="sub-heading-box">
        <h1 className="sub-heading">blog</h1>
      </div>
      <p className="blog-intro">A somewhat-spiced up collection of personal notes</p>
      {posts.length === 0 ? (
        <p className="body-text">No notes yet.</p>
      ) : (
        <ol className="blog-list">
          {posts.map((entry) => (
            <li className="blog-entry" key={entry.slug}>
              <article>
                <time dateTime={entry.date}>{entry.date}</time>
                <h2><Link to={`/blog/${entry.slug}`}>{entry.title}</Link></h2>
                <p>{entry.summary}</p>
              </article>
            </li>
          ))}
        </ol>
      )}
    </main>
  )
}

export default Blog
