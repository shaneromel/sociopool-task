# SociopoolTask

This project is supossed to take a json with a person's travelled distance, date and time as input. Another section of this project deals with returning the total distance a person has travelled taking the person's unique id, start and end timestamps as parameters.

## JSON file format
Below is an example json file format. The JSON loaded should be of the schema inspired by the given example
```json
[
    {
        "distance":7.5,
        "date":"21/07/2020",
        "time":"20:49"
    }
]
```
Where distance is in kilometers, date in DD/MM/YYYY format and time in HH:mm format.