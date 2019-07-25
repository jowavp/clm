# Card Lifecycle management

Met Card lifecycle management willen we een platform bouwen voor het beheren van de Van Marcke Blue Card.
We gebruiken hiervoeer.

## Installation

first install CDS

initialize project
cds init --modules db,srv --insecure --mta --db-technology hana

install globally:
npm i -g mbt

install locally
" needed for copying files in npm script
npm i shx
" locally we use SQLITE on Cloud foundry we use HANA DB
npm i sqlite3 --save-dev

Create the Makefile for building mtar files
mbt init

To be able to switch between hana en sqlite we add following to the package.json
in package JSON:

"cds": {
	"requires":{
		"db": {
			"kind": "sqlite",
			"model": ["db", "srv"],
			"credentials": {
				"database": "clm.db"
			},
			"[production]": {
				"kind": "hana"
			}
		}
	}
}



## Folder structure

File / Folder | Purpose
---------|----------
`srv/` | your models and code go here
`db/` | your database content goes here
`package.json` | project metadata and configuration
`readme.md` | this readme


