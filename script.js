function turn_on_off(){
    //
    var image = document.getElementById('image');
    if(image.src.endsWith('off.jpg')){
        image.src = "image/on.jpg";
    }else{
        image.src = "image/off.jpg";
    }
}
