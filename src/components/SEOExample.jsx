import React from 'react';
import SEOComponent from './SEOComponent';

// Example usage of SEO Component
const HomePage = () => {
  return (
    <div>
      <SEOComponent 
        title="AlifShams - Digital Marketing & AI Consulting"
        description="Transform your business with expert digital marketing, AI consulting, and technology solutions. Boost your online presence with our SEO, social media, and AI services."
        keywords="digital marketing, SEO services, AI consulting, social media marketing, web development, technology consulting, artificial intelligence, demand generation"
        url="https://alifshams.com"
        image="https://alifshams.com/og-image.jpg"
        type="website"
      />
      
      {/* Your page content */}
      <h1>Welcome to AlifShams</h1>
    </div>
  );
};

// SEO for specific service pages
const SEOServicePage = () => {
  return (
    <div>
      <SEOComponent 
        title="SEO Services - Boost Your Search Rankings | AlifShams"
        description="Professional SEO services to improve your search rankings. Technical SEO, keyword research, on-page optimization, and performance analytics."
        keywords="SEO services, search engine optimization, keyword research, technical SEO, on-page SEO, local SEO, SEO audit"
        url="https://alifshams.com/services/seo"
        type="service"
      />
      
      {/* SEO service page content */}
      <h1>SEO Services</h1>
    </div>
  );
};

export { HomePage, SEOServicePage };