/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  if (preferences.length < 3) {
    return 0
}
 
var triangles = 0;
for (var i=0; i<preferences.length -2; i++) {
    
    var first = preferences[i] ;
    var second = preferences[first-1];
    var third  = preferences[second-1];

    if (third == i+1 && first > i+1 && second > i+1){
        triangles++;
       
    }
}
return triangles;
};
