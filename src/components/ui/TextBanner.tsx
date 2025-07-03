interface TextBannerProps {
  text: string;
  className?: string;
}

export default function TextBanner({ className, text }: TextBannerProps) {
  const classes = `py-[25px] border-y-1 border-neutral-700 ${className ?? ""}`;

  return (
    <div className={classes}>
      <div className="m-auto max-w-[700px]">
        <h1 className="text-center text-3xl font-bold text-neutral-100">
          {text}
        </h1>
      </div>
    </div>
  );
}
