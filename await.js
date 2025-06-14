// async function a() {
//     console.log("hi");
    
//     let b = await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("bye");
//             resolve("bye");
//         }, 2000);
//     });

//     console.log(b); // Will print "Done waiting" after 2 seconds
// }
// a();