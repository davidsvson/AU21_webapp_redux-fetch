import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/randomFact"

const RandomFact = () => {
    // const status = useSelector(state => state.randomFact.status);
    // const fact = useSelector(state => state.randomFact.fact);
    const factObject = useSelector(state => state.randomFact);
    const status = factObject.status;
    const fact = factObject.fact;

    const dispatch = useDispatch();
    let content = null;
    if (status === STATUS.NORMAL) {
        content = 'Redo för lite fakta?';
    } else if ( status === STATUS.FETCHING) {
        content = 'Väntar på fakta...';
    } else if ( status === STATUS.SUCCESS) {
        content = fact;
    } else {
        content = "Kunde inte hämta fakta";
    }

    useEffect(() => {
        fetchFact(dispatch);
    }, [])


    return (
        <div>
            <p>
                <button onClick={() => fetchFact(dispatch)}>Get fact!</button>
            </p>
            {content}
        </div>
    )
}

async function fetchFact(dispatch) {
    dispatch(actions.isFetching());

    const url = 'https://uselessfacts.jsph.pl/random.json?language=en';

    try {
        let response = await fetch(url);
        let json = await response.json();
        console.log('Got data: ', json);
        let fact = json.text;
        dispatch(actions.success(fact));
    } catch {
        dispatch(actions.failure());
    }
}


export default RandomFact;