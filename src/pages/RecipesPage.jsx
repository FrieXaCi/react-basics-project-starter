import { Heading, Center, Container } from '@chakra-ui/react';
import { RecipeBox } from '../components/RecipeBox';
import { data } from '../utils/data';

let recipes = data.hits;

export const RecipesPage = () => {
  return (
    <Container>
      <Center h='100vh' flexDir='column'>
        <Heading>Your Recipe App</Heading>
        <RecipeBox recipes={recipes} />
      </Center>
    </Container>
  );
};
