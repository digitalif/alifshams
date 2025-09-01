const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/userRouter");
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json()); // Add this to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Add this to parse URL-encoded bodies
// app.use((req, res, next) => {
//   if (req.hostname.startsWith("www.")) {
//     const newHost = req.hostname.replace("www.", "");
//     res.redirect(301, `${req.protocol}://${newHost}${req.originalUrl}`);
//   } else {
//     next();
//   }
// });
app.use(express.static(path.join(__dirname, "./build")));

// Explicit favicon route
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, './build/favicon.ico'));
});

app.use("/user", userRouter);
// Catch-all route for all other requests (SPA support)
app.get("*", (req, res) => {
  const fs = require('fs');
  const indexPath = path.join(__dirname, "./build", "index.html");
  
  // Read the HTML file
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading page');
    }
    
    // Replace default title and description based on route
    let modifiedHtml = data;
    
    // Define route-specific SEO data
    const seoRoutes = {
      '/': {
        title: 'AlifShams - AI Consulting, Digital Marketing & Technology Solutions',
        description: 'Transform your business with expert AI consulting, digital marketing, and technology solutions in Dubai, UAE.'
      },
      '/about': {
        title: 'About AlifShams - Leading AI Consulting & Technology Solutions Company',
        description: 'Learn about AlifShams, a leading technology solutions provider specializing in AI consulting, digital marketing, and business transformation.'
      },
      '/contact': {
        title: 'Contact AlifShams - Get in Touch for AI Consulting & Digital Marketing',
        description: 'Contact AlifShams for expert AI consulting, digital marketing, and technology solutions. Located in Dubai, UAE.'
      },
      '/journey': {
        title: 'Partner with AlifShams - Your AI & Digital Transformation Journey',
        description: 'Join forces with AlifShams to transform your business through innovative AI and technology solutions. Start your transformation journey today.'
      },
      '/solutions': {
        title: 'Our Solutions - AI Consulting, Digital Marketing & Technology Services',
        description: 'Explore our comprehensive solutions including AI consulting, digital marketing, and business technology services.'
      },
      // AI Consulting Routes
      '/solutions/AIConsulting': {
        title: 'AI Consulting Services - Custom AI Development & Strategy | AlifShams',
        description: 'Expert AI consulting services in Dubai, UAE including AI strategy, custom AI development, generative AI, agentic AI, and ethical AI compliance.'
      },
      '/solutions/AIConsulting/AIstrategy': {
        title: 'AI Strategy Development & Implementation Services | AlifShams',
        description: 'Expert AI strategy development and implementation services. Create comprehensive AI roadmaps, assess capabilities, and drive measurable ROI.'
      },
      '/solutions/AIConsulting/customAI-development': {
        title: 'Custom AI Development Services - Machine Learning & Neural Networks',
        description: 'Build tailored AI solutions from scratch using cutting-edge technologies. Expert team develops machine learning models and AI applications.'
      },
      '/solutions/AIConsulting/genAI-development': {
        title: 'Generative AI Development Services - LLMs & Chatbots | AlifShams',
        description: 'Harness the power of generative AI with custom LLMs, chatbots, and content generation systems. GPT-based solutions and AI-powered tools.'
      },
      '/solutions/AIConsulting/agenticAI': {
        title: 'Agentic AI Solutions - Autonomous AI Agents | AlifShams',
        description: 'Deploy autonomous AI agents that perform complex tasks independently. Intelligent automation, decision-making systems, and self-learning agents.'
      },
      '/solutions/AIConsulting/ethicalAI-compliance': {
        title: 'Ethical AI & Compliance Services - Responsible AI Deployment',
        description: 'Ensure responsible AI deployment with comprehensive ethics frameworks and compliance strategies. Bias detection and regulatory compliance.'
      },
      '/solutions/AIConsulting/AI-research': {
        title: 'AI Research & Training Services - Workshops & Certification',
        description: 'Stay ahead with cutting-edge AI research and comprehensive team training programs. Workshops, certification courses, and ongoing support.'
      },
      // Business & Technology Routes
      '/solutions/business-technology': {
        title: 'Business & Technology Consulting - Microsoft, Cloud & Cybersecurity | AlifShams',
        description: 'Expert business and technology consulting services in Dubai, UAE including Microsoft solutions, cloud migration, cybersecurity, and digital transformation.'
      },
      '/solutions/business-technology/microsoft': {
        title: 'Microsoft Services - Azure, Office 365 & Power Platform | AlifShams',
        description: 'Implement Azure Cloud, Microsoft 365, Power Platform, and Copilot AI services. Expert Microsoft consulting and implementation.'
      },
      '/solutions/business-technology/website-design': {
        title: 'Website Design & Development Services - UX-Rich Solutions',
        description: 'Craft UX-rich, high-performance websites integrated with analytics and automation. Professional web development services.'
      },
      '/solutions/business-technology/cloud-solutions': {
        title: 'Cloud Solutions - AWS, GCP & Azure Migration | AlifShams',
        description: 'Migrate, modernize, and manage workloads across AWS, GCP, and Azure using cost-effective, secure architectures.'
      },
      '/solutions/business-technology/cybersecurity': {
        title: 'Cybersecurity Services - Risk Assessment & Threat Detection',
        description: 'Conduct risk assessments, build secure access control, implement threat detection, and manage compliance audits.'
      },
      '/solutions/business-technology/strategy-digitalTransformation': {
        title: 'Digital Transformation Strategy - Business Model Innovation',
        description: 'Shape business models, redefine service delivery using digital tools, and guide leadership through change journeys.'
      },
      '/solutions/business-technology/risk-compliance': {
        title: 'Governance, Risk & Compliance - Enterprise Strategy | AlifShams',
        description: 'Develop enterprise governance strategies across IT, data, and AI to ensure ongoing resilience and audit-readiness.'
      },
      // Digital Marketing Routes
      '/solutions/digital-marketing': {
        title: 'Digital Marketing Services - SEO, Social Media & Content Marketing | AlifShams',
        description: 'Comprehensive digital marketing services in Dubai, UAE including SEO, social media marketing, demand generation, email marketing, video marketing, and influencer marketing.'
      },
      '/solutions/digital-marketing/demand-generation': {
        title: 'Demand Generation Services - Sales Pipelines & Lead Nurturing',
        description: 'Launch multi-touch digital campaigns, nurture leads through funnels, and optimize conversion with expert demand generation.'
      },
      '/solutions/digital-marketing/seo': {
        title: 'SEO Services - Search Engine Optimization & Ranking | AlifShams',
        description: 'Professional SEO services to boost your search rankings. Technical SEO audits, keyword research, on-page optimization, local SEO, and performance analytics.'
      },
      '/solutions/digital-marketing/smm': {
        title: 'Social Media Marketing Services - SMM & Social Advertising | AlifShams',
        description: 'Professional social media marketing services including content strategy, targeted advertising, and social media management across all platforms.'
      },
      '/solutions/digital-marketing/content-marketing': {
        title: 'Email & Content Marketing Services - Automated Campaigns',
        description: 'Develop automated email journeys and SEO-rich, AI-powered blogs, whitepapers, and guides for effective content marketing.'
      },
      '/solutions/digital-marketing/video-marketing': {
        title: 'Video Marketing Services - Promotional Videos & Corporate Stories',
        description: 'Create promotional videos, explainers, reels, and corporate stories that elevate brand recall and engagement.'
      },
      '/solutions/digital-marketing/influencer-marketing': {
        title: 'Influencer Marketing Services - Regional Creator Networks',
        description: 'Partner with regional influencers to amplify campaigns using vetted creator networks and strategic partnerships.'
      },
      // Case Studies Routes
      '/solutions/casestudies/redingtongulf': {
        title: 'Redington Gulf Case Study - Digital Transformation Success',
        description: 'Discover how AlifShams helped Redington Gulf achieve digital transformation success with innovative technology solutions.'
      },
      '/solutions/casestudies/microsoft': {
        title: 'Microsoft Case Study - Enterprise Solutions Implementation',
        description: 'Learn how AlifShams implemented comprehensive Microsoft enterprise solutions for improved business efficiency.'
      },
      '/solutions/casestudies/microsoftksa': {
        title: 'Microsoft KSA Case Study - Cloud Migration & Digital Strategy',
        description: 'Explore our successful Microsoft KSA project featuring cloud migration and comprehensive digital strategy implementation.'
      },
      '/solutions/casestudies/qatar': {
        title: 'Qatar Case Study - AI & Technology Consulting Success',
        description: 'See how AlifShams delivered successful AI and technology consulting solutions for our Qatar-based client.'
      }
    };
    
    // Find matching route (exact match first, then fallback)
    let routeData = seoRoutes[req.path];
    
    // Fallback logic for unmatched routes
    if (!routeData) {
      if (req.path.includes('/solutions/AIConsulting')) {
        routeData = seoRoutes['/solutions/AIConsulting'];
      } else if (req.path.includes('/solutions/digital-marketing')) {
        routeData = seoRoutes['/solutions/digital-marketing'];
      } else if (req.path.includes('/solutions/business-technology')) {
        routeData = seoRoutes['/solutions/business-technology'];
      } else if (req.path.includes('/solutions')) {
        routeData = seoRoutes['/solutions'];
      } else {
        routeData = seoRoutes['/'];
      }
    }
    
    // Replace title and description
    modifiedHtml = modifiedHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${routeData.title}</title>`
    ).replace(
      /<meta name="description" content=".*?"/,
      `<meta name="description" content="${routeData.description}"`
    );
    
    res.send(modifiedHtml);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
