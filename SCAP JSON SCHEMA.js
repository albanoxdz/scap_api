{
  "$id": "https://example.com/person.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "SCAP",
  "type": "object",
"properties": {
	"TINPA": {
		"type": "object",
		"minItems": 50,
		"maxItems": 50,
		"items": [
			{
			"type": "number"
			},
			{
			"type": "string"
			},
			{
			"type": "string",
			"enum": ["Street", "Avenue", "Boulevard"]
			},
			{
			"type": "string",
			"enum": ["NW", "NE", "SW", "SE"]
			}
			],
		"additionalItems": false
    },
    "TINPN": {
      "type": "array",
        "minItems": 50,
  	"maxItems": 50
    },
    "TOUTA": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "array",
      "minItems": 50,
      "maxItems": 50
    }
    "TOUTN": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "array",
      "minItems": 50,
      "maxItems": 50
    }
  }
}
