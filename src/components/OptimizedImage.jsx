import React from 'react';

const OptimizedImage = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      // fetchPriority="low"
      {...props}
      // style={{
      //   maxWidth: '100%',
      //   height: 'auto',
      //   ...props.style
      // }}
    />
  );
};

export default OptimizedImage;