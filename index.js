// Your code here
// function createEmployeeRecord(keys){
//     return {
//         firstName: keys[0],
//         familyName: keys[1],
//         title: keys[2],
//         payPerHour: keys[3],
//         timeInEvents: keys[4] = [],
//         timeOutEvents: keys[5] = []
//     }
// }

// function createEmployeeRecords(array) {
//     return array.map(function(key){
//         return createEmployeeRecord(key)   
//     })
// }

// function createTimeInEvent(employee, dateStamp){
//     let [date, hour] = dateStamp.split(' ') //YYYY-MM-DD HHMM"
//     // console.log(hour)
//     employee.timeInEvents.push({
//         type: 'TimeIn',
//         hour: parseInt(hour), 
//         date: date
//     })
//     return employee
// }

// function createTimeOutEvent(employee, dateStamp) {
//     let [date, hour] = dateStamp.split(' ') //YYYY-MM-DD HHMM"
//     // console.log(hour)
//     employee.timeOutEvents.push({
//         type: 'TimeOut',
//         hour: parseInt(hour), 
//         date: date
//     })
//     return employee
// }

// function hoursWorkedOnDate(employeeRecord, dateStamp){
//     let [date, hour] = dateStamp.split(' ')
//     let stampIn = employeeRecord.timeInEvents.find(function(e) {
//         return e.date === dateStamp
//     })

//     let stampOut = employeeRecord.timeOutEvents.find(function(e) {
//         return e.date === dateStamp
//     })
//     // console.log(stampOut.hour)
//     return (stampOut.hour - stampIn.hour) / 100

// }

// function wagesEarnedOnDate(employee, date) {
//     let wage = hoursWorkedOnDate(employee, date) * employee.payPerHour
//     return wage
// }

// function allWagesFor(employee){ //map & reduce
//     let eligibleDates = employee.timeInEvents.map(function(e){
//         return e.date //array of all dates
//     })
//     let payable = eligibleDates.reduce(function(memo, d){
//         return memo + wagesEarnedOnDate(employee, d)
//     }, 0)
//     return payable
// }

// let findEmployeeByFirstName = function(srcArray, firstName) {
//     return srcArray.find(function(rec){
//       return rec.firstName === firstName
//     })
//   }

//   let calculatePayroll = function(arrayOfEmployeeRecords){
//     return arrayOfEmployeeRecords.reduce(function(memo, rec){
//         return memo + allWagesFor(rec)
//     }, 0)
// }

let createEmployeeRecord = (keys) => {
    return {
        firstName: keys[0],
        familyName: keys[1],
        title: keys[2],
        payPerHour: keys[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    return array.map(function(key){
        return createEmployeeRecord(key)   
    })
}

function createTimeInEvent(record, date){
    record = {
        type: 'TimeIn',
    //     hour: date.getHours()
    //     date: date.getDate()
    }
    return record

    console.log(date.parse())
}