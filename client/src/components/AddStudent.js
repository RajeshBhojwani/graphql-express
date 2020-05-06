import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import compose from "lodash.flowright";

import {getClassQuery, addStudentMutation, getStudentQuery}  from '../queries/query';

class AddStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            dresscode:'',
            classid:''
        };
    }
    displayClass(){
        var data =  this.props.getClassQuery;
        if(data.loading){
            return( <option>Loading Classes..</option>);
        }else{
            return data.classes.map(classobj =>{
            return (<option key={classobj.id} value={classobj.id}>{classobj.grade}</option>)
            })
        }
    }
    submitForm(e){
        e.preventDefault();
        console.log("Before submission: "+this.props);
        this.props.addStudentMutation({
            variables: {
                name: this.state.name, 
                dresscode: this.state.dresscode, 
                classid: this.state.classid
            },
            refetchQueries: [{query: getStudentQuery}]
        });
    }
    render(){
        console.log(this.props);
        return (
            <form id="add-student" onSubmit={this.submitForm.bind(this)}>
                <br></br>
              
                
            <div className="field">
                <label>Name:</label>
                <input type="text"  onChange={ (e) => this.setState({name: e.target.value})}/>
            </div>
            <div className="field">
                <label>Dress Code:</label>
                <input type="text" onChange={ (e) => this.setState({dresscode: e.target.value})}/>
            </div>
            <div className="field">
                <label>Class:</label>
                <select onChange={ (e) => this.setState({classid: e.target.value})}>
                    <option>Select Class</option>
                    {this.displayClass()}
                </select>
            </div>
            <button>+</button>

        </form>
        );
    }
}

export default compose(
    graphql(getClassQuery, {name: "getClassQuery"} ),
    graphql(addStudentMutation, {name: "addStudentMutation"} )
   
)
(AddStudent);
