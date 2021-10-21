const calculateTeamPoints = require(`../calculateTeamPoints.js`);
const playersData = require(`./__data__/players.json`);
describe('calculateTeamPoints', () => {
    const result = calculateTeamPoints(playersData);

    
    test('green team', () => {
        
        expect(result[0]).toHaveProperty(`team`);
    expect(result[0]).toHaveProperty(`points`);

        expect(result[0]).toEqual({ team: 'green', points: 40 });
      });

      test('red team', () => {
        expect(result[1]).toHaveProperty(`team`);
        expect(result[1]).toHaveProperty(`points`);
    
        
        expect(result[1]).toEqual({ team: 'red', points: 20 });
      });

      test('blue team', () => {
        expect(result[2]).toHaveProperty(`team`);
        expect(result[2]).toHaveProperty(`points`);
    
        
        expect(result[2]).toEqual({ team: 'blue', points: 10 });
      });
})