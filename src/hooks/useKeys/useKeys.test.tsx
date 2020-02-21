import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useKeys } from './useKeys';
import { ESC_KEY, ENTER_KEY } from '../../constant/keys';

interface HandleEscComponentProps {
    onEscPress: jest.Mock
}

const HandleEscComponent: React.FC<HandleEscComponentProps> = ({onEscPress}: HandleEscComponentProps): React.ReactElement => {
    useKeys([ESC_KEY], onEscPress);
    return <div>some div</div>;
};

describe('Hooks useKeys', function() {

    it('should only listen to the selected keys', function() {
        const onEscPress = jest.fn();

        render(<HandleEscComponent onEscPress={onEscPress} />);
    
        fireEvent.keyDown(window, { keyCode: ENTER_KEY } );
        fireEvent.keyDown(window, { keyCode: ESC_KEY } );
        fireEvent.keyDown(window, { keyCode: ENTER_KEY } );

        expect(onEscPress).toBeCalledTimes(1);
        expect(onEscPress).toBeCalledWith(ESC_KEY);
    });
});
