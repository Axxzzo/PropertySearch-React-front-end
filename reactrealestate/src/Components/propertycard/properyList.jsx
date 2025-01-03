import { useEffect, useState } from "react";
import PropertyCard from "./propertyCard"; // Updated import
import propertiesData from "./Properties.json"; // Import the JSON file

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties data from JSON file
    setProperties(propertiesData);
  }, []);

  return (
    <div className="property-list">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;