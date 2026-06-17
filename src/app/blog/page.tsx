import React from "react";
import PageHero from "@/components/blog/PageHero";
import Grid from "@/components/blog/Grid";
import SubPageCTA from "@/components/common/SubPageCTA";

export const metadata = {
  title: "Exchange Blog — Reddy Book Exchange",
  description: "Reddy Book Blog — Learn betting strategies, Teen Patti tips, and explore back and lay exchange guides.",
  keywords: ["Reddy Book Blog", "Betting Strategies", "Teen Patti Tips", "Back and Lay Guides"],
  alternates: {
    canonical: "https://reddybook.club/blog",
  },
  openGraph: {
    title: "Exchange Blog — Reddy Book Exchange",
    description: "Reddy Book Blog — Learn betting strategies, Teen Patti tips, and explore back and lay exchange guides.",
    url: "https://reddybook.club/blog",
    siteName: "Reddy Book Exchange",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero />
      <Grid />
      <SubPageCTA />
    </>
  );
}
