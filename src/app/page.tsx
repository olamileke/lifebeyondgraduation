import type { Metadata } from "next";
import { IndexPage as IndexPageComponent } from "@/components/IndexPage";

export const metadata: Metadata = {
  title: "Lifebeyondgraduation",
};

export default function IndexPage() {
  return <IndexPageComponent />;
}
