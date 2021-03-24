ymaps.ready(init);
function init(){
       
        var filialsMap = new ymaps.Map("map", {
            center: [52.6,40.2],
            zoom: 5
        });
        
        var filialsCount = document.querySelectorAll('.filials-item').length;
        console.log(filialsCount);
        var balloons = document.querySelectorAll('.filial-contacts-addres');
        var hints = document.querySelectorAll('.city-name');
        
        var mapArgs = {
           
          coords: [ [55.72506706901704,37.65371149999996], [48.500644573895386,44.57983050000001], [45.04092257458387,38.9829575], [51.586537572358665,45.96639799999997], [51.6714385722938,39.20324249999999], [40.18021601235156,44.5120795], [55.02265456967442,82.975739] ],
          layout: 'default#image',
          href: 'images/place.png',
          size: [36, 40],
          offset: [-3, -42]
          
        };
        
        for ( let i = 0; i < filialsCount; i++ ) {
            let myPlacemark = new ymaps.Placemark(mapArgs.coords[i], {hintContent: hints[i].innerText, balloonContent: balloons[i].innerText}, {
            iconLayout: mapArgs.layout,
            iconImageHref: mapArgs.href,
            iconImageSize: mapArgs.size,
            iconImageOffset: mapArgs.offset
            });
            filialsMap.geoObjects.add(myPlacemark);
        }
        
        filialsMap.container.fitToViewport();

}