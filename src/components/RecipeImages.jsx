import { Image, Box } from '@chakra-ui/react';

export const RecipeImages = ({ recipe }) => {
  return (
    <Box boxSize='sm'>
      <Image src={recipe.recipe.image} alt='recipe' />
    </Box>
  );
};
