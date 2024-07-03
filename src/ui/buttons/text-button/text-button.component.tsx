import { EButonIconPosition, EButtonSize, ETextButtonVariant } from "@/enum";
import { cn } from "@/functions/cn";
import { isEmptyString } from "@/functions/validate";
import { LoadingIcon, PlusIcon } from "@/icons";

export type TextButtonVariant =
  | ETextButtonVariant.TextWhite
  | ETextButtonVariant.TextDark;

export type TextButtonSize =
  | EButtonSize.Small
  | EButtonSize.Large
  | EButtonSize.XL;

export type TextButtonIconPosition =
  | EButonIconPosition.Left
  | EButonIconPosition.Right;

interface PrimaryButtonProps {
  variant?: TextButtonVariant;
  label?: string;
  isLoading?: boolean;
  disabled?: boolean;
  hasIcon?: boolean;
  iconPosition?: TextButtonIconPosition;
  size?: TextButtonSize;
  className?: string;
}

const getButtonStyle = (style?: string) => {
  const primaryDarkStyle = " text-greyscale-grey-dark-10";
  const primaryWhiteStyle = "text-greyscale-white";

  switch (style) {
    case ETextButtonVariant.TextWhite:
      return primaryWhiteStyle;

    case ETextButtonVariant.TextDark:
      return primaryDarkStyle;

    default:
      return primaryWhiteStyle;
  }
};

const getButtonSize = (style?: string, isIconOnly?: boolean) => {
  const smallStyle = !isIconOnly ? "py-[5px] px-5 text-sm" : "p-[10px] text-sm";
  const largeStyle = !isIconOnly ? "py-[6px] px-6 text-lg" : "p-3 text-lg";
  const XLStyle = !isIconOnly ? "py-2 px-8 text-xl" : "p-4 text-xl";

  switch (style) {
    case EButtonSize.Small:
      return smallStyle;

    case EButtonSize.Large:
      return largeStyle;

    case EButtonSize.XL:
      return XLStyle;

    default:
      return smallStyle;
  }
};

export const TextButton = (props?: PrimaryButtonProps) => {
  const disabledStyle = "text-greyscale-grey-dark-30 pointer-events-none";
  const loadingStyle = "text-greyscale-grey-medium-50 pointer-events-none";
  const buttonStyle = getButtonStyle(props?.variant);
  const sizeStyle = getButtonSize(
    props?.size,
    isEmptyString(props?.label || "")
  );

  return (
    <div
      className={cn(
        "w-fit h-fit font-semibold   hover:text-mint-900 flex justify-center items-center gap-3 cursor-pointer text-red-500",
        sizeStyle,
        buttonStyle,
        props?.isLoading && loadingStyle,
        props?.disabled && disabledStyle,
        props?.iconPosition === "left" && "flex-row-reverse",
        props?.className
      )}
    >
      {props?.label}
      {props?.hasIcon &&
        (props?.isLoading ? (
          <div className="animate-spin-slow">
            <LoadingIcon />
          </div>
        ) : (
          <PlusIcon />
        ))}
    </div>
  );
};
