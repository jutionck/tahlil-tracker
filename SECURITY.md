# Security Policy

Terima kasih sudah membantu menjaga keamanan **Tahlil & Yasinan Tracker**.

## Supported Versions

Saat ini project masih berada pada tahap awal. Fokus dukungan keamanan diberikan pada branch utama:

| Version | Supported |
| ------- | --------- |
| main    | Yes       |

## Reporting a Vulnerability

Jika Anda menemukan celah keamanan, mohon jangan langsung mempublikasikannya melalui issue publik.

Silakan laporkan dengan informasi berikut:

- Ringkasan masalah.
- Langkah reproduksi.
- Dampak yang mungkin terjadi.
- Browser/perangkat yang digunakan.
- Screenshot atau proof of concept bila aman untuk dibagikan.

Anda dapat menghubungi maintainer melalui GitHub profile atau membuka issue umum tanpa menyertakan detail eksploit yang sensitif.

## Security Scope

Area yang termasuk prioritas keamanan:

- Penyimpanan data lokal browser.
- PWA service worker dan cache.
- Validasi input pengguna.
- Dependency frontend.
- Potensi XSS dari konten yang ditampilkan di aplikasi.

## Best Practices for Contributors

- Jangan commit secret, token, API key, atau credential.
- Jalankan audit dependency secara berkala.
- Hindari penggunaan HTML mentah bila tidak diperlukan.
- Validasi dan sanitasi input pengguna.
- Gunakan dependency yang aktif dikelola.
