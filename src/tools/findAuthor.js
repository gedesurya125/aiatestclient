export const findAuthor = (rawString) => {
  const author = rawString.match(/\(".*"\)/gi);
  return author[0].replace(/\("|"\)/g, '');
}