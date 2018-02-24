import React from 'react';
import request from 'superagent';

class UserProfile extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5  toppad  pull-right col-md-offset-3 ">

                        <br />
                        <p className=" text-info">May 05,2014,03:00 pm </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >


                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 className="panel-title">Sravanthi</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    

                                    
                                    <div className=" col-md-9 col-lg-9 ">
                                        <table className="table table-user-information">
                                            <tbody>
                                                
                                                
                                              

                                                
                                                <tr>
                                                    <td>Password</td>
                                                    <td>Kathmandu,Nepal</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td><a href="mailto:info@support.com">info@support.com</a></td>
                                                </tr>
                                                <tr>
                                                    <td>Phone Number</td>
                                                    <td>123-4567-890(Landline)<br /><br />555-4567-890(Mobile)</td>


                                                    </tr>       
                       
                                        </tbody>
                    </table>

                                            <input type="submit" className="btn btn-primary" value="SUBMIT"/>
                                         
                  </div>

                                    </div>
                                    <div className="panel-footer">
                                        <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button" className="btn btn-sm btn-primary"><i className="glyphicon glyphicon-envelope"></i></a>
                                        <span className="pull-right">
                                            <a href="edit.html" data-original-title="Edit this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-edit"></i></a>
                                            <a data-original-title="Remove this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-danger"><i className="glyphicon glyphicon-remove"></i></a>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>);

    }
}

export default UserProfile;