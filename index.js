const tableData = [
    {
        "_id": "5e9df382fc302216f08b46b1",
        "name": "Ivy Mitchell",
        "age": 40,
        "gender": "female",
        "company": "TALAE",
        "email": "ivymitchell@talae.com",
        "phone": "+1 (838) 597-2008",
        "tags": [
            "cupidatat",
            "et",
            "ad",
            "incididunt",
            "velit",
            "sint",
            "non"
        ]
    },
    {
        "_id": "5e9df382fc302216f08b46b1",
        "name": "Ivy Mitchell",
        "age": 40,
        "gender": "female",
        "company": "TALAE",
        "email": "ivymitchell@talae.com",
        "phone": "+1 (838) 597-2008",
        "tags": [
            "cupidatat",
            "et",
            "ad",
            "incididunt",
            "velit",
            "sint",
            "non"
        ]
    },
    {
        "_id": "5e9df38220c8ca67ea7903ae",
        "name": "Francine Fleming",
        "age": 31,
        "gender": "female",
        "company": "ZEDALIS",
        "email": "francinefleming@zedalis.com",
        "phone": "+1 (857) 548-3417",
        "tags": [
            "culpa",
            "elit",
            "aute",
            "officia",
            "reprehenderit",
            "nulla",
            "aute"
        ]
    },
    {
        "_id": "5e9df38249740035c46a0e8e",
        "name": "Buckley Harper",
        "age": 33,
        "gender": "male",
        "company": "MARKETOID",
        "email": "buckleyharper@marketoid.com",
        "phone": "+1 (931) 478-3483",
        "tags": [
            "Lorem",
            "commodo",
            "quis",
            "eu",
            "labore",
            "exercitation",
            "in"
        ]
    },
    {
        "_id": "5e9df382b76d365bb162751c",
        "name": "Pollard Farley",
        "age": 23,
        "gender": "male",
        "company": "UNCORP",
        "email": "pollardfarley@uncorp.com",
        "phone": "+1 (969) 592-2232",
        "tags": [
            "commodo",
            "culpa",
            "eiusmod",
            "minim",
            "ipsum",
            "minim",
            "proident"
        ]
    },
    {
        "_id": "5e9df3820b489f341a421aa7",
        "name": "Esperanza Gates",
        "age": 32,
        "gender": "female",
        "company": "OVERFORK",
        "email": "esperanzagates@overfork.com",
        "phone": "+1 (928) 540-3318",
        "tags": [
            "sit",
            "qui",
            "labore",
            "ea",
            "veniam",
            "non",
            "dolor"
        ]
    },
    {
        "_id": "5e9df3826ce9a9c66e5fbece",
        "name": "Mccarthy Brooks",
        "age": 23,
        "gender": "male",
        "company": "CODAX",
        "email": "mccarthybrooks@codax.com",
        "phone": "+1 (886) 592-3578",
        "tags": [
            "eiusmod",
            "aliqua",
            "tempor",
            "nostrud",
            "anim",
            "tempor",
            "occaecat"
        ]
    },
    {
        "_id": "5e9df382ec22953b82005d4b",
        "name": "Beverley Kramer",
        "age": 40,
        "gender": "female",
        "company": "ZYPLE",
        "email": "beverleykramer@zyple.com",
        "phone": "+1 (873) 440-2676",
        "tags": [
            "aliquip",
            "ipsum",
            "sint",
            "enim",
            "adipisicing",
            "et",
            "nostrud"
        ]
    },
    {
        "_id": "5e9df38208f097558c905bff",
        "name": "Wyatt Pace",
        "age": 25,
        "gender": "male",
        "company": "RUBADUB",
        "email": "wyattpace@rubadub.com",
        "phone": "+1 (932) 592-2306",
        "tags": [
            "minim",
            "elit",
            "magna",
            "aliquip",
            "qui",
            "voluptate",
            "aute"
        ]
    },
    {
        "_id": "5e9df3820a02091cc1a39663",
        "name": "Hood Browning",
        "age": 22,
        "gender": "male",
        "company": "BIOSPAN",
        "email": "hoodbrowning@biospan.com",
        "phone": "+1 (835) 565-2597",
        "tags": [
            "voluptate",
            "dolore",
            "qui",
            "sunt",
            "ea",
            "aute",
            "veniam"
        ]
    },
    {
        "_id": "5e9df3823dc9e1a5ba14a100",
        "name": "Jaime Alvarez",
        "age": 34,
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "jaimealvarez@isologica.com",
        "phone": "+1 (974) 498-3471",
        "tags": [
            "laboris",
            "ut",
            "et",
            "excepteur",
            "aliqua",
            "consequat",
            "labore"
        ]
    }
]


const wrapper = document.querySelector('.dynamic-table');


function tableCreate(data) {
    const table = document.createElement('table');
    const tableRow = document.createElement('tr');

    if (data.length < 1) return

    for (const key of Object.keys(data[0])) {
        const tableHead = document.createElement('th');
        tableHead.innerText = key;
        tableRow.appendChild(tableHead);
    }

    table.appendChild(tableRow);
    wrapper.appendChild(table);

    data.forEach(el => {
        const tableRow = document.createElement('tr');
        for (const key of Object.values(el)) {
            const tableData = document.createElement('td');
            tableData.innerText = key;
            tableRow.appendChild(tableData);
        }
        table.appendChild(tableRow);
    })
}

tableCreate(tableData);