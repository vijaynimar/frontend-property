import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css'; // Import the global CSS file

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
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error contacting agent:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderStars = useCallback((rating) => {
    return Array.from({ length: 5 }).map((_, i) => {
      if (i < Math.floor(rating)) {
        return <span key={i} className="property-star-icon">★</span>;
      } else if (i < rating) {
        return <span key={i} className="property-star-icon">☆</span>;
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
    <div className="property-container">
      <div className="property-header">
        <button className="back-button" onClick={handleBack}>
          ← Back to Listings
        </button>
      </div>

      <div className="property-main-content">
        <div className="property-image-section">
          <img src={image} alt={title} className="property-main-image" />
          <div className="property-price-tag">${price.toLocaleString()}</div>
          <button className="property-favorite-button">
            {favorite ? '♥' : '♡'}
          </button>
        </div>

        <div className="property-details-section">
          <div>
            <h1 className="property-title">{title}</h1>
            <p className="property-location">{propertyLocation}</p>
          </div>

          <div className="property-stats-grid">
            <div className="property-stat-card">
              <div className="property-stat-value">{bedrooms}</div>
              <div className="property-stat-label">Bedrooms</div>
            </div>
            <div className="property-stat-card">
              <div className="property-stat-value">{bathrooms}</div>
              <div className="property-stat-label">Bathrooms</div>
            </div>
            <div className="property-stat-card">
              <div className="property-stat-value">{area}</div>
              <div className="property-stat-label">Square Feet</div>
            </div>
            <div className="property-stat-card">
              <div className="property-stat-value">{yearBuilt}</div>
              <div className="property-stat-label">Year Built</div>
            </div>
          </div>

          <div className="property-rating">
            {renderStars(rating)}
            <span>({rating} / 5)</span>
          </div>

          <p className="property-description">
            {description || 'No description available.'}
          </p>

          <div className="property-amenities-grid">
            {amenities?.map((amenity, index) => (
              <div key={index} className="property-amenity">
                ✓ {amenity}
              </div>
            ))}
          </div>

          <button
            className="contact-button"
            onClick={handleContactAgent}
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

export default PropertyDetails;
