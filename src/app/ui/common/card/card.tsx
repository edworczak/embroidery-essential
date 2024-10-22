import type { ReactNode } from "react";
import CardButtons from "@/app/ui/common/card-buttons";

import { getRandomRotation, rotateElement } from "@/app/utils/utils";
import Image from "next/image";
import { ButtonProps } from "@/app/utils/types";
import TapeLabel from "@/app/ui/common/tape-label";

type ModalProps = {
  children: ReactNode;
  img?: {
    src: string;
    alt: string;
  };
  color?: string;
  buttons?: ButtonProps[];
  tapeLabel?: string;
};

function Dialog({ children, img, color, buttons, tapeLabel }: ModalProps) {
  return (
    <div className="card">
      <div>
        {tapeLabel && <TapeLabel label={tapeLabel} top={-8} right={-8} />}
        <div className="flex justify-between">
          {color && (
            <div>
              <div
                className="relative top-2 -left-2 aspect-square w-[80px] border-4 border-white shadow-md"
                style={{
                  transform: getRandomRotation(12, 8),
                  background: color,
                }}
              />
            </div>
          )}
          {img && (
            <div className="relative shrink-0 min-w-[120px]">
              <div
                className="aspect-square relative w-full border-white border-4 shadow-md top-2 -left-2"
                style={rotateElement(8)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div className="p-4 flex flex-col justify-center w-full gap-4">
            {children}
          </div>
        </div>
        {buttons && <CardButtons buttons={buttons} />}
      </div>
    </div>
  );
}

export default Dialog;
