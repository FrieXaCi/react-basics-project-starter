import { Text } from '@chakra-ui/react';

export const MealType = ({ recipe }) => {
  return (
    <Text fontSize='sm' color='black'>
      {recipe.recipe.mealType}
    </Text>
  );
};
