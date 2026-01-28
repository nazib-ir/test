document.addEventListener('DOMContentLoaded', function() {
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('.loading-text');
    const resultLines = document.querySelectorAll('.result');
    
    // Start loading animation
    setTimeout(() => {
        loadingProgress.style.width = '100%';
        loadingText.textContent = 'Injecting Trojan... [COMPLETED]';
        
        // Show "Trojan injected successfully" after 3 seconds
        setTimeout(() => {
            resultLines[0].classList.remove('hidden');
            
            // Show "Session Hijacked" after a short delay
            setTimeout(() => {
                resultLines[1].classList.remove('hidden');
            }, 500);
        }, 3000);
    }, 500);
    
    // Add some random terminal effect
    const terminalBody = document.querySelector('.terminal-body');
    let charCount = 0;
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    
    function addRandomChar() {
        if (Math.random() > 0.7 && charCount < 20) {
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            const span = document.createElement('span');
            span.textContent = randomChar;
            span.style.color = '#0a0';
            span.style.opacity = '0.7';
            span.style.position = 'absolute';
            span.style.left = Math.random() * 100 + '%';
            span.style.top = Math.random() * 100 + '%';
            span.style.fontSize = Math.random() * 10 + 10 + 'px';
            terminalBody.appendChild(span);
            charCount++;
            
            setTimeout(() => {
                span.remove();
                charCount--;
            }, 1000);
        }
    }
    
    setInterval(addRandomChar, 100);
});