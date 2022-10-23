import AddWorkspace from "@/workspaces/AddWorkspace";
import AddWorkspaceModal from "@/workspaces/AddWorkspaceModal";
import Workspace from "@/workspaces/WorkspaceTile";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import { useGetAllWorkspacesQuery } from "~/graphql/generated";

const Workspaces: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading, refetch } = useGetAllWorkspacesQuery({});

  const closeModal = () => {
    onClose();
    refetch();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Flex p={8} wrap="wrap">
        {/* TODO: Add a WorkspaceContext for each context. It should include the workspace, as well as the refetch function */}
        {data?.getAllWorkspaces.map((workspace) => (
          <Workspace
            key={workspace.uuid}
            workspace={workspace}
            mr={4}
            mb={4}
            minW="250px"
          />
        ))}
        <AddWorkspace onClick={onOpen} />
      </Flex>
      <AddWorkspaceModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Workspaces;
