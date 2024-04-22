import React, { useState } from "react";
import { Box, Flex, Heading, Text, Image, Select, Button, VStack, HStack, Container } from "@chakra-ui/react";
import { FaCar, FaSortAmountDown, FaDatabase } from "react-icons/fa";

const carData = [
  { id: 1, brand: "Tesla", model: "Model S", year: 2020, mileage: 15000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, brand: "BMW", model: "X5", year: 2019, mileage: 20000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { id: 3, brand: "Audi", model: "A4", year: 2021, mileage: 10000, color: "White", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 4, brand: "Mercedes", model: "C Class", year: 2018, mileage: 12000, color: "Blue", imageUrl: "https://images.unsplash.com/photo-1511391409112-30365a4a90e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 5, brand: "Ford", model: "Mustang", year: 2022, mileage: 5000, color: "Yellow", imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 6, brand: "Chevrolet", model: "Camaro", year: 2020, mileage: 8000, color: "Green", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
];

const Index = () => {
  const [cars, setCars] = useState(carData);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCars = cars.filter((car) => {
    if (!filter) return true;
    return car.color === filter || car.mileage.toString() === filter;
  });

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
              <Select placeholder="Select option" onChange={handleFilterChange}>
                <option value="Red">Color: Red</option>
                <option value="Black">Color: Black</option>
                <option value="White">Color: White</option>
                <option value="15000">Mileage: 15,000</option>
                <option value="20000">Mileage: 20,000</option>
                <option value="10000">Mileage: 10,000</option>
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
            <Flex wrap="wrap" justify="space-between" overflowX="scroll">
              {filteredCars.map((car) => (
                <Box key={car.id} p={4} shadow="md" borderWidth="1px" width="30%">
                  <Image src={car.imageUrl} />
                  <Text mt={2}>Brand: {car.brand}</Text>
                  <Text>Model: {car.model}</Text>
                  <Text>Year: {car.year}</Text>
                  <Text>Mileage: {car.mileage}</Text>
                  <Text>Color: {car.color}</Text>
                </Box>
              ))}
            </Flex>
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
