//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();


 

		
// to fit in a 320-wide space 
var cellWidth = 92;
var cellHeight = 92;
var xSpacer = 10;
var ySpacer = 10;
var xGrid = 3;
var yGrid = 12;

var tableData = [];

var colorSet = [
                "#D44646",
                "#46D463",
                "#46D4BE",
                "#C2D446",
                "#D446D5",
                "#4575D5",
                "#E39127",
                "#879181",
                "#E291D4"
              ];

var colorSetIndex = 0;
var cellIndex = 0;

for (var y=0; y<yGrid; y++){
    var thisRow = Ti.UI.createTableViewRow({
        className: "grid",
        layout: "horizontal",
        height: cellHeight+(2*ySpacer),
        selectedBackgroundColor:"red"
    });
    for (var x=0; x<xGrid; x++){
        var thisView = Ti.UI.createView({
            objName:"grid-view",
            objIndex:cellIndex.toString(),
            backgroundColor: colorSet[colorSetIndex],
            left: ySpacer,
            height: cellHeight,
            width: cellWidth
        });

        var thisLabel = Ti.UI.createLabel({
            color:"white",
            font:{fontSize:48,fontWeight:'bold'},
            text:cellIndex.toString(),
            touchEnabled:false
        });
        thisView.add(thisLabel);
        thisRow.add(thisView);
        cellIndex++;
        colorSetIndex++;

        if( colorSetIndex === colorSet.length ){
            colorSetIndex = 0;
        }
    }
    tableData.push(thisRow);
}
var tableview = Ti.UI.createTableView({
    data:tableData
});

tableview.addEventListener("click", function(e){
    if(e.source.objName){
        Ti.API.info("---> " + e.source.objName+e.source.objIndex + " was clicked!");
    }
});

var win = Ti.UI.createWindow({
    backgroundColor:"black",
    navBarHidden:false,
    title:"Main Window"
});
self.add(tableview);
			
 		


Ti.API.log('info','this log message is from the FirstView page');


	return self;
}

module.exports = FirstView;
