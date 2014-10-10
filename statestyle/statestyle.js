var statestyle = { };

(function(Statestyle) {

	function getObjectsByKey(data, key, f) {
		var dict = {};
		for (i = 0; i < data.length; i++) {
			dict[f(data[i][key])] = data[i];
		}
		return dict;
	}

	function transformString(str) {
		return str.toLowerCase().replace(/^\s+|\s+$/g, '');
	}

	var data = [{"name": "Alabama", "postal": "AL", "fips": "1", "ap": "Ala.", "type": "state", "stateface": "B"}, {"name": "Alaska", "postal": "AK", "fips": "2", "ap": "Alaska", "type": "state", "stateface": "A"}, {"name": "Arizona", "postal": "AZ", "fips": "4", "ap": "Ariz.", "type": "state", "stateface": "D"}, {"name": "Arkansas", "postal": "AR", "fips": "5", "ap": "Ark.", "type": "state", "stateface": "C"}, {"name": "California", "postal": "CA", "fips": "6", "ap": "Calif.", "type": "state", "stateface": "E"}, {"name": "Colorado", "postal": "CO", "fips": "8", "ap": "Colo.", "type": "state", "stateface": "F"}, {"name": "Connecticut", "postal": "CT", "fips": "9", "ap": "Conn.", "type": "state", "stateface": "G"}, {"name": "Delaware", "postal": "DE", "fips": "10", "ap": "Del.", "type": "state", "stateface": "H"}, {"name": "District of Columbia", "postal": "DC", "fips": "11", "ap": "D.C.", "type": "", "stateface": "y"}, {"name": "Florida", "postal": "FL", "fips": "12", "ap": "Fla.", "type": "state", "stateface": "I"}, {"name": "Georgia", "postal": "GA", "fips": "13", "ap": "Ga.", "type": "state", "stateface": "J"}, {"name": "Hawaii", "postal": "HI", "fips": "15", "ap": "Hawaii", "type": "state", "stateface": "K"}, {"name": "Idaho", "postal": "ID", "fips": "16", "ap": "Idaho", "type": "state", "stateface": "M"}, {"name": "Illinois", "postal": "IL", "fips": "17", "ap": "Ill.", "type": "state", "stateface": "N"}, {"name": "Indiana", "postal": "IN", "fips": "18", "ap": "Ind.", "type": "state", "stateface": "O"}, {"name": "Iowa", "postal": "IA", "fips": "19", "ap": "Iowa", "type": "state", "stateface": "L"}, {"name": "Kansas", "postal": "KS", "fips": "20", "ap": "Kan.", "type": "state", "stateface": "P"}, {"name": "Kentucky", "postal": "KY", "fips": "21", "ap": "Ky.", "type": "state", "stateface": "Q"}, {"name": "Louisiana", "postal": "LA", "fips": "22", "ap": "La.", "type": "state", "stateface": "R"}, {"name": "Maine", "postal": "ME", "fips": "23", "ap": "Maine", "type": "state", "stateface": "U"}, {"name": "Maryland", "postal": "MD", "fips": "24", "ap": "Md.", "type": "state", "stateface": "T"}, {"name": "Massachusetts", "postal": "MA", "fips": "25", "ap": "Mass.", "type": "state", "stateface": "S"}, {"name": "Michigan", "postal": "MI", "fips": "26", "ap": "Mich.", "type": "state", "stateface": "V"}, {"name": "Minnesota", "postal": "MN", "fips": "27", "ap": "Minn.", "type": "state", "stateface": "W"}, {"name": "Mississippi", "postal": "MS", "fips": "28", "ap": "Miss.", "type": "state", "stateface": "Y"}, {"name": "Missouri", "postal": "MO", "fips": "29", "ap": "Mo.", "type": "state", "stateface": "X"}, {"name": "Montana", "postal": "MT", "fips": "30", "ap": "Mont.", "type": "state", "stateface": "Z"}, {"name": "Nebraska", "postal": "NE", "fips": "31", "ap": "Neb.", "type": "state", "stateface": "c"}, {"name": "Nevada", "postal": "NV", "fips": "32", "ap": "Nev.", "type": "state", "stateface": "g"}, {"name": "New Hampshire", "postal": "NH", "fips": "33", "ap": "N.H.", "type": "state", "stateface": "d"}, {"name": "New Jersey", "postal": "NJ", "fips": "34", "ap": "N.J.", "type": "state", "stateface": "e"}, {"name": "New Mexico", "postal": "NM", "fips": "35", "ap": "N.M.", "type": "state", "stateface": "f"}, {"name": "New York", "postal": "NY", "fips": "36", "ap": "N.Y.", "type": "state", "stateface": "h"}, {"name": "North Carolina", "postal": "NC", "fips": "37", "ap": "N.C.", "type": "state", "stateface": "a"}, {"name": "North Dakota", "postal": "ND", "fips": "38", "ap": "N.D.", "type": "state", "stateface": "b"}, {"name": "Ohio", "postal": "OH", "fips": "39", "ap": "Ohio", "type": "state", "stateface": "i"}, {"name": "Oklahoma", "postal": "OK", "fips": "40", "ap": "Okla.", "type": "state", "stateface": "j"}, {"name": "Oregon", "postal": "OR", "fips": "41", "ap": "Ore.", "type": "state", "stateface": "k"}, {"name": "Pennsylvania", "postal": "PA", "fips": "42", "ap": "Pa.", "type": "state", "stateface": "l"}, {"name": "Rhode Island", "postal": "RI", "fips": "44", "ap": "R.I.", "type": "state", "stateface": "m"}, {"name": "South Carolina", "postal": "SC", "fips": "45", "ap": "S.C.", "type": "state", "stateface": "n"}, {"name": "South Dakota", "postal": "SD", "fips": "46", "ap": "S.D.", "type": "state", "stateface": "o"}, {"name": "Tennessee", "postal": "TN", "fips": "47", "ap": "Tenn.", "type": "state", "stateface": "p"}, {"name": "Texas", "postal": "TX", "fips": "48", "ap": "Texas", "type": "state", "stateface": "q"}, {"name": "Utah", "postal": "UT", "fips": "49", "ap": "Utah", "type": "state", "stateface": "r"}, {"name": "Vermont", "postal": "VT", "fips": "50", "ap": "Vt.", "type": "state", "stateface": "t"}, {"name": "Virginia", "postal": "VA", "fips": "51", "ap": "Va.", "type": "state", "stateface": "s"}, {"name": "Washington", "postal": "WA", "fips": "53", "ap": "Wash.", "type": "state", "stateface": "u"}, {"name": "West Virginia", "postal": "WV", "fips": "54", "ap": "W.Va.", "type": "state", "stateface": "w"}, {"name": "Wisconsin", "postal": "WI", "fips": "55", "ap": "Wis.", "type": "state", "stateface": "v"}, {"name": "Wyoming", "postal": "WY", "fips": "56", "ap": "Wyo.", "type": "state", "stateface": "x"}, {"name": "American Samoa", "postal": "AS", "fips": "60", "ap": "", "type": "", "stateface": ""}, {"name": "Federated States of Micronesia", "postal": "FM", "fips": "64", "ap": "", "type": "", "stateface": ""}, {"name": "Guam", "postal": "GU", "fips": "66", "ap": "", "type": "", "stateface": ""}, {"name": "Marshall Islands", "postal": "MH", "fips": "68", "ap": "", "type": "", "stateface": ""}, {"name": "Northern Mariana Islands", "postal": "MP", "fips": "69", "ap": "", "type": "", "stateface": ""}, {"name": "Palau", "postal": "PW", "fips": "70", "ap": "", "type": "", "stateface": ""}, {"name": "Puerto Rico", "postal": "PR", "fips": "72", "ap": "", "type": "", "stateface": ""}, {"name": "Virgin Islands", "postal": "VI", "fips": "78", "ap": "", "type": "", "stateface": ""}];

	Statestyle.statesByName = getObjectsByKey(data, 'name', transformString);
	Statestyle.statesByFIPS = getObjectsByKey(data, 'fips', parseInt);
	Statestyle.statesByAP = getObjectsByKey(data, 'ap', transformString);
	Statestyle.statesByPostal = getObjectsByKey(data, 'postal', transformString);

	console.log(Statestyle.statesByName);

	Statestyle.get = function(value) {

		if (parseInt(value)) { 
			value = parseInt(value); 
			return Statestyle.statesByFIPS[value];
		}
		
		if (typeof value === 'string') { value = transformString(value); }

		dicts = [Statestyle.statesByName, Statestyle.statesByPostal, Statestyle.statesByAP];
		for (i = 0; i < dicts.length; i++) {
			if (dicts[i][value]) { return dicts[i][value]; }
		}

		console.log("The state you requested does not exist.");
	};

}(statestyle));


