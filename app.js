// Simple functionality - no animations or fancy features
document.addEventListener('DOMContentLoaded', function() {
    
    // Copy code block when clicked
    const codeBlock = document.querySelector('.code');
    if (codeBlock) {
        codeBlock.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text);
                const original = this.textContent;
                this.textContent = 'Kopiert!';
                setTimeout(() => {
                    this.textContent = original;
                }, 1000);
            }
        });
        codeBlock.title = 'Klikk for å kopiere';
    }

    // Handle download if file doesn't exist
    const downloadBtn = document.querySelector('a[href="vantral.exe"]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // This will be handled by the browser naturally
            // If file doesn't exist, browser will show 404
        });
    }
});
