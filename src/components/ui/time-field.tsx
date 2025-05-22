"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

export interface TimeValue {
  hours: number;
  minutes: number;
}

interface TimeFieldProps {
  value: TimeValue;
  onChange: (value: TimeValue) => void;
}

export function TimeField({ value, onChange }: TimeFieldProps) {
  const [hours, setHours] = React.useState(
    value.hours.toString().padStart(2, '0')
  );
  const [minutes, setMinutes] = React.useState(
    value.minutes.toString().padStart(2, '0')
  );

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHours = e.target.value;
    if (newHours === '' || /^\d{1,2}$/.test(newHours)) {
      setHours(newHours);
      const parsedHours = parseInt(newHours || '0', 10);
      if (parsedHours >= 0 && parsedHours <= 23) {
        onChange({
          hours: parsedHours,
          minutes: value.minutes,
        });
      }
    }
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinutes = e.target.value;
    if (newMinutes === '' || /^\d{1,2}$/.test(newMinutes)) {
      setMinutes(newMinutes);
      const parsedMinutes = parseInt(newMinutes || '0', 10);
      if (parsedMinutes >= 0 && parsedMinutes <= 59) {
        onChange({
          hours: value.hours,
          minutes: parsedMinutes,
        });
      }
    }
  };

  // Update input values when the value prop changes
  React.useEffect(() => {
    setHours(value.hours.toString().padStart(2, '0'));
    setMinutes(value.minutes.toString().padStart(2, '0'));
  }, [value.hours, value.minutes]);

  return (
    <div className="flex items-center space-x-2">
      <Input
        type="text"
        value={hours}
        onChange={handleHoursChange}
        maxLength={2}
        className="w-14 text-center"
        placeholder="HH"
      />
      <span className="text-lg">:</span>
      <Input
        type="text"
        value={minutes}
        onChange={handleMinutesChange}
        maxLength={2}
        className="w-14 text-center"
        placeholder="MM"
      />
    </div>
  );
} 