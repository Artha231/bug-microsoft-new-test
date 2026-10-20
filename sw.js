self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // Tutup notifikasi
    
    // BYPASS SANDBOX:
    // Meskipun dipicu dari iframe yang di-sandbox, 
    // SW berjalan di latar belakang dan bisa membuka window baru.
    event.waitUntil(
        clients.openWindow('https://example.com').catch(function(err) {
            console.error("Gagal membuka window:", err);
        })
    );
});