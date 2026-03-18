export function initBackground(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let mouseX = -1000;
    let mouseY = -1000;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || ('ontouchstart' in window)
        || (navigator.maxTouchPoints > 0);

    let prevWidth = width;

    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        // On mobile, scrolling hides/shows the address bar, which changes
        // innerHeight and fires resize. Only regenerate triangles when the
        // width actually changes (orientation change or real resize).
        const widthChanged = newWidth !== prevWidth;

        width = canvas.width = newWidth;
        height = canvas.height = newHeight;

        if (widthChanged) {
            prevWidth = newWidth;
            createTriangles();
        }
    });

    if (!isMobile) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouseX = -1000;
            mouseY = -1000;
        });
    }

    const observer = new MutationObserver(() => {
        options.baseColor = getBaseColor();
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
            return { ...hexToRgb('#FFFFFF'), a: isMobile ? 0.030 : 0.022 };
        }
        return { ...hexToRgb('#000000'), a: 0.1 };
    }

    const options = {
        baseColor: getBaseColor(),
        hoverColor: { ...hexToRgb('#C2A365'), a: 0.55 },
        hoverRadius: 160,
        transitionSpeed: 0.06,
        mobileGlowChance: 0.0002,
        mobileGlowFadeInSpeed: 0.025,
        mobileGlowFadeOutSpeed: 0.01,
        // Layers create depth: smaller/slower = further away
        layers: [
            { count: 0.3, sizeRange: [12, 20], speedFactor: 0.4, opacityMult: 0.5 },
            { count: 0.4, sizeRange: [22, 34], speedFactor: 0.7, opacityMult: 0.75 },
            { count: 0.3, sizeRange: [36, 50], speedFactor: 1.0, opacityMult: 1.0 },
        ],
        totalCount: isMobile ? 90 : 300,
    };

    let triangles = [];
    let time = 0;

    class Triangle {
        constructor(x, y, layer) {
            this.originX = x;
            this.originY = y;
            this.x = x;
            this.y = y;
            this.layer = layer;
            this.size = layer.sizeRange[0] + Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]);
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.002 * layer.speedFactor;
            this.hoverAmount = 0;
            this.glowPhase = 'idle';

            // Each triangle drifts in its own gentle pattern
            this.driftPhaseX = Math.random() * Math.PI * 2;
            this.driftPhaseY = Math.random() * Math.PI * 2;
            this.driftAmplitudeX = 12 + Math.random() * 25 * layer.speedFactor;
            this.driftAmplitudeY = 10 + Math.random() * 20 * layer.speedFactor;
            this.driftSpeedX = (0.001 + Math.random() * 0.0015) * layer.speedFactor;
            this.driftSpeedY = (0.0008 + Math.random() * 0.0012) * layer.speedFactor;

            // Overall drift direction
            const angle = Math.random() * Math.PI * 2;
            this.linearDriftX = Math.cos(angle) * 0.12 * layer.speedFactor;
            this.linearDriftY = Math.sin(angle) * 0.12 * layer.speedFactor;
        }

        isMouseNear() {
            const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
            return distance < options.hoverRadius;
        }

        draw() {
            const base = options.baseColor;
            const hover = options.hoverColor;
            const t = this.hoverAmount;
            const layerOpacity = this.layer.opacityMult;

            const r = Math.round(base.r + (hover.r - base.r) * t);
            const g = Math.round(base.g + (hover.g - base.g) * t);
            const b = Math.round(base.b + (hover.b - base.b) * t);
            const a = (base.a + (hover.a - base.a) * t) * layerOpacity;

            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            const s = this.size;
            const h = s * 0.866; // equilateral height

            ctx.beginPath();
            ctx.moveTo(0, -h / 2);
            ctx.lineTo(-s / 2, h / 2);
            ctx.lineTo(s / 2, h / 2);
            ctx.closePath();
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
            ctx.fill();
            ctx.restore();
        }

        update() {
            // Organic floating motion
            this.x = this.originX
                + Math.sin(time * this.driftSpeedX + this.driftPhaseX) * this.driftAmplitudeX;
            this.y = this.originY
                + Math.sin(time * this.driftSpeedY + this.driftPhaseY) * this.driftAmplitudeY;

            // Slow linear drift
            this.originX += this.linearDriftX;
            this.originY += this.linearDriftY;

            // Wrap around edges with generous margin
            const margin = this.size * 2;
            if (this.originX > width + margin) this.originX = -margin;
            if (this.originX < -margin) this.originX = width + margin;
            if (this.originY > height + margin) this.originY = -margin;
            if (this.originY < -margin) this.originY = height + margin;

            // Gentle rotation
            this.rotation += this.rotationSpeed;

            if (isMobile) {
                if (this.glowPhase === 'idle' && Math.random() < options.mobileGlowChance) {
                    this.glowPhase = 'fadeIn';
                }
                if (this.glowPhase === 'fadeIn') {
                    this.hoverAmount = Math.min(1, this.hoverAmount + options.mobileGlowFadeInSpeed);
                    if (this.hoverAmount >= 1) this.glowPhase = 'fadeOut';
                } else if (this.glowPhase === 'fadeOut') {
                    this.hoverAmount = Math.max(0, this.hoverAmount - options.mobileGlowFadeOutSpeed);
                    if (this.hoverAmount <= 0) this.glowPhase = 'idle';
                }
            } else {
                if (this.isMouseNear()) {
                    this.hoverAmount = Math.min(1, this.hoverAmount + options.transitionSpeed);
                } else {
                    this.hoverAmount = Math.max(0, this.hoverAmount - options.transitionSpeed);
                }
            }
        }
    }

    function createTriangles() {
        triangles = [];
        for (const layer of options.layers) {
            const count = Math.round(options.totalCount * layer.count);
            for (let i = 0; i < count; i++) {
                const x = Math.random() * (width + 100) - 50;
                const y = Math.random() * (height + 100) - 50;
                triangles.push(new Triangle(x, y, layer));
            }
        }
    }

    function animate() {
        time++;
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
