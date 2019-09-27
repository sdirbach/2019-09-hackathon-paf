# KUS Hackathon Pfaffenhofen 27.-28.09.2019
## AirC 4.0

*Hardware*
| Name | Description |
| --- | --- |
| Arduino Uno | Erfassung Sensor Werte & Weiterleitung an Heltec LoRa 32 |
| Seeed Base Shield | Anschlussfeld für Sensoren |
| div. Sensoren | Sensorik |
| Heltec LoRa 32 | Weiterleitung Sensor Werte per LoRa |

*Sensor Payload*
| ID | Sensor | Einheit | Werte-Bereich |
| --- | --- | --- | --- |
| 0x00 | Temperatur | °C | 0-100 | 
| 0x01 | Feuchtigkeit | % | 0-100 | 
| 0x02 | CO | ppm | 0-255 | 
| 0x03 | NH3 | ppm | 0-255 | 
| 0x04 | NO2 | ppm | 0-255 | 
| 0x05 | C3H8 | ppm | 0-255 | 
| 0x06 | C4H10 | ppm | 0-255 | 
| 0x07 | CH4 | ppm | 0-255 | 
| 0x08 | H2 | ppm | 0-255 | 
| 0x09 | C2H5OH | ppm | 0-255 | 
| 0x10 | Vibration | Hz | 0-255 | 
