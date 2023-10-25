//function to check image with a pattern of jpg, jpeg, png, gif, svg, webp, bmp 
export const checkImageUrl = (url) => {
  if (!url) return false;

  const pattern = /\.(jpeg|jpg|png|gif|svg|webp|bmp)$/;
  return pattern.test(url);
};
