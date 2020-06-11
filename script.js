var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQ5gZeKjr3E1sMY'}).base('app0TvSfnuijGrvYV');

base('Table 1').select({
    maxRecords: 1,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        var currentDate = new Date()
        console.log(currentDate)
        var dateString = currentDate
            .toString()
            .split(' ')
            .splice(0, 4)
            .join(' ')
        var nextMeeting = record.get('Formatted');
        console.log(String(nextMeeting), dateString)
        if (String(nextMeeting) == dateString) {
          $('#date').text("today at 3:45pm")
        }
        
    });
    
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

function loadDate() {
    // 
}


loadDate()