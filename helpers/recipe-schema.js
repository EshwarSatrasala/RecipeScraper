function Recipe() {
  this.name = "";
  this.ingredients = [];
  this.ingrs = [{
    quantity: "",
    ingrednt: "",
    unit: ""
  }]
  this.instructions = [];
  this.time = {
    prep: "",
    cook: "",
    active: "",
    inactive: "",
    ready: "",
    total: ""
  };
  this.servings = "";
  this.image = "";
}

module.exports = Recipe;
