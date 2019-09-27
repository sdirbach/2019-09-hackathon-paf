function Decoder(bytes, port) {
  // Decode an uplink message from a buffer
  // (array) of bytes to an object of fields.
  var decoded = {};

  var type = "Unbekannt"
  var value = 'NaN'

  switch(bytes[0]) {
    case 0x00:
      type = "Temperatur [°C]"
      value = bytes[1];
    break;

    case 0x01:
      type = "Feuchtigkeit [%]"
      value = bytes[1];
    break;

    case 0x02:
      type = "CO [ppm]"
      value = bytes[1];
    break;

    case 0x03:
      type = "NH3 [ppm]"
      value = bytes[1];
    break;

    case 0x04:
      type = "NO2 [ppm]"
      value = bytes[1];
    break;

    case 0x05:
      type = "C3H8 [ppm]"
      value = bytes[1];
    break;

    case 0x06:
      type = "C4H10 [ppm]"
      value = bytes[1];
    break;

    case 0x07:
      type = "CH4 [ppm]"
      value = bytes[1];
    break;

    case 0x08:
      type = "H2 [ppm]"
      value = bytes[1];
    break;
      
      
    case 0x09:
      type = "C2H5OH [ppm]"
      value = bytes[1];
    break;

    case 0x10:
      type = "Vibration [Hz]"
      value = bytes[1];
    break;
  }

  // if (port === 1) decoded.led = bytes[0];
  
  decoded.type = type;
  decoded.value = value;

  return decoded;
}
