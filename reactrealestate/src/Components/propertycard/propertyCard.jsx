import "./PropertyCard.css"; // Optional: for styling
import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} className="property-image" />
      <div className="property-details">
        <h2>{property.name}</h2>
        <p>{property.description}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <p><strong>Location:</strong> {property.location}</p>
      </div>
    </div>
  );
};
PropertyCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;
