import { Box, Flex } from '@chakra-ui/react';
import { DietLabel } from './DietLabel';
import { RecipeImages } from './RecipeImages';
import { Title } from './Title';

export const RecipeBox = ({ recipes }) => {
  return (
    <Box h='800px' w='300px'>
      {recipes.map((recipe) => (
        <Flex
          direction='column'
          alignItems='center'
          justifyContent='center'
          gap='20px'
          key={recipe.label}
        >
          <Title key={recipe.label} recipe={recipe} />
          <RecipeImages key={recipe.label} recipe={recipe} />
          <DietLabel key={recipe.label} recipe={recipe} />
        </Flex>
      ))}
    </Box>
  );
};
