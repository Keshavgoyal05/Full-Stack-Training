var Restaurant = /** @class */ (function () {
    function Restaurant() {
    }
    Restaurant.prototype.display = function () {
        console.log("Food Id:" + this.food_id + " \t Name:" + this.name + " \t Description:" + this.description + " \t Cost:" + this.cost);
    };
    return Restaurant;
}());
var r1 = new Restaurant();
r1.food_id = 'F001';
r1.name = "My Food";
r1.description = "A place for your hungry mood.";
r1.cost = 1900;
r1.display();
