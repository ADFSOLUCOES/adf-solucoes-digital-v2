import React from "react";
import "../styles/components/Blog.scss";

const Blog = () => {
  const posts = [
    {
      title: "Inovações em Desenvolvimento de Software",
      author: "Arthur Dias",
      date: "26 Mar 2025",
      description:
        "Descubra as últimas tendências e inovações no mundo do desenvolvimento de software empresarial.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      alt: "Inovações em Desenvolvimento de Software",
    },
    {
      title: "Soluções Empresariais Modernas",
      author: "Arthur Dias",
      date: "25 Mar 2025",
      description:
        "Como as empresas estão se adaptando às novas tecnologias e transformação digital.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      alt: "Soluções Empresariais Modernas",
    },
    {
      title: "Segurança Digital para Empresas",
      author: "Arthur Dias",
      date: "24 Mar 2025",
      description:
        "Melhores práticas de segurança digital para proteger sua empresa em 2024.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1968&auto=format&fit=crop",
      alt: "Segurança Digital para Empresas",
    },
  ];

  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <h2>Blog</h2>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.alt} />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <div className="blog-meta">
                  <span className="author">{post.author}</span>
                  <span className="date">{post.date}</span>
                </div>
                <p>{post.description}</p>
                <button className="btn-primary">Ler mais</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
