namespace com.vanmarcke.bluecard;

abstract entity tracked {
  created: { 
	@odata.on.insert: #user
	"by": String; 
	@odata.on.insert: #now
	at: DateTime; 
  };
  modified: { 
	@odata.on.update: #user
	"by": String; 
	@odata.on.update: #now
	at: DateTime; 
  };
}
abstract entity temporal {
  valid: { 
	  "from": DateTime; 
	  "to": DateTime; 
  }
}

entity BlueCards: tracked, temporal {
    key ID     : UUID;
    card_number : String;
    active     : Boolean;
    email      : String;
    company    : String;
}
