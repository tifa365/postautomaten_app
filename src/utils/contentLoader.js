/**
 * Content loader utility
 * 
 * This file provides functions to load content from various sources
 * like JSON files, APIs, etc.
 */

// Import article content
import articleContent from '../content/article.json';

/**
 * Get the article content
 * @returns {Object} The article content
 */
export function getArticleContent() {
  return articleContent;
}

/**
 * Format a date string or date object according to German locale standards
 * @param {string|Date} dateString - The date to format
 * @returns {string} - Formatted date string (DD.MM.YYYY, HH:MM)
 */
export function formatDate(dateString) {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}