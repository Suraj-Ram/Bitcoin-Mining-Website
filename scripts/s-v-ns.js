//Vars
//HDD = NVMe SSD
var rawSizeInput;
var sizeInput;
var ssdRSpeed = 540; 
var ssdWSpeed = 520;
var hddRSpeed = 3500;
var hddWSpeed = 2100;
var ssdROutput;
var ssdWOutput
var hddROutput;
var hddWOutput;
function calculateSpeed() {
    var unitList = document.getElementById("unit");
    var selectedUnit = unitList.options[unitList.selectedIndex].text;

    console.log(selectedUnit);
    rawSizeInput = document.getElementById("sizeInputBox").value;
    //Convert X unit to MB
    
    if(selectedUnit == "TB") {
        sizeInput = rawSizeInput * 1048576;
    }
    if(selectedUnit == "GB") {
        sizeInput = rawSizeInput * 1024;
    }
    if(selectedUnit == "MB") {
        sizeInput = rawSizeInput;
    }
    if(selectedUnit == "KB") {
        sizeInput = rawSizeInput / 1024;
    }
    console.log(sizeInput);
    
    ssdROutput = sizeInput / ssdRSpeed;
    ssdWOutput = sizeInput / ssdWSpeed;
    hddROutput = sizeInput / hddRSpeed;
    hddWOutput = sizeInput / hddWSpeed;
    
    ssdROutput = Math.round(ssdROutput* 100) / 100;
    ssdWOutput = Math.round(ssdWOutput* 100) / 100;
    hddROutput = Math.round(hddROutput* 100) / 100;
    hddWOutput = Math.round(hddWOutput* 100) / 100;
    
    console.log(ssdROutput);
    console.log(ssdWOutput);
    console.log(hddROutput);
    console.log(hddWOutput);
    
    document.getElementById("ssdRDisp").innerHTML = ssdROutput + " seconds";
    document.getElementById("ssdWDisp").innerHTML = ssdWOutput + " seconds";
    document.getElementById("hddRDisp").innerHTML = hddROutput + " seconds";
    document.getElementById("hddWDisp").innerHTML = hddWOutput + " seconds";
    
}//end of main func
