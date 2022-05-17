import { render, screen } from '@testing-library/react';

import Counter from 'components/Counter';

describe('카운터 컴포넌트 테스트', () => {
  test('Counter 컴포넌트에 count : 라는 텍스트가 보이는지 확인', () => {
    render(<Counter />);

    const countText = screen.getByText('count :');

    expect(countText).toBeInTheDocument();
  });
});
