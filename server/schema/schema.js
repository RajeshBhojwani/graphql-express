const graphql   =   require('graphql');
const _ = require('lodash');
const Class =   require('../models/class');
const Student   =   require('../models/student');


const { GraphQLObjectType, 
        GraphQLString, 
        GraphQLID,
        GraphQLInt,
        GraphQLList,
        GraphQLSchema
    } =  graphql;



const ClassType =   new GraphQLObjectType({
    name: 'Class',
    fields: ( ) => ({
        id: { type: GraphQLString },
        grade: { type: GraphQLInt },
        sections: { type: GraphQLString },
        students: {
            type: new GraphQLList(StudentType),
            resolve(parent, args){
              //  return _.filter(students, {classid: parent.id});
              return Student.find({classid: parent.id});
            }

        }
    })
   
});

const StudentType =   new GraphQLObjectType({
    name: 'Student',
    fields: ( ) => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        dresscode: { type: GraphQLString }
    })
   
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        class: {
            type: ClassType,
            args:  { id: { type: GraphQLString } },
            resolve(parent, args) {
               // return _.find(classes, { id: args.id });
               return Class.findById(args.id);
            }
        },
        student: {
            type: StudentType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
               // return _.find(students, {id: args.id});
               return Student.findById(args.id);
            }
        },
        classes:{
            type: new GraphQLList(ClassType),
            resolve(parent, args){
                //return classes;
                return Class.find();
            }
        },
        students:{
            type: new GraphQLList(StudentType),
            resolve(parent, args){
                //return classes;
                return Student.find();
            }
        }

    }
});

const Mutation  =   new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addClass: {
            type: ClassType,
            args: {
                grade: {type: GraphQLInt},
                sections: {type: GraphQLString}
            },
            resolve(parent, args){
                let classobj =  new Class({
                    grade: args.grade,
                    sections:   args.sections
                });
                return classobj.save();

            }
        },
        addStudent: {
            type: StudentType,
            args: {
                name: {type: GraphQLString},
                dresscode: {type: GraphQLString},
                classid: {type: GraphQLString}
            },
            resolve(parent, args){
                let student =  new Student({
                    name: args.name,
                    dresscode:   args.dresscode,
                    classid: args.classid
                });
                return student.save();

            }
        },
        updateClass: {
            type: ClassType,
            args: {
                id: {type: GraphQLString},
                grade: {type: GraphQLInt},
                sections: {type: GraphQLString}
            },
            resolve(parent, args){
                let classobj =  new Class({id: args.id,
                    grade: args.grade,
                    sections:   args.sections
                });
                return classobj.save();

            }
        }
    }
})



module.exports  =   new GraphQLSchema({
        query: RootQuery,
        mutation: Mutation
});