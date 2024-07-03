import {
  EButonIconPosition,
  EButtonSize,
  EPrimaryButtonVariant,
  ETextButtonVariant,
} from "@/enum";
import {
  PrimaryButtonSize,
  PrimaryButtonVariant,
  PrimaryButton,
} from "@/ui/buttons/primary-button";
import {
  TextButton,
  TextButtonSize,
  TextButtonVariant,
} from "@/ui/buttons/text-button";

const primaryTypeList = [
  EPrimaryButtonVariant.PrimaryWhite,
  EPrimaryButtonVariant.PrimaryDark,
  EPrimaryButtonVariant.SecondaryDark,
];

const textTypeList = [
  ETextButtonVariant.TextWhite,
  ETextButtonVariant.TextDark,
];

const sizeList = [EButtonSize.Small, EButtonSize.Large, EButtonSize.XL];

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {primaryTypeList?.map((type) => (
        <div className="px-10 my-20">
          <div className="text-4xl font-bold text-white text-center">
            {type}
          </div>

          <div className="flex flex-wrap gap-10 justify-center my-3">
            {sizeList?.map((size) => (
              <>
                <div className="flex flex-col gap-4">
                  <div className="text-2xl font-bold text-white">{size}</div>

                  <div className="flex gap-3 items-center">
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      label="Button Text"
                    />
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      hasIcon
                      iconPosition={EButonIconPosition.Left}
                      label="Button Text"
                    />
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      hasIcon
                      label="Button Text"
                    />
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      hasIcon
                    />
                  </div>

                  <div className="flex gap-3 items-center">
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      label="Button Text"
                      disabled
                    />
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      hasIcon
                      iconPosition={EButonIconPosition.Left}
                      label="Button Text"
                      disabled
                    />
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      hasIcon
                      label="Button Text"
                      disabled
                    />
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      hasIcon
                      disabled
                    />
                  </div>

                  <div className="flex gap-3 items-center">
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      isLoading
                      label="Button Text"
                    />
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      hasIcon
                      isLoading
                      iconPosition={EButonIconPosition.Left}
                      label="Button Text"
                    />
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      hasIcon
                      isLoading
                      label="Button Text"
                    />
                    <PrimaryButton
                      variant={type as PrimaryButtonVariant}
                      size={size as PrimaryButtonSize}
                      hasIcon
                      isLoading
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}

      {textTypeList?.map((type) => (
        <div className="px-10 my-20">
          <div className="text-4xl font-bold text-white text-center">
            {type}
          </div>

          <div className="flex flex-wrap gap-10 justify-center my-3">
            {sizeList?.map((size) => (
              <>
                <div className="flex flex-col gap-4">
                  <div className="text-2xl font-bold text-white">{size}</div>

                  <div className="flex gap-3 items-center">
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      label="Button Text"
                    />
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      hasIcon
                      iconPosition={EButonIconPosition.Left}
                      label="Button Text"
                    />
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      hasIcon
                      label="Button Text"
                    />
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      hasIcon
                    />
                  </div>

                  <div className="flex gap-3 items-center">
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      label="Button Text"
                      disabled
                    />
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      hasIcon
                      iconPosition={EButonIconPosition.Left}
                      label="Button Text"
                      disabled
                    />
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      hasIcon
                      label="Button Text"
                      disabled
                    />
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      hasIcon
                      disabled
                    />
                  </div>

                  <div className="flex gap-3 items-center">
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      isLoading
                      label="Button Text"
                    />
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      hasIcon
                      isLoading
                      iconPosition={EButonIconPosition.Left}
                      label="Button Text"
                    />
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      hasIcon
                      isLoading
                      label="Button Text"
                    />
                    <TextButton
                      variant={type as TextButtonVariant}
                      size={size as TextButtonSize}
                      hasIcon
                      isLoading
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
