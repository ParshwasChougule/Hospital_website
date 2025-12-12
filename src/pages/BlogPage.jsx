import React from 'react';
import { FiBookOpen, FiVideo, FiActivity, FiArrowRight, FiHeart, FiFileText, FiPlayCircle } from 'react-icons/fi';
import './BlogPage.css';

const posts = [
  {
    id: 1,
    title: '5 signs of a healthy heart',
    category: 'Heart Care',
    readTime: '4 min read',
    type: 'Article',
    icon: <FiHeart />
  },
  {
    id: 2,
    title: 'Preparing for your first knee surgery',
    category: 'Orthopedics',
    readTime: '5 min read',
    type: 'Guide',
    icon: <FiActivity />
  },
  {
    id: 3,
    title: 'Nutrition tips for a stronger immune system',
    category: 'Healthy Living',
    readTime: '6 min read',
    type: 'Article',
    icon: <FiBookOpen />
  },
  {
    id: 4,
    title: 'Understanding childhood fevers: when to see a doctor',
    category: 'Child Health',
    readTime: '5 min read',
    type: 'Article',
    icon: <FiActivity />
  },
  {
    id: 5,
    title: 'What to expect before and after angioplasty',
    category: 'Heart Care',
    readTime: '7 min read',
    type: 'Guide',
    icon: <FiFileText />
  },
  {
    id: 6,
    title: 'Inside our emergency department: how we prepare for every second',
    category: 'Emergency Care',
    readTime: '5 min read',
    type: 'Video',
    icon: <FiPlayCircle />
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page-wrapper">
      <header className="blog-header">
        <h1>Health Blog & Resources</h1>
        <p>
          Easy-to-understand information from our care teams to help you look after your health and
          your family's health every day.
        </p>
      </header>

      {/* Blog Grid */}
      <div className="blog-grid-container">
        {posts.map((post) => (
          <article key={post.id} className="blog-post-card">
            <div className="blog-image-placeholder">
              {post.icon}
            </div>
            <div className="blog-content">
              <div className="blog-tags">
                <span className="blog-tag">{post.category}</span>
              </div>
              <h3 className="blog-post-title">{post.title}</h3>
              <div className="blog-post-meta">
                <span>{post.type}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <button className="read-more-btn">
                Read Resource <FiArrowRight />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Resource Types Section */}
      <section className="resources-section">
        <div className="section-header">
          <h2 className="section-title">Library of Support</h2>
          <p className="section-subtitle">
            Growing collection of educational materials to empower your health journey.
          </p>
        </div>
        <div className="resources-grid">
          <div className="resource-item">
            <FiFileText className="resource-icon" />
            <h4>Simple Guides</h4>
            <p>Condition and treatment overviews written in everyday language.</p>
          </div>
          <div className="resource-item">
            <FiActivity className="resource-icon" />
            <h4>Wellness Tips</h4>
            <p>Advice on nutrition, movement, sleep, and stress management.</p>
          </div>
          <div className="resource-item">
            <FiVideo className="resource-icon" />
            <h4>Video Library</h4>
            <p>Short videos explaining procedures and answering common questions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
