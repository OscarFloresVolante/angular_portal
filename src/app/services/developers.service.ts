import { Injectable } from '@angular/core';
import { IDeveloper } from 'src/models/IDeveloper';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  private developersList: Array<IDeveloper> = [{
    id: 1,
    firstName: "Iain",
    lastName: "Ilchuk",
    email: "iilchuk0@msu.edu",
    jobTitle: "Occupational Therapist",
    avatar: "https://robohash.org/quisquamlaborumcumque.png?size=128x128&set=set1"
  }, {
    id: 2,
    firstName: "Fayre",
    lastName: "Heddon",
    email: "fheddon1@amazon.co.jp",
    jobTitle: "Registered Nurse",
    avatar: "https://robohash.org/occaecaticulpadistinctio.png?size=128x128&set=set1"
  }, {
    id: 3,
    firstName: "Jewell",
    lastName: "Fieller",
    email: "jfieller2@salon.com",
    jobTitle: "Graphic Designer",
    avatar: "https://robohash.org/nullasapientenihil.png?size=128x128&set=set1"
  }, {
    id: 4,
    firstName: "Darlleen",
    lastName: "Brenstuhl",
    email: "dbrenstuhl3@java.com",
    jobTitle: "Programmer Analyst III",
    avatar: "https://robohash.org/doloremqueanimiipsa.png?size=128x128&set=set1"
  }, {
    id: 5,
    firstName: "Zara",
    lastName: "Pischof",
    email: "zpischof4@mapy.cz",
    jobTitle: "Senior Quality Engineer",
    avatar: "https://robohash.org/illumquiaducimus.png?size=128x128&set=set1"
  }, {
    id: 6,
    firstName: "Farlee",
    lastName: "Cramphorn",
    email: "fcramphorn5@phoca.cz",
    jobTitle: "Help Desk Technician",
    avatar: "https://robohash.org/repellatvoluptasquaerat.png?size=128x128&set=set1"
  }, {
    id: 7,
    firstName: "Benjy",
    lastName: "Hawkyens",
    email: "bhawkyens6@home.pl",
    jobTitle: "Senior Financial Analyst",
    avatar: "https://robohash.org/inciduntaccusamusest.png?size=128x128&set=set1"
  }, {
    id: 8,
    firstName: "Inez",
    lastName: "Skellern",
    email: "iskellern7@scribd.com",
    jobTitle: "Graphic Designer",
    avatar: "https://robohash.org/fugaullamdeserunt.png?size=128x128&set=set1"
  }, {
    id: 9,
    firstName: "Jordanna",
    lastName: "Narbett",
    email: "jnarbett8@fastcompany.com",
    jobTitle: "VP Product Management",
    avatar: "https://robohash.org/estquisnumquam.png?size=128x128&set=set1"
  }, {
    id: 10,
    firstName: "Yolanthe",
    lastName: "Vynarde",
    email: "yvynarde9@yelp.com",
    jobTitle: "Mechanical Systems Engineer",
    avatar: "https://robohash.org/enimexpeditavero.png?size=128x128&set=set1"
  }, {
    id: 11,
    firstName: "Colan",
    lastName: "Raatz",
    email: "craatza@nasa.gov",
    jobTitle: "Environmental Tech",
    avatar: "https://robohash.org/delectusvoluptasut.png?size=128x128&set=set1"
  }, {
    id: 12,
    firstName: "Marrissa",
    lastName: "Meadmore",
    email: "mmeadmoreb@ask.com",
    jobTitle: "Professor",
    avatar: "https://robohash.org/quisrepellendusdolorum.png?size=128x128&set=set1"
  }, {
    id: 13,
    firstName: "Errick",
    lastName: "Aleixo",
    email: "ealeixoc@github.com",
    jobTitle: "Geological Engineer",
    avatar: "https://robohash.org/quaeratmagnamvoluptas.png?size=128x128&set=set1"
  }, {
    id: 14,
    firstName: "Claudette",
    lastName: "Pimm",
    email: "cpimmd@sourceforge.net",
    jobTitle: "Senior Editor",
    avatar: "https://robohash.org/voluptasautet.png?size=128x128&set=set1"
  }, {
    id: 15,
    firstName: "Huberto",
    lastName: "Leele",
    email: "hleelee@newyorker.com",
    jobTitle: "Systems Administrator II",
    avatar: "https://robohash.org/molestiaererumeius.png?size=128x128&set=set1"
  }];
  
  constructor() { }

  getAllDevelopers() : Array<IDeveloper> {
    return this.developersList;
  }

  getDeveloperById(id: number): IDeveloper {
    const developer = this.developersList.filter( d => d.id === id)[0];
    return developer;
  }

}
