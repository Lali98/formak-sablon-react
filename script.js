var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Belső állapot
/*let state = {
  circle: 0,
  square: 0,
  rectangle: 0,
};*/

function ShapesComponent() {
    var _React$useState = React.useState({ circle: 0, square: 0, rectangle: 0 }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        state = _React$useState2[0],
        ujState = _React$useState2[1];

    React.useEffect(function () {
        document.getElementById('shapes').onsubmit = function (event) {
            event.preventDefault();
            var shape = event.target.elements.selectedShape.value;
            ujState(function (e) {
                if (event.target.elements.action.value === 'increment') {
                    e[shape] = e[shape] + 1;
                } else {
                    e[shape] = e[shape] - 1;
                }
                return Object.assign({}, e);
            });
        };
    });
    return React.createElement(
        'div',
        { className: 'w-100' },
        React.createElement(
            'div',
            { id: 'sh-circle', className: 'center d-inline-block' },
            state.circle
        ),
        React.createElement(
            'div',
            { id: 'sh-square', className: 'center d-inline-block' },
            state.square
        ),
        React.createElement(
            'div',
            { id: 'sh-rectangle', className: 'center d-inline-block' },
            state.rectangle
        )
    );
}

ReactDOM.render(React.createElement(ShapesComponent, null), document.getElementById('sh-container'));

// 1. Selecteld ki id alapján a form elementet és submit eseményre 
// köss be funkcionalitást

// 2. Az esemény bekövetkezésekor olvasd ki az input mezőkben lévő adatokat

// 3. Az adatok alapján módosítsd az alkalmazás belső állapotát

// 4. A belső állapot alapján rajzold újra a formákat