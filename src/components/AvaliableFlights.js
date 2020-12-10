import React, {useState, useEffect} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './AvaliableFlights.css';
import FlightInfo from './FlightInfo';
import Payment from './pages/Payment';
import {appID, appkey} from '../apikeys';
//Key/Value pair to return airport code
const airPortcodes = {
    'Japan':'KIX',
    'US':'BFL',
    'Italy':'MXP',
    'Spain':'IBZ',
    'South Africa':'CPT'
}

//keys for airlines code
const airlineCodes = {
    'Japan': 'JL',
    'Spain': 'PU',
    'Italy': 'NO',
    'South Africa':'GBB' 
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
        //console.log(departureDate);
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
        
        const getAirPortCode = (country) => {
            for(let eachcountry in airPortcodes){
                if(eachcountry === country){
                    return airPortcodes[eachcountry]; 
                }
            }
           
        };

        const getAirLineCode = (country) => {
            for(let selectedCountry in airlineCodes){
                if(selectedCountry === country){
                    return airlineCodes[country]
                }
            }
        }
    
        //Fetching Data
        const fetchData = async()=>{
            //const proxyurl = "https://cors-anywhere.herokuapp.com/";
            //Getting aircode key based on selected country
            const airPortcode = getAirPortCode(selectedCountry);
            const airlineCode = getAirLineCode(selectedCountry);

            console.log(typeof aircode)
            console.log(airlineCode);
            //Selected Arrival Date
            let arrivalDateStorage = {
                year: arrivalDate.getFullYear(),
                month: arrivalDate.getMonth() + 1,
                day: arrivalDate.getDate()
            }

            let departureDateStorage = {
                year: departureDate.getFullYear(),
                month: departureDate.getMonth() + 1,
                day: departureDate.getDate()
            }
    
            
            try{
                if(Object.keys((arrivalDateStorage).length !== 0) && (airPortcode !== undefined) && (Object.keys(departureDateStorage).length !== 0)){
                    const arrivalResponse = await fetch(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/${airPortcode}/arr/${arrivalDateStorage.year}/${arrivalDateStorage.month}/${arrivalDateStorage.day}/10?appId=${appID}&appKey=${appkey}&utc=false&numHours=1&carrier=${airlineCode}&maxFlights=5`);
                    const arrivalDATA = await arrivalResponse.json();

                    const departureResponse = await fetch(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/BFL/dep/${departureDateStorage.year}/${departureDateStorage.month}/${departureDateStorage.day}/10?appId=${appID}&appKey=${appkey}&utc=false&numHours=1&maxFlights=5`);
                    const departureDATA = await departureResponse.json();
                    

                    setFetchedArrivalData(arrivalDATA);
                    setFetchedDepartureData(departureDATA);

                    setIsLoading(false);
                    console.log(isLoading);
                
                }
                
                
            }catch(err){
                console.log(err);
            }
            
        }
        
        fetchData();
        
    }, [selectedCountry, departureDate, arrivalDate, isLoading]);

   
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
                        
                        <h3 className="return">Arrival</h3>
                        <DatePicker selected={arrivalDate} onChange={handleArrivalDate} className="flights__date"/>
                    </div>
                    <div className="flights__wrapper__departures">
                        {/* List of Flights */}
                        <h2 className="flights__departures__departure">Departures</h2>
                        {!isLoading && departureData.length !== 0?
                            <FlightInfo
                            selectedCountry='U.S.A'
                            {...departureData.appendix.airports[0]}
                            {...departureData.appendix.airlines[0]}
                            {...departureData.request.date}
                            price={250}
                            payment={<Payment />}
                            />

                            :
                            ''
                        }
                    </div>
                    <div className="flights__wrapper__arrivals">
                        <h2 className="flights__arrivals__arrival">Arrivals</h2>
                            {!isLoading && arrivalData.length !== 0? 
                                <FlightInfo
                                selectedCountry={selectedCountry}
                                {...arrivalData.appendix.airports[0]}
                                {...arrivalData.appendix.airlines[0]}
                                {...arrivalData.request.date}
                                price={250}
                                />
                                :
                                ''
                            }
                       
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AvaliableFlights
