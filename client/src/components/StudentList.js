import React, { Component } from 'react';

import {graphql} from 'react-apollo';
import {getStudentQuery}    from '../queries/query';

class StudentList extends Component {
    displayStudents(){
        var data    =   this.props.data;
        if(data.loading){
            return ( <div>Loading this...</div> );
        } else{
            return data.students.map(student => {
                return( <li key="student.id">Name: {student.name} Dress Code: {student.dresscode}</li>

                );
            })
            
        }
    }
    render(){
        console.log(this.props);
        return (
            <div >
            <ui id='studentlist'>
                {this.displayStudents()}
            </ui>
            </div>
        );
    }
}

export default graphql(getStudentQuery)(StudentList);
