import React, { PropsWithChildren } from "react";
import { Center } from "@mantine/core";

export default function PageCentered({ children }: PropsWithChildren) {
  return <Center sx={{ minHeight: "100vh" }}>{children}</Center>;
}
