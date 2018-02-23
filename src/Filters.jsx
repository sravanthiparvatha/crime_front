import React from 'react';
import request from 'superagent';
import './Filters.css';


class Filters extends React.Component
{
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
             </div>);
}
}
export default Filters;