interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ className, onClick, children }: ButtonProps) {
  const classes = `justify-center inline-flex cursor-pointer items-center gap-[10px] rounded-sm px-[20px] py-[10px] text-sm font-[500] shadow-sm ${className ?? ""}`;

  return (
    <button
      onClick={onClick}
      className={classes}>
      {children}
    </button>
  );
}
