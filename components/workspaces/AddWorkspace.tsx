import { AddIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
};

const AddWorkspace: React.FC<Props> = ({ onClick }) => {
  return (
    <Flex
      w="250px"
      h="300px"
      border="4px dashed"
      borderColor="gray.500"
      borderRadius="3xl"
      align="center"
      justify="center"
      onClick={onClick}
      cursor="pointer"
      flexDir="column"
    >
      <AddIcon w="100px" h="100px" color="gray.500" />
      <Text fontSize="2xl" mt={16} color="gray.500" fontWeight="bold">
        Create Workspace
      </Text>
    </Flex>
  );
};

export default AddWorkspace;
