function updateDateTime() {
    const now = new Date();
    
    // فرمت تاریخ
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', language: 'fa' };
    const formattedDate = now.toLocaleDateString('fa-IR', options);
    
    // فرمت زمان
    const formattedTime = now.toLocaleTimeString('fa-IR');
    
    // قرار دادن به HTML
    document.getElementById('current-date').innerText = formattedDate;
    document.getElementById('current-time').innerText = formattedTime;
}

// به‌روزرسانی هر ثانیه
setInterval(updateDateTime, 1000);

// اولین بار بروز رسانی تاریخ و ساعت
updateDateTime();