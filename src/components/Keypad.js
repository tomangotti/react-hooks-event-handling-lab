// Code Keypad Component Here

function Keypad (){

    function handleChange(e) {
        e.preventDefault();
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" onChange={handleChange}></input>
        </div>
    )
}

export default Keypad;
