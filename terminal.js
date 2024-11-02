document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    let commandLines = terminal.querySelectorAll('.command-line');
    let outputs = terminal.querySelectorAll('.output');

    // Initially hide all command lines and outputs
    commandLines.forEach((line, index) => {
        if (index > 0) {
            line.style.display = 'none';
            outputs[index].style.display = 'none';
        }
    });

    // Function to show next command
    function showNext(index) {
        if (index < commandLines.length) {
            commandLines[index].style.display = 'block';
            outputs[index].style.display = 'block';
            terminal.scrollTop = terminal.scrollHeight;
            setTimeout(() => showNext(index + 1), 1000);
        }
    }

    // Start the animation
    setTimeout(() => showNext(1), 1000);
});