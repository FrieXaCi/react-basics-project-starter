import { Heading } from '@chakra-ui/react';

export const Title = ({ recipe }) => {
  return <Heading>{recipe.recipe.label}</Heading>;
};
