import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCreateWorkspaceMutation } from "~/graphql/generated";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddWorkspaceModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [createWorkspace, { called, loading, reset, data, error }] =
    useCreateWorkspaceMutation();
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [nameErr, setNameErr] = useState("");
  const [imageErr, setImageErr] = useState("");

  const submit = useCallback(() => {
    if (nameRef.current === undefined || imageRef.current === undefined) {
      return;
    }
    createWorkspace({
      variables: {
        name: nameRef.current?.value ?? "",
        image: imageRef.current?.files?.[0],
      },
    });
  }, [createWorkspace]);

  useEffect(() => {
    if (!called || loading) {
      return;
    }
    if (error) {
      console.error(error);
      reset();
      return;
    }

    if (data?.createWorkspace.errors.length) {
      data.createWorkspace.errors.forEach((err) => {
        if (err.field === "name") {
          setNameErr(err.message);
        }
        if (err.field === "image") {
          setImageErr(err.message);
        }
      });
      reset();
      return;
    }

    reset();
    onClose();
  }, [called, loading, onClose, reset, error, data]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new workspace</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl
              isInvalid={nameErr !== ""}
              onChange={() => setNameErr("")}
            >
              <FormLabel>Workspace name</FormLabel>
              <Input placeholder="Awesome project" ref={nameRef} />
              <FormErrorMessage>{nameErr}</FormErrorMessage>
            </FormControl>
            <FormControl
              mt={4}
              isInvalid={imageErr !== ""}
              onChange={() => setImageErr("")}
            >
              <FormLabel>Workspace icon</FormLabel>
              <Input
                type="file"
                accept="image/*"
                ref={imageRef}
                sx={{
                  "::file-selector-button": {
                    height: 10,
                    padding: 0,
                    mr: 4,
                    background: "none",
                    border: "none",
                    fontWeight: "bold",
                  },
                }}
              />
              <FormErrorMessage>{imageErr}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button
              colorScheme="teal"
              onClick={submit}
              isLoading={called && loading}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddWorkspaceModal;
