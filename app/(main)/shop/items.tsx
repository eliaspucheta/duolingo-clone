"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { refilfHearts } from "@/actions/user-progress";
import { toast } from "sonner";
import { POINTS_TO_REFILL } from "@/constants";


type Props = {
  hearts: number;
  points: number;
};

export const Items = ({
  hearts,
  points,
}: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefilsHearts = () => {
    if(pending || hearts === 5 || points < POINTS_TO_REFILL) {
      return
    }

    startTransition(() => {
      refilfHearts()
      .catch(() => toast.error("Something went wrong"));
    });
  };


  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image
        src="./heart.svg"
        alt="Heart"
        height={60}
        width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Restablecer corazones
          </p>
        </div>
        <Button
          onClick={onRefilsHearts}
          disabled={
            pending
            || hearts === 5
            || points < POINTS_TO_REFILL
          }
        >
          {hearts === 5
            ? "full"
            : (
              <div className="flex items-center">
                <Image
                  src="/points.svg"
                  alt="Puntos"
                  height={20}
                  width={20}
                />
                <p>
                  {POINTS_TO_REFILL}
                </p>
              </div>
            )
           }
        </Button>
      </div>
      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="./unlimited.svg"
          alt="ilimitado"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Vidas ilimitadas
          </p>
        </div>
      </div>
    </ul>
  )
}