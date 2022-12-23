export function truncate(input, number = 150) {
   if (input.length > number) {
      return input.substring(0, number) + '...';
   }
   return input;
};