import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '',
  shadow = true,
  rounded = 'lg'
}) => {
  const baseClasses = `bg-white dark:bg-gray-800 p-6 ${shadow ? 'shadow-md' : ''} rounded-${rounded}`;
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  shadow: PropTypes.bool,
  rounded: PropTypes.string
};

export default Card;