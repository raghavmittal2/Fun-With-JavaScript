const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  

  function updateRecords(records, id, prop, value) {
    if(prop != "tracks" && value != "") {
      records[id][prop] = value;
    } 
    //prop is tracks but tracks doesnt exist then add tracks and create empty array with value in it
    else if (prop == "tracks" && !records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [value];
    } 
    //prop is tracks and tracks prop already present then append value at the end of array
    else if (prop == "tracks" && records[id].hasOwnProperty("tracks")) {
      records[id][prop].push(value);
    }
    
    //delete the property if value is an empty string
    if(value == "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');