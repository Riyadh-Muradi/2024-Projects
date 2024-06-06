"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../ui/button";

interface ColorPickerProps {
  value?: string;
}

const ColorPicker = ({ value = "#00000" }: ColorPickerProps) => {
  const [color, setColor] = useState(value);
  const [isCopied, setCopied] = useState(false);
  const pickerId = `color-picker_${Date.now()}`;

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(true);
    });

    setTimeout(() => setCopied(false), 600);
  };

  useEffect(() => setColor(value), [value]);

  return (
    <section className="flex flex-col rounded-xl bg-black p-5 drop-shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-white">
      <input
        onChange={handleColorChange}
        type={"color"}
        id={pickerId}
        className="h-0 w-0 opacity-0"
      />

      <section className="relative">
        <label htmlFor={pickerId}>
          <div
            style={{ backgroundColor: color }}
            className="absolute h-64 w-64 rounded-xl"
          />
          <div
            style={{ backgroundColor: color }}
            className="cursor-pointer opcaity-50 h-64 w-64 rounded-xl blur-md"
          />
        </label>
      </section>
      <Button
        className="font-sm mt-4 cursor-pointer bg-background text-lg text-foreground hover:bg-background hover:font-bold dark:bg-background dark:text-foreground dark:hover:bg-background"
        onClick={handleCopyToClipBoard}
      >
        {isCopied ? "Color copied" : color}
      </Button>
    </section>
  );
};

export default ColorPicker;
