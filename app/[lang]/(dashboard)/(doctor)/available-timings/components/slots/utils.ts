export function calculatePrice(
  startTime: Date,
  endTime: Date,
  ratePerMinute = 5
): number {
  // Calculate difference in milliseconds
  const timeDifferenceMs = endTime.getTime() - startTime.getTime();

  // Convert milliseconds to minutes
  const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60);

  // Calculate total price
  const totalPrice = timeDifferenceMinutes * ratePerMinute;

  return totalPrice;
}

// // Example usage:
// const startTime = new Date("1970-01-01T09:00:00.000Z");
// const endTime = new Date("1970-01-01T17:00:00.000Z");

// const price = calculatePrice(startTime, endTime);
// console.log(`Total price: $${price}`);
