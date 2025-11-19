import React, { forwardRef } from "react";

interface IInputForms {
    label: string;
    value: string;
    type?: string;
    onChange: (value: string) => void;
    onEnter?: () => void;
}

export const InfoUser = forwardRef<HTMLInputElement, IInputForms>((props, ref) => {

    return (
        <div >
            <label>
                <p>{props.label}</p>
                <input  className="shadow-xl shadow-black/10 p-1 rounded border-2 border-blue-600"
                ref = {ref}
                value = {props.value}
                type = {props.type}
                onChange = {(e) => props.onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        props.onEnter?.();
                    }
                }}
                >
                </input>
            </label>
        </div>
    );
});