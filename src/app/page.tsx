import type { Metadata } from "next";
import { IndexPage as IndexPageComponent } from "@/components/IndexPage";

const title = "LifeBeyondGraduation";
const description =
  "A vibrant community helping soon to be graduates build real-world skills, gain mentorship, and grow into confident, career-ready adults.";
const url = "https://lifebeyondgraduation.com";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: "LifeBeyondGraduation",
    type: "website",
  },
  twitter: { title, description, creator: "@lb_graduation" },
};

export default function IndexPage() {
  return <IndexPageComponent />;
}
