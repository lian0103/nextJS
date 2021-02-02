const users = [
  { id: 1, name: "Alan", info: "lorem20" },
  { id: 2, name: "John", info: "lorem40" },
  { id: 3, name: "Jack", info: "lorem80" },
];

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(users);
}
