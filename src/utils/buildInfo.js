/**
 * Build information utility
 * 
 * This file contains information about the build that can be used in the application.
 * In a real production setup, you would use a build tool to inject the actual Git commit
 * date and other metadata during the build process.
 */

// The build time is set when the application is built
// In production, this would be injected by the build system
export const BUILD_TIME = new Date();

/**
 * Format a date according to German locale standards
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string (DD.MM.YYYY, HH:MM)
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}