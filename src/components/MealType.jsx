import { Text } from '@chakra-ui/react';

export const MealType = ({ recipe }) => {
  return (
    <Text fontSize='sm' color='black' key={recipe.label}>
      {recipe.recipe.mealType}
    </Text>
  );
};
