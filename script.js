let names = ['Flow', 'Move', 'Run', 'Travel', 'Rush','Scroll','Flow','Move','sprint','Fly','Ignore','Zzz'];

let animated_names = document.getElementById('animatedNames');

let currentIndex = 0;


// Function to change the name every second
setInterval(() => {
    // Update the paragraph text with the current name
    animated_names.textContent = names[currentIndex];
    
    // Move to the next name (loop back to start if at the end)
    currentIndex = (currentIndex + 1) % names.length;
}, 700); // Change every 1000 milliseconds (1 second)

console.log("Hii")

function goToPlayReel(){
    window.open("https://burocratik.com/wp-content/uploads/2023/06/Buroreel2023-mobile.mp4#t=0.01", "_blank");
}

function goToSandClockPage(){
    window.open("https://burocratik.com/work/sandclock/", "_blank");
}

function goToHematogenix(){
    window.open("https://burocratik.com/work/hematogenix/", "_blank");
}

function goToKategora(){
    window.open("https://burocratik.com/work/kategora/", "_blank");
}

function goToAltsDigital(){
    window.open("https://burocratik.com/work/alts-digital/", "_blank");
}
  // Select the custom pointer element
  const customPointer = document.getElementById("customPointer");

  // Function to move the custom pointer and change its color
  document.addEventListener("mousemove", function (event) {
    // Update the position of the custom pointer to follow the mouse
    customPointer.style.left = event.pageX + "px";
    customPointer.style.top = event.pageY + "px";

    customPointer.animate({
        left : event.pageX + "px",
        top : event.pageY + "px"
    },{duration : 500,fill:"forwards"})

    // // Change color based on mouse movement (optional logic for dynamic colors)
    // let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    //   Math.random() * 255
    // })`;
    // customPointer.style.backgroundColor = randomColor;
  });