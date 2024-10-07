import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import subject1 from '../../assets/subject-1.png';
import subject2 from '../../assets/subject-2.png';
import subject3 from '../../assets/subject-3.png';
import subject4 from '../../assets/subject-4.png';
import subject5 from '../../assets/subject-5.png';
import subject6 from '../../assets/subject-6.png';
import subject7 from '../../assets/subject-7.png';
import subject8 from '../../assets/subject-8.png';
import subject9 from '../../assets/subject-9.png';
import subject10 from '../../assets/subject-10.png';
import subject11 from '../../assets/subject-11.png';
import subject12 from '../../assets/subject-12.png';
import subject13 from '../../assets/subject-13.png';
import subject14 from '../../assets/subject-14.png';

const subjects = [
    { id: 1, name: "Mathematics", img: subject1 },
    { id: 2, name: "Chemistry", img: subject2 },
    { id: 3, name: "English Literature", img: subject3 },
    { id: 4, name: "Physics", img: subject4 },
    { id: 5, name: "Biology", img: subject5 },
    { id: 6, name: "History", img: subject6 },
    { id: 7, name: "Geography", img: subject7 },
    { id: 8, name: "Economics", img: subject8 },
    { id: 9, name: "Computer Science", img: subject9 },
    { id: 10, name: "Art & Design", img: subject10 },
    { id: 11, name: "Philosophy", img: subject11 },
    { id: 12, name: "Music Theory", img: subject12 },
    { id: 13, name: "Environmental Science", img: subject13 },
    { id: 14, name: "Political Science", img: subject14 }
];

function InstantTutoringDialog({ open, onClose }) {
    const navigate = useNavigate(); // Use useNavigate hook
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSubjects, setFilteredSubjects] = useState(subjects); // State to store filtered subjects

    const handleToggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = subjects.filter(subject => subject.name.toLowerCase().includes(value));
        setFilteredSubjects(filtered); // Update the filtered subjects list based on the search term
    };

    const handleSubjectSelect = (subject) => {
        navigate(`/select-tutor/`);
        onClose();
    };
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="instant-tutoring-dialog-title" fullWidth maxWidth="md">
            <DialogTitle id="instant-tutoring-dialog-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                Select a Tutor
                <IconButton onClick={onClose}>
                    <CancelIcon style={{ color: 'red' }} />
                </IconButton>
            </DialogTitle>
            <DialogContent style={{ position: 'relative' }}>
                {searchVisible && (
                    <TextField
                        fullWidth
                        label="Search for a tutor"
                        variant="outlined"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ position: 'sticky', top: 0, zIndex: 1, background: 'whitesmoke' }}
                    />
                )}
                {!searchVisible && (
                    <IconButton onClick={handleToggleSearch} style={{ position: 'sticky', top: 0, zIndex: 1, margin: '10px 0', borderRadius: '90px', overflow: 'hidden' }}>
                        <SearchIcon />
                    </IconButton>
                )}
                <div className="grid grid-cols-3 gap-4">
                    {filteredSubjects.map(subject => (
                        <div key={subject.id} className="flex items-center p-4 cursor-pointer" onClick={() => handleSubjectSelect(subject)}>
                            <img src={subject.img} alt={subject.name} className="w-14 h-14 mr-4 rounded-full" />
                            <div>
                                <h3 className="text-lg font-semibold">{subject.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default InstantTutoringDialog;
