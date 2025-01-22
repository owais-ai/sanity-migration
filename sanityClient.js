"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: 'y0eqc9w8', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skM9rLmh7k1N6kFtBTr1j1R1bDM7zfBKE7h2tfCjNHrsIDwx7aFfk6IcrX6LaLAe62Rw65Q3kJ1vPStenGwSU9QT2xQPat3JLFye0hRJwGWP2OCtiK0hbZsJfrjBJGGnLeN34XtYjhf2K5ImxOIt5byk848T3gtdP5JR2yLkjbDIahQwSia3"
});
