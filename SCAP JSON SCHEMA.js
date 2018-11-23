{
  "$id": "https://example.com/person.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "SCAP",
  "type": "object",
  "properties": {
    "TINPA": {
      "type": "array",
      "description": "The person's first name."
    },
    "TINPN": {
      "type": "array",
      "description": "The person's last name."
    },
    "TOUTA": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "array",
      "minimum": 0
    }
	"TOUTN": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "array",
      "minimum": 0
    }
  }
}