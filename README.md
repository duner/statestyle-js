StatestyleJS
=============

StatestyleJS is a Javascript port of [latimes-statestyle](https://github.com/datadesk/latimes-statestyle)—a Python library that standardizes the names of U.S. states.

Submit a state’s name, postal code or Associated Press abbreviation or FIPS code and receive a clean object with all other formats as attributes. State objects also provide the “stateface” code for ProPublica’s [webfont of state shapes](http://propublica.github.io/stateface/).

Using `statestyle.get()`

###Usage

```Javascript
> a = statestyle.get('IL')
{ name: 'Illinois',
  postal: 'IL',
  fips: '17',
  ap: 'Ill.',
  type: 'state',
  stateface: 'N' }
> a.name
'Illinois'
> a.ap
'Ill.'
```