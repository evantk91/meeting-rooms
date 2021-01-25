const assert = require('assert');
const { minMeetingRooms } = require('../index');

describe('', () => {
   it('test case #1', () => {
      const solution = 2;
      const intervals = [[0, 30], [5, 10], [15, 20]]
      const output = minMeetingRooms(intervals);
      assert.equal(output, solution);
   });

   it('test case #2', () => {
      const solution = 1;
      const intervals = [[7, 10], [2, 4]];
      const output = minMeetingRooms(intervals); 
      assert.equal(output, solution);
   });
});