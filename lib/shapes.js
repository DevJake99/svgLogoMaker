// Class for setting the color of the shape
class shapeTC {
    constructor(){
        this.color = ''
       
    }
    setShapeColor(color){
        this.color = color;
    }
    setShapeText(text){
        this.text = text;
    }
};

// Class for generating circle image with desired color using inheritance properties
class Circle extends shapeTC {

    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`
    }
}
// Class for generating square image with desired color using inheritance properties

class Square extends shapeTC {
    
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`
    }
}
// Class for generating triangle image with desired color using inheritance properties
class Triangle extends shapeTC {
    
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`
    }
}



module.exports = {Triangle, Circle, Square};