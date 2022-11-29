import AddWorkspace from "@/workspaces/AddWorkspace";
import AddWorkspaceModal from "@/workspaces/AddWorkspaceModal";
import WorkspaceTile from "@/workspaces/WorkspaceTile";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import { useMemo } from "react";
import { useGetAllWorkspacesQuery } from "~/graphql/generated";

const Workspaces: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading } = useGetAllWorkspacesQuery({});

  const workspaceTiles = useMemo(() => {
    if (loading || !data) {
      return null;
    }

    return data?.getAllWorkspaces.map((workspace) => (
      <WorkspaceTile
        key={workspace.uuid}
        workspace={workspace}
        mr={4}
        mb={4}
        minW="250px"
      />
    ));
  }, [loading, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Flex p={8} wrap="wrap">
        {workspaceTiles}
        <AddWorkspace onClick={onOpen} />
      </Flex>
      <AddWorkspaceModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Workspaces;
