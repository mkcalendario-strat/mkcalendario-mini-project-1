interface HighlightTab {
  className?: string;
  children: React.ReactNode;
}

export default function HighlightTab({ className, children }: HighlightTab) {
  const classes =
    `inline-block rounded-sm bg-blue-500/10 px-3 py-1 text-sm font-[500] text-blue-400 ${className ?? ""}`.trim();

  return <p className={classes}>{children}</p>;
}
