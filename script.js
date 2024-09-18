document.getElementById('startButton').addEventListener('click', simulateBrowserProcess);

function simulateBrowserProcess() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    let steps = [
        { description: "User Input", detail: "You enter a URL or click a link, and the browser starts the process." },
        { description: "DNS Lookup", detail: "The browser contacts a DNS server to translate the URL into an IP address." },
        { description: "HTTP Request", detail: "The browser sends an HTTP request to the server asking for the web page." },
        { description: "Server Response", detail: "The server responds with HTML, CSS, and JavaScript files." },
        { description: "Rendering", detail: "The browser’s rendering engine constructs the web page from the received files." },
        { description: "Displaying Content", detail: "The browser displays the web page for you to interact with." }
    ];

    steps.forEach((step, index) => {
        setTimeout(() => {
            let stepDiv = document.createElement('div');
            stepDiv.classList.add('step');
            stepDiv.innerHTML = `<span>${step.description}:</span> ${step.detail}`;
            outputDiv.appendChild(stepDiv);
        }, index * 1000); // Delay each step by 1 second
    });
}
