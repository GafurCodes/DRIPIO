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
  Input,
  VStack,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import CartItemThumbnail from "../cartItemThumbnail/cartItemThumbnail";
import {
  FaShoppingCart,
  FaAddressCard,
  FaHome,
  FaRegPaperPlane,
  FaMoneyCheck,
} from "react-icons/fa";
import styles from "./Cart.module.css";

export default function Cart() {
  // this is the value of cart
  const { cart } = useContext(CartContext);

  //this is a function to set the cart
  const { setCart } = useContext(CartContext);

  // keeps track of what item the user wants to remove after clicking the "x" next to the item
  const [idToRemove, setIdToRemove] = useState();

  // callback function that is passed to the cartItemThumbnail to make sure that component informs cart which item to remove
  const getIdToRemove = (id) => {
    setIdToRemove(id);
  };

  //keeps track of the number of items in the cart
  const [itemQuantity, setItemQuantity] = useState(0);

  // a function that used the current idToRemove to remove an item form the cart
  useEffect(() => {
    setCart((oldCart) => oldCart.filter((item) => item.item.id != idToRemove));
  }, [idToRemove, setCart]);

  //a function that calculates how many items are in the cart
  useEffect(() => {
    let itemQ = 0;

    cart.map((cartItem) => {
      itemQ += cartItem.quantity;
    });

    setItemQuantity(itemQ);
  }, [cart]);

  // I'm defining every variable specifically because I need to use multiple useDisclosure hooks. One of the is for the drawer (cart) the other is for the (modal) checkout
  // this is the cart drawer
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  // this is the checkout modal
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  // keeps track of what button opens the cart
  const btnRef = useRef();

  // generating a unique id for every item in the cart which I'm passing to the CartItemThumbnail to make sure that I remove items from the cart accurately
  const generateKey = () => {
    return "id" + Math.random().toString(16).slice(2);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;

    // maps over all the otems in the cart and adds up the items cost in the subtotal variable above
    cart.map((cartItem) => {
      subtotal += cartItem.item.price.toFixed(0) * cartItem.quantity;
    });

    return subtotal;
  };

  // toast which shows up when the user orders an item to confirm the order
  const toast = useToast();

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
            {/* &apos is a single quote --> ' */}
            You&apos;ve added {itemQuantity}{" "}
            {/* if there is only 1 item in the cart, say item, otherwise, say items, per the English grammar ;) */}
            {itemQuantity == 1 ? "item" : "items"}.
          </DrawerHeader>

          <DrawerBody>
            {/* maps out all the cart items into the cart drawer */}
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

          {/* below is the ChakraUI syntax for their component. nothing in my control. might look convoluted at first, but ChakraUI is pretty nice once you get used to it */}
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
              bg="brand.primary"
              color="brand.bg"
              w="full"
              size="lg"
              disabled={cart.length > 0 ? false : true}
              onClick={onOpenModal}
            >
              Checkout
            </Button>

            <Modal isOpen={isOpenModal} onClose={onCloseModal} size={"xl"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Checkout</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing={5}>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaAddressCard color="brand.tertiary" />
                      </InputLeftElement>
                      <Input
                        variant="flushed"
                        disabled={true}
                        value="Fake Johnson"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement>
                        <FaHome />
                      </InputLeftElement>
                      <Input
                        variant="flushed"
                        disabled={true}
                        value="
This, That & The Other Street, Nova Scotia, Canada"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement>
                        <FaRegPaperPlane />
                      </InputLeftElement>
                      <Input
                        variant="flushed"
                        disabled={true}
                        value="null@email.com"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement>
                        <FaMoneyCheck />
                      </InputLeftElement>
                      <Input
                        variant="flushed"
                        disabled={true}
                        value="0234 3242 9874 3083"
                      />
                    </InputGroup>
                  </VStack>
                </ModalBody>

                <ModalFooter>
                  <Button
                    bg="brand.primary"
                    onClick={() => {
                      toast({
                        title: "Items ordered!",
                        description: "Items will arrive in 3-5 business days.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      });
                      setCart([]);
                      onCloseModal();
                    }}
                  >
                    Order!
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
