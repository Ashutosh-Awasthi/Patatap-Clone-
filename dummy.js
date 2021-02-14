// var myPath = new Path();
// myPath.strokeColor = 'black';
// myPath.add(new Point(0, 0));
// myPath.add(new Point(100, 50));

// var sqr =new Path();
// sqr.strokeColor ="black";
// sqr.add(new Point(300,300));
// sqr.add(new Point(600,300));
// sqr.add(new Point(600,600));
// sqr.add(new Point(300,600));

// sqr.closed =true;
// c.selected=true;

// function onKeyDown(event) {
// 	// var maxPoint = new Point(view.size.width,view.size.height);
//     var randomPoint = new Point(Math.random()*view.size.width,Math.random()*view.size.height);
//     new Path.Circle(randomPoint,50).fillColor="blue";
// }

// shorter format uisng random point
var sound = new Howl({
    src: ['sounds/clay.mp3']
});

var cir=[];
function onKeyDown(event) {
    sound.play();
	var maxPoint = new Point(view.size.width,view.size.height);
    var randomPoint = new Point.random()
    var point =randomPoint*maxPoint;
    var circle= new Path.Circle(point,100);
    circle.fillColor="blue";
    cir.push(circle);
}
// var path = new Path.Rectangle(new Point(50, 25), new Size(50, 300));
// path.fillColor = 'purple';


function onFrame(event) {
    for(var i=0; i< cir.length; i++)
    {
        cir[i].scale(0.9);
        cir[i].fillColor.hue+=3;
        if(cir[i].area < 1) {
            cir[i].remove();
            cir.splice(i,1);
        }
    }
}