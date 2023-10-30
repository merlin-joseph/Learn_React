

import { render, screen } from '@testing-library/react'
import List from '../components/List';

const mockData =[ {
    id: 1,
    name : 'Test Name',
    Role :'sse',
    Description : 'Test description'
},
{
    id: 2,
    name : ' Name 2',
    Role :'role 2 ',
    Description : 'Test description 2'
}
]

test("list rendered succesfully",  () => {
    render (<List List={mockData} />);
    expect(screen.getByText(/role 2/i)).toBeInTheDocument();
})