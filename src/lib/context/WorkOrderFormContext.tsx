'use client';

import React, { createContext, useState, useContext, useCallback } from 'react';
import { ParteTrabajoFormValues, LineaParteValues } from '@/lib/validators/parteSchema';

// The steps in our multi-step form
export enum WorkOrderFormStep {
  BasicInfo = 0,
  WorkOrderLines = 1,
  Review = 2,
}

interface WorkOrderFormContextType {
  // Form state
  currentStep: WorkOrderFormStep;
  formData: Partial<ParteTrabajoFormValues>;
  isValid: boolean;
  isSubmitting: boolean;
  
  // Navigation
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: WorkOrderFormStep) => void;
  
  // Form data management
  updateFormData: (data: Partial<ParteTrabajoFormValues>) => void;
  addLineaParte: (linea: LineaParteValues) => void;
  removeLineaParte: (index: number) => void;
  updateLineaParte: (index: number, linea: LineaParteValues) => void;
  
  // Submission
  resetForm: () => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
}

const WorkOrderFormContext = createContext<WorkOrderFormContextType | undefined>(undefined);

export function WorkOrderFormProvider({ children }: { children: React.ReactNode }) {
  // Step state
  const [currentStep, setCurrentStep] = useState<WorkOrderFormStep>(WorkOrderFormStep.BasicInfo);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form data - simplified without any external dependencies
  const [formData, setFormData] = useState<Partial<ParteTrabajoFormValues>>({
    estado: 'PENDIENTE',
    firmado: false,
    lineasParte: [],
  });
  
  // Navigation functions
  const nextStep = useCallback(() => {
    setCurrentStep(prev => {
      const nextStep = prev + 1;
      if (nextStep > WorkOrderFormStep.Review) {
        return prev;
      }
      return nextStep;
    });
  }, []);
  
  const prevStep = useCallback(() => {
    setCurrentStep(prev => {
      const nextStep = prev - 1;
      if (nextStep < WorkOrderFormStep.BasicInfo) {
        return prev;
      }
      return nextStep;
    });
  }, []);
  
  const goToStep = useCallback((step: WorkOrderFormStep) => {
    if (step >= WorkOrderFormStep.BasicInfo && step <= WorkOrderFormStep.Review) {
      setCurrentStep(step);
    }
  }, []);
  
  // Form data management
  const updateFormData = useCallback((data: Partial<ParteTrabajoFormValues>) => {
    setFormData(prev => ({
      ...prev,
      ...data,
    }));
  }, []);
  
  const addLineaParte = useCallback((linea: LineaParteValues) => {
    setFormData(prev => ({
      ...prev,
      lineasParte: [...(prev.lineasParte || []), linea],
    }));
  }, []);
  
  const removeLineaParte = useCallback((index: number) => {
    setFormData(prev => {
      const lineasParte = [...(prev.lineasParte || [])];
      lineasParte.splice(index, 1);
      return {
        ...prev,
        lineasParte,
      };
    });
  }, []);
  
  const updateLineaParte = useCallback((index: number, linea: LineaParteValues) => {
    setFormData(prev => {
      const lineasParte = [...(prev.lineasParte || [])];
      lineasParte[index] = linea;
      return {
        ...prev,
        lineasParte,
      };
    });
  }, []);
  
  // Reset form state
  const resetForm = useCallback(() => {
    setCurrentStep(WorkOrderFormStep.BasicInfo);
    setFormData({
      estado: 'PENDIENTE',
      firmado: false,
      lineasParte: [],
    });
    setIsValid(false);
    setIsSubmitting(false);
  }, []);
  
  const value = {
    currentStep,
    formData,
    isValid,
    isSubmitting,
    
    nextStep,
    prevStep,
    goToStep,
    
    updateFormData,
    addLineaParte,
    removeLineaParte,
    updateLineaParte,
    
    resetForm,
    setIsSubmitting,
  };
  
  return (
    <WorkOrderFormContext.Provider value={value}>
      {children}
    </WorkOrderFormContext.Provider>
  );
}

export function useWorkOrderForm() {
  const context = useContext(WorkOrderFormContext);
  if (context === undefined) {
    throw new Error('useWorkOrderForm must be used within a WorkOrderFormProvider');
  }
  return context;
} 