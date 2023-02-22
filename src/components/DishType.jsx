import { Text } from '@chakra-ui/react';

export const DishType = ({ recipe }) => {
  return (
    <Text fontSize='sm' color='black' key={recipe.label}>
      {recipe.recipe.dishType}
    </Text>
  );
};
