interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export const Button = ({ label, onClick, icon, ...rest }: Props) => {
  return (
    // <button className="px-10 py-3 flex justify-center items-center bg-button-background focus:border-button-focus-outline text-white shadow-button-shadow border-r-8 border-solid">
    <button
      style={{
        display: "inline-flex",
        padding: "12px 40px",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        borderRadius: "8px",
        background: "var(--interactive-primary, #232125)",
        /* Level 1 */
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
        color: "white",
      }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};
