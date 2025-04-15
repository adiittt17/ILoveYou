// --- Countdown Timer Logic ---

// !!! PENTING: Ganti tanggal di bawah ini dengan TANGGAL ANNIVERSARY Anda !!!
// Format: '2025-04-06T00:00:00' (Contoh: '2025-12-25T00:00:00')
const anniversaryDate = '[Tanggal Anniversary YYYY-MM-DD]T00:00:00'; // GANTI TANGGAL INI
const countdownTargetDate = new Date(anniversaryDate).getTime();

// Update countdown setiap 1 detik
const countdownInterval = setInterval(() => {
    // Dapatkan waktu sekarang
    const now = new Date().getTime();

    // Hitung selisih waktu
    const distance = countdownTargetDate - now;

    // Kalkulasi hari, jam, menit, detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil di HTML
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Cek apakah elemen ada sebelum mengubah isinya
    if (daysEl && hoursEl && minutesEl && secondsEl) {
        // Tambahkan nol di depan jika angka < 10
        daysEl.innerText = days < 10 ? '0' + days : days;
        hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }


    // Jika waktu countdown habis
    if (distance < 0) {
        clearInterval(countdownInterval);
        const timerEl = document.getElementById('countdown-timer');
        if (timerEl) {
             timerEl.innerHTML = "<h2>Selamat Hari Anniversary! ❤️</h2>";
             // Anda bisa menambahkan efek lain di sini
        }
    }
}, 1000);


// --- Placeholder untuk Efek Interaktif Lain ---

// Contoh: Menambahkan efek sederhana saat Reason Card diklik
const reasonCards = document.querySelectorAll('.reason-card');
reasonCards.forEach(card => {
    card.addEventListener('click', () => {
        // Contoh: Ganti background atau tambahkan animasi sederhana
        // Ini BUKAN efek ripple sebenarnya
        card.style.backgroundColor = '#e0f7fa'; // Ganti warna sementara
        setTimeout(() => {
             card.style.backgroundColor = '#ffffff'; // Kembalikan warna
        }, 300);

        // Untuk efek ripple CSS di atas (membutuhkan elemen span di dalam card)
        // const ripple = document.createElement('span');
        // ripple.classList.add('ripple-element');
        // card.appendChild(ripple);
        // setTimeout(() => ripple.remove(), 600);
    });
});


// --- Placeholder untuk Inisialisasi Library Partikel ---
/*
// Jika Anda menggunakan particles.js, konfigurasinya akan seperti ini:
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80, // Jumlah partikel
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#ffffff", "#add8e6", "#87ceeb"] // Warna partikel (putih, biru soft)
    },
    "shape": {
      "type": ["circle", "star"], // Bentuk partikel (lingkaran, bintang)
      // Jika ingin bentuk hati, perlu pakai gambar atau SVG
    },
    "opacity": {
      "value": 0.6,
      "random": true,
    },
    "size": {
      "value": 4,
      "random": true,
    },
    "line_linked": {
      "enable": false, // Tidak ada garis antar partikel
    },
    "move": {
      "enable": true,
      "speed": 1, // Kecepatan gerak
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out", // Keluar layar
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true, // Aktifkan interaksi saat hover
        "mode": "repulse" // Partikel menjauh dari kursor
      },
      "onclick": {
        "enable": true, // Aktifkan interaksi saat klik
        "mode": "push" // Menambah partikel saat klik
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100, // Jarak interaksi hover
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4 // Jumlah partikel yg ditambah saat klik
      }
    }
  },
  "retina_detect": true
});
*/

console.log("Website Romantis Dimuat!"); // Pesan cek di console browser