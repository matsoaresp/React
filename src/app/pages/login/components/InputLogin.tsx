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
    <label>
      {props.emailLength !== undefined && (
        <p>Quantidade de caracteres: {props.emailLength}</p>
      )}

      <span>{props.label}</span>

      <input
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
