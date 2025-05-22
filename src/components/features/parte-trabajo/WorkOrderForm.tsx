'use client';

import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
} from 'lucide-react';

import { 
  WorkOrderFormProvider, 
  useWorkOrderForm, 
  WorkOrderFormStep 
} from '@/lib/context/WorkOrderFormContext';
import BasicInfoForm from './BasicInfoForm';
import WorkOrderLinesForm from './WorkOrderLinesForm';
import WorkOrderReview from './WorkOrderReview';

function FormStepper() {
  const { currentStep, goToStep } = useWorkOrderForm();
  
  const steps = [
    { label: 'Información Básica', value: WorkOrderFormStep.BasicInfo },
    { label: 'Detalles del Parte', value: WorkOrderFormStep.WorkOrderLines },
    { label: 'Revisión', value: WorkOrderFormStep.Review },
  ];
  
  return (
    <div className="relative mb-0">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div 
            key={step.value}
            className={`flex flex-col items-center z-10 ${currentStep >= step.value ? 'text-primary' : 'text-muted-foreground'}`}
          >
            <div 
              className={`flex items-center justify-center w-7 h-7 rounded-full mb-0 
                ${currentStep >= step.value 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
                }
                ${currentStep === step.value 
                  ? 'ring-2 ring-offset-1 ring-ring' 
                  : ''
                }
              `}
              onClick={() => {
                // Only allow clicking on completed steps or the current one
                if (currentStep >= step.value) {
                  goToStep(step.value);
                }
              }}
              role={currentStep >= step.value ? "button" : undefined}
              tabIndex={currentStep >= step.value ? 0 : -1}
              aria-current={currentStep === step.value ? "step" : undefined}
            >
              {index + 1}
            </div>
            <span className="text-xs font-medium text-center hidden sm:block">
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute top-3.5 left-0 right-0 h-[2px] bg-muted -z-10">
        <div 
          className="h-full bg-primary transition-all"
          style={{ 
            width: `${(currentStep / (steps.length - 1)) * 100}%` 
          }}
        />
      </div>
    </div>
  );
}

function WorkOrderFormContent() {
  const { 
    currentStep, 
    prevStep, 
    nextStep, 
  } = useWorkOrderForm();
  
  // Helper function to handle navigation between steps
  const handleNextStep = () => {
    if (currentStep === WorkOrderFormStep.BasicInfo) {
      // Trigger the submit on the BasicInfo form
      const submitButton = document.getElementById('submit-basic-info');
      if (submitButton) {
        submitButton.click();
      }
      // Next step will be called in the BasicInfoForm component
    } else {
      // For other steps, just call nextStep directly
      nextStep();
    }
  };
  
  // Render form based on current step
  const renderForm = () => {
    switch (currentStep) {
      case WorkOrderFormStep.BasicInfo:
        return <BasicInfoForm />;
      case WorkOrderFormStep.WorkOrderLines:
        return <WorkOrderLinesForm />;
      case WorkOrderFormStep.Review:
        return <WorkOrderReview />;
      default:
        return <div>Error: Paso desconocido</div>;
    }
  };
  
  return (
    <div className="w-full mx-auto sm:max-w-2xl">
      <Card className="border shadow-sm">
        <CardHeader className="pb-0 pt-1 px-2 sm:px-4">
          <FormStepper />
        </CardHeader>
        
        <CardContent className="px-2 py-1 sm:p-4">
          {renderForm()}
        </CardContent>
        
        <CardFooter className="flex flex-col p-2 pt-2 sm:p-4 border-t">
          <div className="flex justify-between w-full gap-2">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === WorkOrderFormStep.BasicInfo}
              type="button"
              className="gap-1 h-9"
              size="sm"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>
            
            {currentStep < WorkOrderFormStep.Review ? (
              <Button
                onClick={handleNextStep}
                type="button" 
                className="gap-1 h-9"
                size="sm"
              >
                Siguiente
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => {
                  const form = document.getElementById('form-review');
                  if (form) {
                    // Trigger form submission manually
                    const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
                    form.dispatchEvent(submitEvent);
                  }
                }}
                className="gap-1 h-9"
                size="sm"
              >
                Crear Parte
                <CheckCircle2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function WorkOrderForm() {
  return (
    <WorkOrderFormProvider>
      <WorkOrderFormContent />
    </WorkOrderFormProvider>
  );
} 