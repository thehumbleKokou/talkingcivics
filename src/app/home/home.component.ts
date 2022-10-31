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
      senators: ["Richard Shelby", "Tommy Tuberville"],
      flagLink: "./assets/flags/AL.jpg",
      capital: "Montgomery",
      representatives: ["Jerry Carl (R-AL01)", "Barry Moore (R-AL02)", "Mike Rogers (R-AL03)", "Robert Aderholt (R-AL04)", "Mo Brooks (R-AL05)", "Gary Palmer (R-AL06)", "Terri Sewell (D-AL07)"]
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
      governor: "Doug Ducey",
      senators: ["Kyrsten Sinema", "Mark Kelly"],
      flagLink: "./assets/flags/AZ.png",
      capital: "Phoenix",
      representatives: ["Tom O’Halleran (D-AZ01)", "Ann Kirkpatrick (D-AZ02)", "Raúl Grijalva (D-AZ03)", "Paul Gosar (R-AZ04)", "Andy Biggs (R-AZ05)", "David Schweikert (R-AZ06)", "Ruben Gallego (D-AZ07)", "Debbie Lesko (R-AZ08)", "Greg Stanton (D-AZ09)"]
    },
    {
      name: "Arkansas",

      motto: "The People Rule",
      flagLink: "./assets/flags/AR.gif",
      capital: "Little Rock",
      governor: "Asa Hutchinson",
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
      representatives: ["Doug LaMafia (R-CA01)", "Jared Huffman (D-CA02)", "John Garamendi (D-CA03)", "Tom McClintock (R-CA04)", "Mike Thompson (D-CA05)", "Doris Matsui (D-CA06)",
      "Ami Bera (D-CA07)", "Jay Obernolte (R-CA08)", "Jerry McNerney (D-CA09)", "Josh Harder (D-CA10)", "Mark DeSaulnier (D-CA11)", "Nancy Pelosi (D-CA12)", "Barbara Lee (D-CA13)",
      "Jackie Speier (D-CA14)", "Eric Swalwell (D-CA15)", "Jim Costa (D-CA16)", "Ro Khanna (D-CA17)", "Anna Eshoo (D-CA18)", "Zo Lofgren (D-CA19)", "Jimmy Panetta (D-CA20)", "David Valadao (R-CA21)",
      "Connie Conway (R-CA22)", "Kevin McCarthy (R-CA23)", "Salud Carbajal (D-CA24)", "Mike Garcia (R-CA25)", "Julia Brownley (D-CA26)", "Judy Chu (D-CA27)", "Adam Schiff (D-CA28)", "Tony Cárdenas (D-CA29)",
      "Brad Sherman (D-CA30)", "Pete Aguilar (D-CA31)", "Grace Napolitano (D-CA32)", "Ted Lieu (D-CA33)", "Jimmy Gomez (D-CA34)", "Norma Torres (D-CA35)", "Raul Riuz (D-CA36)", "Karen Bass (D-CA37)", "Linda Sánchez (D-CA38)",
      "Young Kim (R-CA39)", "Lucille Roybal-Allard (D-CA40)", "Mark Takano (D-CA41)", "Ken Calvert (R-CA42)", "Maxine Water (D-CA43)", "Nanette Barragán (D-CA44)", "Katie Porter (D-CA45)", "Lou Correa (D-CA46)",
      "Alan Lowenthal (D-CA47)", "Michelle Steel (R-CA48)", "Mike Levin (D-CA49)", "Darrell Issa (R-CA50)", "Juan Vargas (D-CA51)", "Scott Peters (D-CA52)", "Sara Jacobs (D-CA53)"],
    },
    {
      name: "Colorado",

      motto: "Nothing Without Providence",
      flagLink: "./assets/flags/CO.png",
      capital: "Denver",
      governor: "Jared Polis",
      senators: ["Michael Bennet", "John Hickenlooper"],
      representatives: ["Diana DeDette (D-CO01)", "Joe Neguse (D-CO02)", "Lauren Boebert (R-CO03)", "Ken Buck (R-CO04)", "Doug Lamborn (R-CO05)", "Jason Crow (D-CO06)", "Ed Perlmutter (D-CO07)"]
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
      representatives: ["Matt Gaetz (R-FL01)", "Neal Dunn (R-FL02)", "Kat Cammack (R-FL03)", "John Rutherford (R-FL04)", "Al Lawson (D-FL05)", "Michael Waltz (R-FL06)", "Stephanie Murphy (D-FL07)", "Bill Posey (R-FL08)",
      "Darren Soto (D-FL09)", "Val Demings (D-FL10)", "Daniel Webster (R-FL11)", "Gus Bilirakis (R-FL12)", "FL13 - Vacant", "Kathy Castor (D-FL14)", "Scott Franklin (R-FL15)", "Vern Buchanan (R-FL16)",
      "Greg Steube (R-FL17)", "Byron Donalds (R-FL19)", "Sheila Cherfilus-McCormick (D-FL20)", "Lois Frankel (D-FL21)", "FL22 - Vacant", "Debbie Wasserman Schultz (D-FL23)", "Frederica Wilson (D-FL24)",
      "Mario Díaz-Balart (R-FL25)", "Carlos Giménez (R-FL26)", "María Elvira Salazar (R-FL27)"]
    },
    {
      name: "Georgia",

      motto: "Wisdom, Justice, Moderation",
      flagLink: "./assets/flags/GA.png",
      capital: "Atlanta",
      governor: "Brian Kemp",
      senators: ["Jon Ossoff", "Raphael Warnock"],
      representatives: ["Buddy Carter (R-GA01)", "Sanford Bishop (D-GA02)", "Drew Ferguson (R-GA03)", "Hank Johnson (D-GA04)", "Nikema Williams (D-GA05)", "Lucy McBath (D-GA06)", "Carolyn Bourdeaux (D-GA07)",
      "Austin Scott (R-GA08)", "Andrew Clyde (R-GA09)", "Jody Hice (R-GA10)", "Barry Loudermilk (R-GA11)", "Rick W. Allen (R-GA12)", "David Scorr (D-GA13)", "Majorie Taylor Greene (R-GA14)"]
    },
    {
      name: "Hawaii",

      motto: "The Life of the Land is Perpetuated in Righteousness",
      flagLink: "./assets/flags/HI.png",
      capital: "Honolulu",
      governor: "David Ige",
      senators: ["Brian Schatz", "Mazie Hirono"],
      representatives: ["Ed Case (D-HI01)", "Kai Kahele (D-HI02)"]
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
      representatives: ["Bobby Rush (D-IL01)",
        "Robin Kelly (D-IL02)", "Marie Newman (D-IL03)", "Jesús Garcia (D-IL04)", "Mike Quigley (D-IL05)", "Sean Casten (D-IL06)", "Danny K. Davis (D-IL07)", "Raja Krishnamoorthi (D-IL08)", "Jan Schakowsky (IL-09)",
        "Brad Schneider (IL-10)", "Bill Foster (D-IL11)", "Mike Bost (R-IL12)", "Rodney Davis (R-IL13)", "Lauren Underwood (D-IL14)", "Mary Miller (R-IL15)", "Adam Kinzinger (R-IL16)", "Cheri Bustos (D-IL17)", "Darin LaHood (R-IL18)"]
    },
    {
      name: "Indiana",

      motto: "The Crossroads of America",
      flagLink: "./assets/flags/IN.jpg",
      capital: "Indianapolis",
      governor: "Eric Holcomb",
      senators: ["Todd Young", "Mike Braun"],
      representatives: ["Frank J. Mrvan (D-IN01)", "IN02 - Vacant", "Jim Banks (R-IN03)", "Jim Baird (R-IN04)", "Victoria Spartz (R-IN05)", "Greg Pence (R-IN06)", "André Carson (D-IN07)",
      "Larry Bucshon (R-IN08)", "Trey Hollingsworth (R-IN09)"]
    },
    {
      name: "Iowa",

      motto: "Our liberties we prize and our rights we will maintain",
      flagLink: "./assets/flags/IA.png",
      capital: "Des Moines",
      governor: "Kim Reynolds",
      senators: ["Chuck Grassley", "Joni Ernst"],
      representatives: ["Ashley Hinson (R-IA01)", "Mariannette Miller-Meeks (R-IA02)", "Cindy Axne (D-IA03)", "Randy Feenstra (R-IA04)"]
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
        "James Comer (R-KY01)", "Brett Guthrie (R-KY02)", "John Yarmuth (D-KY03)", "Thomas Massie (R-KY04)", "Hal Rogers (R-KY05)", "Andy Barr (R-KY06)"]
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
      governor: "Larry Hogan",
      senators: ["Ben Cardin", "Chris Van Hollen"],
      representatives: ["Andy Harris (R-MD01)", "Dutch Ruppersberger (D-MD02)", "John Sarbanes (D-MD03)", "Anthony G. Brown (D-MD04)", "Steny Hoyer (D-MD05)", "David Trone (D-MD06)", "Kweisi Mfume (D-MD07)", "Jamie Raskin (D-MD08)"
        ]
    },
    {
      name: "Massachusetts",

      motto: "By the sword we seek peace, but peace only under liberty",
      flagLink: "./assets/flags/MA.png",
      capital: "Boston",
      governor: "Charlie Baker",
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
        "Jack Bergman (R-MI01)", "Bill Huizenga (R-MI02)", "Peter Meijer (R-MI03)", "John Moolenaar (R-MI04)", "Dan Kildee (D-MI05)", "Fred Upton (R-MI06)", "Tim Walberg (R-MI07)",
        "Elissa Slotkin (D-MI08)","Andy Levin (D-MI09)", "Lisa McClain (R-MI10)", "Haley Stevens (D-MI11)", "Debbie Dingell (D-MI12)", "Rashida Tlaib (D-MI13)", "Brenda Lawrence (D-MI14)"

      ]
    },
    {
      name: "Minnesota",

      motto: "The State of the North",
      flagLink: "./assets/flags/MN.png",
      capital: "Saint Paul",
      governor: "Tim Walz",
      senators: ["Amy Klobuchar", "Tina Smith"],
      representatives: [
        "Brad Finstad (R-MN01)", "Angie Craig (D-MN02)", "Dean Phillips (D-MN03)", "Betty McCollum (D-MN04)", "Illhan Omar (D-MN05)", "Tom Emmer (R-MN06)", "Michelle Rishbach (R-MN07)", "Pete Stauber (R-MN08)"
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
        "Trent Kelly (R-MS01)", "Bennie Thompson (D-MS02)", "Michael Guest (R-MS03)", "Steven Palazzo (R-MS04)"
      ]
    },
    {
      name: "Missouri",

      motto: "Let the good of the people be the supreme law",
      flagLink: "./assets/flags/MO.png",
      capital: "Jefferson City",
      governor: "Michael Parson",
      senators: ["Roy Blunt", "Josh Hawley"],
      representatives: [
        "Cori Bush (D-MO01)", "Ann Wagner (R-MO02)", "Blaine Luetkemeyer (R-MO03)", "Vicky Hartzler (R-MO04)", "Emanuel Cleaver (D-MO05)", "Sam Graves (R-MO06)", "Billy Long (R-MO07)", "Jason Smith (R-MO08)"
      ]
    },
    {
      name: "Montana",

      motto: "Gold and Silver",
      flagLink: "./assets/flags/MT.png",
      capital: "Helena",
      governor: "Greg Gianforte",
      senators: ["Jon Tester", "Steve Daines"],
      representatives: ["Matt Rosendale (R-MTAtLarge)"]
    },
    {
      name: "Nebraska",

      motto: "Equality before the law",
      flagLink: "./assets/flags/NE.jpg",
      capital: "Lincoln",
      governor: "Pete Ricketts",
      senators: ["Deb Fischer", "Ben Sasse"],
      representatives: ["Mike Flood (R-NE01)", "Don Bacon (R-NE02)", "Adrian Smith (R-NE03)"]
    },
    {
      name: "Nevada",

      motto: "All for Our Country",
      flagLink: "./assets/flags/NV.png",
      capital: "Carson City",
      governor: "Steve Sisolak",
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
      representatives: ["Donald Norcross (D-NJ01)", "Jeff Van Drew (R-NJ02)", "Andy Kim (D-NJ03)", "Chris Smith (R-NJ04)", "Josh Gottheimer (D-NJ05)", "Frank Pallone (D-NJ06)", "Tom Malinowski (D-NJ07)",
        "Albio Sires (D-NJ08)", "Bill Pascrell (D-NJ09)", "Donald Payne Jr. (D-NJ10)", "Mikie Sherrill (D-NJ11)", "Bonnie Watyson Coleman (D-NJ12)"
        ]
    },
    {
      name: "New Mexico",

      motto: "“It grows as it goes",
      flagLink: "./assets/flags/NM.png",
      capital: "Santa Fe",
      governor: "Michelle Lujan Grisham",
      senators: ["Martin Heinrich", "Ben Ray Luján"],
      representatives: ["Melanie Stansbury (D-NM01)", "Yvette Herrell (R-NM02)", "Teresa Keger Fernandez (D-NM03)"
        ]
    },
    {
      name: "New York",

      motto: "Ever upward",
      flagLink: "./assets/flags/NY.jpg",
      capital: "Albany",
      governor: "Kathy Hochul",
      senators: ["Chuck Schumer", "Kirsten Gillibrand"],
      representatives: ["Lee Zeldin (R-NY01)",
        "Andrew Garbarino (R-NY02)",
        "Thomas Suozzi (D-NY03)",
        "Kathleen Rice (D-NY04)",
        "Gregory Meeks (D-NY05)",
        "Grace Meng (D-NY06)",
        "Nydia Velázquez (D-NY07)",
        "Hakeem Jeffries (D-NY08)",
        "Yvette Clarke (D-NY09)",
        "Jerry Nadler (D-NY10)",
        "Nicole Malliotakis (R-NY11)",
        "Carolyn Maloney (D-NY12)",
        "Adriano Espaillat (D-NY13)",
        "Alexandria Ocasio-Cortez (D-NY14)",
        "Ritchie Torres (D-NY15)",
        "Jamaal Bowman (D-NY16)",
       "Mondaire Jones (D-NY17)",
        "Sean Patrick Maloney (D-NY18)",
        "Pat Ryan (D-NY19)",
        "Paul Tonko (D-NY20)",
        "Elise Stefanik (R-NY21)",
        "Claudia Tenney (R-NY22)",
        "Joe Sempolinski (R-NY23)",
        "John Katko (R-NY24)",
        "Joseph Morelle (D-NY25)",
        "Brian Higgins (D-NY26)",
        "Chris Jacobs (R-NY27)"
        ]
    },
    {
      name: "North Carolina",

      motto: "To be, rather than to seem",
      flagLink: "./assets/flags/NC.jpg",
      capital: "Raleigh",
      governor: "Roy Cooper",
      senators: ["Richard Burr ", "Thom Tillis"],
      representatives: [
        "G.K. Butterfield (D-NC01)",
        "Deborah Ross (D-NC02)",
        "Greg Murphy (R-NC03)",
        "David Price (D-NC04)",
        "Virginia Foxx (R-NC05)",
        "Kathy Manning (D-NC06)",
        "David Rouzer (R-NC07)",
        "Richard Hudson (R-NC08)",
        "Dan Bishop (R-NC09)",
        "Patrick McHenry (R-NC10)",
        "Madison Cawthorn (R-NC11)",
        "Alma Adams (D-NC12)",
        "Ted Budd (R-NC13)" 
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
      senators: ["Sherrod Brown", "Rob Portman"],
      representatives: [
        "Steve Chabot (R-OH01)",
        "Brad Wenstrup (R-OH02)",
        "Joyce Beatty (D-OH03)",
        "Jim Jordan (R-OH04)",
        "Bob Latta (R-OH05)",
        "Bill Johnson (R-OH06)",
        "Bob Gibbs (R-OH07)",
        "Warren Davidson (R-OH08)",
        "Marcy Kaptur (D-OH09)",
        "Mike Turner (R-OH10)",
        "Shontel Brown (D-OH11)",
        "Troy Balderson (R-OH12)",
        "Tim Ryan (D-OH13)",
        "David Joyce (R-OH14)",
        "Mike Carey (R-OH15)",
        "Anthony Gonzalez (R-OH16)"
      ]
    },
    {
      name: "Oklahoma",

      motto: "Work conquers all",
      flagLink: "./assets/flags/OK.jpg",
      capital: "Oklahoma City",
      governor: "Kevin Stitt",
      senators: ["Jim Inhofe", "James Lankford"],
      representatives: ["Kevin Hern (R-OK01)", "Markwayne Mullin (R-OK02)", "Frank Lucas (R-OK03)", "Tom Cole (R-OK04)", "Stephanie Bice (R-OK05)"
        ]
    },
    {
      name: "Oregon",

      motto: "She flies with her own wings",
      flagLink: "./assets/flags/OR.png",
      capital: "Salem",
      governor: "Kate Brown",
      senators: ["Ron Wyden", "Jeff Merkley"],
      representatives: [
        "Suzanne Bonamici (D-OR01)",
        "Cliff Bentz (R-OR02)",
        "Earl Blumenauer (D-OR03)",
        "Peter DeFrazio (D-OR04)",
        "Kurt Schrader (D-OR05)"
      ]
    },
    {
      name: "Pennsylvania",

      motto: "Virtue, Liberty and Independence",
      flagLink: "./assets/flags/PA.png",
      capital: "Harrisburg",
      governor: "Tom Wolf",
      senators: ["Bob Casey Jr.", "Pat Toomey"],
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
        "Fred Keller (R-PA12)",
        "John Joyce (R-PA13)",
        "Guy Reschenthaler (R-PA14)",
        "Glenn Thompson (R-PA15)",
        "Mike Kelly (R-PA16)",
        "Connor Lamb (D-PA17)",
        "Mike Doyle (D-PA18)"
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
        "James Langevin (D-RI02)"
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
        "Tom Rice (R-SC07)"
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
        "Jim Cooper (D-TN05)",
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
        "Louie Gohmert (R-TX01)",
        "Dan Crenshaw (R-TX02)",
        "Van Taylor (R-TX03)",
        "Pat Fallon (R-TX04)",
        "Lance Gooden (R-TX05)",
        "Jake Ellzey (R-TX06)",
        "Lizzie Fletcher (D-TX07)",
        "Kevin Brady (R-TX08)",
        "Al Green (D-TX09)",
        "Michael McCaul (R-TX10)",
        "August Pfluger (R-TX11)",
        "Kay Granger (R-TX12)",
        "Ronny Jackson (R-TX13)",
        "Randy Weber (R-TX14)",
        "Vicente Gonzalez (D-TX15)",
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
        "Eddie Bernice Johnson (D-TX30)",
        "John Carter (R-TX31)",
        "Colin Allred (D-TX32)",
        "Marc Veasey (D-TX33)",
        "Mayra Flores (R-TX34)",
        "Lloyd Doggett (D-TX35)",
        "Brian Babin (R-TX36)"
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
      senators: ["Patrick Leahy", "Bernie Sanders"],
      representatives: ["Peter Welch (D-VTAtLarge)"]
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
        "Elaine Luria (D-VA02)",
        "Bobby Scott (D-VA03)",
        "Donald McEachin (D-VA04)",
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
        "Jaime Herrera Beutler (R-WA03)",
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
        "David McKinley (R-WV01)",
        "Alex Mooney (R-WV02)",
        "Carol Miller (R-WV03)"
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
        "Ron Kind (D-WI03)",
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
      representatives: ["Liz Cheney (R-WYAtLarge)"]
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
