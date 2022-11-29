import { BoxProps, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GetAllWorkspacesQuery } from "~/graphql/generated";
import WorkspaceTileMenu from "./WorkspaceTileMenu";

export type WorkspaceData = GetAllWorkspacesQuery["getAllWorkspaces"][number];
type Props = {
  workspace: WorkspaceData;
};

const WorkspaceTile: React.FC<Props & BoxProps> = ({ workspace, ...props }) => {
  const router = useRouter();

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
        router.push(`/workspace/${workspace.uuid}`);
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
      <Text
        fontSize="2xl"
        mt={16}
        color="gray.500"
        fontWeight="bold"
        textAlign="center"
      >
        {workspace.name}
      </Text>
      <WorkspaceTileMenu workspace={workspace} />
    </Flex>
  );
};

export default WorkspaceTile;
