interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (nextValue: string) => void;
}

export const Input = ({ value, onChange, ...rest }: Props) => {
  return (
    <input
      {...rest}
      className={`p-4 ${rest.className}`}
      style={{
        borderRadius: "8px",
        background: "var(--others-input-field, #FFF)",
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
      }}
      value={value}
      onChange={handleValueChange}
    />
  );

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }
};
