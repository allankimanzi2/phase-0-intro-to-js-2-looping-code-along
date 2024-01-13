function writeCards(names, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  // Example usage:
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const messages = writeCards(names, eventName);
  console.log(messages);

  
  function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  // Example usage:
  countDown(10);
  
  