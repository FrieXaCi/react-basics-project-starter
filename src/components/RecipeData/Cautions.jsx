import { Text } from '@chakra-ui/react';

export const Cautions = ({ recipe }) => {
  return (
    <Text fontSize='sm' color='black'>
      {recipe.recipe.cautions}
    </Text>
  );
};
