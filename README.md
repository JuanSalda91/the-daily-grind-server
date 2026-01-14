# Lab 12.1 - Build a Basic Express Server

1. What is the difference between res.send() and res.sendFile()?
res.send() sends data directly (strings, JSON, buffers) to the client. Use it for API responses or simple text.

res.sendFile() sends an entire file from the file system. Use it when serving HTML files, PDFs, images, or other static files.

Example:

res.send('Hello') - sends HTML string directly

res.sendFile(path.join(__dirname, 'public', 'index.html')) - sends the actual file

2. Why is the path module necessary? What could go wrong with relative paths?
The path module creates absolute paths that work across different operating systems (Windows uses \, Unix/Mac use /).

Problems with relative paths:

They depend on where Node.js is executed from (current working directory)

If you run node server.js from a different folder, relative paths break

Cross-platform compatibility issues

path.join(__dirname, ...) ensures the path always resolves correctly relative to the server file's location.

3. How would you add a third page (e.g., a menu page)?
Steps:

Create public/menu.html with your menu content

Add a new route in server.js:

javascript
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});
Restart the server and visit http://localhost:3000/menu

That's it! Each new page needs its own HTML file and route handler.