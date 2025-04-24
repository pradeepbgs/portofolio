export interface BlogMetadata {
    title: string;
    description: string;
    date: string;
    readingTime: string;
    link: string;
}

export const blogmetadata = [
    {
        title: "Understanding How Async JavaScript and the Event Loop Work Together",
        description: "in this blog i have explained how async nodejs work with event-loop and libuv",
        date: "Feb 8, 2025",
        readingTime: "3 min read",
        link: "https://medium.com/@exvillager/understanding-how-async-javascript-and-the-event-loop-work-together-962f55882cbf"
    },
    {
        title: 'Let’s understand the difference between process.nextTick() and setImmediate()',
        description: 'in this blog i have explained the difference between process.nextTick() and setImmediate()',
        date: "Feb 18, 2025",
        readingTime: "2 min read",
        link: "https://medium.com/@exvillager/lets-understand-the-difference-between-process-nexttick-and-setimmediate-91c01a603a51"
    },
    {
        title: 'Understanding Middleware in Express Node.js',
        description: 'in this blog i have explained the concept of middleware in express nodejs',
        date: "Feb 20, 2025",
        readingTime: "2 min read",
        link: "https://medium.com/@exvillager/understanding-middleware-in-express-node-js-93a06453f4ec"
    }
]