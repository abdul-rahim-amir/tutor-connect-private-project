import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

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

function FeaturedSubjects() {
    const [open, setOpen] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSubjects, setFilteredSubjects] = useState(subjects);

    const handleClickOpen = () => {
        setOpen(true);
        setSearchVisible(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = subjects.filter(subject => subject.name.toLowerCase().includes(value));
        setFilteredSubjects(filtered);
    };

    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <h2 className="text-3xl font-bold text-purple-800">Popular Subjects</h2>
                <Button variant="outlined" onClick={handleClickOpen}>
                    View All
                </Button>
            </div>
            <div className="flex justify-center gap-6 mt-6">
                {subjects.slice(0, 5).map(subject => (
                    <div key={subject.id} className="flex flex-col items-center p-4">
                        <img src={subject.img} alt={subject.name} className="w-24 h-24 rounded-full" />
                        <h3 className="mt-3 text-lg font-semibold">{subject.name}</h3>
                    </div>
                ))}
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="all-subjects-dialog-title" fullWidth maxWidth="md">
                <DialogTitle id="all-subjects-dialog-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    All Subjects
                    <IconButton onClick={handleClose}>
                        <CancelIcon style={{ color: 'red' }} />
                    </IconButton>
                </DialogTitle>
                <DialogContent style={{ position: 'relative' }}>
                    {searchVisible && (
                        <TextField
                            fullWidth
                            label="Search for a subject"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ position: 'sticky', top: 0, zIndex: 1, background: 'white' }}
                        />
                    )}
                    {!searchVisible && (
                        <IconButton onClick={handleToggleSearch} style={{ position: 'sticky', top: 0, zIndex: 1, margin: '10px 0' }}>
                            <SearchIcon />
                        </IconButton>
                    )}
                    <div className="grid grid-cols-3 gap-4">
                        {filteredSubjects.map(subject => (
                            <div key={subject.id} className="flex items-center p-4">
                                <img src={subject.img} alt={subject.name} className="w-14 h-14 mr-4 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-semibold">{subject.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default FeaturedSubjects;
