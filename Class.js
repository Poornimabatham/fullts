var stars = /** @class */ (function () {
    function stars() {
    }
    stars.prototype.check = function (p) {
        var c = p;
        var stars = "";
        for (var i = 1; i <= c; i++) {
            for (var j = 0; j < i; j++) {
                stars += "*";
            }
            stars += "\n";
        }
        console.log(stars);
    };
    return stars;
}());
var b = new stars();
b.check(6);
//  function check(p)
//  {
// let c:number = p;
// let stars = "";
// for (let i = 1; i <= c; i++) {
//   for (let j = 0; j < i; j++) {
//     stars += "*";
//   }
//   stars += "\n";
// }
// console.log(stars);
// }
// check(6);
