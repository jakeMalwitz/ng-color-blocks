colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'papayawhip', 'green'];
  var recentColor = {};
  var addColor = function(color) {
    var newColor = {color: color};
    colors.push(color);
    recentColor.color = newColor;
  }

  return {
    colorsArray: colors,
    recentColor: recentColor,
    addColor: function(color){
    addColor(color);
    }
  };

}]);
