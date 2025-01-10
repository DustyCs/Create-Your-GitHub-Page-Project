// Image not showing?
// fix this function
const fetchImages = async () => {
    const response = fetch('https://picsum.photos/v2/list');
    const data = response.json();

    if(data?.id){
        return false;
    }else{
        return data;
    }
}

$("document").ready(function() {

    const images = fetchImages();
    let image_id = 0;

    images.then((data) => {
        data.forEach((image) => {
            if(image.id == image_id){
                const img = document.createElement('img'); // literally creates a new element
                img.src = image.download_url;
                img.alt = image.author;
                $('.main-img').append(img); // yes this appends the image to the div
            }

        });
    });

    // get the data from json file
    // and then you don't need to append it but change the inner html text of the divs

    // uncomment the line below to see the change
    // $("#title").text("This is changed from the main.js file");

    
    
    }
);