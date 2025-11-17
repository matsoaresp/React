interface IInputLoginProps {
  label: string;
  value: string;
  emailLength?: number;
  onChange: (value: string) => void;
  onEnter?: () => void;
}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
  return (
    <label>
      {props.emailLength !== undefined && (
        <p>Quantidade de caracteres: {props.emailLength}</p>
      )}

      <span>{props.label}</span>

      <input
        value={props.value}
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
};
