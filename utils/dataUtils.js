export const dataUri = "https://jsonplaceholder.typicode.com/users";
export const dataUriPosts = "https://jsonplaceholder.typicode.com/posts";
export const fetcher = (url) => fetch(url).then((res) => res.json());

export default {};
