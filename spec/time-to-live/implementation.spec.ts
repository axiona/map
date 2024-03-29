import TimeToLive from '../../dist/time-to-live.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('has', ()=>{

    const ttl = new TimeToLive(20000);

    it('add data', function() {

        ttl.set('a', {});
        expect(ttl.has('a')).toBeTrue();
    });

    it('delete', function() {
        ttl.delete('a');
    });

    it('check data', function() {

        expect(ttl.has('a')).toBeFalse();
    });
});

