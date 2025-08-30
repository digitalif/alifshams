import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOComponent = ({ 
  title = "AlifShams - Digital Marketing & AI Consulting Services",
  description = "Leading digital marketing, AI consulting, and technology solutions. Expert SEO, social media marketing, demand generation, and custom AI development services.",
  keywords = "digital marketing, SEO, AI consulting, social media marketing, demand generation, web development, technology consulting, artificial intelligence",
  url = typeof window !== 'undefined' ? window.location.href : '',
  image = "/og-image.jpg",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AlifShams" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="AlifShams" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AlifShams",
          "url": url,
          "description": description
        })}
      </script>
    </Helmet>
  );
};

export default SEOComponent;