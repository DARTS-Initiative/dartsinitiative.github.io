export function initBackground(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let mouseX = -1000;
    let mouseY = -1000;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        createTriangles();
    });

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouseX = -1000;
        mouseY = -1000;
    });

    // Listener para actualizar colores cuando cambia el tema
    const observer = new MutationObserver(() => {
        triangleOptions.baseColor = getBaseColor();
    });
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function getBaseColor() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            return { ...hexToRgb('#FFFFFF'), a: 0.03 }; // Blanco con opacidad moderada en modo oscuro
        }
        return { ...hexToRgb('#000000'), a: 0.07 }; // Negro con poca opacidad en modo claro
    }

    const triangleOptions = {
        size: 40,
        speed: 0.18,
        baseColor: getBaseColor(),
        hoverColor: { ...hexToRgb('#C2A365'), a: 0.65 },
        rows: 16,
        hoverRadius: 90,
        transitionSpeed: 0.1, // Reduced for smoother effect
    };

    let triangles = [];

    class Triangle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = triangleOptions.size;
            this.speed = triangleOptions.speed + (Math.random() - 0.5) * 0.2;
            this.hoverAmount = 0;
        }

        isMouseNear() {
            const centerX = this.x + this.size / 2;
            const centerY = this.y + this.size / 2;
            const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
            return distance < triangleOptions.hoverRadius;
        }

        draw() {
            const base = triangleOptions.baseColor;
            const hover = triangleOptions.hoverColor;
            const t = this.hoverAmount;

            const r = Math.round(base.r + (hover.r - base.r) * t);
            const g = Math.round(base.g + (hover.g - base.g) * t);
            const b = Math.round(base.b + (hover.b - base.b) * t);
            const a = base.a + (hover.a - base.a) * t;

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.size, this.y + this.size / 2);
            ctx.lineTo(this.x, this.y + this.size);
            ctx.closePath();
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
            ctx.fill();
        }

        update() {
            this.x += this.speed;
            if (this.x > width + this.size) {
                this.x = -this.size * 2;
            }

            if (this.isMouseNear()) {
                this.hoverAmount = Math.min(1, this.hoverAmount + triangleOptions.transitionSpeed);
            } else {
                this.hoverAmount = Math.max(0, this.hoverAmount - triangleOptions.transitionSpeed);
            }
        }
    }

    function createTriangles() {
        triangles = [];
        const rowHeight = height / triangleOptions.rows;

        for (let i = 0; i < triangleOptions.rows; i++) {
            const trianglesPerRow = Math.ceil(width / (triangleOptions.size * 2));
            for (let j = 0; j < trianglesPerRow + 2; j++) {
                const x = j * (triangleOptions.size * 2) - (triangleOptions.size * 3) + (i % 2 === 0 ? 0 : triangleOptions.size);
                const y = i * rowHeight + (Math.random() * rowHeight / 4);
                triangles.push(new Triangle(x, y));
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        triangles.forEach(triangle => {
            triangle.update();
            triangle.draw();
        });
        requestAnimationFrame(animate);
    }

    createTriangles();
    animate();
}
