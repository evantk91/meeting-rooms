function minMeetingRooms(intervals) {
   // Given an array of meeting time intervals where intervals[i] = [start_i, end_i]
   // Return the minimum number of conference rooms required

   intervals.sort(function(a,b) {return a[0] - b[0]; }); 
    
   //initialize meeting rooms with first interval
   let meetingRooms = [intervals[0]];
   let numMeetingRooms = 1;
   
    
   //loop through the remaining meeting room intervals
   for(let i = 1; i < intervals.length; i++) {
      let meetingStart = intervals[i][0];
      let meetingEnd = intervals[i][1];
      let meetingPlaced = false;  
      //compare interval to each existing meeting room
      for(let j = 0; j < meetingRooms.length; j++) {
         let meetingRoomStart = meetingRooms[j][0];
         let meetingRoomEnd = meetingRooms[j][1];
         // //if meeting room is available, replace the meeting
         if(meetingStart >= meetingRoomEnd || meetingEnd <= meetingRoomStart) {
            meetingRooms[j] = intervals[i];
            meetingPlaced = true;
            break; 
         }; 
      };
       
      //if meeting is not placed in an available room
      if(meetingPlaced === false) {
         //add new meeting room 
         meetingRooms.push(intervals[i]);
         numMeetingRooms++; 
      };
       
     console.log(meetingRooms)  
   }; 
   return numMeetingRooms; 
}

module.exports = {
   minMeetingRooms, 
}