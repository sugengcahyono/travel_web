import { Link } from 'react-router-dom';

const DestinationCard = ({ title, image, price, slug }) => {
  return (
    <Link to={`/blog/${slug}`}>
      <div className="rounded-lg shadow hover:shadow-md transition overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600">{price}</p>
        </div>
      </div>
    </Link>
  );
};


export default DestinationCard;
