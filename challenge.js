var people = [ {
name: 'Bob',
occupation: 'programmer',
awesomeIndex: 7,
},
{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9,
},
{
name: 'Zaphod',
occupation: 'President of the Galaxy'
} ]

var awesomeness = document.getElementById("awesome-index");
var average = 0;
var totalPeople = 0;
var totalAwesome = 0;

for (var i = 0; i < people.length; i++) {
	if (people[i].awesomeIndex !== undefined) {
		totalPeople++;
		totalAwesome += people[i].awesomeIndex;
		average = totalAwesome/totalPeople;
		console.log(average);
	}
}
awesomeness.textContent = "Average Awesome Index is: " + average;

//the block of code below is the lodash/jquery portion of the challenge
/*
var awesomeness = $("#awesome-index");
var average = 0;
var totalPeople = 0;
var totalAwesome = 0;
var hello = _.map(people, 'awesomeIndex');
console.log(hello);

var hello4 = _.forIn(hello, function(prop, key){
	if (prop !== undefined) {
		totalAwesome += prop;
		totalPeople++;
	}
});
average = totalAwesome/totalPeople;
console.log(average);
awesomeness.text("Average Awesome Index is: " + average);
*/
