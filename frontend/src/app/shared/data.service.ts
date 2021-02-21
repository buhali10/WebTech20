import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data[];

  constructor() {
    this.data = [
      {
        id: 1,
        forename: 'Catherine',
        surname: 'Williams',
        email: 'cwilliamsl@360.cn'
      },
      {
        id: 2,
        forename: 'Adam',
        surname: 'Anderson',
        email: 'aanderson8@google.fr'
      },
      {
        id: 3,
        forename: 'Susan',
        surname: 'Andrews',
        email: 'sandrewsn@google.co.jp'
      },
      {
        id: 4,
        forename: 'Catherine',
        surname: 'Andrews',
        email: 'candrewsp@noaa.gov'
      },
      {
        id: 5,
        forename: 'Alan',
        surname: 'Bradley',
        email: 'abradley1c@globo.com'
      },
      {
        id: 6,
        forename: 'Anne',
        surname: 'Brooks',
        email: 'abrooks16@bravesites.com'
      },
      {
        id: 7,
        forename: 'Russell',
        surname: 'Brown',
        email: 'rbrownq@nifty.com'
      },
      {
        id: 8,
        forename: 'Ryan',
        surname: 'Burton',
        email: 'rburton18@foxnews.com'
      },
      {
        id: 9,
        forename: 'Roy',
        surname: 'Campbell',
        email: 'rcampbell1@geocities.com'
      },
      {
        id: 10,
        forename: 'Russell',
        surname: 'Campbell',
        email: 'rcampbell17@eventbrite.com'
      },
      {
        id: 11,
        forename: 'Bonnie',
        surname: 'Coleman',
        email: 'bcoleman11@fc2.com'
      },
      {
        id: 12,
        forename: 'Ernest',
        surname: 'Coleman',
        email: 'ecoleman15@businessweek.com'
      },
      {
        id: 13,
        forename: 'Richard',
        surname: 'Cruz',
        email: 'rcruz7@unc.edu'
      },
      {
        id: 14,
        forename: 'Sean',
        surname: 'Cruz',
        email: 'scruz10@answers.com'
      },
      {
        id: 15,
        forename: 'Rebecca',
        surname: 'Cunningham',
        email: 'rcunninghamd@mac.com'
      },
      {
        id: 16,
        forename: 'Margaret',
        surname: 'Evans',
        email: 'mevansh@pcworld.com'
      },
      {
        id: 17,
        forename: 'Jeffrey',
        surname: 'Ford',
        email: 'jford14@cnet.com'
      },
      {
        id: 18,
        forename: 'Andrea',
        surname: 'Gardner',
        email: 'agardnerv@woothemes.com'
      },
      {
        id: 19,
        forename: 'Deborah',
        surname: 'George',
        email: 'dgeorge6@furl.net'
      },
      {
        id: 20,
        forename: 'Sean',
        surname: 'Gibson',
        email: 'sgibsony@alexa.com'
      },
      {
        id: 21,
        forename: 'Virginia',
        surname: 'Graham',
        email: 'vgrahamk@aol.com'
      },
      {
        id: 22,
        forename: 'Steven',
        surname: 'Hamilton',
        email: 'shamiltonu@state.tx.us'
      },
      {
        id: 23,
        forename: 'Virginia',
        surname: 'Hawkins',
        email: 'vhawkinsf@ehow.com'
      },
      {
        id: 24,
        forename: 'Edward',
        surname: 'Hicks',
        email: 'ehicksc@pcworld.com'
      },
      {
        id: 25,
        forename: 'Mark',
        surname: 'Johnson',
        email: 'mjohnsonj@hostgator.com'
      },
      {
        id: 26,
        forename: 'Ruth',
        surname: 'Jordan',
        email: 'rjordan1a@smugmug.com'
      },
      {
        id: 27,
        forename: 'Antonio',
        surname: 'Kim',
        email: 'akim4@odnoklassniki.ru'
      },
      {
        id: 28,
        forename: 'Jennifer',
        surname: 'Marshall',
        email: 'jmarshallt@gnu.org'
      },
      {
        id: 29,
        forename: 'Eric',
        surname: 'Matthews',
        email: 'ematthews5@independent.co.uk'
      },
      {
        id: 30,
        forename: 'Raymond',
        surname: 'Mcdonald',
        email: 'rmcdonald2@ihg.com'
      },
      {
        id: 31,
        forename: 'Eric',
        surname: 'Miller',
        email: 'emillere@creativecommons.org'
      },
      {
        id: 32,
        forename: 'Jonathan',
        surname: 'Morales',
        email: 'jmoralesa@ovh.net'
      },
      {
        id: 33,
        forename: 'Marie',
        surname: 'Morgan',
        email: 'mmorganb@cloudflare.com'
      },
      {
        id: 34,
        forename: 'Amanda',
        surname: 'Nelson',
        email: 'anelson13@indiatimes.com'
      },
      {
        id: 35,
        forename: 'Lisa',
        surname: 'Olson',
        email: 'lolsonr@telegraph.co.uk'
      },
      {
        id: 36,
        forename: 'Alice',
        surname: 'Ortiz',
        email: 'aortizw@histats.com'
      },
      {
        id: 37,
        forename: 'Peter',
        surname: 'Phillips',
        email: 'pphillipss@1688.com'
      },
      {
        id: 38,
        forename: 'Matthew',
        surname: 'Porter',
        email: 'mporter9@europa.eu'
      },
      {
        id: 39,
        forename: 'Tammy',
        surname: 'Ray',
        email: 'trayx@weather.com'
      },
      {
        id: 40,
        forename: 'Mark',
        surname: 'Richardson',
        email: 'mrichardson1d@ihg.com'
      },
      {
        id: 41,
        forename: 'Joan',
        surname: 'Roberts',
        email: 'jroberts12@alibaba.com'
      },
      {
        id: 42,
        forename: 'Kathleen',
        surname: 'Rose',
        email: 'kroseg@pinterest.com'
      },
      {
        id: 43,
        forename: 'Steve',
        surname: 'Sanders',
        email: 'ssanders1b@wikispaces.com'
      },
      {
        id: 44,
        forename: 'Shirley',
        surname: 'Scott',
        email: 'sscottm@macromedia.com'
      },
      {
        id: 45,
        forename: 'Lillian',
        surname: 'Stephens',
        email: 'lstephens19@hugedomains.com'
      },
      {
        id: 46,
        forename: 'Nicole',
        surname: 'Thompson',
        email: 'nthompson3@admin.ch'
      },
      {
        id: 47,
        forename: 'Marie',
        surname: 'Thompson',
        email: 'mthompsonz@yelp.com'
      },
      {
        id: 48,
        forename: 'Alan',
        surname: 'Vasquez',
        email: 'avasquezo@miibeian.gov.cn'
      },
      {
        id: 49,
        forename: 'Mildred',
        surname: 'Watkins',
        email: 'mwatkins0@miibeian.gov.cn'
      },
      {
        id: 50,
        forename: 'Eugene',
        surname: 'Williams',
        email: 'ewilliamsi@deliciousdays.com'
      }
    ];

  }

  getAll(): Data[] {
    return this.data;
  }

  getSingleId(id: string): Data {
    return this.data.find(data => (data.id.toString() === id));
  }
}
