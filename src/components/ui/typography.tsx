import React from "react";
import { cn } from "@/lib/utils";

const typographyStyles = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  p: "leading-7 text-sm",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  ul: "my-6 ml-6 list-disc [&>li]:mt-2",
  ol: "my-6 ml-6 list-decimal [&>li]:mt-2",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
  span: "",
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: keyof typeof typographyStyles;
  value: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  className,
  variant = "p",
  value,
  ...props
}) => {
  const variantClass = typographyStyles[variant];

  switch (variant) {
    case "h1":
      return (
        <h1 className={cn(variantClass, className)} {...props}>
          {value}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(variantClass, className)} {...props}>
          {value}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(variantClass, className)} {...props}>
          {value}
        </h3>
      );
    case "h4":
      return (
        <h4 className={cn(variantClass, className)} {...props}>
          {value}
        </h4>
      );
    case "h5":
      return (
        <h5 className={cn(variantClass, className)} {...props}>
          {value}
        </h5>
      );
    case "blockquote":
      return (
        <blockquote className={cn(variantClass, className)} {...props}>
          {value}
        </blockquote>
      );
    case "ul":
      return (
        <ul className={cn(variantClass, className)} {...props}>
          {value}
        </ul>
      );
    case "ol":
      return (
        <ol className={cn(variantClass, className)} {...props}>
          {value}
        </ol>
      );
    case "lead":
      return (
        <p className={cn(typographyStyles.lead, className)} {...props}>
          {value}
        </p>
      );
    case "large":
      return (
        <p className={cn(typographyStyles.large, className)} {...props}>
          {value}
        </p>
      );
    case "small":
      return (
        <small className={cn(typographyStyles.small, className)} {...props}>
          {value}
        </small>
      );
    case "muted":
      return (
        <p className={cn(typographyStyles.muted, className)} {...props}>
          {value}
        </p>
      );
    case "span":
      return (
        <span className={cn(typographyStyles.span, className)} {...props}>
          {value}
        </span>
      );
    default:
      return (
        <p className={cn(variantClass, className)} {...props}>
          {value}
        </p>
      );
  }
};

export { Typography };
