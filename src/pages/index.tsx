import Head from "next/head";

import Frustrations from "@/components/Frustration";
import HomeBanner from "@/components/HomeBanner";
import Partner from "@/components/Partner";
import Solution from "@/components/Solution";
import Reason from "@/components/Reason";
import Research from "@/components/Research";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create The Firm App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeBanner />
        <Partner />
        <Frustrations />
        <Solution />
        <Reason/>
        <Research/>
        <Blogs/>
      </main>
    </>
  );
}
