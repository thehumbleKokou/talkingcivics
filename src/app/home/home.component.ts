import { Component, OnInit } from '@angular/core';
import { StateComponent } from '../state/state.component';
import { State } from '../templates';
import { HttpClient } from '@angular/common/http';
import { Governor } from '../templates';
import { state } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  stateIndex = 0;
  public governor: any;
  public senators: any[] = [
    {},
    {}
  ];

  //stores data of all states
  states = [
    {
      name: "Alabama",

      motto: "We Dare Defend Our Rights",
      governor: "Kay Ivey",
      senators: ["Katie Britt", "Tommy Tuberville"],
      flagLink: "./assets/flags/AL.jpg",
      capital: "Montgomery",
      representatives: ["Jerry Carl (R-AL01)", "Barry Moore (R-AL02)", "Mike Rogers (R-AL03)", "Robert Aderholt (R-AL04)", "Dale Strong (R-AL05)", "Gary Palmer (R-AL06)", "Terri Sewell (D-AL07)"]
    },
    {
      name: "Alaska",

      motto: "North to the Future",
      
      governor: "Mike Dunleavy",
      senators: ["Lisa Murkowski", "Dan Sullivan"],
      flagLink: "./assets/flags/AK.gif",
      capital: "Juneau",
      representatives: ["Mary Peltola (D-AKAtLarge)"]
    },
    {
      name: "Arizona",

      motto: "God enriches",
      governor: "Katie Hobbs",
      senators: ["Kyrsten Sinema", "Mark Kelly"],
      flagLink: "./assets/flags/AZ.png",
      capital: "Phoenix",
      representatives: ["David Schweikert (R-AZ01)", "Eli Crane (R-AZ02)", "Ruben Gallego (D-AZ03)", "Greg Stanton (D-AZ04)", "Andy Biggs (R-AZ05)", "Juan Ciscomani (R-AZ06)", "Raúl Grijalva (D-AZ07)", "Debbie Lesko (R-AZ08)", "Paul Gosar (R-AZ09)"]
    },
    {
      name: "Arkansas",

      motto: "The People Rule",
      flagLink: "./assets/flags/AR.gif",
      capital: "Little Rock",
      governor: "Sarah Huckabee Sanders",
      senators: ["John Boozman", "Tom Cotton"],
      representatives: ["Rick Crawford (R-AR01)", "French Hill (R-AZ02)", "Steve Womack (R-AZ03)", "Bruce Westerman (R-AR04)"]
    },
    {
      name: "California",

      motto: "Eureka",
      flagLink: "./assets/flags/CA.jpg",
      capital: "Sacramento",
      governor: "Gavin Newsom",
      senators: ["Dianne Feinstein", "Alex Padilla"],
      representatives: ["Doug LaMafia (R-CA01)", "Jared Huffman (D-CA02)", "Kevin Kiley (R-CA03)", "Mike Thompson (D-CA04)", "Tom McClintock (R-CA05)", "Ami Bera (D-CA06)",
      "Doris Matsui (D-CA07)", "Josh Garamendi (D-CA08)", "Josh Harder (D-CA09)", "Mark DeSaulnier (D-CA10)", "Nancy Pelosi (D-CA11)", "Barbara Lee (D-CA12)", "Josh Durate (R-CA13)",
      "Eric Swalwell (D-CA14)", "Kevin Mullin (D-CA15)", "Anna Eshoo (D-CA16)", "Ro Khanna (D-CA17)", "Zo Lofgren (D-CA18)", "Jimmy Panetta (D-CA19)", "Kevin McCarthy (R-CA20)", "Jim Costa (D-CA21)",
      "David Valadao (R-CA22)", "Jay Obernolte (R-CA23)", "Salud Carbajal (D-CA24)", "Raul Ruiz (R-CA25)", "Julia Brownley (D-CA26)", "Mike Garcia (R-CA27)", "Judy Chu (D-CA28)", "Tony Cárdenas (D-CA29)",
      "Adam Schiff (D-CA30)", "Grace Napolitano (D-CA31)", "Brad Sherman (D-CA32)", "Pete Aguilar (D-CA33)", "Jimmy Gomez (D-CA34)", "Norma Torres (D-CA35)", "Ted Lieu (D-CA36)", "Sydney Kamlager-Dove (D-CA37)", "Linda Sánchez (D-CA38)",
      "Mark Takano (D-CA39)", "Young Kim (R-CA40)", "Ken Calvert (R-CA41)", "Robert Garcia (D-CA42)", "Maxine Water (D-CA43)", "Nanette Barragán (D-CA44)", "Michelle Steel (R-CA45)", "Lou Correa (D-CA46)",
      "Katie Porter (D-CA47)", "Darrell Issa (R-CA48)", "Mike Levin (D-CA49)", "Scott Peters (D-CA50)", "Sarah Jacobs (D-CA51)", "Juan Vargas (D-CA52)"],
    },
    {
      name: "Colorado",

      motto: "Nothing Without Providence",
      flagLink: "./assets/flags/CO.png",
      capital: "Denver",
      governor: "Jared Polis",
      senators: ["Michael Bennet", "John Hickenlooper"],
      representatives: ["Diana DeDette (D-CO01)", "Joe Neguse (D-CO02)", "Lauren Boebert (R-CO03)", "Ken Buck (R-CO04)", "Doug Lamborn (R-CO05)", "Jason Crow (D-CO06)", "Ed Perlmutter (D-CO07)", "Yadira Caravei (D-CO08)"]
    },
    {
      name: "Connecticut",

      motto: "He who transplanted still sustains",
      flagLink: "./assets/flags/CT.jpg",
      capital: "Hartford",
      governor: "Ned Lamont",
      senators: ["Richard Blumenthal", "Chris Murphy"],
      representatives: ["John B. Larson (D-CT01)", "Joe Courtney (D-CT02)", "Rosa DeLauro (D-CT03)", "Jim Himes (D-CT04)", "Jahana Hayes (D-CT05)"]
    },
    {
      name: "Delaware",

      motto: "Liberty and Independence",
      flagLink: "./assets/flags/DE.gif",
      capital: "Dover",
      governor: "John Carney",
      senators: ["Tom Carper", "Chris Coons"],
      representatives: ["Lisa Blunt Rochester (D-DEAtLarge)"]
    },
    {
      name: "Florida",

      motto: "In God We Trust",
      flagLink: "./assets/flags/FL.jpg",
      capital: "Tallahassee",
      governor: "Ron DeSantis",
      senators: ["Rick Scott", "Marco Rubio"],
      representatives: ["Matt Gaetz (R-FL01)", "Neal Dunn (R-FL02)", "Kat Cammack (R-FL03)", "Aaron Bean (R-FL04)", "John Rutherford (R-FL05)", "Michael Waltz (R-FL06)", "Cory Mills (R-FL07)", "Bill Posey (R-FL08)",
      "Darren Soto (D-FL09)", "Maxwell Frost (D-FL10)", "Daniel Webster (R-FL11)", "Gus Bilirakis (R-FL12)", "Anna Paulina-Luna (R-FL13)", "Kathy Castor (D-FL14)", "Laurel Lee (R-FL15)", "Vern Buchanan (R-FL16)",
      "Greg Steube (R-FL17)", "Scott Franklin (R-FL18)", "Byron Donalds (R-FL19)", "Sheila Cherfilus-McCormick (D-FL20)", "Brian Mast (R-FL21)", "Lois Frankel (D-FL22)", "Jared Moskowitz (D-FL23)", "Frederica Wilson (D-FL24)",
      "Debbie Wasserman Schultz (D-FL25)", "Mario Díaz-Balart (R-FL26)", "María Elvira Salazar (R-FL27)", "Carlos Giménez (R-FL28)"]
    },
    {
      name: "Georgia",

      motto: "Wisdom, Justice, Moderation",
      flagLink: "./assets/flags/GA.png",
      capital: "Atlanta",
      governor: "Brian Kemp",
      senators: ["Jon Ossoff", "Raphael Warnock"],
      representatives: ["Buddy Carter (R-GA01)", "Sanford Bishop (D-GA02)", "Drew Ferguson (R-GA03)", "Hank Johnson (D-GA04)", "Nikema Williams (D-GA05)", "Rich McCormick (R-GA06)", "Lucy McBath (D-GA07)",
      "Austin Scott (R-GA08)", "Andrew Clyde (R-GA09)", "Mike Collins (R-GA10)", "Barry Loudermilk (R-GA11)", "Rick W. Allen (R-GA12)", "David Scorr (D-GA13)", "Majorie Taylor Greene (R-GA14)"]
    },
    {
      name: "Hawaii",

      motto: "The Life of the Land is Perpetuated in Righteousness",
      flagLink: "./assets/flags/HI.png",
      capital: "Honolulu",
      governor: "Josh Green",
      senators: ["Brian Schatz", "Mazie Hirono"],
      representatives: ["Ed Case (D-HI01)", "Jill Tokuda (D-HI02)"]
    },
    {
      name: "Idaho",

      motto: "Let it be perpetual",
      flagLink: "./assets/flags/ID.png",
      capital: "Boise",
      governor: "Brad Little",
      senators: ["Mike Crapo", "Jim Risch"],
      representatives: ["Russ Fulcher (R-ID01)", "Mike Simpson (R-ID02)"]
    },
    {
      name: "Illinois",

      motto: "State Sovereignty, National Union",
      flagLink: "./assets/flags/IL.jpg",
      capital: "Springfield",
      governor: "JB Pritzker",
      senators: ["Dick Durbin", "Tammy Duckworth"],
      representatives: ["Jonathan Jackson (D-IL01)",
        "Robin Kelly (D-IL02)", "Delia Ramirez (D-IL03)", "Jesús Garcia (D-IL04)", "Mike Quigley (D-IL05)", "Sean Casten (D-IL06)", "Danny K. Davis (D-IL07)", "Raja Krishnamoorthi (D-IL08)", "Jan Schakowsky (IL-09)",
        "Brad Schneider (IL-10)", "Bill Foster (D-IL11)", "Mike Bost (R-IL12)", "Nikki Budzinski (D-IL13)", "Lauren Underwood (D-IL14)", "Mary Miller (R-IL15)", "Darin LaHood (R-IL16)", "Eric Sorensen (D-IL17)"]
    },
    {
      name: "Indiana",

      motto: "The Crossroads of America",
      flagLink: "./assets/flags/IN.jpg",
      capital: "Indianapolis",
      governor: "Eric Holcomb",
      senators: ["Todd Young", "Mike Braun"],
      representatives: ["Frank J. Mrvan (D-IN01)", "Rudy Yakym (R-IN02)", "Jim Banks (R-IN03)", "Jim Baird (R-IN04)", "Victoria Spartz (R-IN05)", "Greg Pence (R-IN06)", "André Carson (D-IN07)",
      "Larry Bucshon (R-IN08)", "Erin Houchin (R-IN09)"]
    },
    {
      name: "Iowa",

      motto: "Our liberties we prize and our rights we will maintain",
      flagLink: "./assets/flags/IA.png",
      capital: "Des Moines",
      governor: "Kim Reynolds",
      senators: ["Chuck Grassley", "Joni Ernst"],
      representatives: ["Mariannette Miller-Meeks (R-IA01)", "Ashley Hinson (R-IA02)", "Zach Nunn (R-IA03)", "Randy Feenstra (R-IA04)"]
    },
    {
      name: "Kansas",

      motto: "To the stars through difficulties",
      flagLink: "./assets/flags/KS.png",
      capital: "Topeka",
      governor: "Laura Kelly",
      senators: ["Jerry Moran", "Roger Marshall"],
      representatives: ["Tracey Mann (R-KS01)", "Jake LaTurner (R-KS02)", "Sharice Davids (D-KS03)", "Ron Estes (R-KS04)"]
    },
    {
      name: "Kentucky",

      motto: "Let us be grateful to god",
      flagLink: "./assets/flags/KY.png",
      capital: "Frankfort",
      governor: "Andy Beshear",
      senators: ["Mitch McConnell", "Rand Paul"],
      representatives: [
        "James Comer (R-KY01)", "Brett Guthrie (R-KY02)", "Morgan McGarvey (D-KY03)", "Thomas Massie (R-KY04)", "Hal Rogers (R-KY05)", "Andy Barr (R-KY06)"]
    },
    {
      name: "Louisiana",

      motto: "Union, Justice, Confidence",
      flagLink: "./assets/flags/LA.jpg",
      capital: "Baton Rouge",
      governor: "John Bel Edwards",
      senators: ["Bill Cassidy", "John Kennedy"],
      representatives: ["Steve Scalise (R-LA01)", "Troy Carter (D-LA02)", "Clay Higgins (R-LA03)", "Mike Johnson (R-LA04)", "Julia Letlow (R-LA05)", "Garret Graves (R-LA06)"]
    },
    {
      name: "Maine",

      motto: "I lead",
      flagLink: "./assets/flags/ME.jpg",
      capital: "Augusta",
      governor: "Janet Mills",
      senators: ["Susan Collins", "Angus King"],
      representatives: [
        "Chellie Pingree (D-ME01)", "Jared Golden (D-ME02)"]
    },
    {
      name: "Maryland",

      motto: "Strong Deeds, Gentle Words",
      flagLink: "./assets/flags/MD.jpg",
      capital: "Annapolis",
      governor: "Wes Moore",
      senators: ["Ben Cardin", "Chris Van Hollen"],
      representatives: ["Andy Harris (R-MD01)", "Dutch Ruppersberger (D-MD02)", "John Sarbanes (D-MD03)", "Glenn Ivey (D-MD04)", "Steny Hoyer (D-MD05)", "David Trone (D-MD06)", "Kweisi Mfume (D-MD07)", "Jamie Raskin (D-MD08)"
        ]
    },
    {
      name: "Massachusetts",

      motto: "By the sword we seek peace, but peace only under liberty",
      flagLink: "./assets/flags/MA.png",
      capital: "Boston",
      governor: "Maura Healey",
      senators: ["Elizabeth Warren", "Ed Markey"],
      representatives: ["Richard Neal (D-MA01)", "Jim McGovern (D-MA02)", "Lori Trahan (D-MA03)", "Jake Auchincloss (D-MA04)", "Katherine Clark (D-MA05)", "Seth Moulton (D-MA06)", "Ayanna Pressley (D-MA07)", "Stephen D. Lynch (D-MA08)", "Bill Keating (D-MA09)"
        ]
    },
    {
      name: "Michigan",

      motto: "If you seek a pleasant peninsula, look about you",
      flagLink: "./assets/flags/MI.png",
      capital: "Lansing",
      governor: "Gretchen Whitmer",
      senators: ["Debbie Stabenow", "Gary Peters"],
      representatives: [
        "Jack Bergman (R-MI01)", "John Moolenaar (R-MI02)", "Hillary Scholten (D-MI03)", "Bill Huizenga (R-MI04)", "Tim Walberg (D-MI05)", "Debbie Dingell (D-MI06)", "Elissa Slotkin (D-MI07)",
        "Dan Kildee (D-MI08)","Lisa McClain (R-MI09)", "John James (R-MI10)", "Haley Stevens (D-MI11)", "Rashida Tlaib (D-MI12)", "Shri Thanedar (D-MI13)"]
    },
    {
      name: "Minnesota",

      motto: "The State of the North",
      flagLink: "./assets/flags/MN.png",
      capital: "Saint Paul",
      governor: "Tim Walz",
      senators: ["Amy Klobuchar", "Tina Smith"],
      representatives: [
        "Brad Finstad (R-MN01)", "Angie Craig (D-MN02)", "Dean Phillips (D-MN03)", "Betty McCollum (D-MN04)", "Illhan Omar (D-MN05)", "Tom Emmer (R-MN06)", "Michelle Fishbach (R-MN07)", "Pete Stauber (R-MN08)"
        ]
    },
    {
      name: "Mississippi",

      motto: "By Valor and Arms",
      flagLink: "./assets/flags/MS.png",
      capital: "Jackson",
      governor: "Tate Reeves",
      senators: ["Roger Wicker", "Cindy Hyde-Smith"],
      representatives: [
        "Trent Kelly (R-MS01)", "Bennie Thompson (D-MS02)", "Michael Guest (R-MS03)", "Mike Ezell (R-MS04)"
      ]
    },
    {
      name: "Missouri",

      motto: "Let the good of the people be the supreme law",
      flagLink: "./assets/flags/MO.png",
      capital: "Jefferson City",
      governor: "Michael Parson",
      senators: ["Eric Schmitt", "Josh Hawley"],
      representatives: [
        "Cori Bush (D-MO01)", "Ann Wagner (R-MO02)", "Blaine Luetkemeyer (R-MO03)", "Mark Alford (R-MO04)", "Emanuel Cleaver (D-MO05)", "Sam Graves (R-MO06)", "Eric Burlison (R-MO07)", "Jason Smith (R-MO08)"
      ]
    },
    {
      name: "Montana",

      motto: "Gold and Silver",
      flagLink: "./assets/flags/MT.png",
      capital: "Helena",
      governor: "Greg Gianforte",
      senators: ["Jon Tester", "Steve Daines"],
      representatives: ["Ryan Zinke (R-MT01)", "Matt Rosendale (R-MT02)"]
    },
    {
      name: "Nebraska",

      motto: "Equality before the law",
      flagLink: "./assets/flags/NE.jpg",
      capital: "Lincoln",
      governor: "Jim Pillen",
      senators: ["Deb Fischer", "Pete Ricketts"],
      representatives: ["Mike Flood (R-NE01)", "Don Bacon (R-NE02)", "Adrian Smith (R-NE03)"]
    },
    {
      name: "Nevada",

      motto: "All for Our Country",
      flagLink: "./assets/flags/NV.png",
      capital: "Carson City",
      governor: "Joe Lombardo",
      senators: ["Catherine Cortez Masto", "Jacky Rosen"],
      representatives: ["Dina Titus (D-NV01)", "Mark Amodei (R-NV02)", "Susie Lee (D-NV03)", "Steven Horsford (D-NV04)"]
    },
    {
      name: "New Hampshire",

      motto: "Live Free or Die",
      flagLink: "./assets/flags/NH.jpg",
      capital: "Concord",
      governor: "Christopher Sununu",
      senators: ["Jeanne Shaheen", "Maggie Hassan"],
      representatives: ["Chris Pappas (D-NH01)", "Ann McLane Kuster (D-NH02)"
        ]
    },
    {
      name: "New Jersey",

      motto: "Liberty and prosperity",
      flagLink: "./assets/flags/NJ.png",
      capital: "Trenton",
      governor: "Phil Murphy",
      senators: ["Bob Menendez", "Cory Booker"],
      representatives: ["Donald Norcross (D-NJ01)", "Jeff Van Drew (R-NJ02)", "Andy Kim (D-NJ03)", "Chris Smith (R-NJ04)", "Josh Gottheimer (D-NJ05)", "Frank Pallone (D-NJ06)", "Thomas Kean Jr. (R-NJ07)",
        "Rob Menendez (D-NJ08)", "Bill Pascrell (D-NJ09)", "Donald Payne Jr. (D-NJ10)", "Mikie Sherrill (D-NJ11)", "Bonnie Watyson Coleman (D-NJ12)"
        ]
    },
    {
      name: "New Mexico",

      motto: "“It grows as it goes",
      flagLink: "./assets/flags/NM.png",
      capital: "Santa Fe",
      governor: "Michelle Lujan Grisham",
      senators: ["Martin Heinrich", "Ben Ray Luján"],
      representatives: ["Melanie Stansbury (D-NM01)", "Gabe Vasquez (D-NM02)", "Teresa Keger Fernandez (D-NM03)"
        ]
    },
    {
      name: "New York",

      motto: "Ever upward",
      flagLink: "./assets/flags/NY.jpg",
      capital: "Albany",
      governor: "Kathy Hochul",
      senators: ["Chuck Schumer", "Kirsten Gillibrand"],
      representatives: ["Nick LaLota (R-NY01)",
        "Andrew Garbarino (R-NY02)",
        "George Santos (R-NY03)",
        "Anthony D’Esposito (R-NY04)",
        "Gregory Meeks (D-NY05)",
        "Grace Meng (D-NY06)",
        "Nydia Velázquez (D-NY07)",
        "Hakeem Jeffries (D-NY08)",
        "Yvette Clarke (D-NY09)",
        "Dan Goldman (D-NY10)",
        "Nicole Malliotakis (R-NY11)",
        "Jerry Nadler (D-NY12)",
        "Adriano Espaillat (D-NY13)",
        "Alexandria Ocasio-Cortez (D-NY14)",
        "Ritchie Torres (D-NY15)",
        "Jamaal Bowman (D-NY16)",
       "Mike Lawler (R-NY17)",
        "Pat Ryan (D-NY18)",
        "Marc Molinaro (R-NY19)",
        "Paul Tonko (D-NY20)",
        "Elise Stefanik (R-NY21)",
        "Brandon WIlliams (R-NY22)",
        "Nick Langworthy (R-NY23)",
        "Claudia Tenney (R-NY24)",
        "Joseph Morelle (D-NY25)",
        "Brian Higgins (D-NY26)"
        ]
    },
    {
      name: "North Carolina",

      motto: "To be, rather than to seem",
      flagLink: "./assets/flags/NC.jpg",
      capital: "Raleigh",
      governor: "Roy Cooper",
      senators: ["Ted Budd", "Thom Tillis"],
      representatives: [
        "Don Davis (D-NC01)",
        "Deborah Ross (D-NC02)",
        "Greg Murphy (R-NC03)",
        "Valerie Foushee (D-NC04)",
        "Virginia Foxx (R-NC05)",
        "Kathy Manning (D-NC06)",
        "David Rouzer (R-NC07)",
        "Dan Bishop (R-NC08)",
        "Richard Hudson (R-NC09)",
        "Patrick McHenry (R-NC10)",
        "Chuck Edwards (R-NC11)",
        "Alma Adams (D-NC12)",
        "Wiley Nickel (D-NC13)",
        "Jeff Jackson (D-NC14)" 
      ]
    },
    {
      name: "North Dakota",

      motto: "Liberty and Union",
      flagLink: "./assets/flags/ND.jpg",
      capital: "Bismarck",
      governor: "Doug Burgum",
      senators: ["John Hoeven", "Kevin Cramer"],
      representatives: ["Kelly Armstrong (R-NDAtLarge)"]
    },
    {
      name: "Ohio",

      motto: "With god, all things are possible",
      flagLink: "./assets/flags/OH.gif",
      capital: "Columbus",
      governor: "Mike DeWine",
      senators: ["Sherrod Brown", "JD Vance"],
      representatives: [
        "Greg Landsman (D-OH01)",
        "Brad Wenstrup (R-OH02)",
        "Joyce Beatty (D-OH03)",
        "Jim Jordan (R-OH04)",
        "Bob Latta (R-OH05)",
        "Bill Johnson (R-OH06)",
        "Max Miller (R-OH07)",
        "Warren Davidson (R-OH08)",
        "Marcy Kaptur (D-OH09)",
        "Mike Turner (R-OH10)",
        "Shontel Brown (D-OH11)",
        "Troy Balderson (R-OH12)",
        "Emilia Sykes (D-OH13)",
        "David Joyce (R-OH14)",
        "Mike Carey (R-OH15)"
      ]
    },
    {
      name: "Oklahoma",

      motto: "Work conquers all",
      flagLink: "./assets/flags/OK.jpg",
      capital: "Oklahoma City",
      governor: "Kevin Stitt",
      senators: ["Markwayne Mullin", "James Lankford"],
      representatives: ["Kevin Hern (R-OK01)", "Josh Brecheen (R-OK02)", "Frank Lucas (R-OK03)", "Tom Cole (R-OK04)", "Stephanie Bice (R-OK05)"
        ]
    },
    {
      name: "Oregon",

      motto: "She flies with her own wings",
      flagLink: "./assets/flags/OR.png",
      capital: "Salem",
      governor: "Tina Kotek",
      senators: ["Ron Wyden", "Jeff Merkley"],
      representatives: [
        "Suzanne Bonamici (D-OR01)",
        "Cliff Bentz (R-OR02)",
        "Earl Blumenauer (D-OR03)",
        "Vale Hoyle (D-OR04)",
        "Lori Chavez-DeRemer (R-OR05)",
        "Andrea Salinas (D-OR06)"
      ]
    },
    {
      name: "Pennsylvania",

      motto: "Virtue, Liberty and Independence",
      flagLink: "./assets/flags/PA.png",
      capital: "Harrisburg",
      governor: "Josh Shapiro",
      senators: ["Bob Casey Jr.", "John Fetterman"],
      representatives: [
        "Brian Fitzpatrick (R-PA01)",
        "Brendan Boyle (D-PA02)",
        "Dwight Evans (D-PA03)",
        "Madeleine Dean (D-PA04)",
        "Mary Gay Scanlon (D-PA05)",
        "Chrissy Houlahan (D-PA06)",
        "Susan Wild (D-PA07)",
        "Matt Cartwright (D-PA08)",
        "Dan Meuser (R-PA09)",
        "Scott Perry (R-PA10)",
        "Lloyd Smucker (R-PA11)",
        "Summer Lee (D-PA12)",
        "John Joyce (R-PA13)",
        "Guy Reschenthaler (R-PA14)",
        "Glenn Thompson (R-PA15)",
        "Mike Kelly (R-PA16)",
        "Chris Deluzio (D-PA17)"
        ]
    },
    {
      name: "Rhode Island",

      motto: "Hope",
      flagLink: "./assets/flags/RI.jpg",
      capital: "Providence",
      governor: "Dan McKee",
      senators: ["Jack Reed", "Sheldon Whitehouse"],
      representatives: [
        "David Cicilline (D-RI01)",
        "Seth Magaziner (D-RI02)"
        ]
    },
    {
      name: "South Carolina",

      motto: "While I breathe, I hope",
      flagLink: "./assets/flags/SC.jpg",
      capital: "Columbia",
      governor: "Henry McMaster",
      senators: ["Lindsey Graham", "Tim Scott"],
      representatives: [
        "Nancy Mace (R-SC01)",
        "Joe Wilson (R-SC02)",
        "Jeff Duncan (R-SC03)",
        "William Timmons (R-SC04)",
        "Ralph Norman (R-SC05)",
        "Jim Clyburn (D-SC06)",
        "Russel Fry (R-SC07)"
        ]
    },
    {
      name: "South Dakota",

      motto: "Under God the People Rule",
      flagLink: "./assets/flags/SD.jpg",
      capital: "Pierre",
      governor: "Kristi Noem",
      senators: ["John Thune", "Mike Rounds"],
      representatives: [
        "Dusty Johnson (R-SDAtLarge)"
      ]
    },
    {
      name: "Tennessee",

      motto: "Agriculture and Commerce",
      flagLink: "./assets/flags/TN.jpg",
      capital: "Nashville",
      governor: "Bill Lee",
      senators: ["Marsha Blackburn", "Bill Hagerty"],
      representatives: [
        "Diana Harshbarger (R-TN01)",
        "Tim Burchett (R-TN02)",
        "Chuck Fleischmann (R-TN03)",
        "Scott DesJarlais (R-TN04)",
        "Andy Ogles (R-TN05)",
        "John Rose (R-TN06)",
        "Mark E. Green (R-TN07)",
        "David Kustoff (R-TN08)",
        "Steve Cohen (D-TN09)"
        ]
    },
    {
      name: "Texas",

      motto: "Friendship",
      flagLink: "./assets/flags/TX.png",
      capital: "Austin",
      governor: "Greg Abbott",
      senators: ["John Cornyn", "Ted Cruz"],
      representatives: [
        "Nathaniel Moran (R-TX01)",
        "Dan Crenshaw (R-TX02)",
        "Keith Self (R-TX03)",
        "Pat Fallon (R-TX04)",
        "Lance Gooden (R-TX05)",
        "Jake Ellzey (R-TX06)",
        "Lizzie Fletcher (D-TX07)",
        "Morgan Luttrell (R-TX08)",
        "Al Green (D-TX09)",
        "Michael McCaul (R-TX10)",
        "August Pfluger (R-TX11)",
        "Kay Granger (R-TX12)",
        "Ronny Jackson (R-TX13)",
        "Randy Weber (R-TX14)",
        "Monica De La Cruz (R-TX15)",
        "Veronica Escobar (D-TX16)",
        "Pete Sessions (R-TX17)",
        "Sheila Jackson Lee (D-TX18)",
        "Jodey Arrington (R-TX19)",
        "Joaquin Castro (D-TX20)",
        "Chip Roy (R-TX21)",
        "Troy Nehls (R-TX22)",
        "Tony Gonzales (R-TX23)",
        "Beth Van Duyne (R-TX24)",
        "Roger Williams (R-TX25)",
        "Michael C. Burgess (R-TX26)",
        "Michael Cloud (R-TX27)",
        "Henry Cuellar (D-TX28)",
        "Sylvia Garcia (D-TX29)",
        "Jasmine Crockett (D-TX30)",
        "John Carter (R-TX31)",
        "Colin Allred (D-TX32)",
        "Marc Veasey (D-TX33)",
        "Vicente Gonzalez (D-TX34)",
        "Greg Casar (D-TX35)",
        "Brian Babin (R-TX36)",
        "Lloyd Doggett (D-TX37)",
        "Wesley Hunt (R-TX38)"
      ]
    },
    {
      name: "Utah",

      motto: "Industry",
      flagLink: "./assets/flags/UT.png",
      capital: "Salt Lake City",
      governor: "Spencer Cox",
      senators: ["Mike Lee", "Mitt Romney"],
      representatives: [
        "Blake Moore (R-UT01)",
        "Chris Stewart (R-UT02)",
        "John Curtis (R-UT03)",
        "Burgess Owens (R-UT04)"

      ]
    },
    {
      name: "Vermont",

      motto: "May the 14th star shine bright",
      flagLink: "./assets/flags/VT.jpg",
      capital: "Montpelier",
      governor: "Phil Scott",
      senators: ["Peter Welch", "Bernie Sanders"],
      representatives: ["Becca Balint (D-VTAtLarge)"]
    },
    {
      name: "Virginia",

      motto: "Thus Always to Tyrants",
      flagLink: "./assets/flags/VA.jpg",
      capital: "Richmond",
      governor: "Glenn Youngkin",
      senators: ["Mark Warner", "Tim Kaine"],
      representatives: [
        "Rob Wittman (R-VA01)",
        "Jen Kiggans (R-VA02)",
        "Bobby Scott (D-VA03)",
        "Jennifer McClellan (D-VA04)",
        "Bob Good (R-VA05)",
        "Ben Cline (R-VA06)",
        "Abigail Spanberger (D-VA07)",
        "Don Beyer (D-VA08)",
        "Morgan Griffith (R-VA09)",
        "Jennifer Wexton (D-VA10)",
        "Gerry Connolly (D-VA11)"
        ]
    },
    {
      name: "Washington",

      motto: "By and By",
      flagLink: "./assets/flags/WA.jpg",
      capital: "Olympia",
      governor: "Jay Inslee",
      senators: ["Patty Murray", "Maria Cantwell"],
      representatives: [
        "Suzan DelBene (D-WA01)",
        "Rick Larsen (D-WA02)",
        "Marie Gluesenkamp Perez (D-WA03)",
        "Dan Newhouse (R-WA04)",
        "Cathy McMorris Rodgers (R-WA05)",
        "Derek Kilmer (D-WA06)",
        "Pramila Jayapal (D-WA07)",
        "Kim Schrier (D-WA08)",
        "Adam Smith (D-WA09)",
        "Marilyn Strickland (D-WA10)"
        ]
    },
    {
      name: "West Virginia",

      motto: "Mountaineers Are Always Free",
      flagLink: "./assets/flags/WV.jpg",
      capital: "Charleston",
      governor: "Jim Justice",
      senators: ["Joe Manchin", "Shelley Moore Capito"],
      representatives: [
        "Carol Miller (R-WV01)",
        "Alex Mooney (R-WV02)"
        ]
    },
    {
      name: "Wisconsin",

      motto: "Forward",
      flagLink: "./assets/flags/WI.jpg",
      capital: "Madison",
      governor: "Tony Evers",
      senators: ["Ron Johnson", "Tammy Baldwin"],
      representatives: [
        "Bryan Steil (R-WI01)",
        "Mark Pocan (D-WI02)",
        "Derrick Van Orden (R-WI03)",
        "Gwen Moore (D-WI04)",
        "Scott Fitzgerald (R-WI05)",
        "Glenn Grithman (R-WI06)",
        "Tom Tiffany (R-WI07)",
        "Mike Gallagher (R-WI08)"
        ]
    },
    {
      name: "Wyoming",

      motto: "Equal Rights",
      flagLink: "./assets/flags/WY.jpg",
      capital: "Cheyenne",
      governor: "Mark Gordon",
      senators: ["John Barrasso", "Cynthia Lummis"],
      representatives: ["Harriet Hageman (R-WYAtLarge)"]
    }
  ];

  currentState = this.states[0];

  public changeState(stateIndex: number) {
    this.currentState = this.states[stateIndex];

    this.http.get<Governor>('https://congressionalappchallenge2.herokuapp.com/getgovernor/' + this.currentState.governor).subscribe((response) => { this.governor = response; console.log(response)}),

    this.http.get<any>('https://congressionalappchallenge2.herokuapp.com/getsenator/' + this.currentState.senators[0]).subscribe((response) => { this.senators[0] = response; console.log(response)}),
    this.http.get<any>('https://congressionalappchallenge2.herokuapp.com/getsenator/' + this.currentState.senators[1]).subscribe((response) => { this.senators[1] = response; console.log(response)})
  }

  ngOnInit(): void {
    this.changeState(29);
    this.currentState = this.states[29];
  }

}
