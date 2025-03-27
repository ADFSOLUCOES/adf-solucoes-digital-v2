import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/BlogPreview.scss";

const BlogPreview: React.FC = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Inovações em Desenvolvimento de Software",
      excerpt:
        "Descubra as últimas tendências e inovações no mundo do desenvolvimento de software empresarial.",
      date: "26 Mar 2024",
      imageUrl: "/blog/post1.jpg",
    },
    {
      id: 2,
      title: "Soluções Empresariais Modernas",
      excerpt:
        "Como as empresas estão se adaptando às novas tecnologias e transformação digital.",
      date: "25 Mar 2024",
      imageUrl: "/blog/post2.jpg",
    },
    {
      id: 3,
      title: "Segurança Digital para Empresas",
      excerpt:
        "Melhores práticas de segurança digital para proteger sua empresa em 2024.",
      date: "24 Mar 2024",
      imageUrl: "/blog/post3.jpg",
    },
  ];

  return (
    <section id="blog" className="blog-preview">
      <div className="container">
        <h2>Blog</h2>
        <p className="section-description">
          Confira nossos artigos mais recentes sobre tecnologia, inovação e
          soluções empresariais
        </p>

        <div className="recent-posts">
          {recentPosts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-image">
                <img src={post.imageUrl} alt={post.title} />
              </div>
              <div className="post-content">
                <h3>{post.title}</h3>
                <p className="post-date">{post.date}</p>
                <p className="post-excerpt">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <Link to="/blog" className="btn-primary">
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
