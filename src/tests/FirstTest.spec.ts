import { User }  from '@models/User';

test('it should ve ok', () => {
    const user = new User();

    user.name = 'Matheus';


    expect(user.name).toEqual('Matheus')
})