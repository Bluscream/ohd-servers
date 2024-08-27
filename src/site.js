function windowCallback(window) {
    console.log("[local] windowCallback(window)");
    const iframe = document.querySelector('#frame');
    overwolf.windows.changeSize({
        "window_id":window.window.id,
        "width":iframe.offsetWidth,
        "height":iframe.offsetHeight,
        "auto_dpi_resize":true
      }, null);
}
// setTimeout(function() {
//     console.log("[local] setTimeout()");
//     overwolf.windows.getCurrentWindow(windowCallback)
// }, 5000);
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('[local] DOMContentLoaded');
//     const runButton = document.getElementById('btnFilterCasualfield');
//     const codeFrame = document.getElementById('frame');

//     // Function to run code in the iframe
//     function runCode() {
//         // Get the content of the iframe
//         const iframeContent = codeFrame.contentDocument || codeFrame.contentWindow.document;
        
//         // Example: Execute a JavaScript function on the iframe content
//         iframeContent.body.innerHTML += '<h2>Executed Code</h2><p>This code was executed using the iframe.</p>';
        
//         // Example: Call a function on the iframe content
//         iframeContent.querySelector('.functionToCall')?.invokeFunction();
        
//         // Example: Modify an element in the iframe
//         const element = iframeContent.querySelector('#elementToModify');
//         if (element) {
//             element.textContent = 'Modified by iframe runner';
//         }
//     }

//     // Add event listener to the button
//     runButton.addEventListener('click', runCode);

//     console.log('Ifame content loaded successfully');
// });