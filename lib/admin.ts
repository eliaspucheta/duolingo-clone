import { auth } from "@clerk/nextjs/server";

const adminIds = [
  "user_2txZrU0MyMvUJzB0ARvgL37AWjF",
];

export const getIsAdmin = async () => {
  const { userId } = await auth();

  if(!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
