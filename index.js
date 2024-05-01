function shoot() {
    // const defaults = {
    //     spread: 360,
    //     ticks: 100,
    //     gravity: 0,
    //     decay: 0.94,
    //     startVelocity: 30,
    // };
    // confetti({
    //     ...defaults,
    //     particleCount: 30,
    //     scalar: 1.2,
    //     shapes: ["polygon", "square"],
    //     colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    // });

    // confetti({
    //     ...defaults,
    //     particleCount: 200,
    //     scalar: 2,
    //     shapes: ["emoji"],
    //     shapeOptions: {
    //         emoji: {
    //             value: ["😂", "🤣"],
    //         },
    //     },
    // });

    const end = Date.now() + 15 * 1000;

    // go Buckeyes!
    const colors = ["#bb0000", "#ffffff", "#24ea0e", "#fc0c0c"];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });

        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
shoot()

setInterval(() => {
    const duration = 15 * 1000,
        animationEnd = Date.now() + duration;

    let skew = 1;

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        const timeLeft = animationEnd - Date.now(),
            ticks = Math.max(200, 500 * (timeLeft / duration));

        skew = Math.max(0.2, skew - 0.001);

        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: Math.random() * skew - 0.2,
            },
            colors: ["#ffffff"],
            shapes: ["circle"],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4),
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    })();
}, 2000)