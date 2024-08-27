"use client";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Page() {

  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20]);

  return (
    <div className="grid grid-cols-1 gap-3">
      <span className="mb-2">Slider Value: {sliderValue}</span>
      <Slider
        onValueChange={(value) => setSliderValue(value[0])}
        defaultValue={[sliderValue]}
        max={100}
        step={1}
      />

      <span className="mb-2">Slider Range Value: {rangeValue.join(', ')}</span>
      <Slider
        onValueChange={setRangeValue}
        defaultValue={rangeValue}
        max={100}
        step={1}
      />
    </div>
  );
}