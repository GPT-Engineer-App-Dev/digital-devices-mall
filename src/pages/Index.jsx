import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    imageUrl: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    imageUrl: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: "$199",
    imageUrl: "/images/smartwatch.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Electronics Store
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronic gadgets and accessories
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.imageUrl} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  {product.price}
                </Text>
                <Button colorScheme="teal" size="md">
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;