import { useApolloClient } from "@apollo/client";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  GetAllWorkspacesDocument,
  useDeleteWorkspaceMutation,
  Workspace,
} from "~/graphql/generated";

interface Props {
  uuid: string;
  refetch: () => void;
}

const WorkspaceTileMenu: React.FC<Props> = ({ uuid, refetch }) => {
  // TODO: Delete should pop up a modal
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
          (workspace: Workspace) => workspace.uuid !== uuid
        ),
      };
    });

    reset();
    refetch();
  }, [called, loading, reset, refetch, uuid, cache]);

  const deleteWorkspaceHandler = useCallback(() => {
    deleteWorkspace({ variables: { uuid } });
  }, [deleteWorkspace, uuid]);

  return (
    <Menu placement="bottom-end">
      {({ isOpen }) => (
        <>
          <MenuButton
            as={IconButton}
            icon={<BiDotsVerticalRounded size="32px" />}
            pos="absolute"
            top={2}
            right={2}
            boxSize={10}
            color="gray.500"
            opacity={isOpen ? 1 : 0}
            _groupHover={{ opacity: 1 }}
            borderRadius="md"
            onClick={(ev) => {
              ev.stopPropagation();
            }}
            variant="ghost"
          ></MenuButton>
          <MenuList>
            <MenuItem fontWeight="medium" borderRadius="sm">
              Edit
            </MenuItem>
            <MenuItem
              color="red.600"
              fontWeight="medium"
              borderRadius="sm"
              onClick={(ev) => {
                ev.stopPropagation();
                deleteWorkspaceHandler();
              }}
            >
              Delete
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default WorkspaceTileMenu;
