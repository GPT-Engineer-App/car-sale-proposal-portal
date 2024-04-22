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
  { id: 7, brand: "Honda", model: "Civic", year: 2022, mileage: 6000, color: "Blue", imageUrl: "https://images.unsplash.com/photo-1580910051074-3e9717a5e9f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 8, brand: "Toyota", model: "Corolla", year: 2021, mileage: 7000, color: "Gray", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 9, brand: "Nissan", model: "Altima", year: 2019, mileage: 12000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 10, brand: "Ford", model: "Explorer", year: 2020, mileage: 15000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 11, brand: "Chevrolet", model: "Impala", year: 2018, mileage: 20000, color: "White", imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { id: 12, brand: "BMW", model: "3 Series", year: 2021, mileage: 5000, color: "Yellow", imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 13, brand: "Audi", model: "Q5", year: 2022, mileage: 8000, color: "Green", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 14, brand: "Mercedes", model: "E Class", year: 2019, mileage: 12000, color: "Blue", imageUrl: "https://images.unsplash.com/photo-1511391409112-30365a4a90e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 15, brand: "Tesla", model: "Model 3", year: 2023, mileage: 10000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 16, brand: "Honda", model: "Accord", year: 2020, mileage: 5000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 17, brand: "Toyota", model: "Camry", year: 2021, mileage: 7000, color: "Gray", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 18, brand: "Nissan", model: "Maxima", year: 2019, mileage: 12000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 19, brand: "Ford", model: "Fusion", year: 2020, mileage: 15000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 20, brand: "Chevrolet", model: "Malibu", year: 2018, mileage: 20000, color: "White", imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { id: 21, brand: "Tesla", model: "Model X", year: 2023, mileage: 5000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 22, brand: "BMW", model: "5 Series", year: 2022, mileage: 8000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { id: 23, brand: "Audi", model: "A6", year: 2021, mileage: 7000, color: "White", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 24, brand: "Mercedes", model: "S Class", year: 2020, mileage: 12000, color: "Blue", imageUrl: "https://images.unsplash.com/photo-1511391409112-30365a4a90e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 25, brand: "Ford", model: "Edge", year: 2019, mileage: 15000, color: "Yellow", imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 26, brand: "Chevrolet", model: "Equinox", year: 2018, mileage: 20000, color: "Green", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 27, brand: "Honda", model: "Fit", year: 2023, mileage: 5000, color: "Blue", imageUrl: "https://images.unsplash.com/photo-1580910051074-3e9717a5e9f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 28, brand: "Toyota", model: "Prius", year: 2022, mileage: 6000, color: "Gray", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 29, brand: "Nissan", model: "Sentra", year: 2021, mileage: 12000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 30, brand: "Ford", model: "Escape", year: 2020, mileage: 15000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 31, brand: "Chevrolet", model: "Traverse", year: 2019, mileage: 20000, color: "White", imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { id: 32, brand: "BMW", model: "7 Series", year: 2021, mileage: 5000, color: "Yellow", imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 33, brand: "Audi", model: "Q7", year: 2022, mileage: 8000, color: "Green", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 34, brand: "Mercedes", model: "GLA", year: 2019, mileage: 12000, color: "Blue", imageUrl: "https://images.unsplash.com/photo-1511391409112-30365a4a90e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 35, brand: "Tesla", model: "Model Y", year: 2023, mileage: 10000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 36, brand: "Honda", model: "Pilot", year: 2020, mileage: 5000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 37, brand: "Toyota", model: "Avalon", year: 2021, mileage: 7000, color: "Gray", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 38, brand: "Nissan", model: "Murano", year: 2019, mileage: 12000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 39, brand: "Ford", model: "Ranger", year: 2020, mileage: 15000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 40, brand: "Chevrolet", model: "Colorado", year: 2018, mileage: 20000, color: "White", imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { id: 41, brand: "BMW", model: "X3", year: 2021, mileage: 5000, color: "Yellow", imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 42, brand: "Audi", model: "Q8", year: 2022, mileage: 8000, color: "Green", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 43, brand: "Mercedes", model: "GLC", year: 2019, mileage: 12000, color: "Blue", imageUrl: "https://images.unsplash.com/photo-1511391409112-30365a4a90e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 44, brand: "Tesla", model: "Model X", year: 2023, mileage: 10000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 45, brand: "Honda", model: "CR-V", year: 2020, mileage: 5000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 46, brand: "Toyota", model: "Highlander", year: 2021, mileage: 7000, color: "Gray", imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 47, brand: "Nissan", model: "Pathfinder", year: 2019, mileage: 12000, color: "Black", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 48, brand: "Ford", model: "Expedition", year: 2020, mileage: 15000, color: "Red", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNzEzNzgxOTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 49, brand: "Chevrolet", model: "Tahoe", year: 2018, mileage: 20000, color: "White", imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { id: 50, brand: "BMW", model: "X5", year: 2021, mileage: 5000, color: "Yellow", imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
];

const Index = () => {
  const [cars, setCars] = useState(carData);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    if (value === "asc" || value === "desc") {
      const sortedCars = [...cars].sort((a, b) => {
        if (value === "asc") return a.mileage - b.mileage;
        if (value === "desc") return b.mileage - a.mileage;
      });
      setCars(sortedCars);
    } else {
      setFilter(value);
    }
  };

  const filteredCars = cars.filter((car) => {
    if (!filter) return true;
    return car.color === filter;
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
                <option value="asc">Mileage: Ascending</option>
                <option value="desc">Mileage: Descending</option>
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
