import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Workspace } from "~/graphql/generated";
import DeleteWorkspaceModal from "./DeleteWorkspaceModal";

interface Props {
  workspace: Workspace;
}

const WorkspaceTileMenu: React.FC<Props> = ({ workspace }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
                  onOpen();
                }}
              >
                Delete
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <DeleteWorkspaceModal
        workspace={workspace}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default WorkspaceTileMenu;
