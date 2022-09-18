import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FiHelpCircle } from "react-icons/fi";

export const HelpModal = ({ title, tips, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(tips)
  return (
    <Flex alignItems={"center"} justifyContent="center">
      <FiHelpCircle
        color={"#8CC63F"}
        size="30px"
        cursor={"pointer"}
        onClick={onOpen}
      />

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

            <Text color={'red'} paddingTop='0.5rem' as='b'>Dica: {tips}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
