import { auth } from "@clerk/nextjs/server";

const adminIds = [
  "user_2txZrU0MyMvUJzB0ARvgL37AWjF",
  "user_2ukciIXPzndQKU9n6t5hv300pOm"
];

export const getIsAdmin = async () => {
  const { userId } = await auth();

  if(!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
