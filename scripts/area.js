// triangle
function triangleAreaCalculate() {
   const base = getInputField('base-field');
   const height = getInputField('height-field');
   const area = 0.5 * base * height;
   setElement('area-field',area);
}
// rectangle
function rectangleAreaCalculate() {
   const width = getInputField('width-field');
   const length = getInputField('length-field');
   const area = width * length;
   setElement('rectangle-area-field',area);
}
// parr
function parallelAreaCalculate() {
   const base = getInputField('parallel-base-field');
   const height = getInputField('parallel-height-field');
   const area = base * height;
   setElement('parallel-area',area);
}
// rhombus
function rhombusAreaCalculate() {
   const base = getInputField('d1-field');
   const height = getInputField('d2-field');
   const area = 0.5 * base * height;
   setElement('rhombus-area',area);
}
// pentagon
function pentagonAreaCalculate() {
   const base = getInputField('p-field');
   const height = getInputField('b-field');
   const area = 0.5 * base * height;
   setElement('pentagon-area',area);
}
// ellipse
function ellipseAreaCalculate() {
   const base = getInputField('ellipse-a-field');
   const height = getInputField('ellipse-b-field');
   const area = 3.14 * base * height;
   const areaDecimal = area.toFixed(2);
   setElement('ellipse-area',areaDecimal);
}