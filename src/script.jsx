// Belső állapot
/*let state = {
  circle: 0,
  square: 0,
  rectangle: 0,
};*/

function ShapesComponent() {
    const [state, ujState] = React.useState({circle: 0, square: 0, rectangle: 0});
    React.useEffect(() => {
    document.getElementById('shapes').onsubmit = function(event) {
        event.preventDefault();
        let shape = event.target.elements.selectedShape.value;
        ujState((e) => {
            if(event.target.elements.action.value === 'increment'){
                e[shape] = e[shape]+1;
            } else {
                e[shape] = e[shape]-1;
            }
            return {...e};
        })
    }});
    return <div className="w-100">
        <div id="sh-circle" className="center d-inline-block">{state.circle}</div>
        <div id="sh-square" className="center d-inline-block">{state.square}</div>
        <div id="sh-rectangle" className="center d-inline-block">{state.rectangle}</div>
    </div>
}

ReactDOM.render(<ShapesComponent/>, document.getElementById('sh-container'));


// 1. Selecteld ki id alapján a form elementet és submit eseményre 
// köss be funkcionalitást

// 2. Az esemény bekövetkezésekor olvasd ki az input mezőkben lévő adatokat

// 3. Az adatok alapján módosítsd az alkalmazás belső állapotát

// 4. A belső állapot alapján rajzold újra a formákat
