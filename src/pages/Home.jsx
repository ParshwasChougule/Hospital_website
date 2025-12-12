import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import Departments from '../components/Departments';
import Doctors from '../components/Doctors';
import AppointmentForm from '../components/AppointmentForm';
import Contact from '../components/Contact';
import Carousel from '../components/Carousel';
import { FiHeart, FiUser, FiActivity, FiSmile, FiStar } from 'react-icons/fi';

const generalTestimonials = [
  {
    title: 'Meera Patil',
    description: 'From the first visit, my doctor explained everything in simple language. I felt heard, safe, and truly cared for.',
    id: 1,
    meta: 'Cardiology Patient',
    icon: <FiHeart className="carousel-icon" />
  },
  {
    title: 'Anjali Gupta',
    description: 'The emergency care was prompt and life-saving. I am forever grateful to the dedicated staff.',
    id: 4,
    meta: 'Emergency Care',
    icon: <FiActivity className="carousel-icon" />
  },
  {
    title: 'Vikram Singh',
    description: 'Regular checkups here have helped me manage my diabetes effectively. Great doctors!',
    id: 5,
    meta: 'Diabetes Care',
    icon: <FiUser className="carousel-icon" />
  }
];

const maternityTestimonials = [
  {
    title: 'Rahul & Kavya',
    description: "The maternity team treated us like family. They guided us calmly through every step of our baby's birth.",
    id: 2,
    meta: 'New Parents',
    icon: <FiSmile className="carousel-icon" />
  },
  {
    title: 'Priya Sharma',
    description: 'The best birthing experience I could have asked for. The nurses were angels.',
    id: 6,
    meta: 'Maternity',
    icon: <FiHeart className="carousel-icon" />
  },
  {
    title: 'Neha & Amit',
    description: 'Pediatric care is top-notch. Dr. Desai is wonderful with kids.',
    id: 7,
    meta: 'Pediatrics',
    icon: <FiStar className="carousel-icon" />
  }
];

const surgeryTestimonials = [
  {
    title: 'Santosh Deshmukh',
    description: 'The rehab team helped me walk without pain again. They always asked how I was feeling, not just how my knee was healing.',
    id: 3,
    meta: 'Orthopaedic Surgery',
    icon: <FiActivity className="carousel-icon" />
  },
  {
    title: 'Robert D.',
    description: 'Came all the way from UK for my hip replacement. World-class facilities at a fraction of the cost.',
    id: 8,
    meta: 'International Patient',
    icon: <FiUser className="carousel-icon" />
  },
  {
    title: 'Suresh Raina',
    description: 'Minimally invasive surgery meant I was back to work in 2 weeks. Incredible skill.',
    id: 9,
    meta: 'General Surgery',
    icon: <FiActivity className="carousel-icon" />
  }
];

const blogPosts = [
  {
    id: 1,
    title: '5 heart-health habits you can start today',
    category: 'Heart Care',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: (
      <>
        <p>Your heart is the engine of your body. Keeping it healthy doesn't require a complete lifestyle overhaul. Small, consistent changes can make a big difference.</p>
        <h4>1. Move More</h4>
        <p>Aim for at least 30 minutes of moderate activity, like brisk walking, most days of the week. It lowers blood pressure and strengthens the heart muscle.</p>
        <h4>2. Eat Smart</h4>
        <p>Incorporate more fruits, vegetables, and whole grains. Reduce salt and sugar intake. Healthy fats like those found in nuts and olive oil are great for your heart.</p>
        <h4>3. Stress Less</h4>
        <p>Chronic stress can damage arteries. Practice deep breathing, meditation, or simply take time for hobbies you enjoy.</p>
        <h4>4. Sleep Well</h4>
        <p>Poor sleep is linked to higher risks of heart disease. Aim for 7-9 hours of quality sleep each night.</p>
        <h4>5. Know Your Numbers</h4>
        <p>Regular checkups for blood pressure, cholesterol, and blood sugar are vital. Early detection is key to prevention.</p>
      </>
    )
  },
  {
    id: 2,
    title: "Preparing for your child's vaccination visit",
    category: 'Child Health',
    readTime: '3 min read',
    image: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2808385.jpeg',
    content: (
      <>
        <p>Vaccinations are a crucial part of protecting your child's health. A little preparation can make the visit smoother and less stressful for both you and your little one.</p>
        <h4>Before the Visit</h4>
        <p>Bring your child's vaccination record. Pack a favorite toy or blanket for comfort. Dress them in loose-fitting clothes for easy access to the arm or leg.</p>
        <h4>During the Shot</h4>
        <p>Stay calm; your child picks up on your anxiety. Distract them with a story, song, or toy. Hold them securely but gently.</p>
        <h4>After Care</h4>
        <p>Some redness or mild fever is normal. Ask your doctor about using a cool compress or age-appropriate pain relief if needed. Extra cuddles always help!</p>
      </>
    )
  },
  {
    id: 3,
    title: 'When to visit the Emergency vs. Outpatient Clinic',
    category: 'Emergency Care',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1516574187841-693083f69802?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: (
      <>
        <p>Knowing where to go can save time and ensuring you get the right level of care.</p>
        <h4>Go to Emergency (ER) for:</h4>
        <ul>
          <li>Chest pain or difficulty breathing</li>
          <li>Severe bleeding or deep wounds</li>
          <li>Sudden weakness, numbness, or slurred speech (Stroke signs)</li>
          <li>Severe abdominal pain</li>
          <li>Head injuries with loss of consciousness</li>
        </ul>
        <h4>Go to Outpatient / Clinic for:</h4>
        <ul>
          <li>Common cold, cough, or sore throat</li>
          <li>Minor cuts or burns</li>
          <li>Routine checkups and vaccinations</li>
          <li>Skin rashes or mild allergies</li>
          <li>Prescription refills</li>
        </ul>
        <p>If you are ever unsure and the situation feels life-threatening, always choose the ER or call 108 immediately.</p>
      </>
    )
  },
];

const BlogModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 2000,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      padding: '20px', backdropFilter: 'blur(5px)'
    }} onClick={onClose}>
      <div style={{
        background: 'white', maxWidth: '700px', width: '100%',
        borderRadius: '16px', overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        maxHeight: '90vh', display: 'flex', flexDirection: 'column',
        position: 'relative'
      }} onClick={e => e.stopPropagation()}>

        <button onClick={onClose} style={{
          position: 'absolute', top: '15px', right: '15px',
          background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%',
          width: '36px', height: '36px', fontSize: '20px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 10
        }}>×</button>

        <div style={{ height: '250px', overflow: 'hidden', flexShrink: 0 }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ padding: '30px', overflowY: 'auto' }}>
          <span style={{
            background: '#f0f9ff', color: '#2582a1', padding: '4px 12px',
            borderRadius: '20px', fontSize: '12px', fontWeight: '600',
            display: 'inline-block', marginBottom: '12px'
          }}>{post.category}</span>

          <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '10px' }}>{post.title}</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>{post.readTime}</p>

          <div style={{ lineHeight: '1.7', color: '#334155', fontSize: '1.05rem' }}>
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(null);

  const handleLearnMore = (plan) => {
    // Map plans to department IDs if possible, or just navigate to services
    // For now, we'll map them to relevant departments or default to first one
    let deptId = 'preventive-health'; // Default or a specific ID for health checks

    // Simple mapping logic (can be expanded)
    if (plan.includes('Heart')) deptId = 'cardiology';
    if (plan.includes('Women')) deptId = 'obgyn';
    if (plan.includes('Senior')) deptId = 'internal-medicine';

    navigate('/services', { state: { departmentId: deptId } });
  };

  return (
    <>
      <HeroBanner />

      {/* ProHealth Section - Apollo Style */}
      <section className="section" style={{ background: '#eef2ff' }}>
        <div className="section-header" data-aos="zoom-in">
          <h2 className="section-title">Swarup ProHealth Program</h2>
          <p className="section-subtitle">
            Proactive health management for you and your family.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Full Body Check', 'Heart Check', 'Women Wellness', 'Senior Citizen'].map((plan) => (
            <div key={plan} style={{
              background: 'white',
              padding: '24px',
              borderRadius: '16px',
              width: '240px',
              textAlign: 'center',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#2582a1', marginBottom: '10px' }}>{plan}</h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>Comprehensive screening for early detection.</p>
              <button
                className="btn btn-outline"
                style={{ width: '100%', fontSize: '14px' }}
                onClick={() => handleLearnMore(plan)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <Departments />

      <Doctors />

      <section id="testimonials" className="section">
        <div className="section-header">
          <h2 className="section-title">Patient Stories</h2>
          <p className="section-subtitle">
            Real experiences from people who trusted us with their health.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {/* General Care Carousel */}
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#0f172a', fontSize: '1.1rem' }}>General Care</h3>
            <div style={{ height: '350px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <Carousel
                items={generalTestimonials}
                baseWidth={300}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>

          {/* Maternity Carousel */}
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#0f172a', fontSize: '1.1rem' }}>Maternity & Child</h3>
            <div style={{ height: '350px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <Carousel
                items={maternityTestimonials}
                baseWidth={300}
                autoplay={true}
                autoplayDelay={5000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>

          {/* Surgery Carousel */}
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#0f172a', fontSize: '1.1rem' }}>Surgery & Rehab</h3>
            <div style={{ height: '350px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <Carousel
                items={surgeryTestimonials}
                baseWidth={300}
                autoplay={true}
                autoplayDelay={6000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>

      </section>

      <section id="blog" className="section section-alt">
        <div className="section-header">
          <h2 className="section-title">Health Library</h2>
          <p className="section-subtitle">
            Expert advice and health tips from our medical professionals.
          </p>
        </div>

        <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card" style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <span className="blog-badge" style={{
                background: '#f0f9ff',
                color: '#2582a1',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '12px',
                alignSelf: 'flex-start'
              }}>{post.category}</span>
              <h3 className="blog-title" style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{post.title}</h3>
              <p className="blog-meta" style={{ fontSize: '14px', color: '#64748b', marginBottom: '15px' }}>{post.readTime}</p>
              <button
                type="button"
                className="btn-read-more"
                onClick={() => setSelectedPost(post)}
              >
                Read Article →
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Blog Modal */}
      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />

      <AppointmentForm />
      <Contact />
    </>
  );
};

export default Home;
