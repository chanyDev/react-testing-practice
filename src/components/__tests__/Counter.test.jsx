import { render } from '@testing-library/react';

import Counter from 'components/Counter';

// test : 개별 테스트 수행
test('Counter 컴포넌트를 렌더링합니다.', () => {
  // render : 테스트를 위해 컴포넌트를 dom에 렌더링
  render(<Counter />);
});
