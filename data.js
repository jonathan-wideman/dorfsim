var data = {};

data.crops = [
    {
        name: 'Mealshroom',
        icon: 'gfx/ico/crop/mealshroom.png',
        unit_weight: 1, // kg
        nutrition: {
            serving_weight: 0.1, // kg
            food_groups: [
                {name: 'carb', ratio: 1},
                {name: 'protein', ratio: 1},
            ],
        },
        growth: {
            stages: [
                {name: 'spores', days: 2},
                {name: 'sprouts', days: 5},
                {name: 'caps', days: 0}, // final stage
            ],
            density: 4, // units per sq meter
            medium: 'mycelium', // created by impregnating soil with spores
        },
    }
];

data.furniture = [
    {
        name: 'planter',
        area: 1, // sq meter
        icon: 'gfx/ico/furniture/planter.png',
    },
];

data.rooms = [
    {
        name: 'garden',
        requirements: {
            furniture: [
                {type: data.furniture[0], amount: 1},
            ],
        },
    },
];

data.calendar.secondsPerMinute = 60;
data.calendar.minutesPerHour = 60;
data.calendar.hoursPerDay = 24;

data.calendar.days = [
    {name: 'monday'},
    {name: 'tuesday'},
    {name: 'wednesday'},
    {name: 'thursday'},
    {name: 'friday'},
    {name: 'saturday'},
    {name: 'sunday'},
]

data.calendar.months = [
    {name: 'january',   days: 30},
    {name: 'feburary',  days: 30},
    {name: 'march',     days: 30},
    {name: 'april',     days: 30},
    {name: 'may',       days: 30},
    {name: 'june',      days: 30},
    {name: 'july',      days: 30},
    {name: 'august',    days: 30},
    {name: 'september', days: 30},
    {name: 'october',   days: 30},
    {name: 'november',  days: 30},
    {name: 'december',  days: 30},
]
