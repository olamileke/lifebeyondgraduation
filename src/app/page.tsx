import type { Metadata } from "next";
import { IndexPage as IndexPageComponent } from "@/components/IndexPage";

export const metadata: Metadata = {
  title: "LifeBeyondGraduation",
};

export default function IndexPage() {
  return <IndexPageComponent />;
}
