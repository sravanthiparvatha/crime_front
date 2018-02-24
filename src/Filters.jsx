import React from 'react';
import request from 'superagent';
import './Filters.css';

//import {getCheckboxValue} from 'react-onchange-value';
class Filters extends React.Component
{
    
    constructor(props) {
        super(props);

        this.state = {
            date:[],
           day:[],
           time:[],
           crimeType:[],
        };
       this.handleDayChange=this.handleDayChange.bind(this);
       this.handleDateChange=this.handleDateChange.bind(this);
       this.handleTimeChange=this.handleTimeChange.bind(this);
       this.handleCrimeTypeChange=this.handleCrimeTypeChange.bind(this);
        
    }
    handleDayChange(event)
    {
        console.log('in handle day change');
        const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
   // const name = target.name;

    this.setState({
      day : value
    });
    console.log('');

    }
handleDateChange(event)
{
    console.log('in handle date change');
//getCheckboxValue(event,this.state.date);
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
// const name = target.name;

this.setState({
  date : value
});
console.log(' Date change'+this.state.date);
}

handleTimeChange(event)
{
    console.log('in handle time change');
//getCheckboxValue(event,this.state.time);
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
// const name = target.name;

this.setState({
time : value
});
}

handleCrimeTypeChange(event)
{
    console.log('in handle crime type change');
//getCheckboxValue(event,this.state.crimeType);
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
// const name = target.name;

this.setState({
  crimeType : value
});
}

    handleSubmitChange(event) {
    
        event.preventDefault();

       

            request.post("http://localhost:9000/RegCrime")
                .send({date:this.state.date, day: this.state.day,time:this.state.time,crimeType:this.state.crimeType})
                .then(
                (response) => {
                    // response.body will be the returned data from your play app, which is an array of objects
                    // I kept the data as object with "place" as the key, and [lat,longs] as value.
                    // following code converts array of objects into the format which my component is accepting.
                    console.log("response is ok");
                });
        
       

    }
    



    
    handleDateChange(event)
    {
        const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    }
render(){
    return(<div className="container"> <br/>  <br/> <br/>  <br/> 
                <tr>  <br/>  <br/>
             <td> DATE RANGE</td>
             <br/><br/>
             <td>
                 <br/><br/>
           <input type="radio" name="dateRange" id="dateRange" onChange={this.handleDateChange} value=" Past 3 days" /> Past 3 days<br/>
            <input type="radio" name="dateRange" id="dateRange" onChange={this.handleDateChange}  value="Past week" />  Past week<br/>
            <input type="radio" name="dateRange" id="dateRange" onChange={this.handleDateChange}  value=" Past month" />   Past month<br/>
           <input type="radio" name="dateRange" id="dateRange" onChange={this.handleDateChange}  value="Past 6 months" /> Past 6 months <br/>
             <input type="radio" name="dateRange" id="dateRange" onChange={this.handleDateChange}  value="Past 3 months" />   Past 3 months<br/>
             <input type="radio" name="dateRange" id="dateRange" onChange={this.handleDateChange}  value="Custom range" />   Custom range<br/>
             <input type="date" data-date="" data-date-format="DD MMMM YYYY" />
             </td>
             </tr>

             <br/>  <br/>
             <tr>  <br/>  <br/>
             <td> DAY OF WEEK </td>
             <br/><br/>
             <td>
                 <br/><br/>
           <input type="checkbox" name="day" id="day" onChange={this.handleDayChange} value="Sunday" />Sunday<br/>
           <input type="checkbox" name="day" id="day" onChange={this.handleDayChange} value="Monnday" />Monday<br/>
           <input type="checkbox" name="day" id="day" onChange={this.handleDayChange} value="Tuesday" />Tuesday<br/>
           <input type="checkbox" name="day" id="day" onChange={this.handleDayChange} value="Wednesday" />Wednesday<br/>
           <input type="checkbox" name="day" id="day" onChange={this.handleDayChange} value="Thursday" />Thursday<br/>
           <input type="checkbox" name="day" id="day" onChange={this.handleDayChange} value="Friday" />Friday<br/>
           <input type="checkbox" name="day" id="day" onChange={this.handleDayChange} value="Saturday" />Saturday<br/>
          
           
             </td>
             </tr>

             <br/>  <br/> 
<tr>  <br/>  <br/>
             <td> TIME RANGE</td>
             <br/><br/>
             <td>
                 <br/><br/>
           <input type="radio" name="timeRange" id="timeRange" onChange={this.handleTimeChange} value="Morning" /> Morning<br/>
           <input type="radio" name="timeRange" id="timeRange" onChange={this.handleTimeChange} value="Evening" /> Evening<br/>
           <input type="radio" name="timeRange" id="timeRange" onChange={this.handleTimeChange} value="LateNight" /> LateNight<br/>
             </td>
             </tr>

             <br/>  <br/> 
<tr>  <br/>  <br/>
             <td> CRIME TYPE</td>
             <br/><br/>
             <td>
                 <br/><br/>
           <input type="checkbox" name="crimeType" id="crimeType" onChange={this.handleCrimeTypeChange} value="Robbery" /> Robbery<br/>
           <input type="checkbox" name="crimeType" id="crimeType" onChange={this.handleCrimeTypeChange} value="Theft" /> Theft<br/>
           <input type="checkbox" name="crimeType" id="crimeType" onChange={this.handleCrimeTypeChange} value="Murder" /> Murder<br/>
             </td>
             </tr>

             <div><button> DONE</button></div>
             </div>);
}
}
export default Filters;