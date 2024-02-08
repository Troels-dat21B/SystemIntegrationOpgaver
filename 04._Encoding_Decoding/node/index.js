const base64EncodedString = btoa('Hello, World!');

console.log(base64EncodedString); // SGVsbG8sIFdvcmxkIQ==

const base64DecodedString = atob(base64EncodedString);

console.log(base64DecodedString); // Hello, World!