// Create web server

// Create a server and define a callback function to handle requests
const server = http.createServer((req, res) => {
    // Set the content type to plain text
    res.setHeader('Content-Type', 'text/plain');

    // Write a response to the client
    res.end('Hello, this is your web server!');
});

// Specify the port the server will listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});