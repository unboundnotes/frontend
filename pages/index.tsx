import type { GetServerSideProps, NextPage } from "next";
import { useGetUserQuery } from "~/graphql/generated";

const Index: NextPage = () => {
  const { data, loading } = useGetUserQuery({
    variables: {
      uuid: "fcd1020d-5bd6-4d82-8108-0f7f7b6525e4",
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  return <h1>{JSON.stringify(data)}</h1>;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/workspaces",
      permanent: false,
    },
  };
};
