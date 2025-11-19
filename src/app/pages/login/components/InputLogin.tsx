import React, { forwardRef } from "react";

interface IInputLoginProps {
  label: string;
  value: string;
  type?: string;
  emailLength?: number;
  onChange: (value: string) => void;
  onEnter?: () => void;
}

export const InputLogin = forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
    <label className="gap-2 flex flex-col w-full ">
      {props.emailLength !== undefined && (
        <p>Quantidade de caracteres: {props.emailLength}</p>
      )}

      <span className="font-medium" >{props.label}</span>

      <input className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ref={ref}
        value={props.value}
        type={props.type}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            props.onEnter?.();
          }
        }}
      />
    </label>
  );
});
