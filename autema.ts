let fb_id: string | number; // Assuming fb_id can be a string or a number

// Function to set the Facebook ID with proper type checking
function setFacebookId(id: string | number): void {
  if (typeof id === 'string' || typeof id === 'number') {
    fb_id = id;
  } else {
    throw new Error('Facebook ID must be a string or a number.');
  }
}

// Function to get the Facebook ID
function getFacebookId(): string | number {
  return fb_id;
}
