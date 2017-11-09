import reducer, {initialState} from '../state/Reducer'
import ActionType from "../state/ActionType";
import * as Action from "../state/Action";

/*

const onePageWith3button = {...initialState, pages : [
    [{'id': 'button1'}, {'id': 'button1'}, {'id': 'button1'}, ]
]};
*/


//config

const afterConfiguration = {
    ...initialState,
    foo: 'bar'
}

describe('Reducer ', () => {
    it('should set xxx ', () => {
        expect(reducer(undefined, Action.setConfigurationServer({ //undefined = init state

        }))).toEqual(afterConfiguration)
    });

});


