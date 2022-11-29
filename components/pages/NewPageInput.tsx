import { CheckIcon, CloseIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input, Text, useDisclosure } from "@chakra-ui/react";
import { useCallback, useRef } from "react";

interface Props {
  refetch: () => void;
}

const NewPageInput: React.FC<Props> = ({ refetch }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = useCallback(() => {
    refetch();
    onClose();
  }, [refetch, onClose]);

  const checkEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        submit();
      }
    },
    [submit]
  );

  if (isOpen) {
    return (
      <Flex
        px={3}
        py={2}
        alignItems="center"
        cursor="pointer"
        borderRadius="lg"
        w="fit-content"
      >
        <PlusSquareIcon mr={2} />{" "}
        <Input placeholder="Page name" ref={inputRef} onKeyDown={checkEnter} />
        <IconButton
          aria-label="Create page"
          icon={<CheckIcon />}
          onClick={submit}
          ml={2}
          background="transparent"
        />
        <IconButton
          aria-label="Cancel"
          icon={<CloseIcon />}
          onClick={onClose}
          ml={2}
          background="transparent"
        />
      </Flex>
    );
  }

  return (
    <Flex
      px={3}
      py={2}
      alignItems="center"
      cursor="pointer"
      borderRadius="lg"
      w="fit-content"
      _hover={{ backgroundColor: "gray.200" }}
      onClick={onOpen}
    >
      <PlusSquareIcon mr={2} /> <Text>Add a page</Text>
    </Flex>
  );
};

export default NewPageInput;
