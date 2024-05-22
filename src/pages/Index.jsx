import { Container, VStack, Text, Heading, Box, Button, IconButton, Image, HStack } from "@chakra-ui/react";
import { FaGithub, FaRocket, FaCogs } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Blackbox.ai SaaS
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Automate your GitHub workflow with AI-powered issue fixing and code management.
          </Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE2NDEyMTk4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI technology" borderRadius="md" />
        </Box>

        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            How It Works
          </Heading>
          <Text fontSize="lg" color="gray.500" mb={4}>
            Our platform leverages the power of Hugging Face Transformers and Blackbox.ai to automate your GitHub repository management.
          </Text>
          <HStack spacing={4} justify="center">
            <Box textAlign="center">
              <IconButton aria-label="Model" icon={<FaRocket />} size="lg" isRound />
              <Text mt={2}>Run Model</Text>
            </Box>
            <Box textAlign="center">
              <IconButton aria-label="Fix Issues" icon={<FaCogs />} size="lg" isRound />
              <Text mt={2}>Fix Issues</Text>
            </Box>
            <Box textAlign="center">
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" isRound />
              <Text mt={2}>Push Fixes</Text>
            </Box>
          </HStack>
        </Box>

        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Get Started
          </Heading>
          <Text fontSize="lg" color="gray.500" mb={4}>
            Sign up today and start automating your GitHub workflows with AI.
          </Text>
          <Button colorScheme="teal" size="lg">
            Sign Up Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
