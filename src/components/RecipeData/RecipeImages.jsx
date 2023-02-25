import { Image, Box } from '@chakra-ui/react';

export const RecipeImages = ({ recipe }) => {
  return (
    <Box h='200px' w='100%'>
      <Image
        h='100%'
        w='100%'
        pb='10px'
        borderTopRadius='25px'
        src={recipe.recipe.image}
        alt='recipe'
      />
    </Box>
  );
};
