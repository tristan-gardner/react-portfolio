import React, { useEffect, useRef } from 'react';

const ProjectContent = ({ images, video, description, text }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [video]);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.mediaContainer}>
          <div style={styles.imageGrid}>
            {images.map((image, index) => (
              <div key={index} style={styles.imageWrapper}>
                <img
                  src={image.link}
                  alt={`Project Image ${index + 1}`}
                  style={{...styles.image, height: image.tall? '400px': styles.image.height}}
                />
                <p style={styles.caption}>{image.caption}</p>
              </div>
            ))}
          </div>
          {video && (
            <video ref={videoRef} controls style={styles.video}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <p style={styles.description}>{description}</p>
        <p style={styles.description}>{text}</p>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  content: {
    maxWidth: '800px',
    textAlign: 'left',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  mediaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(45%, 1fr))',
    gap: '10px',
    width: '100%',
    justifyContent: 'center',
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '200px', // Fixed height for uniformity
    objectFit: 'cover', // Ensures images maintain aspect ratio and fill the space
    borderRadius: '8px',
  },
  caption: {
    marginTop: '5px',
    fontSize: '14px',
    color: '#666',
    textAlign: 'center',
  },
  video: {
    maxWidth: '100%',
    maxHeight: '500px',
    height: 'auto',
    borderRadius: '8px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
    whiteSpace: 'pre-line',
  },
};

export default ProjectContent;