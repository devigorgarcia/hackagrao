import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";

export const ProductModal = ({ title, image, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image cursor={"pointer"} src={image} onClick={onOpen} />

      <Modal
        size={["xs", "sm", "md", "lg"]}
        isCentered={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"} color={"green.400"}>
            {title}
          </ModalHeader>
          <ModalCloseButton color={"black"} />
          <ModalBody>
            <Text color={"black"}>{children}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
