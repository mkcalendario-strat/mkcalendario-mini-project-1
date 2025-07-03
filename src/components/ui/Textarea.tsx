type TextareaProps = React.InputHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ className, ...props }: TextareaProps) {
  const classes =
    `w-full rounded-sm px-[15px] py-[10px] h-[100px] outline-1 outline-neutral-500 focus:outline-2 text-neutral-300 placeholder:text-neutral-500 px-[10px] py-[7px] ${className ?? ""}`.trim();

  return (
    <textarea
      {...props}
      className={classes}
    />
  );
}
