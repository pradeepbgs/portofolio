export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  link: string;
}

export const blogmetadata = [
  {
    title:
      "Writing my own Trie based HTTP Router taught me more than I expected",
    description:
      "In this blog I shared how building a Trie based HTTP router for my framework Diesel.js helped me understand routing, middleware design, lazy parameter parsing, and performance focused architecture.",
    date: "Feb 14, 2026",
    readingTime: "3 min read",
    link: "https://medium.com/@exvillager/writing-my-own-trie-based-http-router-taught-me-more-than-i-expected",
  },
  {
    title:
      "Understanding How Async JavaScript and the Event Loop Work Together",
    description:
      "in this blog i have explained how async nodejs work with event-loop and libuv",
    date: "Feb 8, 2025",
    readingTime: "3 min read",
    link: "https://medium.com/@exvillager/understanding-how-async-javascript-and-the-event-loop-work-together-962f55882cbf",
  },
  {
    title:
      "Let’s understand the difference between process.nextTick() and setImmediate()",
    description:
      "in this blog i have explained the difference between process.nextTick() and setImmediate()",
    date: "Feb 18, 2025",
    readingTime: "2 min read",
    link: "https://medium.com/@exvillager/lets-understand-the-difference-between-process-nexttick-and-setimmediate-91c01a603a51",
  },
];
