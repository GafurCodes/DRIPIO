import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../cartContext/cartContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import CartItemThumbnail from "../cartItemThumbnail/cartItemThumbnail";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const { setCart } = useContext(CartContext);

  const [idToRemove, setIdToRemove] = useState();

  const getIdToRemove = (id) => {
    setIdToRemove(id);
  };

  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    setCart((oldCart) => oldCart.filter((item) => item.item.id != idToRemove));
  }, [idToRemove, setCart]);

  useEffect(() => {
    let itemQ = 0;

    cart.map((cartItem) => {
      itemQ += cartItem.quantity;
    });

    setItemQuantity(itemQ);
  }, [cart]);

  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const btnRef = useRef();

  const generateKey = () => {
    return "id" + Math.random().toString(16).slice(2);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;

    cart.map((cartItem) => {
      subtotal += cartItem.item.price.toFixed(0) * cartItem.quantity;
    });

    return subtotal;
  };

  return (
    <div className={styles.cart}>
      <Button ref={btnRef} bg="brand.primary" onClick={onOpenDrawer}>
        <FaShoppingCart />
      </Button>
      <Drawer
        isOpen={isOpenDrawer}
        placement="right"
        onClose={onCloseDrawer}
        finalFocusRef={btnRef}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            You&apos;ve added {itemQuantity}{" "}
            {itemQuantity == 1 ? "item" : "items"}.
          </DrawerHeader>

          <DrawerBody>
            {cart.map((cartItem) => {
              return (
                <CartItemThumbnail
                  title={cartItem.item.title}
                  quantity={cartItem.quantity}
                  image={cartItem.item.image}
                  price={cartItem.item.price}
                  key={generateKey()}
                  id={cartItem.item.id}
                  passIdToRemove={getIdToRemove}
                />
              );
            })}
          </DrawerBody>

          <DrawerFooter
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            height="48"
          >
            <div className={styles.subtotal}>
              <h2>Subtotal:</h2>
              <h2>${calculateSubtotal()}</h2>
            </div>
            <Button
              bg="brand.bg"
              color="brand.primary"
              w="full"
              size="lg"
              onClick={onOpenModal}
            >
              Checkout
            </Button>

            <Modal isOpen={isOpenModal} onClose={onCloseModal} size={"xl"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam eveniet, quam, nihil expedita nobis accusamus doloribus
                  ducimus odit cupiditate modi harum quisquam eum officia aut
                  libero fuga praesentium totam! Incidunt. Iste eaque magnam,
                  libero architecto maiores reiciendis tenetur animi numquam
                  eligendi cumque consequatur inventore sit id illum dolore.
                  Magni, amet similique? Nisi aliquam obcaecati quidem numquam
                  sunt velit eaque iusto!
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseModal}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
