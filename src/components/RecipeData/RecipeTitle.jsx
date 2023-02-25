import { Heading } from '@chakra-ui/react';

export const RecipeTitle = ({ recipe, onClick }) => {
  return (
    <Heading fontSize='sm' p='5px' textAlign='center' onClick={onClick}>
      {recipe.recipe.label}
    </Heading>
  );
};
