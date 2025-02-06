import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PropertyDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { property } = location.state || {};
  const [isLoading, setIsLoading] = useState(false);

  if (!property) {
    navigate('/');
    return null;
  }

  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleContactAgent = useCallback(async () => {
    setIsLoading(true);
    try {
      // Add your contact agent logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error contacting agent:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleMouseOver = useCallback((e, color) => {
    e.target.style.backgroundColor = color;
  }, []);

  const handleMouseOut = useCallback((e, color) => {
    e.target.style.backgroundColor = color;
  }, []);

  const renderStars = useCallback((rating) => {
    return Array.from({ length: 5 }).map((_, i) => {
      if (i < Math.floor(rating)) {
        return <span key={i} style={styles.starIcon}>★</span>;
      } else if (i < rating) {
        return <span key={i} style={styles.starIcon}>☆</span>;
      } else {
        return <span key={i} style={{ color: '#E2E8F0' }}>★</span>;
      }
    });
  }, []);

  const {
    title,
    location: propertyLocation,
    bedrooms,
    bathrooms,
    area,
    price,
    image,
    rating,
    favorite,
    description,
    amenities,
    yearBuilt = new Date().getFullYear()
  } = property;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button 
          style={styles.backButton}
          onClick={handleBack}
          onMouseOver={(e) => handleMouseOver(e, '#3182ce')}
          onMouseOut={(e) => handleMouseOut(e, '#4299e1')}
        >
          ← Back to Listings
        </button>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.imageSection}>
          <img src={image} alt={title} style={styles.mainImage} />
          <div style={styles.priceTag}>${price.toLocaleString()}</div>
          <button style={styles.favoriteButton}>
            {favorite ? '♥' : '♡'}
          </button>
        </div>

        <div style={styles.detailsSection}>
          <div>
            <h1 style={styles.title}>{title}</h1>
            <p style={styles.location}>{propertyLocation}</p>
          </div>

          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{bedrooms}</div>
              <div style={styles.statLabel}>Bedrooms</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{bathrooms}</div>
              <div style={styles.statLabel}>Bathrooms</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{area}</div>
              <div style={styles.statLabel}>Square Feet</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{yearBuilt}</div>
              <div style={styles.statLabel}>Year Built</div>
            </div>
          </div>

          <div style={styles.rating}>
            {renderStars(rating)}
            <span>({rating} / 5)</span>
          </div>

          <p style={styles.description}>
            {description || 'No description available.'}
          </p>

          <div style={styles.amenitiesGrid}>
            {amenities?.map((amenity, index) => (
              <div key={index} style={styles.amenity}>
                ✓ {amenity}
              </div>
            ))}
          </div>

          <button 
            style={{
              ...styles.contactButton,
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
            onClick={handleContactAgent}
            onMouseOver={(e) => !isLoading && handleMouseOver(e, '#38a169')}
            onMouseOut={(e) => !isLoading && handleMouseOut(e, '#48bb78')}
            disabled={isLoading}
          >
            {isLoading ? 'Contacting...' : 'Contact Agent'}
          </button>
        </div>
      </div>
    </div>
  );
};

PropertyDetails.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    favorite: PropTypes.bool.isRequired,
    description: PropTypes.string,
    amenities: PropTypes.arrayOf(PropTypes.string),
    yearBuilt: PropTypes.number
  })
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#f7fafc',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  backButton: {
    padding: '8px 16px',
    backgroundColor: '#4299e1',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '32px',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  imageSection: {
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  priceTag: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '30px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'white',
    color: '#ed64a6',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '8px',
  },
  location: {
    fontSize: '1.25rem',
    color: '#4a5568',
    marginBottom: '24px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '24px',
  },
  statCard: {
    backgroundColor: '#f7fafc',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '4px',
  },
  statLabel: {
    color: '#718096',
    fontSize: '0.9rem',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '1.25rem',
    marginBottom: '24px',
  },
  starIcon: {
    color: '#FFD700',
  },
  description: {
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  amenitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '24px',
  },
  amenity: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#4a5568',
  },
  contactButton: {
    backgroundColor: '#48bb78',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: 'auto',
  },
  '@media (max-width: 768px)': {
    mainContent: {
      gridTemplateColumns: '1fr',
    },
    mainImage: {
      height: '300px',
    },
  },
};

export default PropertyDetails;