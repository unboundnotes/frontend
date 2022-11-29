import NewPageInput from "@/pages/NewPageInput";
import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useGetWorkspaceQuery } from "~/graphql/generated";

const WorkspacePage: NextPage = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const { data, loading } = useGetWorkspaceQuery({
    variables: {
      uuid: uuid as string,
    },
  });

  if (loading || !data || !data.getWorkspace) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box p={4}>
        <Heading mb={4}>{data.getWorkspace.name}</Heading>
        <UnorderedList>
          {data.getWorkspace.pages.map((page) => (
            <ListItem key={page.uuid}>{page.title}</ListItem>
          ))}
          <NewPageInput />
        </UnorderedList>
      </Box>
    </>
  );
};

export default WorkspacePage;
