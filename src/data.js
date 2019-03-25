const data = {
    directorsData: [
        {
            "id": 1,
            "imageUrl": "/ccj-react/img/directors/laurie_robinson.jpg",
            // "imageUrl": "/img/directors/laurie_robinson.jpg",
            "name": "Laurie Robinson",
            "board_position": "CCJ Board Chair",
            "job": "Professor, George Mason University",
            "bio": "Robinson twice served as Assistant Attorney General in charge of the U.S. Department of Justice Office of Justice Programs, overseeing distribution of billions of dollars to state and local jurisdictions and launching initiatives on violence against women, drug treatment courts, and law enforcement technology. Consistently recruited for prominent national panels, Robinson co-chaired the White House Task Force on 21st Century Policing, which sought to build trust between police and citizens after Ferguson."
        },
        {
            "id": 2,
            "imageUrl": "/ccj-react/img/directors/jim_seward.jpg",
            // "imageUrl": "/img/directors/jim_seward.jpg",
            "name": "Jim Seward",
            "board_position": "",
            "job": "General Counsel, Black Hills Corporation",
            "bio": "As general counsel for South Dakota Republican Gov. Dennis Daugaard, Seward led development of the state’s 2013 criminal justice reforms, as well as historic juvenile system improvements that helped the state cut new commitments to youth facilities by half. A former active duty serviceman, Seward is a lieutenant colonel and staff judge advocate in the Army National Guard.",
        },
        {
            "id": 3,
            "imageUrl": "/ccj-react/img/directors/michael_jacobson.jpg",
            // "imageUrl": "/img/directors/michael_jacobson.jpg",
            "name": "Michael Jacobson",
            "board_position": "CCJ Treasurer",
            "job": "Executive Director, CUNY Institute for State and Local Governance",
            "bio": "The author of Downsizing Prisons: How to Reduce Crime and End Mass Incarceration, Jacobson spent most of the 1990s serving as New York City probation commissioner and correction commissioner under Mayor Rudy Giuliani. He also served as the city’s budget director and led the Vera Institute of Justice for eight years before joining CUNY in 2013.",
        },
        {
            "id": 4,
            "imageUrl": "/ccj-react/img/directors/kathi_westcott.png",
            // "imageUrl": "/img/directors/kathi_westcott.png",
            "name": "Kathi Westcott",
            "board_position": "",
            "job": "Senior Counsel, The Pew Charitable Trusts",
            "bio": "Westcott brings more than two decades of strategic legal experience to CCJ. She joined Pew in 2012 and oversees legal guidance to its programs and government relations and communications functions, work that includes lobbying compliance, government ethics, and risk management. Previously, Westcott was Senior Counsel for the American Association of University Professors.",
        },
        {
            "id": 5,
            "imageUrl": "/ccj-react/img/directors/roy_austin.jpg",
            // "imageUrl": "/img/directors/roy_austin.jpg",
            "name": "Roy Austin",
            "board_position": "",
            "job": "Partner, Harris, Wiltshire & Grannis LLP",
            "bio": "Austin’s extensive criminal justice experience ranges from trying homicide, human trafficking, and public corruption cases as a federal prosecutor to serving as a key advisor to President Obama on urban affairs. In his White House role, Austin led development of the Police Data Initiative and spearheaded efforts to close the opportunity gap facing young men of color.",
        },
        {
            "id": 6,
            "imageUrl": "/ccj-react/img/directors/flozell_daniels.jpg",
            // "imageUrl": "/img/directors/flozell_daniels.jpg",
            "name": "Flozell Daniels",
            "board_position": "",
            "job": "President and CEO, Foundation for Louisiana",
            "bio": "A victims advocate who served on Louisiana’s Justice Reinvestment Task Force, Daniels played a key role in crafting the state’s historic 2017 criminal justice reforms, which have substantially reduced the incarceration of nonviolent offenders. Before joining the Foundation, Daniels managed state and local affairs for Tulane University and was an urban policy specialist for the City of New Orleans.",
        },
        {
            "id": 7,
            "imageUrl": "/ccj-react/img/directors/marissa_dodson.jpg",
            // "imageUrl": "/img/directors/marissa_dodson.jpg",
            "name": "Marissa Dodson",
            "board_position": "",
            "job": "Public Policy Director, Southern Center for Human Rights",
            "bio": "Dodson has been a leading advocate for Georgia’s landmark criminal and juvenile justice reforms since the state began pursuing system improvements in 2011. Before joining the Southern Center for Human Rights, she worked on the ACLU’s Campaign for Smart Justice and launched Georgia’s first initiative to reduce barriers facing people with a criminal history.",
        },
        {
            "id": 8,
            "imageUrl": "/ccj-react/img/directors/justin_keener.jpg",
            // "imageUrl": "/img/directors/justin_keener.jpg",
            "name": "Justin Keener",
            "board_position": "",
            "job": "Partner, Granite Public Affairs",
            "bio": "A veteran public affairs strategist whose experience includes working in the Texas House and Senate, Keener was a key architect of the game-changing Right on Crime campaign for the Texas Public Policy Foundation, where he oversaw legislative, research, and communication initiatives. Keener also contributed pivotal support to efforts to pass the First Step Act.",
        },
        {
            "id": 9,
            "imageUrl": "/ccj-react/img/directors/gil_kerlikowske.jpg",
            // "imageUrl": "/img/directors/gil_kerlikowske.jpg",
            "name": "Gil Kerlikowske",
            "board_position": "",
            "job": "Professor, Northeastern University",
            "bio": "A national leader in policing, Kerlikowske led the departments in Buffalo and Seattle and served as president of two major policing associations. He also was appointed Commissioner of U.S. Customs and Border Protection following five years as chief of the White House Office of National Drug Control Policy, where he launched the first federal Prescription Drug Strategy.",
        },
        {
            "id": 10,
            "imageUrl": "/ccj-react/img/directors/gerald_malloy.jpg",
            // "imageUrl": "/img/directors/gerald_malloy.jpg",
            "name": "Gerald Malloy",
            "board_position": "",
            "job": "South Carolina State Senator",
            "bio": "Elected in 2002, Malloy was the key legislative champion for South Carolina’s 2010 criminal justice reform, which led to a 13 percent drop in recidivism, the closing of six prisons, and savings of nearly $500 million. Malloy chairs the Senate Task Force on Criminal Justice and serves on the Joint Task Force on Criminal Domestic Violence.",
        },
        {
            "id": 11,
            "imageUrl": "/ccj-react/img/directors/don_stern.jpg",
            // "imageUrl": "/img/directors/don_stern.jpg",
            "name": "Don Stern",
            "board_position": "",
            "job": "Of Counsel, Yurko, Salvesen & Remz",
            "bio": "Stern served as U.S. Attorney for Massachusetts from 1993 to 2001, forging a national reputation for using evidence-based approaches to reduce crime and violence. Under his leadership, a coalition of police, prosecutors, community members, and researchers produced the “Boston Miracle,” reducing youth homicide by 63%. Stern also supervised the indictment of legendary crime boss Whitey Bulger.",
        },
        {
            "id": 12,
            "imageUrl": "/ccj-react/img/directors/nicole_surber.jpg",
            // "imageUrl": "/img/directors/nicole_surber.jpg",
            "name": "Nicole Surber",
            "board_position": "",
            "job": "Chief Development Officer, Freedom House",
            "bio": "A 20-year veteran of the nonprofit fundraising world, Surber previously served as Senior Director of Philanthropic Partnerships at the Pew Charitable Trusts, where her team generated more than $50 million annually. Earlier career stops included the German Marshall Fund of the United States, the League of Conservation Voters, and the Carnegie Endowment for International Peace.",
        },
        {
            "id": 13,
            "imageUrl": "/ccj-react/img/directors/brett_tolman.jpg",
            // "imageUrl": "/img/directors/brett_tolman.jpg",
            "name": "Brett Tolman",
            "board_position": "",
            "job": "Shareholder, Ray, Quinney & Nebeker",
            "bio": "A former federal prosecutor who is now a vocal critic of the criminal justice system and active nationally in pursuit of improvements, Tolman served as U.S. Attorney for the District of Utah during the George W. Bush Administration. Previously, he was chief counsel for the Senate Judiciary Committee, where he focused on crime and terrorism.",
        },
        {
            "id": 14,
            "imageUrl": "/ccj-react/img/directors/jo-ann_wallace.png",
            // "imageUrl": "/img/directors/jo-ann_wallace.png",
            "name": "Jo-Ann Wallace",
            "board_position": "",
            "job": "President and CEO, National Legal Aid and Defender Association",
            "bio": "Wallace is a national leader in the field of indigent defense, reflected in her award as an Obama Administration “Champion of Change.” Before joining NLADA, she led the Public Defender Service for the District of Columbia, where she strengthened appellate representation, championed legislation to ensure quality public defense services, and launched innovative programs to reduce recidivism.",
        },
        {
            "id": 15,
            "imageUrl": "/ccj-react/img/directors/dan_wilhelm.jpg",
            // "imageUrl": "/img/directors/dan_wilhelm.jpg",
            "name": "Dan Wilhelm",
            "board_position": "",
            "job": "President, The Harry Frank Guggenheim Foundation",
            "bio": "Wilhelm spent 14 years at the Vera Institute of Justice, where, as Vice President and Chief Program Officer, he led the Institute’s work on sentencing and corrections, crime and victimization, youth justice, immigration, and prosecution and racial justice. Previously, he practiced law and clerked for a federal judge. Wilhelm also writes and testifies widely on justice issues.",
        },
    ],
    staffData: [
        {
            "id": 1,
            "imageUrl": "/ccj-react/img/staff/adam_gelb.jpg",
            // "imageUrl": "/img/staff/adam_gelb.jpg",
            "name": "Adam Gelb",
            "title": "President and CEO",
            "bio": "Before launching the Council, Gelb spent 12 years leading the Pew Charitable Trusts’ Public Safety Performance Project, producing research that documented the high cost and low public safety return of traditional sentencing and corrections policies and helping 35 states adopt groundbreaking justice reforms. Gelb also staffed the U.S. Senate Judiciary Committee during negotiations over the 1994 crime bill and worked for governors in Georgia and Maryland."
        },
        {
            "id": 2,
            "imageUrl": "/ccj-react/img/staff/abby_walsh.jpg",
            // "imageUrl": "/img/staff/abby_walsh.jpg",
            "name": "Abby Walsh",
            "title": "Director",
            "bio": "As a leader of state engagements for the Pew Charitable Trusts, Walsh spent more than five years partnering with policymakers to enact data-driven solutions that safely reduced prison populations, improved outcomes for youth in juvenile justice systems, and expanded treatment for substance use disorders. Earlier, she worked to modernize court practices and data collection in the federal judiciary."
        }
    ]
}

// {
//     "image": "",
//     "name": "",
//     "board_position": "",
//     "job": "",
//     "bio": "",
// }

// {
//     "image": "",
//     "name": "",
//     "title": "",
//     "bio": ""
// }

export default data
