import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import {useState} from 'react';

function Note(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [heading, setHeading] = useState(props.heading);
    const [content, setContent] = useState(props.content);

    return (
        <div className = "note">
            {
                isEditing?
                (
                    <>
                        <input className="editHeadingInput" value={heading} onChange = {(e) => setHeading(e.target.value)}/>
                        <textarea className="editContentInput" value={content} onChange={(e) => setContent(e.target.value)}/>
                    </>
                ):(
                    <>
                        <h1>{heading}</h1>
                        <p>{content}</p>
                    </>
                )
            }
            <div className = "noteButtons">
                {
                    isEditing ? (
                        <CheckIcon className="editIcon" onclick = {() => props.onEdit(props.id)}/>
                    ):(
                        <EditIcon className = "editIcon" onClick = {() => setIsEditing(true)}/>
                    )
                }
                <DeleteIcon className = "deleteIcon" onClick = {() => props.onDelete(props.id)}/>
            </div>
        </div>
    );
}

export default Note;