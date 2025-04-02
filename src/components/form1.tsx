const form1 = () => {
    return (
        <>
            <h2>Order Running Shoes With This Form:</h2>
            <form id="orderform">
                <label htmlFor="fullname">Enter Your Full Name: </label>
                <input type="text" id="fullname"/>
                <br/>
                <br/>
                <label htmlFor="email">Enter Your Email: </label>
                <input type="text" id="email"/>
                <br/>
                <br/>
                <hr/>
                <p>Select the shoes you would like to order:</p>
                <input type="checkbox" id="shoe1"/>
                <label htmlFor="shoe1">Nike Pegasus 38</label>
                <input type="checkbox" id="shoe2"/>
                <label htmlFor="shoe2">Brooks Ghost 14</label>
                <input type="checkbox" id="shoe3"/>
                <label htmlFor="shoe3">Hoka Clifton 8</label>
                <input type="checkbox" id="shoe4"/>
                <label htmlFor="shoe4">Saucony Kinvara 12</label>
                <br/>
                <br/>
                <hr/>
                <p>Select your shoe size:</p>
                <label htmlFor="shoesize">Select a Shoe Size:</label>
                <select id="shoesize">
                    <option value="5">5</option>
                    <option value="5.5">5.5</option>
                    <option value="6">6</option>
                    <option value="6.5">6.5</option>
                    <option value="7">7</option>
                    <option value="7.5">7.5</option>
                    <option value="8">8</option>
                    <option value="8.5">8.5</option>
                    <option value="9">9</option>
                    <option value="9.5">9.5</option>
                    <option value="10">10</option>
                    <option value="10.5">10.5</option>
                    <option value="11">11</option>
                    <option value="11.5">11.5</option>
                    <option value="12">12</option>
                    <option value="12.5">12.5</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
                <br/>
                <br/>
                <hr/>
                <p>Please select the desired shipping rate:</p>
                <input type="radio" id="speed1" name="speed" value="2"/>
                <label htmlFor="speed1">1 - 2 days</label><br/>
                <input type="radio" id="speed2" name="speed" value="4"/>
                <label htmlFor="speed2">2 - 4 days</label><br/>
                <input type="radio" id="speed3" name="speed" value="7"/>
                <label htmlFor="speed3">4 - 7 days</label><br/>
                <input type="radio" id="speed4" name="speed" value="14"/>
                <label htmlFor="speed4">7 - 14 days</label><br/>
                <br/>
                <hr/>
                <p>Please enter any additional comments:</p>
                <textarea id="comments" name="comments">Enter any additional information here</textarea><br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
};

export default form1;