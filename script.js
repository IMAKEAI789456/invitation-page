function showRedirectMessage(event) {
    event.preventDefault();
    
    const overlay = document.getElementById('redirectOverlay');
    overlay.classList.add('active');
    
    const targetUrl = event.currentTarget.href;
    
    setTimeout(() => {
        window.open(targetUrl, '_blank');
        
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 500);
    }, 1500);
}
