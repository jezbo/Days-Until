/***** GLOBAL VARIABLES *****/
//!!months are 0 indexed!!:
const christmas2021 = {date: (new Date(2021,11,25)), name:'Christmas'};
const newYear2022 = {date: (new Date(2022,0,01)), name: 'New Year'};
const valentines2022 = {date: (new Date(2022,01,14)), name: 'Valentine\'s Day'};

/***** DAY CLASS *****/
class Day {
    constructor({date,name}) {
        this.date = date;
        this.name = name;
    }

    /***** METHODS *****/
    //calculate time until the given date in ms
    millisecondsUntilDate() {
        const dateToday = new Date();
        return this.date - dateToday;
    }
      
    //convert milliseconds to days
    millisecondsToDays() {
        const millisecondsInADay=86400000;
        return this.millisecondsUntilDate() / millisecondsInADay;
    }
      
    //calculate days until given date
    daysUntilDate() {
        //ceil acoounts for remainder of current day:
        const days = Math.ceil(this.millisecondsToDays());
        return days;
    }

    //returns a list element complete with no. of days & name in a sentence 
    createListElement() {
        const numberOfDays = this.daysUntilDate();
        return (
        `<li>
            ${numberOfDays.toString()} days until ${this.name}
        </li>`
        );
    }

    //append list items to DOM
    appendListItem() {
        $("#days-until").append(
            this.createListElement()
        )
    }
}

/***** CREATE OBJECTS FROM DAY CLASS *****/
const xmasDay2021 = new Day(christmas2021);
const newYearsDay2022 = new Day(newYear2022);
const valentinesDay2022 = new Day(valentines2022);

/***** CLICK HANDLER *****/ 
$("#trigger").click(() => {
    xmasDay2021.appendListItem()
    newYearsDay2022.appendListItem()
    valentinesDay2022.appendListItem()
})