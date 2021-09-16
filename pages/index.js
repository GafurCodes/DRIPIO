import Head from "next/head";
import RenderProducts from "../components/renderProducts/renderProducts";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home({ data }) {
  //keeps track of the status of the modal. i.e. if it's closed, or open. also, opens the modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  //opens the modal once the page renders
  useEffect(() => onOpen(), [onOpen]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Disclaimer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Greetings 👋
            <br />
            <br />
            Thanks for taking the time to take a look at my project 🚀
            <br />
            <br />
            <b>
              I want to warn you that some images are stretched and/or not of
              the best quality. Unfortunately, that is not up to me.
            </b>
            <br />
            <br />
            All the data (names, descriptions, reviews, prices, <b>images</b>,
            etc.) comes from{" "}
            <a
              href="https://fakestoreapi.com/."
              target="_blank"
              rel="noreferrer"
              style={{ color: "blue" }}
            >
              https://fakestoreapi.com/.
            </a>
            <br />
            <br />I tried my best to work around that and make the UI nice.
            Other than that, enjoy the demo!
            <br />
            <br />
            P.S. This modal will not close if you click on the overlay around
            the modal. There is an X in the top right corner of this modal. This
            is to prevent accidental closing of this important notice 😄
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
      <Head>
        <title>DRIPIO</title>
        <meta name="description" content="E-commerce website" />
      </Head>

      <RenderProducts products={data} />
    </div>
  );
}

//fetching products and passing them to <RenderProducts/>
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
