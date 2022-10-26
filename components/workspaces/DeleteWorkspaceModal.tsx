import { useApolloClient } from "@apollo/client";
import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import {
  GetAllWorkspacesDocument,
  useDeleteWorkspaceMutation,
  Workspace,
} from "~/graphql/generated";

interface Props {
  workspace: Workspace;
  isOpen: boolean;
  onClose: () => void;
}

const DeleteWorkspaceModal: React.FC<Props> = ({
  workspace,
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [deleteWorkspace, { called, loading, reset }] =
    useDeleteWorkspaceMutation();

  const { cache } = useApolloClient();

  useEffect(() => {
    if (!called || loading) {
      return;
    }

    // Update client side query to remove deleted workspace,
    // thus saving a server update
    cache.updateQuery({ query: GetAllWorkspacesDocument }, (data) => {
      return {
        getAllWorkspaces: data.getAllWorkspaces.filter(
          (ws: Workspace) => ws.uuid !== workspace.uuid
        ),
      };
    });

    reset();
  }, [called, loading, reset, workspace, cache]);

  const deleteWorkspaceHandler = useCallback(() => {
    deleteWorkspace({ variables: { uuid: workspace.uuid } });
  }, [deleteWorkspace, workspace]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete workspace</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          If you sure you want to delete the workspace{" "}
          <Text fontWeight="bold" as="span">
            {workspace.name}
          </Text>
          , then type its name below:
          <FormControl mt={3}>
            <Input
              onChange={(ev) => setName(ev.target.value)}
              placeholder={workspace.name}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose} mr={3}>
            Cancel
          </Button>
          <Button
            isDisabled={name !== workspace.name}
            colorScheme="red"
            onClick={deleteWorkspaceHandler}
            isLoading={called && loading}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteWorkspaceModal;
