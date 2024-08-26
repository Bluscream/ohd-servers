document.addEventListener('DOMContentLoaded', () => {
    const runButton = document.getElementById('btnFilterCasualfield');
    const codeFrame = document.getElementById('frame');

    // Function to run code in the iframe
    function runCode() {
        // Get the content of the iframe
        const iframeContent = codeFrame.contentDocument || codeFrame.contentWindow.document;
        
        // Example: Execute a JavaScript function on the iframe content
        iframeContent.body.innerHTML += '<h2>Executed Code</h2><p>This code was executed using the iframe.</p>';
        
        // Example: Call a function on the iframe content
        iframeContent.querySelector('.functionToCall')?.invokeFunction();
        
        // Example: Modify an element in the iframe
        const element = iframeContent.querySelector('#elementToModify');
        if (element) {
            element.textContent = 'Modified by iframe runner';
        }
    }

    // Add event listener to the button
    runButton.addEventListener('click', runCode);

    console.log('Ifame content loaded successfully');
});