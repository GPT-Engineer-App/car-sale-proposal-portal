import React from "react";
import { Box, Flex, Heading, Text, Image, Select, Button, VStack, HStack, Container } from "@chakra-ui/react";
import { FaCar, FaSortAmountDown, FaDatabase } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" minHeight="100vh">
        <Box bg="blue.600" p={4} color="white">
          <Heading as="h1" size="lg">
            <FaCar /> Car Sales Platform
          </Heading>
        </Box>

        <Flex flex="1" padding={4}>
          <Box width="250px" bg="gray.100" p={4} marginRight={4}>
            <VStack align="stretch" spacing={4}>
              <Heading as="h3" size="md">
                Filters
              </Heading>
              <Text>Sort by:</Text>
              <Select placeholder="Select option">
                <option value="color">Color</option>
                <option value="mileage">Mileage</option>
              </Select>
              <Button leftIcon={<FaSortAmountDown />} colorScheme="blue">
                Apply Sort
              </Button>
              <Button leftIcon={<FaDatabase />} colorScheme="teal">
                Fetch Cars
              </Button>
            </VStack>
          </Box>

          <Box flex="1" bg="white" p={4}>
            <Heading as="h3" size="md" mb={4}>
              Available Cars
            </Heading>
            <HStack spacing={4}>
              <Box p={4} shadow="md" borderWidth="1px">
                <Image src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                <Text mt={2}>Brand: Tesla</Text>
                <Text>Model: Model S</Text>
                <Text>Year: 2020</Text>
                <Text>Mileage: 15,000</Text>
                <Text>Color: Red</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Image src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <Text mt={2}>Brand: BMW</Text>
                <Text>Model: X5</Text>
                <Text>Year: 2019</Text>
                <Text>Mileage: 20,000</Text>
                <Text>Color: Black</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Image src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Text mt={2}>Brand: Audi</Text>
                <Text>Model: A4</Text>
                <Text>Year: 2021</Text>
                <Text>Mileage: 10,000</Text>
                <Text>Color: White</Text>
              </Box>
            </HStack>
          </Box>
        </Flex>

        <Box bg="blue.800" p={4} color="white">
          <Text align="center">© 2023 Car Sales Platform. All rights reserved.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
