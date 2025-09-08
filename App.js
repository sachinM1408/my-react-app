/* Display from React*/


const heading = React.createElement(
  'h1',
  { id:'heading', attr: 'main-head-attr', className: 'heading-cls' },
  'Hello from React!'
);

/* 
    Create a nested elements
    <div id='parent'>
        <div id='child1'>
            <h1> I'm h1 Tag!</h1>
            <h2> I'm h1 Tag!</h2>
        </div>
        <div id='child2'>
            <h1> I'm h1 Tag!</h1>
            <h2> I'm h1 Tag!</h2>
        </div>
    </div>

*/

const nestedHeading = React.createElement(
    'div',
    {id: 'parent'},
    [
        React.createElement(
            'div',
            {id: 'child1'},
            [React.createElement('h1',{},"I'm h1 Tag!"),React.createElement('h2',{},"I'm h2 Tag!")]
        ),
        React.createElement(
            'div',
            {id: 'child2'},
            [React.createElement('h1',{},"I'm h1 Tag!"),React.createElement('h2',{},"I'm h2 Tag!")]
        ),
        React.createElement(
            'div',
            {id: 'child3'},
            [React.createElement('h1',{},"I'm h1 Tag!"),React.createElement('h2',{},"I'm h2 Tag!")]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nestedHeading);
