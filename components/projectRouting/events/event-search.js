import classes from './event.module.css'
import { useRef } from 'react';

function EventSearch(props) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    function onSubmitHandler(event) {
        event.preventDefault(); // wICHTIG -> Sonst wird ein http Request vom Browser gesendet und die Page neu gerendert.
        const year  = yearInputRef.current.value;
        const month = monthInputRef.current.value;
        // hier geben wir das Event an die Component weiter und können damit dann dort weiterarbeiten wo wir <EventSearch /> eingebunden haben.
        props.onFilter(year, month);
    }

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="year"> Select Year </label>
                <select id="year" ref={yearInputRef}>
                    <option value="2022"> 2022</option>
                    <option value="2021"> 2021</option>
                </select>
                <label htmlFor="year"> Select Moth </label>
                <select id="month" ref={monthInputRef}>
                    <option value="01"> Jan</option>
                    <option value="02"> Feb</option>
                    <option value="03"> Mar</option>
                    <option value="04"> Apr</option>
                    <option value="05"> May</option>
                    <option value="06"> Jun</option>
                    <option value="07"> Jul</option>
                    <option value="08"> Aug</option>
                    <option value="09"> Sep</option>
                    <option value="10"> Oct</option>
                    <option value="11"> Nov</option>
                    <option value="12"> Dec</option>
                </select>
            </div>
            <button className={classes.exploreBTN} onClick={props.onSubmit}> filter </button>
        </form>
    )
}

export default EventSearch