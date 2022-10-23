import { BoxProps, Flex, Image, Text } from "@chakra-ui/react";
import { GetAllWorkspacesQuery } from "~/graphql/generated";
import WorkspaceTileMenu from "./WorkspaceTileMenu";

export type WorkspaceData = GetAllWorkspacesQuery["getAllWorkspaces"][number];
type Props = {
  workspace: WorkspaceData;
};

const Workspace: React.FC<Props & BoxProps> = ({ workspace, ...props }) => {
  return (
    <Flex
      w="250px"
      h="300px"
      border="4px dashed"
      borderColor="gray.500"
      borderRadius="3xl"
      align="center"
      justify="center"
      onClick={() => {
        alert(workspace.name);
      }}
      cursor="pointer"
      flexDir="column"
      pos="relative"
      className="group"
      {...props}
    >
      <Image
        src={workspace.image}
        alt={`${workspace.name}'s image`}
        w="100px"
        h="100px"
      />
      <Text fontSize="2xl" mt={16} color="gray.500" fontWeight="bold">
        {workspace.name}
      </Text>
      <WorkspaceTileMenu uuid={workspace.uuid} refetch={() => {}} />
    </Flex>
  );
};

export default Workspace;
