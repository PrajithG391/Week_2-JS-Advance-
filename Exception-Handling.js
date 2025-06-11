function drive(speed){
    if (speed > 180) {
        throw new Error("Speed is too high! Slow down.");
    }
    console.log("Driving at", speed,"km/h")
}

try {
    drive(180.0001);
    
}catch (e){
    console.log("Driving error:",e.message);
}