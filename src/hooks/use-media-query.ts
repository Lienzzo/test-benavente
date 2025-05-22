'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to handle media queries in React components
 * 
 * @param query The media query to match (e.g., "(min-width: 768px)")
 * @returns A boolean indicating whether the query matches
 */
export function useMediaQuery(query: string): boolean {
  // Initialize with null to avoid hydration mismatch (server vs client)
  const [matches, setMatches] = useState<boolean>(false);
  
  useEffect(() => {
    // Ensure we're in a browser environment
    if (typeof window !== 'undefined') {
      // Initial check - does this media query match?
      const media = window.matchMedia(query);
      setMatches(media.matches);
      
      // Function to handle changes to the match status
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
      
      // Add listener to update state when matches change
      media.addEventListener('change', listener);
      
      // Clean up the listener on unmount
      return () => {
        media.removeEventListener('change', listener);
      };
    }
    
    // Default to false on server
    return undefined;
  }, [query]);
  
  return matches;
} 