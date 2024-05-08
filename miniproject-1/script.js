let rect = document.querySelector(".rectangle");

rect.addEventListener('mousemove', (details) => {
    let reactangleLocation = rect.getBoundingClientRect();
    let insideRectVal = details.clientX - reactangleLocation.left;

    if (insideRectVal < reactangleLocation.width / 2) {
        let redColor = gsap.utils.mapRange(0, reactangleLocation.width/2, 255, 0, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        })

    } else {
        let blueColor = gsap.utils.mapRange(reactangleLocation.width/2, reactangleLocation.width, 0, 255, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        })    
    }
});


rect.addEventListener('mouseleave', () => { 
    gsap.to(rect, {
        backgroundColor: `white`,
        ease: Power4,
    })
})