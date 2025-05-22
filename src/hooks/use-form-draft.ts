'use client';

import { useState, useEffect, useCallback } from 'react';
import { z } from 'zod';

/**
 * Hook for saving form drafts to localStorage and retrieving them later.
 * 
 * @param key - The key to use for localStorage
 * @param schema - Optional Zod schema to validate the stored data against
 * @param initialValues - Initial values for the form
 * @returns Object with draft state and methods to manage drafts
 */
export function useFormDraft<T extends Record<string, any>>(
  key: string,
  schema?: z.ZodType<any>,
  initialValues?: Partial<T>
) {
  const [draftData, setDraftData] = useState<Partial<T> | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [draftError, setDraftError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load draft from localStorage on mount
  useEffect(() => {
    // Only run in the client
    if (typeof window === 'undefined') return;

    try {
      const storedData = localStorage.getItem(key);
      
      if (!storedData) {
        setDraftData(initialValues || null);
        setIsLoaded(true);
        return;
      }
      
      const parsedData = JSON.parse(storedData);
      
      // If we have a timestamp, convert it back to a Date
      if (parsedData.savedAt) {
        parsedData.savedAt = new Date(parsedData.savedAt);
        setLastSaved(parsedData.savedAt);
      }
      
      // If we have a schema, validate the data
      if (schema) {
        const result = schema.safeParse(parsedData);
        if (!result.success) {
          console.warn('Draft validation failed:', result.error);
          setDraftError('El borrador guardado está corrupto o es inválido.');
          setDraftData(initialValues || null);
          setIsLoaded(true);
          return;
        }
        setDraftData(result.data.formData || initialValues || null);
      } else {
        setDraftData(parsedData.formData || initialValues || null);
      }
    } catch (error) {
      console.error('Error loading draft:', error);
      setDraftError('Error al cargar el borrador guardado.');
      setDraftData(initialValues || null);
    } finally {
      setIsLoaded(true);
    }
  }, [key, schema, initialValues]);

  // Save draft to localStorage
  const saveDraft = useCallback((data: Partial<T>) => {
    if (typeof window === 'undefined') return;
    
    try {
      const now = new Date();
      const draftPackage = {
        savedAt: now,
        formData: data
      };
      
      localStorage.setItem(key, JSON.stringify(draftPackage));
      setLastSaved(now);
      setDraftData(data);
      setDraftError(null);
      return true;
    } catch (error) {
      console.error('Error saving draft:', error);
      setDraftError('Error al guardar el borrador.');
      return false;
    }
  }, [key]);

  // Clear draft from localStorage
  const clearDraft = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(key);
      setDraftData(null);
      setLastSaved(null);
      setDraftError(null);
      return true;
    } catch (error) {
      console.error('Error clearing draft:', error);
      setDraftError('Error al eliminar el borrador.');
      return false;
    }
  }, [key]);

  return {
    draftData,
    lastSaved,
    draftError,
    isLoaded,
    saveDraft,
    clearDraft
  };
} 