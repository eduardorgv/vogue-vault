import type { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: Size;
  avalibleSizes: Size[];
}

export const SizeSelector = ({ selectedSize, avalibleSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Avalible sizes</h3>

      <div className="flex">
        {avalibleSizes?.map((size) => (
          <button
            key={size}
            className={clsx("mx-2 hover:underline", {
              underline: size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
