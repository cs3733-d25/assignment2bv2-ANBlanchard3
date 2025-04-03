const form2 = () => {
    return (
        <>
            <h2>Games you have Played</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"/>
                <br/>
                <br/>
                <label htmlFor="email"> Email:</label>
                <input type="email" id="email" name="email"/>
                <br/>
                <br/>
                <input type="checkbox" id="Fortnite" name="game"/>
                <label htmlFor="Fortnite">Fortnite</label>
                <br/>
                <input type="checkbox" id="Minecraft" name="game"/>
                <label htmlFor="Minecraft">Minecraft</label>
                <br/>
                <input type="checkbox" id="Marvel Rivals" name="game"/>
                <label htmlFor="Marvel Rivals">Marvel Rivals</label>
                <br/>
                <p>How was it?</p>
                <input type="radio" id="rating1" name="rating" value="Oh YEAH"/>
                <label htmlFor="Rating">Super Fun</label>
                <br/>
                <input type="radio" id="rating2" name="rating" value="meh"/>
                <label htmlFor="Rating2">Ok</label>
                <br/>
                <input type="radio" id="rating3" name="rating" value="Nuh Uh"/>
                <label htmlFor="Rating3">Not Fun</label>
                <br/>
                <br/>
                <label htmlFor="comments">Comments: </label>
                <textarea id="comments"></textarea><br/>
                <br/>
                <br/>
                <label htmlFor="times played">Times Played</label>
                <select id="times played" name="times-played">
                    <option value="More">More than 3 Hours Played</option>
                    <option value="Less">Less than 3 Hours Played</option>
                    <option value="None">No Time Played</option>
                </select><br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default form2;