import React, {useState, useEffect} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { appID, appkey } from '../apikeys';
import './AvaliableFlights.css';
import FlightInfo from './FlightInfo';
import Payment from './pages/Payment';

//Key/Value pair to return aircode
const aircodes = {
    'Japan':'KIX',
    'US':'BFL',
    'Italy':'MXP',
    'Spain':'IBZ',
    'South Africa':'CPT'
}

function AvaliableFlights() {

    //states of datepicker, selected country
    const [departureDate, setDepartureDate] = useState(new Date());
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [selectedCountry, setSelectedCountry] = useState('');
    

    const [arrivalData, setFetchedArrivalData] = useState([]);
    const [departureData, setFetchedDepartureData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    //Handleers
    const handleDepartureDate = (departureDate) => {
        console.log(departureDate);
        setDepartureDate(departureDate);
    }

    const handleArrivalDate = (arrivalDate)=> { 
        //console.log(arrivalDateStore);
        //console.log(arrivalDate);
        setArrivalDate(arrivalDate);
    }
    //console.log(arrivalDate);
    const handleSelectedCountry = (event)=> {
        console.log(event.target.value);
        setSelectedCountry(event.target.value);
    }

    useEffect(() => {
        
        const getAirCode = (country) => {
            for(let eachcountry in aircodes){
                if(eachcountry === country){
                    return aircodes[eachcountry]; 
                }
            }
           
        };
    
        //Fetching Arrival Data
        const fetchData = async()=>{
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            //Getting aircode key based on selected country
            const aircode = getAirCode(selectedCountry);
            
            let arrivalDateStorage = {
                year: arrivalDate.getFullYear(),
                month: arrivalDate.getMonth() + 1,
                day: arrivalDate.getDate()
            }

            let departureDateObj = {
                year: departureDate.getFullYear(),
                month: departureDate.getMonth() + 1,
                day: departureDate.getDate()
            }
    
            const arrivalUrl = `${proxyurl}https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/${aircode}/arr/${arrivalDateStorage.year}/${arrivalDateStorage.month}/${arrivalDateStorage.day}/10?appId=${appID}&appKey=${appkey}=true&numHours=1&maxFlights=5`;
            const departureURL = `${proxyurl}https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/BFL/dep/${departureDateObj.year}/${departureDateObj.month}/${departureDateObj.day}/2?appId=${appID}&appKey=${appkey}=false&numHours=2&maxFlights=5`;
            try{
                const arrivalResponse = await fetch(arrivalUrl);
                const arrivalDATA = await arrivalResponse.json();

                const departureResponse = await fetch(departureURL);
                const departureDATA = await departureResponse.json();
                

                setFetchedArrivalData(arrivalDATA);
                setFetchedDepartureData(departureDATA);

                setIsLoading(false);
                if(arrivalDate !== null && departureDate !== null){
                    //alert('Please select a country you would like to visit')
                    
                
                }else{
                    console.log('no error message while fetching data')
                }

                // setFetchedArrivalData(arrivalDATA);
                // setFetchedDepartureData(departureDATA);
                
            }catch(err){
                console.log(err);
            }
            
        }
        
        //fetchData();
       
        
        //console.log(arrivalData.appendinx.airports[0].iata);
        // console.log(arrivalDateStorage);
        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
            //const url = `https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/${aircode}/arr/${arrivalDateStorage.year}/${arrivalDateStorage.month}/${arrivalDateStorage.day}/10?appId=34cf4e36&appKey=bacfdec53b92ffc747e8f36ef63d6f0a&utc=true&numHours=1&maxFlights=5`;
        
       // arrivalDateStorage = {};
        
       
        
    }, [selectedCountry, departureDate, arrivalDate]);

   
    return (
        
        <div className="flights__container">
            <h1>Avaliable Flights</h1>
            <hr/>
            <div className="flights__wrapper">
                <div className="flights__wrapper__info">
                    <div className="flights__info__country">
                        <h3 className="select__country">Select Desired Country to Visit</h3>
                        <select onChange={handleSelectedCountry} value={selectedCountry}>
                            <option value="Select">Select a country</option>
                            <option value="Japan">Japan/Tokyo</option>
                            <option value="South Africa">South Africa/Cape Town</option>
                            <option value="Spain">Spain/Ibiza</option>
                            <option value="Italy">Italy/Milan</option>
                        </select>
                    </div>
                    
                    
                    {/* Displayed after user selects country to visit */}
                    <div className="flights__wrapper__date">
                        <h3 className="depart">Depart</h3>
                        <DatePicker selected={departureDate} onChange={handleDepartureDate} className="flights__date"/>
                        
                        <h3 className="return">Return</h3>
                        <DatePicker selected={arrivalDate} onChange={handleArrivalDate} className="flights__date"/>
                    </div>
                    

                    <div className="flights__wrapper__departures">
                        {/* List of Flights */}
                        <h2 className="flights__departures__departure">Departures</h2>
                        <FlightInfo
                        country={selectedCountry}
                        payment={ <Payment /> }
                        />
                           
                        <FlightInfo 
                        country={selectedCountry}
                        payment={ <Payment />}
                        />
                        <FlightInfo
                        country={selectedCountry}
                        payment={ <Payment />}
                        />
                    </div>

                    <div className="flights__wrapper__arrivals">
                        {
                            //(isFetchSuccessful)? <h1>fetched</h1>:''
                            //(!isFetchSuccessful)? 
                            // <FlightInfo
                            // airportAddress={arrivalData.appendix.airports[0]}
                            // airline={arrivalData.appendinx.airlines[3].name}
                            // airportCode={arrivalData.appendinx.airports[0].iata}
                            // departureDate={arrivalData.request.date.interpreted}
                            // price={300} 
                            // />

                            //:
                            //''
                        }

                        <h2 className="flights__arrivals__arrival">Arrivals</h2>
                       <FlightInfo
                        country={selectedCountry}
                        />
                       <FlightInfo
                        country={selectedCountry}
                        />
                       <FlightInfo
                        country={selectedCountry}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AvaliableFlights
