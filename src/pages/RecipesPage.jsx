import { Heading, Box } from '@chakra-ui/react';
import { RecipeBox } from '../components/RecipeBox';
import { data } from '../utils/data';

let recipes = data.hits;

export const RecipesPage = () => {
  return (
    <Box h='auto' w='100vw' bg='orange.300'>
      <Heading textAlign='center' mb='20px'>
        Your Recipe App
      </Heading>
      <RecipeBox recipes={recipes} />
    </Box>
  );
};
