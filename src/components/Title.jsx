import { Heading } from '@chakra-ui/react';

export const Title = ({ recipe }) => {
  return <Heading fontSize='sm'>{recipe.recipe.label}</Heading>;
};
