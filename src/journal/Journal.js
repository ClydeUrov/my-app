import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JournalEntries from "./components/JournalEntries";
import { addJournalEntry } from "./journalSlice";

const Journal = () => {
    const dispatch = useDispatch();
    const [newJournalEntry, setNewJournalEntry] = useState("");
    const { entries } = useSelector((state) => state.journal)

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newJournalEntry === "") {
            return;
        }

        dispatch(addJournalEntry(newJournalEntry));
        setNewJournalEntry("");
    }

    return(
        <>
            <div id="journal" className="surface">
                <h2>What's on your mind today?</h2>
                <form onSubmit={onFormSubmit}>
                    <input 
                        type="text"
                        className="journal-input"
                        value={newJournalEntry}
                        onChange={(e) => setNewJournalEntry(e.target.value)}
                        aria-label="New journal entry"
                    />
                </form>
            </div>
            <JournalEntries entries={entries} />
        </>
    )
}

export default Journal;