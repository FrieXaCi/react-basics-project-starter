import { Box } from '@chakra-ui/react';
import { RecipeImages } from './RecipeImages';
import { Title } from './Title';

export const RecipeBox = ({ recipes }) => {
  return (
    <Box h='800px' w='300px' bg='blue'>
      {recipes.map((recipe) => (
        <>
          <Title key={recipe.label} recipe={recipe} />
          <RecipeImages key={recipe.label} recipe={recipe} />
        </>
      ))}
    </Box>
  );
};
