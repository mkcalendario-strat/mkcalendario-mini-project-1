type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  const classes =
    `w-full rounded-sm  outline-1 outline-neutral-500 focus:outline-2 text-neutral-300 placeholder:text-neutral-500 px-[15px] py-[10px] ${className ?? ""}`.trim();

  return (
    <input
      {...props}
      className={classes}
    />
  );
}
