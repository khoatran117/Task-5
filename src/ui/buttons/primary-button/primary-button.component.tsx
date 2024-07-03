"use client";

import { PlusIcon } from "../../../icons/Plus";
import { LoadingIcon } from "@/icons";
import { EButonIconPosition, EButtonSize, EPrimaryButtonVariant } from "@/enum";
import { cn } from "@/functions/cn";
import { isEmptyString } from "@/functions/validate";

export type PrimaryButtonVariant =
  | EPrimaryButtonVariant.PrimaryWhite
  | EPrimaryButtonVariant.PrimaryDark
  | EPrimaryButtonVariant.SecondaryDark;

export type PrimaryButtonSize =
  | EButtonSize.Small
  | EButtonSize.Large
  | EButtonSize.XL;

export type PrimaryButtonIconPosition =
  | EButonIconPosition.Left
  | EButonIconPosition.Right;

interface PrimaryButtonProps {
  variant?: PrimaryButtonVariant;
  label?: string;
  isLoading?: boolean;
  disabled?: boolean;
  hasIcon?: boolean;
  iconPosition?: PrimaryButtonIconPosition;
  size?: PrimaryButtonSize;
  className?: string;
  onClick?: () => void;
}

const getLoadingStyle = (style?: string) => {
  const primaryWhiteStyle =
    "bg-greyscale-grey-border-90 text-greyscale-grey-medium-50 pointer-events-none";
  const primaryDarkStyle =
    "bg-greyscale-grey-dark-20 text-greyscale-grey-text-95 pointer-events-none";
  const secondaryDarkStyle =
    "bg-greyscale-grey-dark-30 text-greyscale-grey-text-95 pointer-events-none";

  switch (style) {
    case EPrimaryButtonVariant.PrimaryWhite:
      return primaryWhiteStyle;

    case EPrimaryButtonVariant.PrimaryDark:
      return primaryDarkStyle;

    case EPrimaryButtonVariant.SecondaryDark:
      return secondaryDarkStyle;

    default:
      return primaryWhiteStyle;
  }
};

const getButtonStyle = (style?: string) => {
  const primaryWhiteStyle = "bg-greyscale-white text-greyscale-grey-dark-10";
  const primaryDarkStyle = "bg-greyscale-grey-dark-10 text-greyscale-white";
  const secondaryDarkStyle = "bg-greyscale-grey-dark-20 text-greyscale-white";

  switch (style) {
    case EPrimaryButtonVariant.PrimaryWhite:
      return primaryWhiteStyle;

    case EPrimaryButtonVariant.PrimaryDark:
      return primaryDarkStyle;

    case EPrimaryButtonVariant.SecondaryDark:
      return secondaryDarkStyle;

    default:
      return primaryWhiteStyle;
  }
};

const getButtonSize = (style?: string, isIconOnly?: boolean) => {
  const smallStyle = !isIconOnly ? "py-[5px] px-5 text-sm" : "p-[10px]";
  const largeStyle = !isIconOnly ? "py-[6px] px-6 text-lg" : "p-3";
  const XLStyle = !isIconOnly ? "py-2 px-8 text-lg" : "p-4";

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

export const PrimaryButton = (props?: PrimaryButtonProps) => {
  const buttonStyle = getButtonStyle(props?.variant);
  const loadingStyle = getLoadingStyle(props?.variant);
  const sizeStyle = getButtonSize(
    props?.size,
    isEmptyString(props?.label || "")
  );

  const disabledStyle =
    "bg-greyscale-grey-medium-50 text-greyscale-grey-placeholder-70 pointer-events-none";

  return (
    <div
      className={cn(
        "w-fit h-fit font-semibold rounded-sm hover:bg-mint-300 flex justify-center items-center gap-3 cursor-pointer focus:bg-red-700 hover:text-black",
        sizeStyle,
        buttonStyle,
        props?.isLoading && loadingStyle,
        props?.disabled && disabledStyle,
        props?.iconPosition === "left" && "flex-row-reverse",
        props?.className
      )}
      onClick={props?.onClick}
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
