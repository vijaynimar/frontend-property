import React, { useState, useMemo, useEffect } from "react";
import home from "../../public/home.webp";

// PropertyCard Component
const PropertyCard = React.memo(({ property }) => {
  const cardStyles = {
    card: {
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "white",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: "0 auto",
    },
    imageContainer: {
      position: "relative",
      height: "200px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
    priceTag: {
      position: "absolute",
      bottom: "12px",
      left: "12px",
      background: "rgba(0, 0, 0, 0.7)",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      fontWeight: "bold",
    },
    content: {
      padding: "16px",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#2d3748",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    location: {
      color: "#4a5568",
      marginBottom: "12px",
      fontSize: "0.9rem",
    },
    details: {
      display: "flex",
      gap: "16px",
      marginBottom: "12px",
      color: "#718096",
      fontSize: "0.9rem",
      flexWrap: "wrap",
    },
    rating: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "1.1rem",
    }
  };

  const { title, location, bedrooms, bathrooms, area, price, image, rating } = property;

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} style={{ color: index < Math.floor(rating) ? "#FFD700" : "#E2E8F0" }}>
        ★
      </span>
    ));
  };

  return (
    <div style={cardStyles.card}>
      <div style={cardStyles.imageContainer}>
        <img src={image} alt={title} style={cardStyles.image} />
        <div style={cardStyles.priceTag}>${price.toLocaleString()}</div>
      </div>
      <div style={cardStyles.content}>
        <h3 style={cardStyles.title}>{title}</h3>
        <p style={cardStyles.location}>{location}</p>
        <div style={cardStyles.details}>
          <span>{bedrooms} Beds</span>
          <span>|</span>
          <span>{bathrooms} Baths</span>
          <span>|</span>
          <span>{area} sq ft</span>
        </div>
        <div style={cardStyles.rating}>
          {renderStars()}
          <span>({rating})</span>
        </div>
      </div>
    </div>
  );
});

// PropertyListing Component
const Home = () => {
  const styles = {
    container: {
      maxWidth: "100%",
      margin: "0 auto",
      padding: "24px",
      backgroundColor: "#f7fafc",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      backgroundImage: `url(${home})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    },
    propertiesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "24px",
      padding: "0 20px",
      maxWidth: "1400px",
      margin: "0 auto",
    },
  };

  const properties = useMemo(() => [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "Downtown, New York",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      price: 750000,
      image: "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg",
      rating: 4.5,
      favorite: false,
    },
    {
      id: 2,
      title: "Luxury Beach House",
      location: "Malibu, California",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      price: 2500000,
      image: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg",
      rating: 4.7,
      favorite: true,
    },
    {
      id: 3,
      title: "Cozy Suburban Home",
      location: "Austin, Texas",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      price: 450000,
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      rating: 4.0,
      favorite: false,
    },
    {
      id: 4,
      title: "Mountain View Villa",
      location: "Denver, Colorado",
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      price: 1200000,
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      rating: 4.6,
      favorite: true,
    },
    {
      id: 5,
      title: "Penthouse Suite",
      location: "Chicago, Illinois",
      bedrooms: 3,
      bathrooms: 3,
      area: 2500,
      price: 1800000,
      image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
      rating: 4.8,
      favorite: false,
    },
    {
      id: 6,
      title: "Historic Townhouse",
      location: "Boston, Massachusetts",
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      price: 950000,
      image: "https://images.pexels.com/photos/259685/pexels-photo-259685.jpeg",
      rating: 4.3,
      favorite: true,
    },
    {
      id: 7,
      title: "Lakefront Cottage",
      location: "Lake Tahoe, Nevada",
      bedrooms: 3,
      bathrooms: 2,
      area: 1600,
      price: 850000,
      image: "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg",
      rating: 4.2,
      favorite: false,
    },
    {
      id: 8,
      title: "Urban Loft",
      location: "Seattle, Washington",
      bedrooms: 2,
      bathrooms: 2,
      area: 1400,
      price: 700000,
      image: "https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg",
      rating: 4.1,
      favorite: true,
    },
    {
      id: 9,
      title: "Ranch Estate",
      location: "Dallas, Texas",
      bedrooms: 5,
      bathrooms: 4,
      area: 4000,
      price: 1500000,
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      rating: 4.4,
      favorite: false,
    },
    {
      id: 10,
      title: "Ski Chalet",
      location: "Aspen, Colorado",
      bedrooms: 4,
      bathrooms: 3,
      area: 3000,
      price: 2000000,
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      rating: 4.9,
      favorite: true,
    },
    {
      id: 11,
      title: "Desert Oasis",
      location: "Scottsdale, Arizona",
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
      price: 1200000,
      image: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg",
      rating: 4.3,
      favorite: false,
    },
    {
      id: 12,
      title: "Countryside Farmhouse",
      location: "Nashville, Tennessee",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      price: 950000,
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      rating: 4.0,
      favorite: true,
    },
    {
      id: 13,
      title: "High-Rise Condo",
      location: "Miami, Florida",
      bedrooms: 2,
      bathrooms: 2,
      area: 1500,
      price: 850000,
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
      rating: 3.8,
      favorite: false,
    },
    {
      id: 14,
      title: "Victorian Mansion",
      location: "San Francisco, California",
      bedrooms: 6,
      bathrooms: 5,
      area: 5000,
      price: 3500000,
      image: "https://images.pexels.com/photos/259685/pexels-photo-259685.jpeg",
      rating: 5.0,
      favorite: true,
    },
    {
      id: 15,
      title: "Colonial Home",
      location: "Philadelphia, Pennsylvania",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      price: 900000,
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      rating: 4.3,
      favorite: false,
    },
    {
      id: 16,
      title: "Mediterranean Villa",
      location: "Los Angeles, California",
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      price: 2700000,
      image: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg",
      rating: 4.6,
      favorite: true,
    },
    {
      id: 17,
      title: "Tropical Bungalow",
      location: "Honolulu, Hawaii",
      bedrooms: 3,
      bathrooms: 2,
      area: 2000,
      price: 1800000,
      image: "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg",
      rating: 4.5,
      favorite: false,
    },
  ], []);

  return (
    <>
      <header style={styles.header}>
        <h1>Find Your Dream Home</h1>
        <p>Discover the perfect property that matches your lifestyle</p>
        <div style={{display:"flex",width:"250px",justifyContent:"space-between"}}>
              <button
                style={{
                  backgroundColor: "#0056b3",
                  color: "white",
                  padding: "12px 24px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Sign Up
              </button>
              <button
                style={{
                  backgroundColor: "#0056b3",
                  color: "white",
                  padding: "12px 24px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Login
              </button>
        </div>
      </header>
      <div style={styles.container}>
        <div style={styles.propertiesGrid}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
