using com.vanmarcke.bluecard as bluecard from '../db/data-model';

@cds.query.limit: 100
service CardLifecycleService {

  entity BlueCards @readonly as projection on bluecard.BlueCards;

  entity Users {
    key email   : String;
    firstname   : String;
    lastname    : String;
    cards       : Association to many BlueCards on cards.email = $self.email;
  }
    
}