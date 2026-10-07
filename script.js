const MyFullbodyimage = document.getElementById('MyFullbody-image');
const portfolioText = document.getElementById('portfolio-text');
const floatingProjects = document.querySelectorAll('.floating-project');

// ฟังก์ชันทำงานเมื่อผู้ใช้งานเลื่อนหน้าจอ (Scroll)
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // คำนวณเปอร์เซ็นต์การเลื่อน (ค่าอยู่ระหว่าง 0 ถึง 1)
    const scrollPercentage = Math.min(scrollPosition / windowHeight, 1);

    // 1. ควบคุมการย่อรูปภาพ (ของเดิม)
    const initialScale = 2.2; 
    const currentScale = initialScale - ((initialScale - 1) * scrollPercentage);
    MyFullbodyimage.style.transform = `scale(${currentScale})`;

    // 2. ควบคุมข้อความ PORTFOLIO (มาใหม่)
    // เริ่มต้นตัวใหญ่มาก (เช่น 45vw จะทำให้โดนตัดลงมาหลายบรรทัด) -> เลื่อนสุดเหลือ 12vw (เหลือบรรทัดเดียว)
    const initialTextSize = 30; 
    const finalTextSize = 12;
    const currentTextSize = initialTextSize - ((initialTextSize - finalTextSize) * scrollPercentage);
    // อัปเดตขนาดตัวอักษร
    portfolioText.style.fontSize = `${currentTextSize}vw`;

    // 3. ควบคุมการแสดงผลกล่องผลงาน (ของเดิม)
    floatingProjects.forEach((project) => {
        if (scrollPercentage > 0.4) {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0) scale(1)';
        } else {
            project.style.opacity = '0';
            project.style.transform = 'translateY(30px) scale(0.9)';
        }
    });
});

// สั่งทำงาน 1 ครั้งตอนโหลดหน้าเว็บเสร็จ เพื่อเซ็ตค่าเริ่มต้นให้ข้อความใหญ่ทันที
window.dispatchEvent(new Event('scroll'));