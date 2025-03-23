import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Items } from "./items";
import { getUserProgress } from "@/db/queries";

const ShopPage = async () => {
  const userProgressData = getUserProgress();

  const [
    userProgress,
  ] = await Promise.all([
    userProgressData,
  ]);

  if(!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }


  return (
    <div className="flex flex-row-reverse gap-[48px] px-0">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
          src="/shop.svg"
          alt="Tienda"
          height={90}
          width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Tienda
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Gasta tus puntos en cosas interesantes.
          </p>
          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage