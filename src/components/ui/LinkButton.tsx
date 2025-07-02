import Link from "next/link";

interface ButtonProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
  className?: string;
  children: React.ReactNode;
}

export default function LinkButton({
  href,
  target,
  className,
  children
}: ButtonProps) {
  const classes = `inline-flex cursor-pointer items-center gap-[10px] rounded-sm px-[20px] py-[10px] text-sm font-[500] shadow-sm ${className ?? ""}`;

  return (
    <Link
      href={href}
      target={target}
      className={classes}>
      {children}
    </Link>
  );
}
