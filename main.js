let sourceData = [];

fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E1C8F1FB-847E-48D1-99F5-E2E780B3F38D")
.then(function(response){
    return response.json();
})
.then(function(data){
    sourceData = data;
    console.log(sourceData);
})
.catch(function(error){

})

// function cityClick(){
//     let city = document.getElementById("list").value;
//     document.getElementById("town").innerHTML = city ;
// }

const list = document.querySelector("#list");
const town = document.querySelector("#town");
const degree = document.querySelector("#degree");
const degreeMin = document.querySelector("#degreeMin");
const degreeMax = document.querySelector("#degreeMax");
const weather = document.querySelector("#weather");
const probability = document.querySelector("#probability");
const pic = document.querySelector(".pic");
console.log(list)

list.addEventListener("change", function() {
    switch(list.value){
        case "台北":
            town.innerHTML = sourceData.records.location[5].locationName;

            degreeMin.innerHTML = sourceData.records.location[5].weatherElement[2].time[0].parameter.parameterName;

            degreeMax.innerHTML = sourceData.records.location[5].weatherElement[4].time[0].parameter.parameterName;

            weather.innerHTML = sourceData.records.location[5].weatherElement[0].time[0].parameter.parameterName;

            probability.innerHTML = sourceData.records.location[5].weatherElement[1].time[0].parameter.parameterName;

            show();
            break;
        
        case "桃園":
            town.innerHTML = sourceData.records.location[13].locationName;

            degreeMin.innerHTML = sourceData.records.location[13].weatherElement[2].time[0].parameter.parameterName;

            degreeMax.innerHTML = sourceData.records.location[13].weatherElement[4].time[0].parameter.parameterName;

            weather.innerHTML = sourceData.records.location[13].weatherElement[0].time[0].parameter.parameterName;

            probability.innerHTML = sourceData.records.location[13].weatherElement[1].time[0].parameter.parameterName;

            show();
            break;
        
        case "新竹":
            town.innerHTML = sourceData.records.location[4].locationName;
    
            degreeMin.innerHTML = sourceData.records.location[4].weatherElement[2].time[0].parameter.parameterName;
    
            degreeMax.innerHTML = sourceData.records.location[4].weatherElement[4].time[0].parameter.parameterName;
    
            weather.innerHTML = sourceData.records.location[4].weatherElement[0].time[0].parameter.parameterName;
            
            probability.innerHTML = sourceData.records.location[4].weatherElement[1].time[0].parameter.parameterName;
    
            show();
        break;
        
        case "台中":
            town.innerHTML = sourceData.records.location[11].locationName;
    
            degreeMin.innerHTML = sourceData.records.location[11].weatherElement[2].time[0].parameter.parameterName;
    
            degreeMax.innerHTML = sourceData.records.location[11].weatherElement[4].time[0].parameter.parameterName;
    
            weather.innerHTML = sourceData.records.location[11].weatherElement[0].time[0].parameter.parameterName;
            
            probability.innerHTML = sourceData.records.location[11].weatherElement[1].time[0].parameter.parameterName;
    
            show();
        break;

        case "嘉義":
            town.innerHTML = sourceData.records.location[2].locationName;
    
            degreeMin.innerHTML = sourceData.records.location[2].weatherElement[2].time[0].parameter.parameterName;
    
            degreeMax.innerHTML = sourceData.records.location[2].weatherElement[4].time[0].parameter.parameterName;
    
            weather.innerHTML = sourceData.records.location[2].weatherElement[0].time[0].parameter.parameterName;
            
            probability.innerHTML = sourceData.records.location[2].weatherElement[1].time[0].parameter.parameterName;
    
            show();
        break;

        case "台南":
            town.innerHTML = sourceData.records.location[6].locationName;
    
            degreeMin.innerHTML = sourceData.records.location[6].weatherElement[2].time[0].parameter.parameterName;
    
            degreeMax.innerHTML = sourceData.records.location[6].weatherElement[4].time[0].parameter.parameterName;
    
            weather.innerHTML = sourceData.records.location[6].weatherElement[0].time[0].parameter.parameterName;
            
            probability.innerHTML = sourceData.records.location[6].weatherElement[1].time[0].parameter.parameterName;
    
            show();
        break;

        case "高雄":
            town.innerHTML = sourceData.records.location[15].locationName;
    
            degreeMin.innerHTML = sourceData.records.location[15].weatherElement[2].time[0].parameter.parameterName;
    
            degreeMax.innerHTML = sourceData.records.location[15].weatherElement[4].time[0].parameter.parameterName;
    
            weather.innerHTML = sourceData.records.location[15].weatherElement[0].time[0].parameter.parameterName;
            
            probability.innerHTML = sourceData.records.location[15].weatherElement[1].time[0].parameter.parameterName;
    
            show();
        break;


    }

    function show(){
        if(weather.innerHTML === "陰短暫雨"){
            pic.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.innerHTML === "陰時多雲"){
            pic.innerHTML = `<i class="fa-solid fa-cloud-moon"></i>`;
        }else if(weather.innerHTML === "多雲"){
            pic.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
        }
    }
    
})


