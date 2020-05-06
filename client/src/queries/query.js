import {gql} from 'apollo-boost';

const getStudentQuery =   gql`
    {
        students{
            id
            name
            dresscode
        }
    }
`;

const getClassQuery =   gql`
    {
        classes{
            id
            grade
            sections
        }
    }
`;
const addStudentMutation = gql`
    mutation AddStudent($name: String!, $dresscode: String!, $classid: String!){
        addStudent(name: $name, dresscode: $dresscode, classid: $classid){
            name
            id
        }
    }
`;

export {getClassQuery, getStudentQuery, addStudentMutation};