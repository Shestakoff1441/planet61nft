import React from "react";
import MainLayout from "../src/client/components/MainLayout";
import { createClient } from "../prismicio";

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("header", "head");
  return {
    props: {
      data: JSON.stringify(page, null, 2)
    }
  };
}
const Home = () => <MainLayout />;

export default Home;
