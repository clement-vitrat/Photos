document.addEventListener("DOMContentLoaded", function() {
    const images = [
        {
            name: 'Automobile_1.jpg',
            title: 'Málaga, Spain | 2023',
            description: 'Nikon N65 + Nikon 35mm f/1.8 + Ilford HP5 400'
        },
        {
            name: 'Automobile_2.jpg',
            title: 'Paris, France | 2023',
            description: 'Canon EOS R + RF 24-105mm f/4L + Fujifilm Pro 400H'
        },
        {
            name: 'Automobile_3.jpg',
            title: 'New York, USA | 2023',
            description: 'Sony A7III + 50mm f/1.4 + Kodak Portra 800'
        }
    ];
    
    const imageNames = [
        'Automobile_1.jpg',
        'Automobile_2.jpg',
        'Automobile_3.jpg',
        // Ajoutez tous les noms de fichiers ici
    ];
    
    const gallery = document.getElementById('gallery');
    
    images.forEach(image => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-sm-6 col-md-6 col-lg-4 col-xl-4 item';
        colDiv.style.padding = '15px';
        colDiv.dataset.aos = 'fade';
        colDiv.dataset.src = `../../images/Automobile/${image.name}`;
        colDiv.dataset.subHtml = `<h4>${image.title}</h4><p>${image.description}</p>`;
        
        const anchor = document.createElement('a');
        anchor.href = '#';
        
        const img = document.createElement('img');
        img.src = `../../images/Automobile/${image.name}`;
        img.alt = 'Image';
        img.className = 'img-fluid';
        
        anchor.appendChild(img);
        colDiv.appendChild(anchor);
        gallery.appendChild(colDiv);
    });
    
    // Initialisation de LightGallery
    $('#gallery').lightGallery({
        download: false,
        share: false
    });
    
    // Initialisation de AOS
    AOS.init();
});