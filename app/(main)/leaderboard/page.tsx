import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getTopTenUsers, getUserProgress } from "@/db/queries";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Quests } from "@/components/quests";

const LeaderboardPage = async () => {
  const userProgressData = getUserProgress();
  const leaderboardData = getTopTenUsers();

  const [
    userProgress,
    leaderboard,
  ] = await Promise.all([
    userProgressData,
    leaderboardData
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
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
          src="/leaderboard.svg"
          alt="Leaderboard"
          height={90}
          width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Ligas v2
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Mira donde te encuentras en la tabla que reune a todos lo aprendices de la comunidad.
          </p>
          <Separator className="mb-4 h-0.5 rounded-full" />
          {leaderboard.map((userProgress, index) => (
            <div
              key={userProgress.userId}
              className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
            >
              <p className="font-bold text-lime-700 mr-4">{index + 1}</p>
              <Avatar
                className="border bg-green-500 h-12 w-12 ml-3 mr-6"
              >
                <AvatarImage
                  className="object-cover"
                  src={userProgress.userImageSrc}
                />
              </Avatar>
              <p className="font-bold text-neutral-800">
                {userProgress.userName}
              </p>
              <p className="text-muted-foreground">
                {userProgress.points} EXP
              </p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LeaderboardPage;
