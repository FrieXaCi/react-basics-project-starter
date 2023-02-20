import { Image, Box } from '@chakra-ui/react';

export const RecipeImages = ({ recipe }) => {
  return (
    <Box boxSize='200px'>
      <Image h='200px' w='150px' src={recipe.recipe.image} alt='recipe' />
    </Box>
  );
};
