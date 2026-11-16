import React, { useEffect } from 'react';
import { useRouter } from '../router/RouterContext';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  canonicalPath,
  ogImage = '/favicon.png',
  ogType = 'website',
  schema 
}) => {
  const { currentPath } = useRouter();
  const effectivePath = canonicalPath || currentPath || '/';

  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title.includes('Cocoonmail') || title.includes('CocoonMail') 
      ? title 
      : `${title} | Cocoonmail`;
    document.title = formattedTitle;
    
    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Open Graph Tags
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('og:title', formattedTitle);
    setMetaTag('og:description', description);
    setMetaTag('og:type', ogType);
    setMetaTag('og:site_name', 'Cocoonmail');
    if (typeof window !== 'undefined') {
      const canonicalUrl = `${window.location.origin}${effectivePath}`;
      setMetaTag('og:url', canonicalUrl);
      setMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`);

      // 4. Canonical Tag
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', canonicalUrl);
    }

    // 5. Twitter Card Tags
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', formattedTitle);
    setTwitterTag('twitter:description', description);
    if (typeof window !== 'undefined') {
      setTwitterTag('twitter:image', ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`);
    }

    // 6. Dynamic JSON-LD Schema (GEO / Rich Snippets)
    let schemaScript = document.getElementById('page-json-ld');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('id', 'page-json-ld');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, effectivePath, ogImage, ogType, schema]);

  return null;
};
