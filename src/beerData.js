import { ResponsiveBar } from '@nivo/bar'
import useFetch from './useFetch';

const Bar = () => {
    //Gather all JSON data across multiple pages and put into one file
    const rawData = useFetch('https://api.punkapi.com/v2/beers?page=1&per_page=80');
    const rawDataTwo = useFetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
    const rawDataThree = useFetch('https://api.punkapi.com/v2/beers?page=3&per_page=80')
    const rawDataFour = useFetch('https://api.punkapi.com/v2/beers?page=4&per_page=80')
    const rawDataFive = useFetch('https://api.punkapi.com/v2/beers?page=5&per_page=80')
    const dataSlice = []

    // console.log(rawData)
    
    // loop through each fetched array and push to new 
    
    for(let i=0; i<rawData.data.length; i++){

        if(rawData.data[i].first_brewed.length > 4){
            dataSlice.push({
                name : rawData.data[i].name,
                abv: rawData.data[i].abv,
                first_brewed: rawData.data[i].first_brewed,
                month: rawData.data[i].first_brewed.slice(0, 2),
                year: rawData.data[i].first_brewed.slice(3, 7),
                monthYear: rawData.data[i].first_brewed.slice(0, 2) + "-" +  rawData.data[i].first_brewed.slice(3, 7)
            })
        } else {
            dataSlice.push({
                name : rawData.data[i].name,
                abv: rawData.data[i].abv,
                first_brewed: "01/" + rawData.data[i].first_brewed,
                month: "01",
                year: rawData.data[i].first_brewed,
                monthYear: "01" + "-" + rawData.data[i].first_brewed
            })
        } 
    }

    for(let i=0; i<rawDataTwo.data.length; i++){

        if(rawDataTwo.data[i].first_brewed.length > 4){
            dataSlice.push({
                name : rawDataTwo.data[i].name,
                abv: rawDataTwo.data[i].abv,
                first_brewed: rawDataTwo.data[i].first_brewed,
                month: rawDataTwo.data[i].first_brewed.slice(0, 2),
                year: rawDataTwo.data[i].first_brewed.slice(3, 7),
                monthYear: rawDataTwo.data[i].first_brewed.slice(0, 2) + "-" + rawDataTwo.data[i].first_brewed.slice(3, 7)
            })
        } else {
            dataSlice.push({
                name : rawDataTwo.data[i].name,
                abv: rawDataTwo.data[i].abv,
                first_brewed: "01/" + rawDataTwo[i].data.first_brewed,
                month: "01",
                year: rawDataTwo.data[i].first_brewed,
                monthYear: "01" + "-" + rawDataTwo.data[i].first_brewed
            })
        } 
    }

    for(let i=0; i<rawDataThree.data.length; i++){

        if(rawDataThree.data[i].first_brewed.length > 4){
            dataSlice.push({
                name : rawDataThree.data[i].name,
                abv: rawDataThree.data[i].abv,
                first_brewed: rawDataThree.data[i].first_brewed,
                month: rawDataThree.data[i].first_brewed.slice(0, 2),
                year: rawDataThree.data[i].first_brewed.slice(3, 7),
                monthYear: rawDataThree.data[i].first_brewed.slice(0, 2) + "-" + rawDataThree.data[i].first_brewed.slice(3, 7)
            })
        } else {
            dataSlice.push({
                name : rawDataThree.data[i].name,
                abv: rawDataThree.data[i].abv,
                first_brewed: "01/" + rawDataThree.data[i].first_brewed,
                month: "01",
                year: rawDataThree.data[i].first_brewed,
                monthYear: "01" + "-" + rawDataThree.data[i].first_brewed
            })
        } 
    }

    for(let i=0; i<rawDataFour.data.length; i++){

        if(rawDataFour.data[i].first_brewed.length > 4){
            dataSlice.push({
                name : rawDataFour.data[i].name,
                abv: rawDataFour.data[i].abv,
                first_brewed: rawDataFour.data[i].first_brewed,
                month: rawDataFour.data[i].first_brewed.slice(0, 2),
                year: rawDataFour.data[i].first_brewed.slice(3, 7),
                monthYear: rawDataFour.data[i].first_brewed.slice(0, 2) + "-" + rawDataFour.data[i].first_brewed.slice(3, 7)
            })
        } else {
            dataSlice.push({
                name : rawDataFour.data[i].name,
                abv: rawDataFour.data[i].abv,
                first_brewed: "01/" + rawDataFour.data[i].first_brewed,
                month: "01",
                year: rawDataFour.data[i].first_brewed,
                monthYear: "01" + "-" + rawDataFour.data[i].first_brewed
            })
        } 
    }

    for(let i=0; i<rawDataFive.data.length; i++){

        if(rawDataFive.data[i].first_brewed.length > 4){
            dataSlice.push({
                name : rawDataFive.data[i].name,
                abv: rawDataFive.data[i].abv,
                first_brewed: rawDataFive.data[i].first_brewed,
                month: rawDataFive.data[i].first_brewed.slice(0, 2),
                year: rawDataFive.data[i].first_brewed.slice(3, 7),
                monthYear: rawDataFive.data[i].first_brewed.slice(0, 2) + "-" + rawDataFive.data[i].first_brewed.slice(3, 7)
            })
        } else {
            dataSlice.push({
                name : rawDataFive.data[i].name,
                abv: rawDataFive.data[i].abv,
                first_brewed: "01/" + rawDataFive.data[i].first_brewed,
                month: "01",
                year: rawDataFive.data[i].first_brewed,
                monthYear: "01" + "-" + rawDataFive.data[i].first_brewed
            })
        } 
    }


    // console.log(dataSlice)

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // console.log(dataSlice)
    let data = []


    dataSlice.sort(
        (a, b) => (a.year - b.year) || (a.month - b.month)
       );
     
    let count = {}

    dataSlice.forEach(function(i){
        count[i.monthYear] = (count[i.monthYear] || 0 ) + 1;
    })

    var countObj = Object.entries(count)

    

    // console.log(Object.values(dataSlice))

    // var countObj = {
    //     key: Object.keys(count)
    // }

    // console.log(countObj)

    

    return (
      <ResponsiveBar
        data={countObj}
        indexBy="0"
        keys={['1']}
        margin={{ top: 50, right: 130, bottom: 100, left: 160 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#FFAC1C"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        enableLabel={true}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Sum of beers first brewed",
          legendPosition: "middle",
          legendOffset: -40
        }}
        axisBottom={null}
      />
    );
  };

export default Bar;