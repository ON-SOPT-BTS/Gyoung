// Promise Chaining Quiz
const members = require('../2nd-seminar/members');

function getFemail(members){

    return new Promise( function (resolve, reject) {
        setTimeout(function() {
            resolve(members.filter(m => m.gender == '여'));
        }, 500);
    })
};

function getYB(members){
    return new Promise( function (resolve, reject) {
        setTimeout( function() {
            const ybMemb = members.filter(m => m.status == 'YB');
            resolve(ybMemb);
        }, 500);
    })
}
function getIos(members){
    return new Promise( function ( resolve, reject) {
        setTimeout( function() {
            const iosMemb = members.filter(m => m.part == 'iOS');
            resolve(iosMemb);
        }, 500);
    })
}


getFemail(members)
    .then( message => getYB(message))
    .then( (message) => getIos(message))
    .then( (message) => console.log(message))
    .catch( (err) => console.error(err));